import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class TournamentGroupTournamentIdGroupNumberUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  groupNumber: number;
}

@ApiExtraModels(TournamentGroupTournamentIdGroupNumberUniqueInputDto)
export class ConnectTournamentGroupDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: TournamentGroupTournamentIdGroupNumberUniqueInputDto,
    required: false,
  })
  tournamentId_groupNumber?: TournamentGroupTournamentIdGroupNumberUniqueInputDto;
}
