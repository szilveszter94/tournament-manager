import { fetchGroupStagesById } from "@/app/tournament/api";
import { PhaseType } from "@/generated/api";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params.id);
  const response = await fetchGroupStagesById(id);

  if (!response.data) {
    notFound();
  }

  return (
    <main className="p-8 mx-auto">
      {response.data && (
        <div className="space-y-8">
          {response.data.phases
            ?.filter((p) => p.phaseType === PhaseType.GROUP_STAGE)
            ?.map((phase) => (
              <div key={phase.id}>
                <h2 className="text-xl font-bold mb-4">Group Stage</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {phase.groups?.map((group) => (
                    <div
                      key={group.id}
                      className="bg-secondary rounded-xl p-4 shadow border border-secondary-border-color">
                      <h3 className="font-semibold text-lg mb-3">{`Group ${group.id} matches`}</h3>
                      {phase.matches
                        ?.filter((m) => m.tournamentGroupId === group.id)
                        ?.map((match, index) => (
                          <div key={match.id}>
                            <h3 className="font-semibold text-lg mb-3">{`Match ${index + 1}`}</h3>
                            <ul className="space-y-2">
                              <li className="bg-primary text-primary-foreground rounded-md p-2">
                                {match.participant1?.name ?? "Unknown Participant"} vs{" "}
                                {match.participant2?.name ?? "Unknown Participant"}
                              </li>
                            </ul>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </main>
  );
}
