import TournamentDetail from "@/app/ui/tournament/tournament-detail";
import { fetchTournamentById } from "../../api";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetchTournamentById(id);

  if (!response.data) {
    notFound();
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <TournamentDetail tournament={response.data} />
    </main>
  );
}
