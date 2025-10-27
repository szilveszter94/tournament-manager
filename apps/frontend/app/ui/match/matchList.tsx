"use client";

import { PhaseType, Tournament } from "@/generated/api";
import UpdateMatchForm from "./updateMatchForm";
import { useMemo, useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

type MatchListProps = {
  tournament: Tournament;
  tournamentId: number;
};

export default function MatchList({ tournament, tournamentId }: MatchListProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<number, boolean>>({});
  const filteredPhases = useMemo(() => {
    if (!tournament) return [];

    return (
      tournament.phases
        ?.filter((p) => p.phaseType === PhaseType.GROUP_STAGE)
        ?.map((phase) => {
          const groups = phase.groups
            ?.sort((a, b) => a.groupNumber - b.groupNumber)
            ?.map((group) => {
              const groupParticipantIds = new Set(group.participantGroups?.map((g) => g.participant?.id));

              const filteredParticipants = tournament.participants
                ?.filter((p) => groupParticipantIds.has(p.participant?.id))
                ?.sort((a, b) => b.wins - a.wins);

              const matches = phase.matches
                ?.filter((m) => m.tournamentGroupId === group.id)
                ?.sort((a, b) => {
                  if (a.isOver !== b.isOver) return a.isOver ? 1 : -1;
                  if (a.serialNumber === null && b.serialNumber === null) return 0;
                  if (a.serialNumber === null) return 1;
                  if (b.serialNumber === null) return -1;
                  return a.serialNumber - b.serialNumber;
                });

              return {
                ...group,
                filteredParticipants,
                matches,
              };
            });

          return { ...phase, groups };
        }) ?? []
    );
  }, [tournament]);

  const toggleGroup = (groupId: number) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  return (
    <div className="overflow-x-auto">
      {tournament && (
        <div className="space-y-8">
          {filteredPhases.map((phase) => (
            <div key={phase.id}>
              <h2 className="text-xl font-bold mb-4">Group Stage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phase.groups?.map((group) => (
                  <div key={group.id} className="p-4">
                    <div className="mb-5">
                      <h3 className="font-semibold text-lg mb-3">{`${group.name}`}</h3>
                      <h3 className="text-sm text-gray-primary mb-1 mx-2">Rankings</h3>
                      <div className="space-y-1 h-50 overflow-y-auto">
                        {group.filteredParticipants?.map((p, index) => (
                          <div
                            key={p.id}
                            className="flex justify-between bg-tertiary px-3 mx-2 py-1 rounded-md hover:bg-on-tertiary transition">
                            <div className="flex gap-2">
                              <span className="text-sm text-gray-primary w-5 text-right">#{index + 1}.</span>
                              <span className="text-sm text-foreground text-right">
                                {p.participant?.name ?? "Unknown"}
                              </span>
                            </div>
                            <span className="text-gray-primary text-sm">
                              {p?.wins}W / {p?.losses}L
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2 justify-between mb-2">
                        <h3 className="text-sm text-gray-400 mb-1 mt-2 mx-2">Matches</h3>
                        <button
                          onClick={() => toggleGroup(group.id)}
                          className="p-2 rounded-md hover:bg-primary transition">
                          <ChevronDownIcon
                            className={`w-5 h-5 transform transition-transform ${expandedGroups[group.id] ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                      <Transition
                        as="div"
                        show={expandedGroups[group.id] ?? false}
                        enter="transition-all duration-500 ease-out"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-screen"
                        leave="transition-all duration-300 ease-in"
                        leaveFrom="opacity-100 max-h-screen"
                        leaveTo="opacity-0 max-h-0">
                        <div className="space-y-1 h-60 overflow-y-auto">
                          {group.matches?.map((match) => (
                            <UpdateMatchForm key={match.id} match={match} tournamentId={tournamentId} />
                          ))}
                        </div>
                      </Transition>
                    </div>
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
