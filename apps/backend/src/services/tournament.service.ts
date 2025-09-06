import { Injectable } from '@nestjs/common';

@Injectable()
export class TournamentService {
  private tournaments: string = '{"data": "Test data"}';

  findAll(): string {
    return this.tournaments;
  }
}
