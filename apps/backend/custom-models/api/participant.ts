import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from './base-response';
import { Participant } from '../../generated/models/participant.entity';
import { PaginationData } from './pagination';
import { ParticipantType } from '../../generated/client';
import { TournamentSortBy } from '../../custom-models/shared/tournament';
import { SortOrder } from '../../custom-models/shared/common';

export class FindParticipantQueryDto {
  query?: string;
  currentPage = '1';
  itemsPerPage = '10';
  type?: ParticipantType[];
  sortBy: TournamentSortBy = 'createdAt';
  sortOrder: SortOrder = 'desc';
  createdFrom?: string;
  createdTo?: string;
  updatedFrom?: string;
  updatedTo?: string;
  eloFrom?: string;
  eloTo?: string;
  winsFrom?: string;
  winsTo?: string;
  lossesFrom?: string;
  lossesTo?: string;
}

export class ParticipantResponse extends BaseResponse {
  @ApiProperty({ type: () => Participant, required: false })
  data?: Participant;
}

export class ParticipantsResponse extends BaseResponse {
  @ApiProperty({ type: () => Participant, isArray: true, required: false })
  data?: Participant[];
  @ApiProperty({ type: () => PaginationData, required: false })
  pagination?: PaginationData;
}
