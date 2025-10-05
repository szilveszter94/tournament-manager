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
