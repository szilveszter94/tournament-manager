import { Injectable } from '@nestjs/common';
import { TournamentRepository } from '../repository/tournament.repository';

@Injectable()
export class TournamentLoader {
  constructor(private readonly tournamentRepository: TournamentRepository) {}

  async loadGroupStages(id: number) {
    const detailedTournament =
      await this.tournamentRepository.findGroupStages(id);

    if (!detailedTournament?.phases.length) {
      return { ok: false, error: `Tournament ${id} has no group stage phase` };
    }

    return { ok: true, data: detailedTournament };
  }

  async loadTournamentOver(id: number) {
    const detailedTournament =
      await this.tournamentRepository.findTournamentOver(id);

    if (!detailedTournament?.winners.length) {
      return { ok: false, error: `Tournament ${id} has no winners` };
    }

    return { ok: true, data: detailedTournament };
  }

  async loadDoubleEliminations(id: number) {
    const detailedTournament =
      await this.tournamentRepository.findWithDoubleEliminations(id);
    if (!detailedTournament) {
      return { ok: false, error: `Tournament ${id} not found` };
    }
    return { ok: true, data: detailedTournament };
  }

  async loadDefault(id: number) {
    const basic = await this.tournamentRepository.findWithParticipants(id);
    if (!basic) {
      return { ok: false, error: `Tournament ${id} not found` };
    }
    return { ok: true, data: basic };
  }
}
