export interface ParticipantTournamentParticipantIdTournamentIdUniqueInputDto {
  participantId: number;
  tournamentId: number;
}

export interface ConnectParticipantTournamentDto {
  id?: number;
  participantId_tournamentId?: ParticipantTournamentParticipantIdTournamentIdUniqueInputDto;
}
