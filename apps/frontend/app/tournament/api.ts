import { TournamentsResponse, TournamentResponse } from "@/generated/api";
import { apiClient } from "../../lib/client";

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

export async function fetchTournaments(): Promise<TournamentsResponse> {
  try {
    const response = await apiClient.tournament.tournamentControllerFindAll();
    return response;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch tournaments");
  }
}
