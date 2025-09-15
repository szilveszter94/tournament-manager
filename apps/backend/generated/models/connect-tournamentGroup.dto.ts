import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class TournamentGroupTournamentPhaseIdGroupNumberUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentPhaseId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  groupNumber: number;
}

@ApiExtraModels(TournamentGroupTournamentPhaseIdGroupNumberUniqueInputDto)
export class ConnectTournamentGroupDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: TournamentGroupTournamentPhaseIdGroupNumberUniqueInputDto,
    required: false,
  })
  tournamentPhaseId_groupNumber?: TournamentGroupTournamentPhaseIdGroupNumberUniqueInputDto;
}
