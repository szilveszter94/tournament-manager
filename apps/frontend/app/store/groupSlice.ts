import { Participant } from "@/generated/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GroupsState {
  groupsByTournament: Record<number, Participant[][]>;
}

const initialState: GroupsState = {
  groupsByTournament: {},
};

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setGroups: (state, action: PayloadAction<{ tournamentId: number; groups: Participant[][] }>) => {
      const { tournamentId, groups } = action.payload;
      if (!state.groupsByTournament[tournamentId]) {
        state.groupsByTournament[tournamentId] = [];
      }
      state.groupsByTournament[tournamentId] = groups;
    },
    addGroup: (state, action: PayloadAction<{ tournamentId: number; group: Participant[] }>) => {
      const { tournamentId, group } = action.payload;
      if (!state.groupsByTournament[tournamentId]) {
        state.groupsByTournament[tournamentId] = [];
      }
      state.groupsByTournament[tournamentId].push(group);
    },
    removePlayer: (state, action: PayloadAction<{ tournamentId: number; participantId: number }>) => {
      const { tournamentId, participantId } = action.payload;
      const groups = state.groupsByTournament[tournamentId];
      if (!groups) return;
      state.groupsByTournament[tournamentId] = groups.map((group) => group.filter((p) => p.id !== participantId));
    },
    clearGroups: (state, action: PayloadAction<number>) => {
      const tournamentId = action.payload;
      if (!state.groupsByTournament[tournamentId]) {
        state.groupsByTournament[tournamentId] = [];
      }
      state.groupsByTournament[tournamentId] = [];
    },
  },
});

export const { setGroups, addGroup, removePlayer, clearGroups } = groupsSlice.actions;
export default groupsSlice.reducer;
