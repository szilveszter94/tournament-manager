"use client";

import { PhaseType, Tournament } from "@/generated/api";
import UpdateMatchForm from "./updateMatchForm";
import { useMemo, useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

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
        <div className="space-y-4 bg-secondary rounded-xl">
          {filteredPhases.map((phase) => (
            <div className="w-full overflow-x-auto" key={phase.id}>
              <div className="flex divide-x-1 divide-gray-primary gap-2">
                {phase.groups?.map((group) => (
                  <div key={group.id} className="p-4 flex flex-col w-full">
                    {/* Group Header */}
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg text-center">{`${group.name}`}</h3>
                      <h3 className="text-sm text-gray-primary mb-1">Rankings</h3>
                      <div className="space-y-1 max-h-50 overflow-y-auto">
                        <table className="w-full border-collapse bg-tertiary rounded-lg overflow-hidden text-sm">
                          <thead className="bg-on-secondary text-gray-primary">
                            <tr>
                              <th className="px-4 py-2 text-left w-10">#</th>
                              <th className="px-4 py-2 text-left">Player</th>
                              <th className="px-4 py-2 text-center">Wins</th>
                              <th className="px-4 py-2 text-center">Losses</th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.filteredParticipants?.map((p, index) => (
                              <tr className={clsx(index <= 1 ? "bg-primary" : "bg-tertiary")} key={p.id}>
                                <td className="px-4 py-2 text-gray-secondary text-right">{index + 1}.</td>
                                <td className="px-4 py-2 font-medium text-foreground">
                                  {p.participant?.name ?? "Unknown"}
                                </td>
                                <td className="px-4 py-2 text-gray-secondary text-center">{p.wins}</td>
                                <td className="px-4 py-2 text-gray-secondary text-center">{p.losses}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Matches Toggle */}
                    <div className="flex gap-2 justify-between items-center mb-2">
                      <h3 className="text-sm text-gray-400 mb-1">Matches</h3>
                      <button
                        onClick={() => toggleGroup(group.id)}
                        className="p-2 rounded-md hover:bg-primary transition">
                        <ChevronDownIcon
                          className={`w-5 h-5 transform transition-transform ${expandedGroups[group.id] ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    {/* Matches List */}
                    <Transition
                      as="div"
                      show={expandedGroups[group.id] ?? false}
                      enter="transition-all duration-500 ease-out"
                      enterFrom="opacity-0 max-h-0"
                      enterTo="opacity-100 max-h-screen"
                      leave="transition-all duration-300 ease-in"
                      leaveFrom="opacity-100 max-h-screen"
                      leaveTo="opacity-0 max-h-0">
                      <div className="space-y-1 max-h-60 overflow-y-auto">
                        {group.matches?.map((match) => (
                          <UpdateMatchForm key={match.id} match={match} tournamentId={tournamentId} />
                        ))}
                      </div>
                    </Transition>
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
