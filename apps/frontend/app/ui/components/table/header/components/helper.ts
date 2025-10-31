import { tournamentTableHeaders } from "../../../../tournament/tournamentList/constants";

export const getDropdownItemByKey = (value: string | undefined) =>
  tournamentTableHeaders.find((x) => x.value === value) ?? tournamentTableHeaders[1];
