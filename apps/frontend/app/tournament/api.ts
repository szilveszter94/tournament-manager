import { TournamentsResponse, TournamentResponse } from "@/generated/api";
import { apiClient } from "../../lib/client";
import { TournamentQueryParams } from "@/lib/custom-models/tournament";

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
  p: TournamentQueryParams
): Promise<TournamentsResponse> {
  try {
    const response = await apiClient.tournament.tournamentControllerFindByQuery(
      p.updatedTo,
      p.updatedFrom,
      p.createdTo,
      p.createdFrom,
      p.sortOrder,
      p.sortBy,
      p.typeList,
      p.statusList,
      p.itemsPerPage,
      p.currentPage,
      p.query
    );
    return response;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch tournaments");
  }
}
