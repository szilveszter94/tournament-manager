export const eliminationType = ['Knockout', 'Double'] as const;
export type EliminationType = (typeof eliminationType)[number];

export const matchType = ['Group', 'Knockout', 'Bronze', 'Final'] as const;
export type MatchType = (typeof matchType)[number];

export const phaseType = [
  'GroupStage',
  'SingleElimination',
  'DoubleElimination',
  'RoundRobin',
  'Swiss',
] as const;
export type PhaseType = (typeof phaseType)[number];

export const participantType = ['Individual', 'Team'] as const;
export type ParticipantType = (typeof participantType)[number];

export const tournamentType = ['ArmWrestling'] as const;
export type TournamentType = (typeof tournamentType)[number];

export const tournamentStatus = ['Setup', 'Started', 'Over'] as const;
export type TournamentStatus = (typeof tournamentStatus)[number];
