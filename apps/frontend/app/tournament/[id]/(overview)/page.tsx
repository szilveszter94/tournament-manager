import TournamentDetail from "@/app/ui/tournament/tournament-detail";
import {
  fetchTournamentById,
  fetchTournamentParticipantsByTournamentId,
} from "../../api";
import { notFound } from "next/navigation";

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
      <TournamentDetail tournament={response.data} participants={participantsResponse.data} />
    </main>
  );
}
