import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from './base-response';
import { ParticipantTournament } from '../../generated/models/participantTournament.entity';

export class ParticipantTournamentsResponse extends BaseResponse {
  @ApiProperty({
    type: () => ParticipantTournament,
    isArray: true,
    required: false,
  })
  data?: ParticipantTournament[];
}
