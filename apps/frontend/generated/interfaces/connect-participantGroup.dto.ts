export interface ParticipantGroupTournamentGroupIdParticipantIdUniqueInputDto {
  tournamentGroupId: number;
  participantId: number;
}

export interface ConnectParticipantGroupDto {
  id?: number;
  tournamentGroupId_participantId?: ParticipantGroupTournamentGroupIdParticipantIdUniqueInputDto;
}
