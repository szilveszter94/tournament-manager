import { MatchType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Tournament } from './tournament.entity';
import { Elimination } from './elimination.entity';
import { TournamentGroup } from './tournamentGroup.entity';
import { Player } from './player.entity';

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
  eliminationId: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  tournamentGroupId: number | null;
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
  nextMatchId: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  round: number | null;
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
    enum: MatchType,
    enumName: 'MatchType',
  })
  matchType: MatchType;
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
    type: () => Elimination,
    required: false,
    nullable: true,
  })
  elimination?: Elimination | null;
  @ApiProperty({
    type: () => TournamentGroup,
    required: false,
    nullable: true,
  })
  group?: TournamentGroup | null;
  @ApiProperty({
    type: () => Player,
    required: false,
    nullable: true,
  })
  player1?: Player | null;
  @ApiProperty({
    type: () => Player,
    required: false,
    nullable: true,
  })
  player2?: Player | null;
  @ApiProperty({
    type: () => Player,
    required: false,
    nullable: true,
  })
  winner?: Player | null;
  @ApiProperty({
    type: () => Match,
    required: false,
    nullable: true,
  })
  nextMatch?: Match | null;
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  prevMatches?: Match[];
}
