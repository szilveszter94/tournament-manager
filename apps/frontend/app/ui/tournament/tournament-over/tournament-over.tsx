import { useMemo } from "react";
import { Tournament } from "@/generated/api";
import { TrophyIcon } from "@heroicons/react/16/solid";

type TournamentOverProps = {
  tournament: Tournament;
};

export default function TournamentOver({ tournament }: TournamentOverProps) {
  const sortedWinners = useMemo(() => {
    if (!tournament?.winners) return [];
    return [...tournament.winners].sort((a, b) => a.place - b.place);
  }, [tournament?.winners]);

  if (!sortedWinners.length) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500">
        <p className="text-sm">No winners yet</p>
      </div>
    );
  }

  const placeIcons = {
    1: <TrophyIcon className="w-8 h-8 text-yellow-primary" />,
    2: <TrophyIcon className="w-7 h-7 text-gray-primary" />,
    3: <TrophyIcon className="w-6 h-6 text-amber-600" />,
  };
  const placeColors = {
    1: "bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-yellow-400/40",
    2: "bg-gradient-to-r from-gray-400/20 to-gray-600/20 border-gray-400/40",
    3: "bg-gradient-to-r from-amber-600/20 to-amber-800/20 border-amber-600/40",
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-foreground mb-6">🏆 Tournament Winners</h2>

      <div className="space-y-4">
        {sortedWinners.map((winner) => (
          <div
            key={winner.id}
            className={`flex items-center justify-between rounded-xl border p-4 shadow-sm hover:shadow-md transition-all ${placeColors[winner.place as 1 | 2 | 3] ?? "bg-card"}`}>
            <div className="flex items-center gap-3">
              {placeIcons[winner.place as 1 | 2 | 3]}
              <div>
                <h3 className="text-lg font-semibold text-foreground">{`#${winner.place} ${winner.participant?.name ?? "Unknown"}`}</h3>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">ELO</p>
              <p className="font-medium text-foreground">{winner.participant?.elo ?? "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
