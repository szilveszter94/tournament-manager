import { ParticipantType, TournamentStatus } from "@/generated/api";
import { SortOrder, TournamentSortBy } from "@/generated/backend/shared";

export type State = {
  message: string | null;
  errors: { [key: string]: string[] };
};

export const initialState: State = {
  message: null,
  errors: {},
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
