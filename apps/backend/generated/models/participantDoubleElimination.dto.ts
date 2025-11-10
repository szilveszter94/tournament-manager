import { DoubleEliminationBracket } from '../client';
import { ApiProperty } from '@nestjs/swagger';

export class ParticipantDoubleEliminationDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  wins: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  losses: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  roundNumber: number;
  @ApiProperty({
    enum: DoubleEliminationBracket,
    enumName: 'DoubleEliminationBracket',
  })
  doubleEliminationBracket: DoubleEliminationBracket;
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
