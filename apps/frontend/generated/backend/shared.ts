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

export const filterTypeValues = ['search', 'checkbox', 'date'] as const;
export type FilterType = (typeof filterTypeValues)[number];

export type DateFilter = {
  from: string;
  to: string;
};

export const createdDateFilterValues: DateFilter = {
  from: 'createdFrom',
  to: 'createdTo',
};

export const updatedDateFilterValues: DateFilter = {
  from: 'updatedFrom',
  to: 'updatedTo',
};
