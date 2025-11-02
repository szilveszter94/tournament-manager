"use client";

import { Tournament } from "@/generated/api";

type DoubleEliminationsProps = {
  tournament: Tournament;
};

export default function DoubleEliminations({ tournament }: DoubleEliminationsProps) {
  return (
    <main className="flex h-screen p-4 mx-auto gap-4">
      {/* Groups Section (60%) */}
      <div className="flex-[0.6] overflow-y-auto bg-secondary rounded-xl p-4">
        <p>Double eliminations</p>
        {tournament && <p>{tournament.name}</p>}
      </div>
    </main>
  );
}
