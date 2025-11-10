import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class TournamentDoubleEliminationTournamentPhaseIdRoundNumberUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentPhaseId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 1,
  })
  roundNumber: number;
}

@ApiExtraModels(
  TournamentDoubleEliminationTournamentPhaseIdRoundNumberUniqueInputDto,
)
export class ConnectTournamentDoubleEliminationDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  tournamentPhaseId?: number;
  @ApiProperty({
    type: TournamentDoubleEliminationTournamentPhaseIdRoundNumberUniqueInputDto,
    required: false,
  })
  tournamentPhaseId_roundNumber?: TournamentDoubleEliminationTournamentPhaseIdRoundNumberUniqueInputDto;
}
