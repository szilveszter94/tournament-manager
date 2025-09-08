export interface PlayerTournamentPlayerIdTournamentIdUniqueInputDto {
  playerId: number;
  tournamentId: number;
}

export interface ConnectPlayerTournamentDto {
  id?: number;
  playerId_tournamentId?: PlayerTournamentPlayerIdTournamentIdUniqueInputDto;
}
