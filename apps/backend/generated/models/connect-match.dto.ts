import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class MatchTournamentPhaseIdSerialNumberUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentPhaseId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  serialNumber: number;
}

@ApiExtraModels(MatchTournamentPhaseIdSerialNumberUniqueInputDto)
export class ConnectMatchDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: MatchTournamentPhaseIdSerialNumberUniqueInputDto,
    required: false,
  })
  tournamentPhaseId_serialNumber?: MatchTournamentPhaseIdSerialNumberUniqueInputDto;
}
