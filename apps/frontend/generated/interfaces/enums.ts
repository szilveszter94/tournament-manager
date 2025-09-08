export const eliminationType = ['Knockout', 'Double'] as const;
export type EliminationType = (typeof eliminationType)[number];

export const matchType = [
  'Group',
  'Knockout',
  'DoubleEliminationWinners',
  'DoubleEliminationLosers',
  'Bronze',
  'Final',
] as const;
export type MatchType = (typeof matchType)[number];

export const tournamentStat = [
  'Setup',
  'FirstRounds',
  'NormalEliminations',
  'DoubleEliminations',
  'Over',
] as const;
export type TournamentStat = (typeof tournamentStat)[number];
