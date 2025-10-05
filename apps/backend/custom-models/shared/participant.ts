import { RangeFilter } from './common';

export const participantSortByValues = [
  'name',
  'type',
  'elo',
  'wins',
  'losses',
  'createdAt',
  'updatedAt',
] as const;
export type ParticipantSortBy = (typeof participantSortByValues)[number];

export const eloNumberFilterValues: RangeFilter = {
  min: 'eloFrom',
  max: 'eloTo',
};

export const winsNumberFilterValues: RangeFilter = {
  min: 'winsFrom',
  max: 'winsTo',
};

export const lossesNumberFilterValues: RangeFilter = {
  min: 'lossesFrom',
  max: 'lossesTo',
};
