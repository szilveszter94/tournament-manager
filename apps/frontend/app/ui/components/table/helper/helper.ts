export const validateDateRange = (
  fromDate: string | null,
  toDate: string | null
): string | null => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const from = fromDate ? new Date(fromDate) : null;
  const to = toDate ? new Date(toDate) : null;

  if (from && from > today) {
    return "Start date cannot be later than today";
  }

  if (to && to > today) {
    return "End date cannot be later than today";
  }

  if (from && to && from > to) {
    return "Start date cannot be later than end date";
  }

  return null;
};

export const validateNumberRange = (
  minValue: number | null,
  maxValue: number | null
): string | null => {
  if (minValue !== null && isNaN(minValue)) {
    return "Minimum value must be a number";
  }

  if (maxValue !== null && isNaN(maxValue)) {
    return "Maximum value must be a number";
  }

  if (minValue !== null && maxValue !== null && minValue > maxValue) {
    return "Minimum value cannot be greater than maximum value";
  }

  return null;
};
