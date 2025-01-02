import { StateCreator } from 'zustand';
import { RoomState } from '../../types/room';

export const createStreamSlice: StateCreator<RoomState> = (set) => ({
  localStream: null,
  screenStream: null,
  isScreenPaused: false,
  isAudioMuted: false,
});