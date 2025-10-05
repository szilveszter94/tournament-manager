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
import {
  ApiTags,
  ApiOkResponse,
  ApiExtraModels,
  ApiBody,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { ParticipantService } from '../services/participant.service';
import { CreateParticipantDto } from '../../generated/models/create-participant.dto';
import { UpdateParticipantDto } from '../../generated/models/update-participant.dto';
import {
  FindParticipantQueryDto,
  ParticipantResponse,
  ParticipantsResponse,
} from '../../custom-models/api/participant';
import { BaseResponse } from '../../custom-models/api/base-response';
import { ParticipantType } from '../../generated/client';
import { participantSortByValues } from '../../custom-models/shared/participant';
import { sortOrderValues } from '../../custom-models/shared/common';

@ApiTags('participant')
@ApiExtraModels(ParticipantResponse)
@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  // GET Participant by Id
  @Get(':id')
  @ApiOperation({ summary: 'Get a participant by Id' })
  @ApiOkResponse({ type: ParticipantResponse, isArray: false })
  findOne(@Param('id') id: number): Promise<ParticipantResponse> {
    return this.participantService.find(+id);
  }

  // GET Participants by query
  @Get()
  @ApiOperation({ summary: 'Get all participants' })
  @ApiOkResponse({ type: ParticipantsResponse, isArray: false })
  @ApiQuery({ name: 'query', required: false, type: String })
  @ApiQuery({ name: 'currentPage', required: false, type: Number, example: 1 })
  @ApiQuery({
    name: 'itemsPerPage',
    required: false,
    type: Number,
    example: 10,
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
    enum: participantSortByValues,
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
  @ApiQuery({
    name: 'eloFrom',
    required: false,
    type: String,
    example: '1200',
  })
  @ApiQuery({
    name: 'eloTo',
    required: false,
    type: String,
    example: '1700',
  })
  @ApiQuery({
    name: 'winsFrom',
    required: false,
    type: String,
    example: '10',
  })
  @ApiQuery({
    name: 'winsTo',
    required: false,
    type: String,
    example: '150',
  })
  @ApiQuery({
    name: 'lossesFrom',
    required: false,
    type: String,
    example: '10',
  })
  @ApiQuery({
    name: 'lossesTo',
    required: false,
    type: String,
    example: '150',
  })
  findByQuery(
    @Query('query') queryParams: FindParticipantQueryDto,
  ): Promise<ParticipantsResponse> {
    return this.participantService.findByQuery(queryParams);
  }

  // CREATE Participant
  @Post()
  @ApiOperation({ summary: 'Create a new participant' })
  @ApiOkResponse({ type: ParticipantResponse, isArray: false })
  @ApiBody({ type: CreateParticipantDto })
  create(
    @Body() participant: CreateParticipantDto,
  ): Promise<ParticipantResponse> {
    return this.participantService.create(participant);
  }

  // UPDATE Participant by Id
  @Put(':id')
  @ApiOperation({ summary: 'Update the participant by Id' })
  @ApiOkResponse({ type: ParticipantResponse, isArray: false })
  @ApiBody({ type: UpdateParticipantDto })
  update(
    @Param('id') id: number,
    @Body() participant: UpdateParticipantDto,
  ): Promise<ParticipantResponse> {
    return this.participantService.update(+id, participant);
  }

  // DELETE Tournament by Id
  @Delete(':id')
  @ApiOperation({ summary: 'Remove a participant from the database' })
  @ApiOkResponse({ type: BaseResponse })
  deleteParticipant(@Param('id') id: number): Promise<BaseResponse> {
    return this.participantService.delete(id);
  }
}
