import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({
    type: 'string',
  })
  name: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 0,
    required: false,
  })
  overallWins?: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 0,
    required: false,
  })
  overallLosses?: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
    nullable: true,
  })
  group?: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
    nullable: true,
  })
  test?: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 1500,
    required: false,
  })
  elo?: number;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
