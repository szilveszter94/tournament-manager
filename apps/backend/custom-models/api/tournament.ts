import { ApiProperty } from '@nestjs/swagger';
import { Tournament } from '../../generated/models/tournament.entity';
import { BaseResponse } from './base-response';
import { PaginationData } from './pagination';
import { ParticipantType, TournamentStatus } from 'generated/client';
import { TournamentSortBy } from 'custom-models/shared/tournament';
import { SortOrder } from 'custom-models/shared/common';

export class FindTournamentQueryDto {
  query?: string;
  currentPage = '1';
  itemsPerPage = '10';
  status?: TournamentStatus[];
  type?: ParticipantType[];
  sortBy: TournamentSortBy = 'createdAt';
  sortOrder: SortOrder = 'desc';
  createdFrom?: string;
  createdTo?: string;
  updatedFrom?: string;
  updatedTo?: string;
}

export class TournamentResponse extends BaseResponse {
  @ApiProperty({ type: () => Tournament, required: false })
  data?: Tournament;
}

export class TournamentsResponse extends BaseResponse {
  @ApiProperty({ type: () => Tournament, isArray: true, required: false })
  data?: Tournament[];
  @ApiProperty({ type: () => PaginationData, required: false })
  pagination?: PaginationData;
}
