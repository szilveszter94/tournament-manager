import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class ParticipantTournamentParticipantIdTournamentIdUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  participantId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentId: number;
}

@ApiExtraModels(ParticipantTournamentParticipantIdTournamentIdUniqueInputDto)
export class ConnectParticipantTournamentDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: ParticipantTournamentParticipantIdTournamentIdUniqueInputDto,
    required: false,
  })
  participantId_tournamentId?: ParticipantTournamentParticipantIdTournamentIdUniqueInputDto;
}
