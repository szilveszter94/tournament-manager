"use client";

import { initialState } from "@/lib/custom-models/common";
import { useActionState, useEffect, useRef } from "react";
import { updateGroupStageMatch } from "@/app/tournament/actions";
import { Match } from "@/generated/api";
import CustomButton from "../../components/custom-button/custom-button";
import clsx from "clsx";
import { PencilIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { useModal } from "@/app/providers/modal-provider";
import { useAppDispatch } from "@/app/store/hooks";
import { showSnackbar } from "@/app/store/features/snackbar/snackbarSlice";

type Props = {
  match: Match;
  groupName: string | undefined;
  tournamentId: number;
};

export default function UpdateMatchForm({ tournamentId, groupName, match }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const { showModal } = useModal();
  const dispatch = useAppDispatch();

  const updateMatch = updateGroupStageMatch.bind(null, match.id, tournamentId);
  const [state, formAction, isPending] = useActionState(updateMatch, initialState);

  useEffect(() => {
    if (!isPending && state.message) {
      dispatch(
        showSnackbar({
          message: state.message,
          type: state.success ? "success" : "error",
        })
      );
    }
  }, [state, isPending, dispatch]);

  const onSubmit = async () => {
    if (!match.participant1Id || !match.participant2Id) {
      return;
    }

    const selected = await showModal({
      type: "option",
      title: "Set Match Result",
      message: `Choose the winner for ${groupName} match: ${match.serialNumber}`,
      option1: { label: match.participant1?.name ?? "Unknown", value: match.participant1Id },
      option2: { label: match.participant2?.name ?? "Unknown", value: match.participant2Id },
    });

    if (selected > 0) {
      if (!formRef.current || match.winnerId === selected) {
        return;
      }
      const winnerId = selected;
      const loserId = match.participant1Id === selected ? match.participant2Id : match.participant1Id;
      const winnerInput = formRef.current.querySelector<HTMLInputElement>('input[name="winnerId"]');
      const loserInput = formRef.current.querySelector<HTMLInputElement>('input[name="loserId"]');

      if (winnerInput && loserInput) {
        winnerInput.value = winnerId?.toString() ?? "";
        loserInput.value = loserId?.toString() ?? "";

        formRef.current.requestSubmit();
      }
    }
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
            isPending={isPending}
            icon={match.isOver ? <PencilIcon /> : <PlusCircleIcon />}
            variant={match.isOver ? "secondary" : "primary"}
            size="sm"
            onClick={() => onSubmit()}>
            {match.isOver ? "Edit" : "Set"}
          </CustomButton>
        </div>
      </div>

      {/* Form */}
      <form ref={formRef} action={formAction}>
        <input type="hidden" name="winnerId" />
        <input type="hidden" name="loserId" />
      </form>
    </div>
  );
}
