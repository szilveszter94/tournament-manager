import {
  TournamentsResponse,
  TournamentResponse,
  TournamentStatus,
  ParticipantType,
} from "@/generated/api";
import { apiClient } from "../../lib/client";
import { SortOrder, TournamentSortBy } from "@/generated/backend/shared";

export async function fetchTournamentById(
  id: number
): Promise<TournamentResponse> {
  try {
    const response = await apiClient.tournament.tournamentControllerFindOne(id);
    return response;
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to fetch tournament with id ${id}`);
  }
}

export async function fetchTournaments(
  query: string,
  itemsPerPage: number,
  currentPage: number,
  sortBy: TournamentSortBy,
  sortOrder: SortOrder,
  status: TournamentStatus[],
  type: ParticipantType[],
  createdFrom: string,
  createdTo: string,
  updatedFrom: string,
  updatedTo: string
): Promise<TournamentsResponse> {
  try {
    const response = await apiClient.tournament.tournamentControllerFindByQuery(
      query,
      status,
      type,
      sortBy,
      sortOrder,
      createdFrom,
      createdTo,
      updatedFrom,
      updatedTo,
      itemsPerPage,
      currentPage
    );
    return response;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch tournaments");
  }
}
