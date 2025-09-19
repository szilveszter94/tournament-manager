import { PhaseType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TournamentPhaseDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
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
  })
  isCompleted: boolean;
}
