import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class TournamentParticipationPlayerIdTournamentIdUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  playerId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentId: number;
}

@ApiExtraModels(TournamentParticipationPlayerIdTournamentIdUniqueInputDto)
export class ConnectTournamentParticipationDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: TournamentParticipationPlayerIdTournamentIdUniqueInputDto,
    required: false,
  })
  playerId_tournamentId?: TournamentParticipationPlayerIdTournamentIdUniqueInputDto;
}
