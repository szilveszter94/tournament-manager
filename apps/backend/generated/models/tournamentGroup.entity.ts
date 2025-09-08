import { ApiProperty } from '@nestjs/swagger';
import { Tournament } from './tournament.entity';
import { PlayerGroup } from './playerGroup.entity';
import { Match } from './match.entity';

export class TournamentGroup {
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  id: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  tournamentId: number;
  @ApiProperty({
    type: 'integer',
    format: 'int32',
  })
  groupNumber: number;
  @ApiProperty({
    type: 'boolean',
  })
  isGroupMatchesEnded: boolean;
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
  @ApiProperty({
    type: () => Tournament,
    required: false,
  })
  tournament?: Tournament;
  @ApiProperty({
    type: () => PlayerGroup,
    isArray: true,
    required: false,
  })
  players?: PlayerGroup[];
  @ApiProperty({
    type: () => Match,
    isArray: true,
    required: false,
  })
  matches?: Match[];
}
