import { PhaseType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTournamentPhaseDto {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  name?: string;
  @ApiProperty({
    enum: PhaseType,
    enumName: 'PhaseType',
    required: false,
  })
  phaseType?: PhaseType;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
  })
  order?: number;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isCompleted?: boolean;
}
