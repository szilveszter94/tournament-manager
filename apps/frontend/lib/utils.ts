import { ParticipantType, TournamentStatus } from "@/generated/api";
import {
  PARTICIPANT_TYPE_VALUES,
  TOURNAMENT_STATUS_VALUES,
} from "./global-constants";
import { SortOrder, sortOrderValues } from "@/generated/backend/common";
import {
  TournamentSortBy,
  tournamentSortByValues,
} from "@/generated/backend/tournament";
import {
  ParticipantSortBy,
  participantSortByValues,
} from "@/generated/backend/participant";

export const parseSortOrder = (value?: string): SortOrder =>
  isAllowed(value, sortOrderValues) ? value : "desc";

export const parseTournamentSortBy = (value?: string): TournamentSortBy =>
  isAllowed(value, tournamentSortByValues) ? value : "createdAt";

export const parseParticipantSortBy = (value?: string): ParticipantSortBy =>
  isAllowed(value, participantSortByValues) ? value : "createdAt";

export const parseTournamentStatus = (
  values?: string | string[] | null
): TournamentStatus[] => {
  if (!values) return [];

  const arr = Array.isArray(values)
    ? values
    : values
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
  // keep only valid statuses
  return arr.filter((v): v is TournamentStatus =>
    isAllowed(v, TOURNAMENT_STATUS_VALUES)
  );
};

export const parseParticipantType = (
  values?: string | string[] | null
): ParticipantType[] => {
  if (!values) return [];

  const arr = Array.isArray(values)
    ? values
    : values
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
  // keep only valid statuses
  return arr.filter((v): v is ParticipantType =>
    isAllowed(v, PARTICIPANT_TYPE_VALUES)
  );
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

const isAllowed = <T extends string>(
  value: unknown,
  allowed: readonly T[]
): value is T => {
  return (
    typeof value === "string" && (allowed as readonly string[]).includes(value)
  );
};
