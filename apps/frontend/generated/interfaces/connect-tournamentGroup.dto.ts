export interface TournamentGroupTournamentIdGroupNumberUniqueInputDto {
  tournamentId: number;
  groupNumber: number;
}

export interface ConnectTournamentGroupDto {
  id?: number;
  tournamentId_groupNumber?: TournamentGroupTournamentIdGroupNumberUniqueInputDto;
}
