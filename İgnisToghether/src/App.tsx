import React, { useState } from 'react';
import JoinRoom from './components/JoinRoom';
import Room from './components/Room';
import useRoomStore from './store/roomStore';

function App() {
  const [isInRoom, setIsInRoom] = useState(false);
  const roomCode = useRoomStore((state) => state.roomCode);

  const handleJoinRoom = (code: string) => {
    if (code === '10KRL8dCNvQFjt3UqDz4KI') {
      setIsInRoom(true);
    } else {
      alert('Invalid room code');
    }
  };

  const handleLeaveRoom = () => {
    setIsInRoom(false);
  };

  return isInRoom ? (
    <Room onLeave={handleLeaveRoom} />
  ) : (
    <JoinRoom onJoin={handleJoinRoom} />
  );
}

export default App;