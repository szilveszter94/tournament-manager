export const tournamentSortByValues = [
  'name',
  'createdAt',
  'updatedAt',
  'status',
  'type',
] as const;
export type TournamentSortBy = (typeof tournamentSortByValues)[number];

export const sortOrderValues = ['asc', 'desc'] as const;
export type SortOrder = (typeof sortOrderValues)[number];

export const filterTypeValues = [
  'search',
  'checkbox',
  'date',
  'number',
  'none',
] as const;
export type FilterType = (typeof filterTypeValues)[number];

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
