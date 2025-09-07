import { ApiProperty } from '@nestjs/swagger';

export class PlayerDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  @ApiProperty({
    type: 'string',
  })
  name: string;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  overallWins: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  overallLosses: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  group: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  test: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  elo: number;
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
