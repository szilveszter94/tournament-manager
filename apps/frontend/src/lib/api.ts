import {
  TournamentsResponse,
  TournamentResponse,
  AppClient,
  CreateTournamentWithPhaseDto,
} from "../../generated/services/api";

const apiClient = new AppClient({
  BASE: process.env.NEXT_PUBLIC_API_URL ?? "",
});

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

export async function createTournament(
  entity: CreateTournamentWithPhaseDto
): Promise<TournamentResponse> {
  try {
    const response =
      await apiClient.tournament.tournamentControllerCreateWithPhase(entity);
    return response;
  } catch (err) {
    console.error(err);
    throw new Error(
      `Failed to create tournament with name ${entity.tournament.name}`
    );
  }
}
