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
  ApiTags,
  ApiOkResponse,
  ApiExtraModels,
  ApiBody,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { UpdateTournamentDto } from '../../generated/models/update-tournament.dto';
import { CreateTournamentDto } from '../../generated/models/create-tournament.dto';
import { ParticipantType, TournamentStatus } from '../../generated/client';
import {
  FindTournamentQueryDto,
  TournamentResponse,
  TournamentsResponse,
} from '../../custom-models/api/tournament';
import { tournamentSortByValues } from '../../custom-models/shared/tournament';
import { sortOrderValues } from '../../custom-models/shared/common';
import { BaseResponse } from '../../custom-models/api/base-response';

@ApiTags('tournament')
@ApiExtraModels(TournamentResponse)
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  // GET Tournament by Id
  @Get(':id')
  @ApiOperation({ summary: 'Get a tournament by Id' })
  @ApiOkResponse({ type: TournamentResponse, isArray: false })
  findOne(@Param('id') id: number): Promise<TournamentResponse> {
    return this.tournamentService.find(+id);
  }

  // GET Tournaments by query
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
    @Query() queryParams: FindTournamentQueryDto,
  ): Promise<TournamentsResponse> {
    return this.tournamentService.findByQuery(queryParams);
  }

  // CREATE new Tournament
  @Post()
  @ApiOperation({ summary: 'Create a new tournament' })
  @ApiOkResponse({ type: TournamentResponse, isArray: false })
  @ApiBody({ type: CreateTournamentDto })
  create(@Body() entity: CreateTournamentDto): Promise<TournamentResponse> {
    return this.tournamentService.create(entity);
  }

  // UPDATE Tournament by Id
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

  // DELETE Tournament by Id
  @Delete(':id')
  @ApiOperation({ summary: 'Remove a tournament from the database' })
  @ApiOkResponse({ type: BaseResponse })
  deleteParticipant(@Param('id') id: number): Promise<BaseResponse> {
    return this.tournamentService.delete(id);
  }
}
