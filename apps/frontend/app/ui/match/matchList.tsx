import { PhaseType, Tournament } from "@/generated/api";
import UpdateMatchForm from "./updateMatchForm";

type MatchListProps = {
  tournament: Tournament;
  tournamentId: number;
};

export default function MatchList({ tournament, tournamentId }: MatchListProps) {
  return (
    <div className="overflow-x-auto">
      {tournament && (
        <div className="space-y-8">
          {tournament.phases
            ?.filter((p) => p.phaseType === PhaseType.GROUP_STAGE)
            ?.map((phase) => (
              <div key={phase.id}>
                <h2 className="text-xl font-bold mb-4">Group Stage</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {phase.groups
                    ?.sort((a, b) => a.groupNumber - b.groupNumber)
                    ?.map((group) => (
                      <div
                        key={group.id}
                        className="bg-secondary rounded-xl p-4 shadow border border-secondary-border-color">
                        <h3 className="font-semibold text-lg mb-3">{`${group.name}`}</h3>
                        {phase.matches
                          ?.filter((m) => m.tournamentGroupId === group.id)
                          ?.sort((a, b) => {
                            if (a.isOver !== b.isOver) return a.isOver ? 1 : -1;
                            if (a.serialNumber === null && b.serialNumber === null) return 0;
                            if (a.serialNumber === null) return 1;
                            if (b.serialNumber === null) return -1;

                            return a.serialNumber - b.serialNumber;
                          })
                          ?.map((match) => (
                            <div key={match.id}>
                              <h3 className="font-semibold text-lg mb-3">{`Match ${match.serialNumber}`}</h3>
                              <div className="space-y-2">
                                <div className="flex gap-2 items-center border text-foreground rounded-md p-4">
                                  <UpdateMatchForm match={match} tournamentId={tournamentId} />
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
