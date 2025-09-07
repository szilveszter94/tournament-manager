import { EliminationType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTournamentEliminationDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 1,
    required: false,
  })
  currentRound?: number;
  @ApiProperty({
    enum: EliminationType,
    enumName: 'EliminationType',
    default: 'Knockout',
    required: false,
  })
  eliminationType?: EliminationType;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isLosersBracketPlayerWins?: boolean;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isEliminationsOver?: boolean;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
