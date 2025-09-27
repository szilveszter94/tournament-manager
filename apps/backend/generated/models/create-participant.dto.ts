import { ParticipantType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateParticipantDto {
  @ApiProperty({
    type: 'string',
  })
  name: string;
  @ApiProperty({
    enum: ParticipantType,
    enumName: 'ParticipantType',
  })
  type: ParticipantType;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 1500,
    required: false,
  })
  elo?: number;
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
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
