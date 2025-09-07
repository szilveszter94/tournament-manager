import { KnockoutMatchType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMatchDto {
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
    type: 'integer',
    format: 'int32',
    required: false,
    nullable: true,
  })
  group?: number | null;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isKnockoutMatch?: boolean;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
    nullable: true,
  })
  knockoutRound?: number | null;
  @ApiProperty({
    enum: KnockoutMatchType,
    enumName: 'KnockoutMatchType',
    default: 'None',
    required: false,
  })
  knockoutMatchType?: KnockoutMatchType;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isDoubleEliminationMatch?: boolean;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isWinnersBracketMatch?: boolean;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    required: false,
    nullable: true,
  })
  nextMatchId?: number | null;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
