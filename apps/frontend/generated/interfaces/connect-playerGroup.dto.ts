export interface PlayerGroupTournamentGroupIdPlayerIdUniqueInputDto {
  tournamentGroupId: number;
  playerId: number;
}

export interface ConnectPlayerGroupDto {
  id?: number;
  tournamentGroupId_playerId?: PlayerGroupTournamentGroupIdPlayerIdUniqueInputDto;
}
