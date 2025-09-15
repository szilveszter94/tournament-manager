import { ApiProperty } from '@nestjs/swagger';

export class ParticipantDto {
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
  elo: number;
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
