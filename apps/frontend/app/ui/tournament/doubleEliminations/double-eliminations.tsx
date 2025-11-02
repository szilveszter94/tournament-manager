"use client";

import { getGroupPhase } from "@/app/tournament/helper";
import { PhaseType, Tournament } from "@/generated/api";
import { useMemo } from "react";

type DoubleEliminationsProps = {
  tournament: Tournament;
};

export default function DoubleEliminations({ tournament }: DoubleEliminationsProps) {
  const tournamentPhase = useMemo(() => {
    if (!tournament) return null;

    const phase = getGroupPhase(tournament, PhaseType.DOUBLE_ELIMINATION);
    if (!phase || !phase.doubleElimination) return null;
    return phase;
  }, [tournament]);

  return (
    <main className="flex h-screen p-4 mx-auto gap-4">
      {tournamentPhase?.doubleElimination && (
        <div>
          {tournamentPhase.doubleElimination.matches?.map((m) => (
            <div key={m.id}>
              <h3>{m.participant1?.name ?? "Unknown"}</h3>
              vs <span>{m.participant2?.name ?? "Unknown"}</span>
            </div>
          ))}
        </div>
      )}
      <div className="bg-secondary rounded-xl p-4">
        <p>Double eliminations</p>
        {tournament && <p>{tournament.name}</p>}
      </div>
    </main>
  );
}
