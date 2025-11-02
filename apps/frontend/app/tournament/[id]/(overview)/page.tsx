import CreateGroupStages from "@/app/ui/tournament/create-group-stages/create-group-stages";
import { fetchTournamentById } from "../../api";
import { notFound } from "next/navigation";
import { TournamentStatus } from "@/generated/api";
import TournamentGroups from "@/app/ui/tournament/groupStages/tournament-groups";
import GroupStagesCreateNextPhase from "@/app/ui/tournament/groupStages/create-next-phase/group-stages-create-next-phase";
import DoubleEliminations from "@/app/ui/tournament/doubleEliminations/double-eliminations";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const tournamentId = Number(params.id);
  const response = await fetchTournamentById(tournamentId);
  const tournament = response.data;

  if (!tournament) {
    notFound();
  }

  switch (tournament.status) {
    case TournamentStatus.GROUP_STAGE:
      return <TournamentGroups tournament={tournament} />;

    case TournamentStatus.GROUP_STAGE_COMPLETED:
      return <GroupStagesCreateNextPhase tournament={tournament} />;

    case TournamentStatus.DOUBLE_ELIMINATION:
      return <DoubleEliminations tournament={tournament} />;

    default:
      return <CreateGroupStages tournament={tournament} />;
  }
}
