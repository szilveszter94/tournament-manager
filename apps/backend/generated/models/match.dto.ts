import { KnockoutMatchType } from '@prisma/client';
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
  serialNumber: number | null;
  @ApiProperty({
    type: 'boolean',
  })
  isOver: boolean;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  group: number | null;
  @ApiProperty({
    type: 'boolean',
  })
  isKnockoutMatch: boolean;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  knockoutRound: number | null;
  @ApiProperty({
    enum: KnockoutMatchType,
    enumName: 'KnockoutMatchType',
  })
  knockoutMatchType: KnockoutMatchType;
  @ApiProperty({
    type: 'boolean',
  })
  isDoubleEliminationMatch: boolean;
  @ApiProperty({
    type: 'boolean',
  })
  isWinnersBracketMatch: boolean;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    nullable: true,
  })
  nextMatchId: number | null;
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
