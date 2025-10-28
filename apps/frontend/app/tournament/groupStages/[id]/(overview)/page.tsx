import { fetchTournamentById } from "@/app/tournament/api";
import MatchList from "@/app/ui/tournament/groupStages/tournamentGroups";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const tournamentId = Number(params.id);
  const response = await fetchTournamentById(tournamentId);

  if (!response.data) {
    notFound();
  }

  return (
    <main className="p-8 mx-auto">
      <MatchList tournament={response.data} tournamentId={tournamentId} />
    </main>
  );
}
