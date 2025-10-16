import { ParticipantTournament } from "@/generated/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GroupsState {
  groupsByTournament: Record<number, Record<string, ParticipantTournament[]>>;
}

const initialState: GroupsState = {
  groupsByTournament: {},
};

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setGroups: (
      state,
      action: PayloadAction<{ tournamentId: number; groups: Record<string, ParticipantTournament[]> }>
    ) => {
      const { tournamentId, groups } = action.payload;
      if (!state.groupsByTournament[tournamentId]) {
        state.groupsByTournament[tournamentId] = {};
      }
      state.groupsByTournament[tournamentId] = groups;
    },
    addGroup: (
      state,
      action: PayloadAction<{ tournamentId: number; groupName: string; group: ParticipantTournament[] }>
    ) => {
      const { tournamentId, group, groupName } = action.payload;
      if (!state.groupsByTournament[tournamentId]) {
        state.groupsByTournament[tournamentId] = {};
      }
      state.groupsByTournament[tournamentId][groupName] = group;
    },
    removePlayer: (
      state,
      action: PayloadAction<{ tournamentId: number; groupName: string; participantId: number }>
    ) => {
      const { tournamentId, participantId, groupName } = action.payload;
      const groups = state.groupsByTournament[tournamentId];
      if (!groups || !groups[groupName]) return;
      groups[groupName] = groups[groupName].filter((p) => p.id !== participantId);
    },
    clearGroups: (state, action: PayloadAction<number>) => {
      const tournamentId = action.payload;
      state.groupsByTournament[tournamentId] = {};
    },
  },
});

export const { setGroups, addGroup, removePlayer, clearGroups } = groupsSlice.actions;
export default groupsSlice.reducer;
