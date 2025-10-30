import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectGroupsByTournament = (tournamentId: number) =>
  createSelector(
    (state: RootState) => state.groups.groupsByTournament,
    (groupsByTournament) => {
      return groupsByTournament[tournamentId] ?? {};
    }
  );
