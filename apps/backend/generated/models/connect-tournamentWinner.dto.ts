import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class TournamentWinnerTournamentIdPlaceUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  place: number;
}

@ApiExtraModels(TournamentWinnerTournamentIdPlaceUniqueInputDto)
export class ConnectTournamentWinnerDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: TournamentWinnerTournamentIdPlaceUniqueInputDto,
    required: false,
  })
  tournamentId_place?: TournamentWinnerTournamentIdPlaceUniqueInputDto;
}
