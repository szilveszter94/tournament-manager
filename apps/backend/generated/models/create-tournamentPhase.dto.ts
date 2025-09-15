import { PhaseType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTournamentPhaseDto {
  @ApiProperty({
    type: 'string',
  })
  name: string;
  @ApiProperty({
    enum: PhaseType,
    enumName: 'PhaseType',
  })
  phaseType: PhaseType;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  order: number;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isCompleted?: boolean;
}
