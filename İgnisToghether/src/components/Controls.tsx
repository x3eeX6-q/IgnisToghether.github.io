import React from 'react';
import { Mic, MicOff, Monitor, Volume2, VolumeX } from 'lucide-react';

interface Props {
  isSharing: boolean;
  isMuted: boolean;
  onToggleShare: () => void;
  onToggleMute: () => void;
  onLeaveRoom: () => void;
}

export default function Controls({
  isSharing,
  isMuted,
  onToggleShare,
  onToggleMute,
  onLeaveRoom,
}: Props) {
  return (
    <div className="fixed bottom-4 right-4 flex gap-2">
      <button
        onClick={onToggleShare}
        className={`p-3 rounded-full ${
          isSharing ? 'bg-red-500' : 'bg-blue-500'
        } text-white hover:opacity-90`}
      >
        <Monitor className="w-6 h-6" />
      </button>
      <button
        onClick={onToggleMute}
        className={`p-3 rounded-full ${
          isMuted ? 'bg-red-500' : 'bg-blue-500'
        } text-white hover:opacity-90`}
      >
        {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
      </button>
      <button
        onClick={onLeaveRoom}
        className="p-3 rounded-full bg-red-500 text-white hover:opacity-90"
      >
        Leave
      </button>
    </div>
  );
}