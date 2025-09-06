import { fetchTournaments } from "./lib/api";
import { Tournament } from "@/interfaces/tournament.entity";

export default async function Home() {
  const tournaments: Tournament[] = await fetchTournaments();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tournaments</h1>
      <ul className="list-disc pl-5">
        {tournaments.map((t) => (
          <li key={t.id}>
            {t.name} - {t.tournamentStat} - {new Date(t.createdAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </main>
  );
}
