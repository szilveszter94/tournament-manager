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
import {
  ParticipantResponse,
  ParticipantsResponse,
} from '../../custom-models/participant-response';
import { BaseResponse } from '../../custom-models/base-response';
import { CreateParticipantDto } from '../../generated/models/create-participant.dto';
import { UpdateParticipantDto } from '../../generated/models/update-participant.dto';

@ApiTags('participant')
@ApiExtraModels(ParticipantResponse)
@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get a participant by Id' })
  @ApiOkResponse({ type: ParticipantResponse, isArray: false })
  findOne(@Param('id') id: number): Promise<ParticipantResponse> {
    return this.participantService.find(+id);
  }

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
  findByQuery(
    @Query('query') query?: string,
    @Query('currentPage') currentPage = '1',
    @Query('itemsPerPage') itemsPerPage = '10',
  ): Promise<ParticipantsResponse> {
    return this.participantService.findByQuery(
      query,
      +currentPage,
      +itemsPerPage,
    );
  }

  @Post()
  @ApiOperation({ summary: 'Create a new participant' })
  @ApiOkResponse({ type: ParticipantResponse, isArray: false })
  @ApiBody({ type: CreateParticipantDto })
  create(
    @Body() participant: CreateParticipantDto,
  ): Promise<ParticipantResponse> {
    return this.participantService.create(participant);
  }

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

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a participant from the database' })
  @ApiOkResponse({ type: BaseResponse })
  deleteParticipant(@Param('id') id: number): Promise<BaseResponse> {
    return this.participantService.delete(id);
  }
}
