import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TournamentService } from '../services/tournament.service';
import {
  TournamentResponse,
  TournamentsResponse,
} from '../../custom-models/tournament-response';
import {
  ApiTags,
  ApiOkResponse,
  ApiExtraModels,
  ApiBody,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { UpdateTournamentDto } from '../../generated/models/update-tournament.dto';
import { BaseResponse } from '../../custom-models/base-response';
import { CreateTournamentDto } from '../../generated/models/create-tournament.dto';
import { ParticipantType, TournamentStatus } from '@prisma/client';
import type { TournamentSortBy, SortOrder } from '../../custom-models/shared';
import {
  tournamentSortByValues,
  sortOrderValues,
} from '../../custom-models/shared';

@ApiTags('tournament')
@ApiExtraModels(TournamentResponse)
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get a tournament by Id' })
  @ApiOkResponse({ type: TournamentResponse, isArray: false })
  findOne(@Param('id') id: number): Promise<TournamentResponse> {
    return this.tournamentService.find(+id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tournaments' })
  @ApiOkResponse({ type: TournamentsResponse, isArray: false })
  @ApiQuery({ name: 'query', required: false, type: String })
  @ApiQuery({ name: 'currentPage', required: false, type: Number, example: 1 })
  @ApiQuery({
    name: 'itemsPerPage',
    required: false,
    type: Number,
    example: 10,
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: TournamentStatus,
    isArray: true,
  })
  @ApiQuery({
    name: 'type',
    required: false,
    enum: ParticipantType,
    isArray: true,
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    enum: tournamentSortByValues,
    example: 'createdAt',
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    enum: sortOrderValues,
    example: 'desc',
  })
  @ApiQuery({
    name: 'createdFrom',
    required: false,
    type: String,
    example: '2012.10.05',
  })
  @ApiQuery({
    name: 'createdTo',
    required: false,
    type: String,
    example: '2012.10.05',
  })
  @ApiQuery({
    name: 'updatedFrom',
    required: false,
    type: String,
    example: '2012.10.05',
  })
  @ApiQuery({
    name: 'updatedTo',
    required: false,
    type: String,
    example: '2012.10.05',
  })
  findByQuery(
    @Query('query') query?: string,
    @Query('currentPage') currentPage = '1',
    @Query('itemsPerPage') itemsPerPage = '10',
    @Query('status') status?: TournamentStatus[],
    @Query('type') type?: ParticipantType[],
    @Query('sortBy')
    sortBy: TournamentSortBy = 'createdAt',
    @Query('sortOrder') sortOrder: SortOrder = 'desc',
    @Query('createdFrom') createdFrom?: string,
    @Query('createdTo') createdTo?: string,
    @Query('updatedFrom') updatedFrom?: string,
    @Query('updatedTo') updatedTo?: string,
  ): Promise<TournamentsResponse> {
    const statusList = Array.isArray(status) ? status : status ? [status] : [];
    const typeList = Array.isArray(type) ? type : type ? [type] : [];

    return this.tournamentService.findByQuery(
      query,
      +currentPage,
      +itemsPerPage,
      statusList,
      typeList,
      sortBy,
      sortOrder,
      createdFrom,
      createdTo,
      updatedFrom,
      updatedTo,
    );
  }

  @Post()
  @ApiOperation({ summary: 'Create a new tournament' })
  @ApiOkResponse({ type: TournamentResponse, isArray: false })
  @ApiBody({ type: CreateTournamentDto })
  create(@Body() entity: CreateTournamentDto): Promise<TournamentResponse> {
    return this.tournamentService.create(entity);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update the tournament by Id' })
  @ApiOkResponse({ type: TournamentResponse, isArray: false })
  @ApiBody({ type: UpdateTournamentDto })
  update(
    @Param('id') id: number,
    @Body() tournament: UpdateTournamentDto,
  ): Promise<TournamentResponse> {
    return this.tournamentService.update(+id, tournament);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a tournament from the database' })
  @ApiOkResponse({ type: BaseResponse })
  deleteParticipant(@Param('id') id: number): Promise<BaseResponse> {
    return this.tournamentService.delete(id);
  }
}
