import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class ParticipantDoubleEliminationTournamentDoubleEliminationIdParticipantIdUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentDoubleEliminationId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  participantId: number;
}

@ApiExtraModels(
  ParticipantDoubleEliminationTournamentDoubleEliminationIdParticipantIdUniqueInputDto,
)
export class ConnectParticipantDoubleEliminationDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: ParticipantDoubleEliminationTournamentDoubleEliminationIdParticipantIdUniqueInputDto,
    required: false,
  })
  tournamentDoubleEliminationId_participantId?: ParticipantDoubleEliminationTournamentDoubleEliminationIdParticipantIdUniqueInputDto;
}
