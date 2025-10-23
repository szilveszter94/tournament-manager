import TournamentDetail from "@/app/ui/tournament/tournament-detail";
import { fetchTournamentById } from "../../api";
import { notFound } from "next/navigation";
import { PhaseType, TournamentStatus } from "@/generated/api";
import MatchList from "@/app/ui/match/matchList";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const tournamentId = Number(params.id);
  const response = await fetchTournamentById(tournamentId);

  if (!response.data) {
    notFound();
  }

  if (response.data.status === TournamentStatus.STARTED && response.data.phase === PhaseType.GROUP_STAGE) {
    return (
      <main className="p-8 mx-auto">
        <MatchList response={response} tournamentId={tournamentId} />
      </main>
    );
  }

  return (
    <main className="p-8 mx-auto">
      <TournamentDetail tournament={response.data} />
    </main>
  );
}
