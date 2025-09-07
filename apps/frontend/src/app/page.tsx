import { fetchTournaments } from "./lib/api";
import { Tournament } from "@/interfaces/tournament.entity";
import { ServiceResponse } from "./lib/interfaces/service-response";

export default async function Home() {
  const tournaments: ServiceResponse<Tournament[]> = await fetchTournaments();

  if (!tournaments.data){
    return;
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tournaments</h1>
      <ul className="list-disc pl-5">
        {tournaments.data.map((t) => (
          <li key={t.id}>
            {t.name} - {t.tournamentStat} - {new Date(t.createdAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </main>
  );
}
