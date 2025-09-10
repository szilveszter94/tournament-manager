import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PlayersResponse, PlayerResponse } from 'custom-models/player-response';
import { CreatePlayerDto } from 'generated/models/create-player.dto';
import { UpdatePlayerDto } from 'generated/models/update-player.dto';
import { BaseResponse } from 'custom-models/base-response';

@Injectable()
export class PlayerService {
  private readonly logger = new Logger(PlayerService.name);

  constructor(private readonly prisma: PrismaService) {}

  async find(id: number): Promise<PlayerResponse> {
    try {
      const player = await this.prisma.player.findUnique({
        where: { id },
      });

      if (!player) {
        this.logger.warn(`Player with ID ${id} not found`);
        return { ok: false, error: `Player with ID ${id} not found` };
      }

      return { ok: true, data: player };
    } catch (e) {
      this.logger.error(
        `Database error while finding player with ID ${id}`,
        e.stack,
      );
      return { ok: false, error: 'Database error' };
    }
  }

  async findAll(): Promise<PlayersResponse> {
    try {
      const players = await this.prisma.player.findMany();
      return { ok: true, data: players };
    } catch (e) {
      this.logger.error('Database error while fetching players', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }

  async create(entity: CreatePlayerDto): Promise<PlayerResponse> {
    try {
      const player = await this.prisma.player.create({
        data: {
          name: entity.name,
        },
      });

      return { ok: true, data: player };
    } catch (e) {
      this.logger.error('Error creating player', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }

  async update(id: number, entity: UpdatePlayerDto): Promise<PlayerResponse> {
    try {
      const player = await this.prisma.player.update({
        where: { id },
        data: {
          name: entity.name,
        },
      });

      return { ok: true, data: player };
    } catch (e) {
      this.logger.error('Error updating player', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }

  async delete(id: number): Promise<BaseResponse> {
    try {
      await this.prisma.player.delete({
        where: { id: id },
      });

      return { ok: true };
    } catch (e) {
      this.logger.error('Error deleting player', e.stack);
      return { ok: false, error: 'Database error' };
    }
  }
}
