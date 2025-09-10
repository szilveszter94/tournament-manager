import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiExtraModels,
  ApiBody,
  ApiOperation,
} from '@nestjs/swagger';
import { PlayerService } from '../services/player.service';
import { CreatePlayerDto } from '../../generated/models/create-player.dto';
import { UpdatePlayerDto } from '../../generated/models/update-player.dto';
import {
  PlayerResponse,
  PlayersResponse,
} from '../../custom-models/player-response';
import { BaseResponse } from '../../custom-models/base-response';

@ApiTags('player')
@ApiExtraModels(PlayerResponse)
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get a player by Id' })
  @ApiOkResponse({ type: PlayerResponse, isArray: false })
  findOne(@Param('id') id: number): Promise<PlayerResponse> {
    return this.playerService.find(+id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all players' })
  @ApiOkResponse({ type: PlayersResponse, isArray: false })
  findAll(): Promise<PlayersResponse> {
    return this.playerService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new player' })
  @ApiOkResponse({ type: PlayerResponse, isArray: false })
  @ApiBody({ type: CreatePlayerDto })
  create(@Body() player: CreatePlayerDto): Promise<PlayerResponse> {
    return this.playerService.create(player);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update the player by Id' })
  @ApiOkResponse({ type: PlayerResponse, isArray: false })
  @ApiBody({ type: UpdatePlayerDto })
  update(
    @Param('id') id: number,
    @Body() player: UpdatePlayerDto,
  ): Promise<PlayerResponse> {
    return this.playerService.update(+id, player);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a player from the database' })
  @ApiOkResponse({ type: BaseResponse })
  deletePlayer(@Param('id') id: number): Promise<BaseResponse> {
    return this.playerService.delete(id);
  }
}
