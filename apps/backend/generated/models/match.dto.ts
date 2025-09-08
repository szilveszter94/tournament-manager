import { MatchType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class MatchDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  round: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  serialNumber: number | null;
  @ApiProperty({
    type: 'boolean',
  })
  isOver: boolean;
  @ApiProperty({
    enum: MatchType,
    enumName: 'MatchType',
  })
  matchType: MatchType;
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
