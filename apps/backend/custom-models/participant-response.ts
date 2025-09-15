import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from './base-response';
import { Participant } from '../generated/models/participant.entity';

export class ParticipantResponse extends BaseResponse {
  @ApiProperty({ type: () => Participant, required: false })
  data?: Participant;
}

export class ParticipantsResponse extends BaseResponse {
  @ApiProperty({ type: () => Participant, isArray: true, required: false })
  data?: Participant[];
}
