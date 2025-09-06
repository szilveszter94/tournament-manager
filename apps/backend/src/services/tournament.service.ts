import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Tournament } from 'generated/interfaces/tournament.entity';

@Injectable()
export class TournamentService {
  constructor(private readonly prisma: PrismaService) {}

  async find(id: number): Promise<Tournament | null> {
    return await this.prisma.tournament.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<Tournament[] | null> {
    return await this.prisma.tournament.findMany();
  }
}
