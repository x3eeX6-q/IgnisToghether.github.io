import React from 'react';
import { User, Volume2, VolumeX } from 'lucide-react';

interface Props {
  users: Array<{ id: string; name: string; isMuted: boolean }>;
  currentUserId: string;
  onToggleUserVolume: (userId: string) => void;
  mutedUsers: Set<string>;
}

export default function UserList({ users, currentUserId, onToggleUserVolume, mutedUsers }: Props) {
  return (
    <div className="w-72 bg-gray-800 p-4 flex flex-col gap-2">
      {users.map((user, index) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-2 rounded bg-gray-700"
        >
          <div className="flex items-center gap-3">
            <User className="w-8 h-8 text-gray-400" />
            <span className="text-white text-sm">
              {user.id === currentUserId ? `${user.name} (You)` : `User ${index + 1}`}
            </span>
          </div>
          {user.id !== currentUserId && (
            <button
              onClick={() => onToggleUserVolume(user.id)}
              className="p-2 rounded-full hover:bg-gray-600"
            >
              {mutedUsers.has(user.id) ? (
                <VolumeX className="w-5 h-5 text-red-500" />
              ) : (
                <Volume2 className="w-5 h-5 text-green-500" />
              )}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}