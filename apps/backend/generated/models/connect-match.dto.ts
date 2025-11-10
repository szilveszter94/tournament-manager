import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class MatchTournamentGroupIdSerialNumberUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentGroupId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  serialNumber: number;
}

@ApiExtraModels(MatchTournamentGroupIdSerialNumberUniqueInputDto)
export class ConnectMatchDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: MatchTournamentGroupIdSerialNumberUniqueInputDto,
    required: false,
  })
  tournamentGroupId_serialNumber?: MatchTournamentGroupIdSerialNumberUniqueInputDto;
}
