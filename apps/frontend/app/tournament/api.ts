import {
  TournamentsResponse,
  TournamentResponse,
  ParticipantTournamentsResponse,
  UpdateMatchWinnerDto,
  ParticipantTournament,
  TournamentPhaseDataDto,
} from "@/generated/api";
import { apiClient } from "../../lib/client";
import { TournamentQueryParams } from "@/lib/custom-models/tournament";

export async function fetchTournamentParticipantsByTournamentId(
  tournamentId: number
): Promise<ParticipantTournamentsResponse> {
  try {
    const response = await apiClient.participantTournament.participantTournamentControllerFindByTournamentId(
      tournamentId.toString()
    );
    return response;
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to fetch participants with tournamentId ${tournamentId}`);
  }
}

export async function updateMatchById(
  matchId: number,
  tournamentId: number,
  entity: UpdateMatchWinnerDto
): Promise<TournamentResponse> {
  try {
    const response = await apiClient.match.matchControllerUpdate(matchId.toString(), tournamentId.toString(), entity);
    return response;
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to update match with id ${matchId}`);
  }
}

export async function fetchTournamentById(id: number): Promise<TournamentResponse> {
  try {
    const response = await apiClient.tournament.tournamentControllerFindOne(id.toString());
    return response;
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to fetch tournament with id ${id}`);
  }
}

export async function fetchGroupStagesByTournamentId(id: number): Promise<TournamentResponse> {
  try {
    const response = await apiClient.tournament.tournamentControllerFindOneWithGroupStages(id.toString());
    return response;
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to fetch tournament with id ${id}`);
  }
}

export async function fetchTournaments(p: TournamentQueryParams): Promise<TournamentsResponse> {
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

export async function createTournamentPhase(
  data: Record<string, ParticipantTournament[]>,
  tournamentId: number
): Promise<void> {
  const mappedData: TournamentPhaseDataDto = {
    groups: Object.entries(data).map(([key, value], index) => {
      const ids = value.map((v) => v.participant?.id).filter((id): id is number => id !== undefined);
      return { name: key, serialNumber: index + 1, participantIds: ids };
    }),
  };
  apiClient.tournamentPhase.tournamentPhaseControllerAddPhaseToTournament(tournamentId.toString(), mappedData);
}

