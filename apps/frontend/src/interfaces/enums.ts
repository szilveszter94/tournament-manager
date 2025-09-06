export const KnockoutMatchType = {
  None: "None",
  Final: "Final",
  SemiFinal: "SemiFinal",
  ThirdPlace: "ThirdPlace",
} as const;

export type KnockoutMatchType =
  (typeof KnockoutMatchType)[keyof typeof KnockoutMatchType];

export const TournamentStat = {
  Setup: "Setup",
  FirstRounds: "FirstRounds",
  NormalEliminations: "NormalEliminations",
  DoubleEliminations: "DoubleEliminations",
  Over: "Over",
} as const;

export type TournamentStat =
  (typeof TournamentStat)[keyof typeof TournamentStat];

export const EliminationType = {
  Knockout: "Knockout",
  Double: "Double",
} as const;

export type EliminationType =
  (typeof EliminationType)[keyof typeof EliminationType];
