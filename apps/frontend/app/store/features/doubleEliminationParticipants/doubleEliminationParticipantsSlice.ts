import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParticipantGroup } from "@/generated/api";

interface DoubleEliminationParticipantsState {
  participantsByTournament: Record<number, ParticipantGroup[]>;
}

const initialState: DoubleEliminationParticipantsState = {
  participantsByTournament: {},
};

export const doubleEliminationParticipantsSlice = createSlice({
  name: "doubleEliminationParticipants",
  initialState,
  reducers: {
    setDoubleEliminationParticipants: (
      state,
      action: PayloadAction<{ tournamentId: number; participants: ParticipantGroup[] }>
    ) => {
      const { tournamentId, participants } = action.payload;
      state.participantsByTournament[tournamentId] = participants;
    },
    addParticipantToDoubleEliminations: (
      state,
      action: PayloadAction<{ tournamentId: number; participant: ParticipantGroup }>
    ) => {
      const { tournamentId, participant } = action.payload;
      const participantList = state.participantsByTournament;
      if (!participantList[tournamentId]) {
        participantList[tournamentId] = [];
      }
      participantList[tournamentId].push(participant);
    },
    removeParticipantFromDoubleEliminationsById: (
      state,
      action: PayloadAction<{ tournamentId: number; participantId: number }>
    ) => {
      const { tournamentId, participantId } = action.payload;
      const participantList = state.participantsByTournament;
      if (!participantList[tournamentId]) return;
      participantList[tournamentId] = participantList[tournamentId].filter((p) => p.id !== participantId);
    },
    removeDoubleEliminationListByTournamentId: (state, action: PayloadAction<{ tournamentId: number }>) => {
      const { tournamentId } = action.payload;
      if (!state.participantsByTournament[tournamentId]) return;
      delete state.participantsByTournament[tournamentId];
    },
    clearAllDoubleEliminationParticipants: (state) => {
      state.participantsByTournament = [];
    },
  },
});

export const {
  setDoubleEliminationParticipants,
  addParticipantToDoubleEliminations,
  removeParticipantFromDoubleEliminationsById,
  removeDoubleEliminationListByTournamentId,
  clearAllDoubleEliminationParticipants,
} = doubleEliminationParticipantsSlice.actions;
export default doubleEliminationParticipantsSlice.reducer;
