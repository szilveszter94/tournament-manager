import { EliminationType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TournamentEliminationDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
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
    type: 'boolean',
  })
  isLosersBracketPlayerWins: boolean;
  @ApiProperty({
    type: 'boolean',
  })
  isEliminationsOver: boolean;
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
}
