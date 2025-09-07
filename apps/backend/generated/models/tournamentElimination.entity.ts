import { EliminationType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Tournament } from './tournament.entity';
import { Match } from './match.entity';
import { Player } from './player.entity';

export class TournamentElimination {
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
  currentRound: number;
  @ApiProperty({
    enum: EliminationType,
    enumName: 'EliminationType',
  })
  eliminationType: EliminationType;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  bronzeMatchId: number | null;
  @ApiProperty({
    type: 'boolean',
  })
  isLosersBracketPlayerWins: boolean;
  @ApiProperty({
    type: 'boolean',
  })
  isEliminationsOver: boolean;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  winnersBracketByePlayerId: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  losersBracketByePlayerId: number | null;
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
  Tournament?: Tournament;
  @ApiProperty({
    type: () => Match,
    required: false,
    nullable: true,
  })
  BronzeMatch?: Match | null;
  @ApiProperty({
    type: () => Player,
    required: false,
    nullable: true,
  })
  WinnersBracketByePlayer?: Player | null;
  @ApiProperty({
    type: () => Player,
    required: false,
    nullable: true,
  })
  LosersBracketByePlayer?: Player | null;
}
