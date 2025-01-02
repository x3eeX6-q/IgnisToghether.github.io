import React, { useEffect, useRef } from 'react';
import UserList from './UserList';
import Chat from './Chat';
import Controls from './Controls';
import useRoomStore from '../store/roomStore';

interface Props {
  onLeave: () => void;
}

export default function Room({ onLeave }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    users,
    messages,
    screenStream,
    isScreenPaused,
    isAudioMuted,
    localStream,
    mutedUsers,
    toggleUserMute,
    addMessage,
    addUser,
  } = useRoomStore();

  // Add current user when component mounts
  useEffect(() => {
    addUser({
      id: 'current-user',
      name: 'You',
      isMuted: false,
    });
  }, [addUser]);

  useEffect(() => {
    if (videoRef.current && screenStream) {
      videoRef.current.srcObject = screenStream;
    }
  }, [screenStream]);

  const handleToggleShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });
      // Handle stream setup with WebRTC
    } catch (err) {
      console.error('Error sharing screen:', err);
    }
  };

  const handleToggleMute = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
    }
  };

  const handleSendMessage = (content: string) => {
    addMessage('current-user', content);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex-1 bg-black rounded-lg relative">
          {screenStream && (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          )}
          {!screenStream && (
            <div className="absolute inset-0 flex items-center justify-center text-white">
              No one is sharing their screen
            </div>
          )}
        </div>
        <div className="mt-4">
          <Chat messages={messages} onSendMessage={handleSendMessage} />
        </div>
      </div>
      {users.length > 0 && (
        <UserList
          users={users}
          currentUserId="current-user"
          onToggleUserVolume={toggleUserMute}
          mutedUsers={mutedUsers}
        />
      )}
      <Controls
        isSharing={!!screenStream}
        isMuted={isAudioMuted}
        onToggleShare={handleToggleShare}
        onToggleMute={handleToggleMute}
        onLeaveRoom={onLeave}
      />
    </div>
  );
}