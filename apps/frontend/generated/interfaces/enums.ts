export const knockoutMatchType = [
  'None',
  'Final',
  'SemiFinal',
  'ThirdPlace',
] as const;
export type KnockoutMatchType = (typeof knockoutMatchType)[number];

export const tournamentStat = [
  'Setup',
  'FirstRounds',
  'NormalEliminations',
  'DoubleEliminations',
  'Over',
] as const;
export type TournamentStat = (typeof tournamentStat)[number];

export const eliminationType = ['Knockout', 'Double'] as const;
export type EliminationType = (typeof eliminationType)[number];
