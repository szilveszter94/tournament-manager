import { ApiProperty } from '@nestjs/swagger';

export class UpdateTournamentKnockoutDto {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
    default: 1,
    required: false,
  })
  currentRound?: number;
  @ApiProperty({
    type: 'boolean',
    default: false,
    required: false,
  })
  isOver?: boolean;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    default: new Date().toISOString(),
    required: false,
  })
  createdAt?: Date;
}
