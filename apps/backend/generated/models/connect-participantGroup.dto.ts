import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class ParticipantGroupTournamentGroupIdParticipantIdUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentGroupId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  participantId: number;
}

@ApiExtraModels(ParticipantGroupTournamentGroupIdParticipantIdUniqueInputDto)
export class ConnectParticipantGroupDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: ParticipantGroupTournamentGroupIdParticipantIdUniqueInputDto,
    required: false,
  })
  tournamentGroupId_participantId?: ParticipantGroupTournamentGroupIdParticipantIdUniqueInputDto;
}
