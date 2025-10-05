import { ParticipantType } from "@/generated/api";
import { SortOrder } from "@/generated/backend/common";
import { ParticipantSortBy } from "@/generated/backend/participant";

export type ParticipantSearchParams = {
  query?: string;
  page?: string;
  sortBy?: string;
  sortOrder?: string;
  type?: string | string[];
  itemsPerPage?: string;
  createdFrom?: string;
  createdTo?: string;
  updatedFrom?: string;
  updatedTo?: string;
  eloFrom?: string;
  eloTo?: string;
  winsFrom?: string;
  winsTo?: string;
  lossesFrom?: string;
  lossesTo?: string;
};

export type ParticipantQueryParams = {
  query: string;
  currentPage: number;
  itemsPerPage: number;
  typeList: ParticipantType[];
  sortBy: ParticipantSortBy;
  sortOrder: SortOrder;
  createdFrom: string;
  createdTo: string;
  updatedFrom: string;
  updatedTo: string;
  eloFrom: string;
  eloTo: string;
  winsFrom: string;
  winsTo: string;
  lossesFrom: string;
  lossesTo: string;
};
