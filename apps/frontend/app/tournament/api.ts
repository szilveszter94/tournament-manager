import {
  TournamentsResponse,
  TournamentResponse,
  ParticipantTournamentsResponse,
} from "@/generated/api";
import { apiClient } from "../../lib/client";
import { TournamentQueryParams } from "@/lib/custom-models/tournament";

export async function fetchTournamentParticipantsByTournamentId(
  tournamentId: number
): Promise<ParticipantTournamentsResponse> {
  try {
    const response =
      await apiClient.participantTournament.participantTournamentControllerFindByTournamentId(
        tournamentId.toString()
      );
    return response;
  } catch (err) {
    console.error(err);
    throw new Error(
      `Failed to fetch participants with tournamentId ${tournamentId}`
    );
  }
}

export async function fetchTournamentById(
  id: number
): Promise<TournamentResponse> {
  try {
    const response = await apiClient.tournament.tournamentControllerFindOne(id.toString());
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
