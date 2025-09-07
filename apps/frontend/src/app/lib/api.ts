import {
  TournamentsResponse,
  TournamentService,
  TournamentResponse,
} from "../../../generated/services/api";

export async function fetchTournamentById(
  id: number
): Promise<TournamentResponse> {
  try {
    const response = await TournamentService.tournamentControllerFindOne(id);
    return response;
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to fetch tournament with id ${id}`);
  }
}

export async function fetchTournaments(): Promise<TournamentsResponse> {
  try {
    const response = await TournamentService.tournamentControllerFindAll();
    return response;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch tournaments");
  }
}
