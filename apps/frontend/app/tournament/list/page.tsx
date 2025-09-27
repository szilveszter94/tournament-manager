"use client";

import { useEffect, useState } from "react";
import { Tournament } from "../../../../generated/services/api";
import { fetchTournaments } from "../../../../app/lib/api";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [tournamentList, setTournamentList] = useState<Tournament[]>([]);

  useEffect(() => {
    async function getTournaments() {
      const response = await fetchTournaments();
      if (response.data) {
        setTournamentList(response.data);
      }
      setLoading(false);
    }
    getTournaments();
  }, []);

  if (loading) {
    return;
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <div>
        <ul>
          {tournamentList.map((t) => (
            <li key={t.id}>Tournament: {t.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
