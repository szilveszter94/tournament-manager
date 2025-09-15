export interface MatchTournamentPhaseIdSerialNumberUniqueInputDto {
  tournamentPhaseId: number;
  serialNumber: number;
}

export interface ConnectMatchDto {
  id?: number;
  tournamentPhaseId_serialNumber?: MatchTournamentPhaseIdSerialNumberUniqueInputDto;
}
