import { EliminationType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEliminationDto {
  @ApiProperty({
    enum: EliminationType,
    enumName: 'EliminationType',
    default: 'Knockout',
    required: false,
  })
  type?: EliminationType;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 1,
    required: false,
  })
  currentRound?: number;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isOver?: boolean;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
