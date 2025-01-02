export interface User {
  id: string;
  name: string;
  isSharingScreen: boolean;
  isMuted: boolean;
}

export interface Message {
  id: string;
  userId: string;
  content: string;
  timestamp: number;
}

export interface RoomState {
  roomCode: string;
  users: User[];
  messages: Message[];
  localStream: MediaStream | null;
  screenStream: MediaStream | null;
  isScreenPaused: boolean;
  isAudioMuted: boolean;
  mutedUsers: Set<string>;
  addMessage: (userId: string, content: string) => void;
  toggleUserMute: (userId: string) => void;
  addUser: (user: { id: string; name: string; isMuted: boolean }) => void;
  removeUser: (userId: string) => void;
}