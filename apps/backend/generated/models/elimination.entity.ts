import { EliminationType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Tournament } from './tournament.entity';
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
  tournamentId: number;
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
    type: () => Tournament,
    required: false,
  })
  tournament?: Tournament;
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  matches?: Match[];
}
