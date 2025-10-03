export default function handleDateRange(
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
