import { StateCreator } from 'zustand';
import { RoomState } from '../../types/room';

export const createUserSlice: StateCreator<RoomState> = (set) => ({
  users: [],
  mutedUsers: new Set<string>(),
  toggleUserMute: (userId: string) => {
    set((state) => {
      const newMutedUsers = new Set(state.mutedUsers);
      if (newMutedUsers.has(userId)) {
        newMutedUsers.delete(userId);
      } else {
        newMutedUsers.add(userId);
      }
      return { mutedUsers: newMutedUsers };
    });
  },
  addUser: (user: { id: string; name: string; isMuted: boolean }) => {
    set((state) => ({
      users: [...state.users, user],
    }));
  },
  removeUser: (userId: string) => {
    set((state) => ({
      users: state.users.filter((u) => u.id !== userId),
    }));
  },
});