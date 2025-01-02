import { create } from 'zustand';
import { RoomState } from '../types/room';
import { createMessageSlice } from './slices/messageSlice';
import { createUserSlice } from './slices/userSlice';
import { createStreamSlice } from './slices/streamSlice';

const useRoomStore = create<RoomState>((set, get) => ({
  ...createMessageSlice(set, get),
  ...createUserSlice(set, get),
  ...createStreamSlice(set, get),
  roomCode: '',
}));

export default useRoomStore;