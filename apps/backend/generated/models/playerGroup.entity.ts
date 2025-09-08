import { ApiProperty } from '@nestjs/swagger';
import { TournamentGroup } from './tournamentGroup.entity';
import { Player } from './player.entity';

export class PlayerGroup {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
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
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  wins: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  losses: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  points: number;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  updatedAt: Date;
  @ApiProperty({
    type: () => TournamentGroup,
    required: false,
  })
  group?: TournamentGroup;
  @ApiProperty({
    type: () => Player,
    required: false,
  })
  player?: Player;
}
