import { handleEloChange } from '../../../utils/service.helper';
import { Match } from '../../../../generated/models/match.entity';
import { Participant } from '../../../../generated/models/participant.entity';

describe('handleEloChange', () => {
  const winner: Participant = {
    id: 1,
    elo: 1500,
    wins: 0,
    losses: 0,
  } as Participant;
  const loser: Participant = {
    id: 2,
    elo: 1500,
    wins: 0,
    losses: 0,
  } as Participant;

  it('should calculate normal (forward) Elo change', () => {
    const match: Match = {
      winnerElo: 0,
      loserElo: 0,
      eloWon: 0,
      eloLost: 0,
    } as Match;

    const result = handleEloChange(winner, loser, match, false);

    expect(result.winnerEloChange).toBeGreaterThan(0);
    expect(result.loserEloChange).toBeGreaterThan(0);
    expect(result.eloWon).toBe(result.winnerEloChange);
    expect(result.eloLost).toBe(result.loserEloChange);
  });

  it('should calculate reverse Elo change correctly', () => {
    const eloChange = 8;
    const match: Match = {
      winnerElo: 1500,
      loserElo: 1500,
      eloWon: eloChange,
      eloLost: eloChange,
    } as Match;

    const result = handleEloChange(winner, loser, match, true);

    // Both deltas should still be positive (absolute values)
    expect(result.winnerEloChange).toBeGreaterThan(0);
    expect(result.loserEloChange).toBeGreaterThan(0);

    // But the reverse should represent a *larger adjustment*
    const diff = 16;
    expect(result.winnerEloChange).toBeLessThanOrEqual(diff + eloChange);
    expect(result.loserEloChange).toBeLessThanOrEqual(diff + eloChange);
  });

  it('should handle missing elo values safely', () => {
    const match: Match = {} as Match;

    const result = handleEloChange(winner, loser, match, false);

    expect(result.winnerEloChange).toBeGreaterThanOrEqual(0);
    expect(result.loserEloChange).toBeGreaterThanOrEqual(0);
  });

  it('should return participants to original Elo after reverse', () => {
    const originalWinner = { ...winner };
    const originalLoser = { ...loser };

    // Step 1️⃣: Calculate forward change
    const matchForward: Match = {
      winnerElo: originalWinner.elo,
      loserElo: originalLoser.elo,
      eloWon: 0,
      eloLost: 0,
    } as Match;

    const forward = handleEloChange(
      originalWinner,
      originalLoser,
      matchForward,
      false,
    );

    // Apply the forward change
    const updatedWinnerElo = originalWinner.elo + forward.winnerEloChange;
    const updatedLoserElo = originalLoser.elo - forward.loserEloChange;

    // Step 2️⃣: Reverse the match result
    const matchReverse: Match = {
      winnerElo: matchForward.winnerElo,
      loserElo: matchForward.loserElo,
      eloWon: forward.eloWon,
      eloLost: forward.eloLost,
    } as Match;

    const reverse = handleEloChange(
      { ...originalLoser, elo: updatedLoserElo },
      { ...originalWinner, elo: updatedWinnerElo },
      matchReverse,
      true,
    );

    // Apply the reverse change
    const revertedWinnerElo = updatedWinnerElo - reverse.winnerEloChange;
    const revertedLoserElo = updatedLoserElo + reverse.loserEloChange;

    // Step 3️⃣: Expect reverted ELOs to match originals
    expect(revertedWinnerElo).toBeCloseTo(updatedLoserElo, 0);
    expect(revertedLoserElo).toBeCloseTo(updatedWinnerElo, 0);
  });
});
