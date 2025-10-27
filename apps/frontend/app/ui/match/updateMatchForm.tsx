"use client";

import { initialState } from "@/lib/custom-models/common";
import { useActionState, useRef, useState } from "react";
import { updateGroupStageMatch } from "@/app/tournament/actions";
import { Match } from "@/generated/api";
import Modal from "../components/modal/modal";
import CustomButton from "../components/custom-button/custom-button";
import clsx from "clsx";

type Props = {
  match: Match;
  tournamentId: number;
};

export default function UpdateMatchForm({ tournamentId, match }: Props) {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const updateMatch = updateGroupStageMatch.bind(null, match.id, tournamentId);
  const [state, formAction] = useActionState(updateMatch, initialState);

  const handleSubmit = (winnerId: number | null, loserId: number | null) => {
    if (!formRef.current) return;

    // Set hidden input values right before submit
    const winnerInput = formRef.current.querySelector<HTMLInputElement>('input[name="winnerId"]');
    const loserInput = formRef.current.querySelector<HTMLInputElement>('input[name="loserId"]');

    if (winnerInput && loserInput) {
      winnerInput.value = winnerId?.toString() ?? "";
      loserInput.value = loserId?.toString() ?? "";
    }

    // Submit with correct data
    formRef.current.requestSubmit();
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-between gap-3 bg-tertiary px-4 mx-2 rounded-lg">
      {/* Match Info */}
      <div className="flex justify-start items-center gap-2 flex-1">
        <span className="text-sm text-gray-primary w-5 text-right">#{match.serialNumber}.</span>

        <div className="flex-1 flex justify-start items-center text-sm font-medium px-3 py-2 rounded-md">
          <span
            className={clsx(
              "truncate max-w-[45%]",
              match.winnerId === match.participant1Id && "font-semibold text-green-600"
            )}>
            {match.participant1?.name ?? "Unknown"}
          </span>

          <span className="mx-2 text-gray-400">vs</span>

          <span
            className={clsx(
              "truncate max-w-[45%] text-right",
              match.winnerId === match.participant2Id && "font-semibold text-green-600"
            )}>
            {match.participant2?.name ?? "Unknown"}
          </span>
        </div>
      </div>

      {/* Set Result Button */}
      <div>
        <CustomButton variant={match.isOver ? "secondary" : "primary"} size="sm" onClick={() => setOpen(true)}>
          {match.winnerId ? "Edit Result" : "Set Result"}
        </CustomButton>
      </div>

      {/* Modal */}
      <form ref={formRef} action={formAction}>
        <input type="hidden" name="winnerId" />
        <input type="hidden" name="loserId" />
        <Modal open={open} onClose={() => setOpen(false)} title={`Set Match Result`}>
          <p className="text-sm mb-5 text-gray-primary text-center">
            Choose the winner for match <strong>#{match.serialNumber}</strong>
          </p>
          <div className="flex gap-3">
            <CustomButton type="submit" onClick={() => handleSubmit(match.participant1Id, match.participant2Id)}>
              {match.participant1?.name}
            </CustomButton>
            <CustomButton type="submit" onClick={() => handleSubmit(match.participant2Id, match.participant1Id)}>
              {match.participant2?.name}
            </CustomButton>
          </div>
        </Modal>
        {state.message && <p className="text-xs text-red-500 mt-2 text-center">{state.message}</p>}
      </form>
    </div>
  );
}
