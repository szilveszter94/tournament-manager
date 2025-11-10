"use client";

import { getGroupPhase } from "@/app/tournament/helper";
import { DoubleEliminationBracket, PhaseType, Tournament } from "@/generated/api";
import { useMemo, useState } from "react";
import UpdateMatchForm from "./update-match-form";
import CreateNextRoundForm from "./create-next-round-form";
import { DoubleEliminationGroupComponent } from "./double-elimination-group.component";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import FinalizeDoubleEliminations from "./finalize-double-eliminations";

type DoubleEliminationsProps = {
  tournament: Tournament;
};

export default function DoubleEliminations({ tournament }: DoubleEliminationsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [
    tournamentPhase,
    sortedMatches,
    firstMatch,
    secondMatch,
    winnersBracket,
    losersBracket,
    eliminationsBracket,
    isDoubleEliminationsOver,
  ] = useMemo(() => {
    if (!tournament) return [null, []];

    const phase = getGroupPhase(tournament, PhaseType.DOUBLE_ELIMINATION);
    if (!phase || !phase.doubleElimination) return [null, []];

    const sortedMatches = [...(phase.matches ?? [])].sort((a, b) => {
      if (a.isOver !== b.isOver) return a.isOver ? 1 : -1;
      const aSerial = a.serialNumber ?? 0;
      const bSerial = b.serialNumber ?? 0;
      return aSerial - bSerial;
    });

    const winnersBracket = phase.doubleElimination?.participantDoubleEliminations?.filter(
      (m) => m.doubleEliminationBracket === DoubleEliminationBracket.WINNER
    );
    const losersBracket = phase.doubleElimination?.participantDoubleEliminations?.filter(
      (m) => m.doubleEliminationBracket === DoubleEliminationBracket.LOSER
    );
    const eliminationsBracket = phase.doubleElimination?.participantDoubleEliminations?.filter(
      (m) => m.doubleEliminationBracket === DoubleEliminationBracket.ELIMINATED
    );

    const filteredMatches = sortedMatches.filter((m) => !m.isOver);
    const firstMatch = filteredMatches?.[0] ?? null;
    const secondMatch = filteredMatches?.[1] ?? null;
    const isDoubleEliminationsOver = (winnersBracket?.length ?? 0) + (losersBracket?.length ?? 0) <= 1;

    return [
      phase,
      sortedMatches,
      firstMatch,
      secondMatch,
      winnersBracket,
      losersBracket,
      eliminationsBracket,
      isDoubleEliminationsOver,
    ];
  }, [tournament]);

  if (!tournamentPhase?.doubleElimination) return null;

  return (
    <main className="p-4 gap-4">
      <div className="bg-secondary rounded-xl p-4">
        <h1 className="mb-5 text-2xl">Double eliminations | Round {tournamentPhase?.doubleElimination?.roundNumber}</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {/* Winners */}
          <div>
            <h2 className="mb-2 text-xl font-semibold text-green-primary">🏆 Winners</h2>
            <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2">
              {winnersBracket?.map((m) => (
                <DoubleEliminationGroupComponent
                  key={m.id}
                  name={m.participant?.name}
                  wins={m.wins}
                  losses={m.losses}
                  elo={m.participant?.elo}
                  color="green"
                />
              ))}
            </div>
          </div>

          {/* Losers */}
          <div>
            <h2 className="mb-2 text-xl font-semibold text-yellow-primary">⚔️ Losers</h2>
            <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2">
              {losersBracket?.map((m) => (
                <DoubleEliminationGroupComponent
                  key={m.id}
                  name={m.participant?.name}
                  wins={m.wins}
                  losses={m.losses}
                  elo={m.participant?.elo}
                  color="yellow"
                />
              ))}
            </div>
          </div>

          {/* Eliminated */}
          <div>
            <h2 className="mb-2 text-xl font-semibold text-red-primary">💀 Eliminated</h2>
            <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2">
              {eliminationsBracket?.map((m) => (
                <DoubleEliminationGroupComponent
                  key={m.id}
                  name={m.participant?.name}
                  wins={m.wins}
                  losses={m.losses}
                  elo={m.participant?.elo}
                  color="red"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5">
          {firstMatch || secondMatch ? (
            <div className="mx-auto mt-4 text-center">
              <h4 className="mb-2">Next matches</h4>
              <div className="flex flex-col gap-2 justify-center">
                {firstMatch && (
                  <UpdateMatchForm
                    disabled={firstMatch.doubleEliminationRound !== tournamentPhase.doubleElimination?.roundNumber}
                    tournamentId={tournament.id}
                    match={firstMatch}
                    groupName={tournamentPhase.doubleElimination?.roundNumber?.toString()}
                  />
                )}
                {secondMatch && (
                  <UpdateMatchForm
                    disabled={firstMatch.doubleEliminationRound !== tournamentPhase.doubleElimination?.roundNumber}
                    tournamentId={tournament.id}
                    match={secondMatch}
                    groupName={tournamentPhase.doubleElimination?.roundNumber?.toString()}
                  />
                )}
              </div>
            </div>
          ) : isDoubleEliminationsOver ? (
            <div className="mt-5 flex justify-center">
              <FinalizeDoubleEliminations tournamentId={tournament.id} />
            </div>
          ) : (
            <div className="mt-5 flex justify-center">
              <CreateNextRoundForm tournamentId={tournament.id} />
            </div>
          )}
        </div>
        <div className="mt-6 p-4 border rounded-xl bg-card shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              🧩 Double Elimination Matches
            </h2>
            <button className="p-1 rounded-full hover:bg-gray-200/20 transition">
              {isOpen ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>

          {/* Collapsible content */}
          {isOpen && (
            <div className="mt-4 max-h-[250px] overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-primary/30 hover:scrollbar-thumb-primary/50 transition-all duration-300">
              {sortedMatches.map((m) => (
                <UpdateMatchForm
                  key={m.id}
                  disabled={m.doubleEliminationRound !== tournamentPhase.doubleElimination?.roundNumber}
                  tournamentId={tournament.id}
                  match={m}
                  groupName={tournamentPhase.doubleElimination?.roundNumber?.toString()}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
