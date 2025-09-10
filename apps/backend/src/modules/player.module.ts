import { Module } from '@nestjs/common';
import { PlayerService } from 'src/services/player.service';
import { PlayerController } from 'src/controllers/playerController';
import { PrismaService } from '../services/prisma.service';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService, PrismaService],
  exports: [PlayerService],
})
export class PlayerModule {}
