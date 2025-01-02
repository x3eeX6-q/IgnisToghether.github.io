import { StateCreator } from 'zustand';
import { RoomState } from '../../types/room';

export const createMessageSlice: StateCreator<RoomState> = (set) => ({
  messages: [],
  addMessage: (userId: string, content: string) => {
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: crypto.randomUUID(),
          userId,
          content,
          timestamp: Date.now(),
        },
      ],
    }));
  },
});