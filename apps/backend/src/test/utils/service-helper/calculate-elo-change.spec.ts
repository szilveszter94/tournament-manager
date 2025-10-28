import { calculateEloChange } from '../../../utils/service.helper';

describe('calculateEloChange', () => {
  it.each([
    // [winnerElo, loserElo, expectedWinnerChangeApprox, expectedLoserChangeApprox]
    [1500, 1500, 16, 16],
    [1600, 1400, 8, 8],
    [1400, 1600, 25, 25],
    [2000, 1000, 1, 1],
    [1000, 2000, 32, 32],
  ])(
    'should calculate correct changes for winner=%i, loser=%i',
    (winnerElo, loserElo, expectedWinnerChange, expectedLoserChange) => {
      const result = calculateEloChange(winnerElo, loserElo);

      // both should be positive because of abs
      expect(result.winnerEloChange).toBeGreaterThan(0);
      expect(result.loserEloChange).toBeGreaterThan(0);

      // roughly close to expected
      expect(result.winnerEloChange).toBeCloseTo(expectedWinnerChange, 0);
      expect(result.loserEloChange).toBeCloseTo(expectedLoserChange, 0);
    },
  );

  it('should be symmetric when winner and loser swapped', () => {
    const a = calculateEloChange(1500, 1400);
    const b = calculateEloChange(1400, 1500);

    // stronger player gains less, weaker gains more
    expect(a.winnerEloChange).toBeLessThan(b.winnerEloChange);
  });

  it('should allow adjusting K-factor', () => {
    const base = calculateEloChange(1500, 1500, 32);
    const smallK = calculateEloChange(1500, 1500, 16);

    expect(smallK.winnerEloChange).toBeLessThan(base.winnerEloChange);
  });

  it('should handle extreme elo differences safely', () => {
    const high = calculateEloChange(3000, 1000);
    const low = calculateEloChange(1000, 3000);

    expect(high.winnerEloChange).toBeGreaterThanOrEqual(0);
    expect(low.winnerEloChange).toBeGreaterThanOrEqual(0);
  });
});
