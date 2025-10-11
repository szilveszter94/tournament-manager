import { ParticipantType, TournamentStatus } from "@/generated/api";
import { FilterType, RangeFilter } from "@/generated/backend/common";


export type Column<T> = {
  //key: keyof T | string;
  value: keyof T;
  name: string;
  dataType: "string" | "date";
  filterType: FilterType;
  typeValues: readonly string[] | RangeFilter;
  buttons?: ColumnButton[];
};

export type ColumnButton = {
  type: "edit" | "delete";
  path: string;
};

export const ITEMS_PER_PAGE_LIST = [10, 15, 20, 25, 30];
export const DEFAULT_ITEMS_PER_PAGE = 10;
export const DEFAULT_CURRENT_PAGE = 1;

export const TOURNAMENT_STATUS_VALUES = Object.values(
  TournamentStatus
) as readonly string[];
export const PARTICIPANT_TYPE_VALUES = Object.values(
  ParticipantType
) as readonly string[];
