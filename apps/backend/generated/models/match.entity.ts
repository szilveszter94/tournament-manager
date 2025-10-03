import { MatchType } from '../client';
import { ApiProperty } from '@nestjs/swagger';
import { TournamentPhase } from './tournamentPhase.entity';
import { Elimination } from './elimination.entity';
import { TournamentGroup } from './tournamentGroup.entity';
import { Participant } from './participant.entity';

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
  tournamentPhaseId: number;
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
  participant1Id: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  participant2Id: number | null;
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
    type: () => TournamentPhase,
    required: false,
  })
  tournamentPhase?: TournamentPhase;
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
    type: () => Participant,
    required: false,
    nullable: true,
  })
  participant1?: Participant | null;
  @ApiProperty({
    type: () => Participant,
    required: false,
    nullable: true,
  })
  participant2?: Participant | null;
  @ApiProperty({
    type: () => Participant,
    required: false,
    nullable: true,
  })
  winner?: Participant | null;
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
