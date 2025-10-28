"use client";

import { initialState } from "@/lib/custom-models/common";
import { useActionState, useRef, useState } from "react";
import { updateGroupStageMatch } from "@/app/tournament/actions";
import { Match } from "@/generated/api";
import Modal from "../../components/modal/modal";
import CustomButton from "../../components/custom-button/custom-button";
import clsx from "clsx";
import { PencilIcon, PlusCircleIcon } from "@heroicons/react/16/solid";

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
    if (!formRef.current || (match.winnerId === winnerId && match.loserId === loserId)) {
      setOpen(false);
      return;
    }

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
    <div className="flex items-center justify-between w-full">
      {/* Match Info */}
      <div className="flex justify-start bg-tertiary items-center gap-2 px-4 py-1 mr-2 rounded-lg flex-1">
        <span className="text-sm text-gray-primary w-5 text-right">#{match.serialNumber}.</span>
        <div className="flex-1 flex flex-wrap justify-start items-center text-sm font-medium px-3 rounded-md min-w-50">
          <span
            className={clsx(
              match.winnerId === match.participant1Id && "font-semibold text-green-primary",
              match.loserId === match.participant1Id && "font-semibold text-red-primary",
              "truncate"
            )}>
            {match.participant1?.name ?? "Unknown"}
          </span>

          <span className="mx-2 text-gray-400">vs</span>

          <span
            className={clsx(
              match.winnerId === match.participant2Id && "font-semibold text-green-primary",
              match.loserId === match.participant2Id && "font-semibold text-red-primary",
              "truncate"
            )}>
            {match.participant2?.name ?? "Unknown"}
          </span>
        </div>

        {/* Set Result Button */}
        <div>
          <CustomButton
            icon={match.isOver ? <PencilIcon /> : <PlusCircleIcon />}
            variant={match.isOver ? "secondary" : "primary"}
            size="sm"
            onClick={() => setOpen(true)}>
            {match.isOver ? "Edit" : "Set"}
          </CustomButton>
        </div>
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
        {state.message && <p className="text-xs text-red-primary mt-2 text-center">{state.message}</p>}
      </form>
    </div>
  );
}
