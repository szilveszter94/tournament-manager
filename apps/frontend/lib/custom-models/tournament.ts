import { ParticipantType, TournamentStatus } from "@/generated/api";
import { SortOrder } from "@/generated/backend/common";
import { TournamentSortBy } from "@/generated/backend/tournament";

export type TournamentSearchParams = {
  query?: string;
  page?: string;
  sortBy?: string;
  sortOrder?: string;
  status?: string | string[];
  type?: string | string[];
  itemsPerPage?: string;
  createdFrom?: string;
  createdTo?: string;
  updatedFrom?: string;
  updatedTo?: string;
};

export type TournamentQueryParams = {
  query: string;
  currentPage: number;
  sortBy: TournamentSortBy;
  sortOrder: SortOrder;
  statusList: TournamentStatus[];
  typeList: ParticipantType[];
  itemsPerPage: number;
  createdFrom: string;
  createdTo: string;
  updatedFrom: string;
  updatedTo: string;
};