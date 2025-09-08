export interface MatchTournamentIdSerialNumberUniqueInputDto {
  tournamentId: number;
  serialNumber: number;
}

export interface ConnectMatchDto {
  id?: number;
  tournamentId_serialNumber?: MatchTournamentIdSerialNumberUniqueInputDto;
}
