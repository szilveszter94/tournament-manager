import { MatchType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMatchDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
    nullable: true,
  })
  round?: number | null;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
    nullable: true,
  })
  serialNumber?: number | null;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isOver?: boolean;
  @ApiProperty({
    enum: MatchType,
    enumName: 'MatchType',
    required: false,
  })
  matchType?: MatchType;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
