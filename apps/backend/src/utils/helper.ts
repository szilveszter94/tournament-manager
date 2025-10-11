export function handleDateRange(
  from?: string,
  to?: string,
): { gte?: Date; lte?: Date } | undefined {
  if (!from && !to) return undefined;

  const now = new Date();

  const fromDate = from ? new Date(from) : undefined;
  const toDate = to ? new Date(to) : undefined;

  if (fromDate && isNaN(fromDate.getTime())) {
    throw new Error(`Invalid "from" date: ${from}`);
  }
  if (toDate && isNaN(toDate.getTime())) {
    throw new Error(`Invalid "to" date: ${to}`);
  }

  if (fromDate && fromDate > now) {
    throw new Error(`"From" date cannot be in the future: ${from}`);
  }
  if (toDate && toDate > now) {
    throw new Error(`"To" date cannot be in the future: ${to}`);
  }

  if (fromDate && toDate && fromDate > toDate) {
    throw new Error(`Invalid date range: from (${from}) is after to (${to})`);
  }

  return {
    ...(fromDate && { gte: new Date(fromDate.setHours(0, 0, 0, 0)) }),
    ...(toDate && { lte: new Date(toDate.setHours(23, 59, 59, 999)) }),
  };
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomDateWithinTwoMonths(monthsFromToday: number): Date {
  const now = new Date();

  const endDate = new Date();
  endDate.setMonth(now.getMonth() - monthsFromToday);

  const startDate = new Date();
  startDate.setMonth(endDate.getMonth() - 2);

  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());

  return new Date(randomTime);
}

export function handleNumberRange(
  min?: string,
  max?: string,
): { gte?: number; lte?: number } | undefined {
  if (!min && !max) return undefined;

  const minValue = min ? Number(min) : undefined;
  const maxValue = max ? Number(max) : undefined;

  if (minValue !== undefined && isNaN(minValue)) {
    throw new Error(`Invalid "min" value: ${min}`);
  }

  if (maxValue !== undefined && isNaN(maxValue)) {
    throw new Error(`Invalid "max" value: ${max}`);
  }

  if (minValue !== undefined && maxValue !== undefined && minValue > maxValue) {
    throw new Error(`Invalid range: min (${min}) is greater than max (${max})`);
  }

  return {
    ...(minValue !== undefined && { gte: minValue }),
    ...(maxValue !== undefined && { lte: maxValue }),
  };
}
