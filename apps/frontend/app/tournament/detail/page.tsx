"use client";

import { useEffect, useState } from "react";
import { Tournament } from "../../../../generated/services/api";
import { fetchTournamentById } from "../../../../app/lib/api";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [tournament, setTournament] = useState<Tournament | null>(null);

  useEffect(() => {
    async function getTournaments() {
      const response = await fetchTournamentById(1);
      if (response.data) {
        setTournament(response.data);
      }
      setLoading(false);
    }
    getTournaments();
  }, []);

  if (loading || !tournament) {
    return;
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <div>
        <p>{tournament.name}</p>
        <ul>
          {tournament.phases?.map((p) => (
            <li key={p.id}>{p.phaseType}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
