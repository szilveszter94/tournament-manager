import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

export class PlayerGroupTournamentGroupIdPlayerIdUniqueInputDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentGroupId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  playerId: number;
}

@ApiExtraModels(PlayerGroupTournamentGroupIdPlayerIdUniqueInputDto)
export class ConnectPlayerGroupDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  id?: number;
  @ApiProperty({
    type: PlayerGroupTournamentGroupIdPlayerIdUniqueInputDto,
    required: false,
  })
  tournamentGroupId_playerId?: PlayerGroupTournamentGroupIdPlayerIdUniqueInputDto;
}
