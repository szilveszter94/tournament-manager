import { ParticipantType, TournamentStatus } from "@/generated/api";

export const ITEMS_PER_PAGE_LIST = [10, 15, 20, 25, 30];
export const DEFAULT_ITEMS_PER_PAGE = 10;
export const DEFAULT_CURRENT_PAGE = 1;

export const TOURNAMENT_STATUS_VALUES = Object.values(
  TournamentStatus
) as readonly string[];
export const PARTICIPANT_TYPE_VALUES = Object.values(
  ParticipantType
) as readonly string[];
