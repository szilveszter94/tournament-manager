import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectGroupsByTournament = (tournamentId: number) =>
  createSelector(
    (state: RootState) => state.participants.list,
    (state: RootState) => state.groups.groupsByTournament,
    (participants, groupsByTournament) => {
      const allGroups = groupsByTournament[tournamentId] ?? {};
      const participantIds = new Set(participants.map((p) => p.id));

      const filteredGroups = Object.fromEntries(
        Object.entries(allGroups).map(([groupName, groupParticipants]) => [
          groupName,
          groupParticipants.filter((p) => participantIds.has(p.id)),
        ])
      );

      return filteredGroups;
    }
  );
