import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectDoubleEliminationParticipants = (tournamentId: number) =>
  createSelector(
    (state: RootState) => state.doubleEliminationParticipants.participantsByTournament,
    (participants) => {
      if (!participants[tournamentId]) return [];
      return participants[tournamentId];
    }
  );

export const selectDoubleEliminationParticipantIds = (tournamentId: number) =>
  createSelector(
    (state: RootState) => state.doubleEliminationParticipants.participantsByTournament,
    (participants) => {
      if (!participants[tournamentId]) return [];
      return participants[tournamentId].map((p) => p.id);
    }
  );
