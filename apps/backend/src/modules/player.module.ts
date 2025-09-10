import { Module } from '@nestjs/common';
import { PlayerService } from '../services/player.service';
import { PlayerController } from '../controllers/playerController';
import { PrismaService } from '../services/prisma.service';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService, PrismaService],
  exports: [PlayerService],
})
export class PlayerModule {}
