export interface TournamentGroupTournamentPhaseIdGroupNumberUniqueInputDto {
  tournamentPhaseId: number;
  groupNumber: number;
}

export interface ConnectTournamentGroupDto {
  id?: number;
  tournamentPhaseId_groupNumber?: TournamentGroupTournamentPhaseIdGroupNumberUniqueInputDto;
}
