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
    updateGroupsByParticipants: (
      state,
      action: PayloadAction<{
        tournamentId: number;
        participants: ParticipantTournament[];
      }>
    ) => {
      const { tournamentId, participants } = action.payload;
      const participantIds = new Set(participants.map((p) => p.id));
      if (!state.groupsByTournament[tournamentId]) {
        return;
      }
      const groups = state.groupsByTournament[tournamentId];
      const filteredGroups = Object.fromEntries(
        Object.entries(groups).map(([groupName, groupParticipants]) => [
          groupName,
          groupParticipants.filter((p) => participantIds.has(p.id)),
        ])
      );
      if (!state.groupsByTournament[tournamentId]) {
        state.groupsByTournament[tournamentId] = {};
      }
      state.groupsByTournament[tournamentId] = filteredGroups;
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
    removeGroupByName: (state, action: PayloadAction<{ tournamentId: number; groupName: string }>) => {
      const { tournamentId, groupName } = action.payload;
      if (!state.groupsByTournament[tournamentId]) return;
      delete state.groupsByTournament[tournamentId][groupName];
    },
    clearGroups: (state, action: PayloadAction<number>) => {
      const tournamentId = action.payload;
      state.groupsByTournament[tournamentId] = {};
    },
  },
});

export const { setGroups, addGroup, updateGroupsByParticipants, removePlayer, removeGroupByName, clearGroups } =
  groupsSlice.actions;
export default groupsSlice.reducer;
