import { TournamentStatus } from '@/generated/api';

export const minTournamentNameLength = 5;
export const minParticipantNameLength = 5;
export const minParticipantAutocompleteLength = 3;

export const sortOrderValues = ['asc', 'desc'] as const;
export type SortOrder = (typeof sortOrderValues)[number];

export const rangeFilterTypeValues = ['date', 'number'] as const;
export const filterTypeValues = [
  'search',
  'checkbox',
  'none',
  ...rangeFilterTypeValues,
] as const;
export type FilterType = (typeof filterTypeValues)[number];
export type RangeFilterType = (typeof rangeFilterTypeValues)[number];

export type RangeFilter = {
  min: string;
  max: string;
};

export const createdDateFilterValues: RangeFilter = {
  min: 'createdFrom',
  max: 'createdTo',
};

export const updatedDateFilterValues: RangeFilter = {
  min: 'updatedFrom',
  max: 'updatedTo',
};

export const userFriendlyStats: Record<TournamentStatus, string> = {
  RegisterPlayers: 'Register Players',
  GroupStage: 'Group Stages',
  GroupStageCompleted: 'Group Stages Completed',
  SingleElimination: 'Knockout',
  SingleEliminationCompleted: 'Knockout Completed',
  DoubleElimination: 'Double Elimination',
  DoubleEliminationCompleted: 'Double Elimination Completed',
  RoundRobin: 'Round Robin',
  RoundRobinCompleted: 'Round  Robin Completed',
  Swiss: 'Swiss',
  SwissCompleted: 'Swiss Completed',
  Over: 'Over',
};
