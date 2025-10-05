export const tournamentSortByValues = [
  'name',
  'createdAt',
  'updatedAt',
  'status',
  'type',
] as const;
export type TournamentSortBy = (typeof tournamentSortByValues)[number];
