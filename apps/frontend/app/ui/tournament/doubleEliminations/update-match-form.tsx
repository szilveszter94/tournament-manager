"use client";

import { initialState } from "@/lib/custom-models/common";
import { startTransition, useActionState, useEffect } from "react";
import { updateGroupStageMatch } from "@/app/tournament/actions";
import { Match } from "@/generated/api";
import CustomButton from "../../components/custom-button/custom-button";
import clsx from "clsx";
import { PencilIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { useModal } from "@/app/providers/modal-provider";
import { useAppDispatch } from "@/app/store/hooks";
import { showSnackbar } from "@/app/store/features/snackbar/snackbarSlice";

type UpdateMatchFormProps = {
  match: Match;
  groupName: string | undefined;
  tournamentId: number;
  disabled: boolean;
};

export default function UpdateMatchForm({ tournamentId, groupName, match, disabled }: UpdateMatchFormProps) {
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
    if (!match.participant1Id || !match.participant2Id) return;

    const selected = await showModal({
      type: "option",
      title: "Set Match Result",
      message: `Choose the winner for ${groupName} match: ${match.serialNumber}`,
      option1: { label: match.participant1?.name ?? "Unknown", value: match.participant1Id },
      option2: { label: match.participant2?.name ?? "Unknown", value: match.participant2Id },
    });

    if (selected <= 0 || match.winnerId === selected) return;

    const winnerId = selected;
    const loserId = match.participant1Id === selected ? match.participant2Id : match.participant1Id;

    const formData = new FormData();
    formData.append("winnerId", winnerId.toString());
    formData.append("loserId", loserId.toString());
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div
      className={clsx(
        "flex flex-col sm:flex-row items-center justify-between w-full rounded-xl border shadow-sm bg-card px-4 py-3 transition-all hover:shadow-md hover:bg-accent/10",
        disabled && "opacity-70"
      )}>
      {/* Left side: Match info */}
      <div className="flex flex-col sm:flex-row items-center gap-3 flex-1">
        <span className="text-sm text-gray-500 font-medium min-w-[30px] text-right">#{match.serialNumber}</span>

        <div className="flex items-center gap-2 text-sm font-medium">
          {/* Participant 1 */}
          <span
            className={clsx(
              "truncate max-w-[120px] sm:max-w-[180px]",
              match.winnerId === match.participant1Id && "text-green-primary font-semibold",
              match.loserId === match.participant1Id && "text-red-primary font-semibold",
              !match.isOver && "text-foreground/80"
            )}>
            {match.participant1?.name ?? "Unknown"}
          </span>

          <span className="text-gray-400">vs</span>

          {/* Participant 2 */}
          <span
            className={clsx(
              "truncate max-w-[120px] sm:max-w-[180px]",
              match.winnerId === match.participant2Id && "text-green-primary font-semibold",
              match.loserId === match.participant2Id && "text-red-primary font-semibold",
              !match.isOver && "text-foreground/80"
            )}>
            {match.participant2?.name ?? "Unknown"}
          </span>
        </div>
      </div>

      {/* Right side: Set/Edit button */}
      <div className="mt-3 sm:mt-0">
        <CustomButton
          disabled={disabled}
          isPending={isPending}
          icon={match.isOver ? <PencilIcon /> : <PlusCircleIcon />}
          variant={match.isOver ? "secondary" : "primary"}
          size="sm"
          onClick={() => onSubmit()}
          className="transition-all hover:scale-[1.02]">
          {match.isOver ? "Edit" : "Set"}
        </CustomButton>
      </div>
    </div>
  );
}
