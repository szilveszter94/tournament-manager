"use client";

import { PhaseType, Tournament } from "@/generated/api";
import UpdateMatchForm from "./update-match-form";
import { useMemo, useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { getGroupPhase } from "@/app/tournament/helper";
import CompleteGroupStageForm from "./complete-group-stage-form";

type TournamentGroupsProps = {
  tournament: Tournament;
};

export default function TournamentGroups({ tournament }: TournamentGroupsProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<number, boolean>>({});
  const tournamentPhase = useMemo(() => {
    if (!tournament) return null;

    const phase = getGroupPhase(tournament, PhaseType.GROUP_STAGE);
    if (!phase) return null;

    const groups = phase?.groups
      ?.sort((a, b) => a.groupNumber - b.groupNumber)
      ?.map((group) => {
        const participantGroups = group.participantGroups
          ?.sort((a, b) => {
            if (b.wins !== a.wins) {
              return b.wins - a.wins;
            } else {
              return a.losses - b.losses;
            }
          });

        const matches = group.matches
          ?.sort((a, b) => {
            if (a.isOver !== b.isOver) return a.isOver ? 1 : -1;
            if (a.serialNumber === null && b.serialNumber === null) return 0;
            if (a.serialNumber === null) return 1;
            if (b.serialNumber === null) return -1;
            return a.serialNumber - b.serialNumber;
          });
        return {
          ...group,
          participantGroups,
          matches,
        };
      });

    const sortedMatches = phase.matches
      ?.filter((m) => !m.isOver)
      ?.sort((a, b) => {
        const serialA = a.serialNumber ?? Infinity;
        const serialB = b.serialNumber ?? Infinity;

        if (serialA !== serialB) return serialA - serialB;

        const groupA = a.tournamentGroupId ?? Infinity;
        const groupB = b.tournamentGroupId ?? Infinity;

        return groupA - groupB;
      });

    const firstMatch = sortedMatches?.[0] ?? null;
    const firstMatchGroup = firstMatch ? phase?.groups?.find((g) => g.id === firstMatch.tournamentGroupId) : null;
    const secondMatch = sortedMatches?.[1] ?? null;
    const secondMatchGroup = secondMatch ? phase?.groups?.find((g) => g.id === secondMatch.tournamentGroupId) : null;

    return {
      ...phase,
      groups,
      firstMatch: firstMatch,
      secondMatch: secondMatch,
      firstMatchGroup: firstMatchGroup,
      secondMatchGroup: secondMatchGroup,
    };
  }, [tournament]);

  const toggleGroup = (groupId: number) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };
  
  return (
    <main className="p-4 mx-auto">
      <div className="overflow-x-auto">
        {tournament && (
          <div className="space-y-4">
            <div className="w-full overflow-x-auto bg-secondary rounded-xl">
              <div className="flex divide-x-1 divide-gray-primary gap-2">
                {tournamentPhase &&
                  tournamentPhase.groups?.map((group) => (
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
                                <th className="px-4 py-2 text-center">Elo</th>
                              </tr>
                            </thead>
                            <tbody>
                              {group.participantGroups?.map((p, index) => (
                                <tr className={clsx(index <= 1 ? "bg-primary" : "bg-tertiary")} key={p.id}>
                                  <td className="px-4 py-2 text-gray-secondary text-right">{index + 1}.</td>
                                  <td className="px-4 py-2 font-medium text-foreground">
                                    {p.participant?.name ?? "Unknown"}
                                  </td>
                                  <td className="px-4 py-2 text-gray-secondary text-center">{p.wins}</td>
                                  <td className="px-4 py-2 text-gray-secondary text-center">{p.losses}</td>
                                  <td className="px-4 py-2 text-gray-secondary text-center">{p.participant?.elo}</td>
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
                            <UpdateMatchForm
                              key={match.id}
                              match={match}
                              groupName={group.name}
                              tournamentId={tournament.id}
                            />
                          ))}
                        </div>
                      </Transition>
                    </div>
                  ))}
              </div>
            </div>
            {tournamentPhase && (tournamentPhase.firstMatch || tournamentPhase.secondMatch) ? (
              <div className="mx-auto mt-4 flex flex-col gap-4 justify-between items-center rounded-xl max-w-160 overflow-x-auto bg-secondary p-5">
                <h4>Next matches</h4>
                <div className="flex flex-col gap-2 justify-center">
                  {tournamentPhase.firstMatch && (
                    <div className="flex gap-5 items-center justify-between flex-wrap">
                      <h3 className="flex-shrink-0 text-left">
                        {tournamentPhase.firstMatchGroup?.name ??
                          `Group ${tournamentPhase.firstMatch.tournamentGroupId}`}
                      </h3>
                      <div className="flex-1">
                        <UpdateMatchForm
                          match={tournamentPhase.firstMatch}
                          groupName={tournamentPhase.firstMatchGroup?.name}
                          tournamentId={tournament.id}
                        />
                      </div>
                    </div>
                  )}
                  {tournamentPhase.secondMatch && (
                    <div className="flex gap-5 items-center justify-between flex-wrap">
                      <h3 className="flex-shrink-0 text-left">
                        {tournamentPhase.secondMatchGroup?.name ??
                          `Group ${tournamentPhase.secondMatch.tournamentGroupId}`}
                      </h3>
                      <div className="flex-1">
                        <UpdateMatchForm
                          match={tournamentPhase.secondMatch}
                          groupName={tournamentPhase.secondMatchGroup?.name}
                          tournamentId={tournament.id}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="mt-5 flex justify-center">
                <CompleteGroupStageForm phaseId={tournamentPhase?.id} tournamentId={tournament.id} />
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
