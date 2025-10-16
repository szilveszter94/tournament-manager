import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectFilteredParticipants = (tournamentId: number) =>
  createSelector(
    (state: RootState) => state.participants.list,
    (state: RootState) => state.groups.groupsByTournament[tournamentId] || [],
    (participants, groups) => {
      const participantIds = new Set(
        Object.values(groups)
          .flat()
          .map((p) => p.participant?.id)
      );

      return participants.filter((p) => !participantIds.has(p.participantId));
    }
  );
