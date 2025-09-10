export interface TournamentParticipationPlayerIdTournamentIdUniqueInputDto {
  playerId: number;
  tournamentId: number;
}

export interface ConnectTournamentParticipationDto {
  id?: number;
  playerId_tournamentId?: TournamentParticipationPlayerIdTournamentIdUniqueInputDto;
}
