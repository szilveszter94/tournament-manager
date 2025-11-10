import { DoubleEliminationBracket } from '../client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateParticipantDoubleEliminationDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 0,
    required: false,
  })
  wins?: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 0,
    required: false,
  })
  losses?: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 1,
    required: false,
  })
  roundNumber?: number;
  @ApiProperty({
    enum: DoubleEliminationBracket,
    enumName: 'DoubleEliminationBracket',
    default: 'Winner',
    required: false,
  })
  doubleEliminationBracket?: DoubleEliminationBracket;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
