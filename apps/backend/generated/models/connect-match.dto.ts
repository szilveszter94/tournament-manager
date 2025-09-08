import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class MatchTournamentIdSerialNumberUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  serialNumber: number;
}

@ApiExtraModels(MatchTournamentIdSerialNumberUniqueInputDto)
export class ConnectMatchDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: MatchTournamentIdSerialNumberUniqueInputDto,
    required: false,
  })
  tournamentId_serialNumber?: MatchTournamentIdSerialNumberUniqueInputDto;
}
