import { EliminationType } from '../client';
import { ApiProperty } from '@nestjs/swagger';
import { TournamentPhase } from './tournamentPhase.entity';
import { Match } from './match.entity';

export class Elimination {
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
    enum: EliminationType,
    enumName: 'EliminationType',
  })
  type: EliminationType;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  currentRound: number;
  @ApiProperty({
    type: 'boolean',
  })
  isOver: boolean;
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
    type: () => Match,
    isArray: true,
    required: false,
  })
  matches?: Match[];
}
