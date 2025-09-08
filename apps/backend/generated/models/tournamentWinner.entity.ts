import { ApiProperty } from '@nestjs/swagger';
import { Tournament } from './tournament.entity';
import { Player } from './player.entity';

export class TournamentWinner {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  playerId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  place: number;
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
    type: () => Tournament,
    required: false,
  })
  tournament?: Tournament;
  @ApiProperty({
    type: () => Player,
    required: false,
  })
  player?: Player;
}
