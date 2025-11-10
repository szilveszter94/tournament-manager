"use client";

import { ParticipantGroup, PhaseType, Tournament } from "@/generated/api";
import { useMemo } from "react";
import clsx from "clsx";
import { getGroupPhase } from "@/app/tournament/helper";
import { ArrowRightStartOnRectangleIcon, TrashIcon } from "@heroicons/react/16/solid";
import CustomButton from "@/app/ui/components/custom-button/custom-button";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  selectDoubleEliminationParticipantIds,
  selectDoubleEliminationParticipants,
} from "@/app/store/features/doubleEliminationParticipants/doubleEliminationParticipantsSelector";
import {
  addParticipantToDoubleEliminations,
  removeParticipantFromDoubleEliminationsById,
} from "@/app/store/features/doubleEliminationParticipants/doubleEliminationParticipantsSlice";
import CreateDoubleEliminationsForm from "./create-double-eliminations-form";

type GroupStagesCreateNextPhaseProps = {
  tournament: Tournament;
};

export default function GroupStagesCreateNextPhase({ tournament }: GroupStagesCreateNextPhaseProps) {
  const dispatch = useAppDispatch();
  const participants = useAppSelector(selectDoubleEliminationParticipants(tournament.id));
  const participantIds = useAppSelector(selectDoubleEliminationParticipantIds(tournament.id));
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

        return {
          ...group,
          participantGroups,
        };
      });

    return {
      ...phase,
      groups,
    };
  }, [tournament]);

  const onAddParticipantToEliminations = (p: ParticipantGroup) => {
    dispatch(addParticipantToDoubleEliminations({ tournamentId: tournament.id, participant: p }));
  };

  const onRemoveParticipantFromEliminations = (id: number) => {
    dispatch(removeParticipantFromDoubleEliminationsById({ tournamentId: tournament.id, participantId: id }));
  };

  return (
    <main className="flex h-screen p-4 mx-auto gap-4">
      {/* Groups Section (60%) */}
      <div className="flex-[0.6] overflow-y-auto bg-secondary rounded-xl p-4">
        {tournament && (
          <div className="flex flex-col gap-4">
            {tournamentPhase &&
              tournamentPhase.groups?.map((group) => (
                <div key={group.id} className="bg-tertiary rounded-lg p-4 shadow-sm">
                  {/* Group Header */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg text-center">{group.name}</h3>
                    <h3 className="text-sm text-gray-primary mb-1">Rankings</h3>
                    <div className="max-h-60 overflow-y-auto">
                      <table className="w-full border-collapse bg-secondary rounded-lg text-sm">
                        <thead className="bg-on-secondary text-gray-primary sticky top-0">
                          <tr>
                            <th className="px-4 py-2 text-left w-10">#</th>
                            <th className="px-4 py-2 text-left">Player</th>
                            <th className="px-4 py-2 text-center">Wins</th>
                            <th className="px-4 py-2 text-center">Losses</th>
                            <th className="px-4 py-2 text-center">Elo</th>
                            <th className="px-4 py-2 text-center">Add</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.participantGroups?.map((p, index) => (
                            <tr
                              key={p.id}
                              className={clsx(
                                participantIds.includes(p.id)
                                  ? "bg-disabled-dark"
                                  : index <= 1
                                    ? "bg-primary"
                                    : "bg-tertiary",
                                "border-b border-gray-700"
                              )}>
                              <td className="px-4 py-2 text-gray-secondary text-right">{index + 1}.</td>
                              <td className="px-4 py-2 font-medium text-foreground">
                                {p.participant?.name ?? "Unknown"}
                              </td>
                              <td className="px-4 py-2 text-gray-secondary text-center">{p.wins}</td>
                              <td className="px-4 py-2 text-gray-secondary text-center">{p.losses}</td>
                              <td className="px-4 py-2 text-gray-secondary text-center">{p.participant?.elo}</td>
                              <td className="px-4 py-2 text-gray-secondary flex justify-center items-center">
                                <div>
                                  <CustomButton
                                    disabled={participantIds.includes(p.id)}
                                    onClick={() => onAddParticipantToEliminations(p)}
                                    variant="secondary"
                                    size="sm"
                                    icon={<ArrowRightStartOnRectangleIcon />}></CustomButton>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Right Container (40%) */}
      <div className="flex-[0.4] text-center bg-tertiary rounded-xl p-4 overflow-y-auto">
        <div className="relative flex items-center mb-5 mx-2">
          <h3 className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg">Double Eliminations</h3>
          <div className="ml-auto">
            <CreateDoubleEliminationsForm data={participants} tournamentId={tournament.id} />
          </div>
        </div>
        <table className="w-full border-collapse bg-secondary rounded-lg text-sm">
          <thead className="bg-on-secondary text-gray-primary sticky top-0">
            <tr>
              <th className="px-4 py-2 text-left w-10">#</th>
              <th className="px-4 py-2 text-left">Player</th>
              <th className="px-4 py-2 text-center">Wins</th>
              <th className="px-4 py-2 text-center">Losses</th>
              <th className="px-4 py-2 text-center">Elo</th>
              <th className="px-4 py-2 text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p, index) => (
              <tr key={p.id} className="bg-primary border-b border-gray-700">
                <td className="px-4 py-2 text-gray-secondary text-right">{index + 1}.</td>
                <td className="px-4 py-2 font-medium text-foreground">{p.participant?.name ?? "Unknown"}</td>
                <td className="px-4 py-2 text-gray-secondary text-center">{p.wins}</td>
                <td className="px-4 py-2 text-gray-secondary text-center">{p.losses}</td>
                <td className="px-4 py-2 text-gray-secondary text-center">{p.participant?.elo}</td>
                <td className="px-4 py-2 text-gray-secondary flex justify-center items-center">
                  <TrashIcon
                    onClick={() => onRemoveParticipantFromEliminations(p.id)}
                    title="Delete Tournament"
                    className="cursor-pointer w-5 h-5 text-red-primary hover:text-red-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
