import { KnockoutMatchType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Tournament } from './tournament.entity';
import { Player } from './player.entity';
import { TournamentElimination } from './tournamentElimination.entity';

export class Match {
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
    nullable: true,
  })
  player1Id: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  player2Id: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  winnerId: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  serialNumber: number | null;
  @ApiProperty({
    type: 'boolean',
  })
  isOver: boolean;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  group: number | null;
  @ApiProperty({
    type: 'boolean',
  })
  isKnockoutMatch: boolean;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  knockoutRound: number | null;
  @ApiProperty({
    enum: KnockoutMatchType,
    enumName: 'KnockoutMatchType',
  })
  knockoutMatchType: KnockoutMatchType;
  @ApiProperty({
    type: 'boolean',
  })
  isDoubleEliminationMatch: boolean;
  @ApiProperty({
    type: 'boolean',
  })
  isWinnersBracketMatch: boolean;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  nextMatchId: number | null;
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
    type: () => Player,
    required: false,
    nullable: true,
  })
  Player1?: Player | null;
  @ApiProperty({
    type: () => Player,
    required: false,
    nullable: true,
  })
  Player2?: Player | null;
  @ApiProperty({
    type: () => Player,
    required: false,
    nullable: true,
  })
  Winner?: Player | null;
  @ApiProperty({
    type: () => TournamentElimination,
    isArray: true,
    required: false,
  })
  TournamentElimination?: TournamentElimination[];
}
