import TournamentDetail from "@/app/ui/tournament/tournament-detail";
import {
  fetchTournamentById,
  fetchTournamentParticipantsByTournamentId,
} from "../../api";
import { notFound } from "next/navigation";
import TournamentParticipantsList from "@/app/ui/tournament/tournament-participants";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  const response = await fetchTournamentById(id);
  const participantsResponse =
    await fetchTournamentParticipantsByTournamentId(id);

  if (!response.data || !participantsResponse.data) {
    notFound();
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <div className="flex gap-3">
        <TournamentParticipantsList participants={participantsResponse.data} />
        <TournamentDetail tournament={response.data} />
      </div>
    </main>
  );
}
