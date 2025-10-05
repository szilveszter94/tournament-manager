"use client";

import { createTournament } from "@/app/tournament/actions";
import { useActionState } from "react";
import RadioGroup from "@/app/ui/components/radio-button/radio-group";
import { radioButtonOptions } from "./constants";
import CustomButton from "@/app/ui/components/custom-button/custom-button";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { initialState } from "@/lib/custom-models/common";

export default function CreateTournamentForm() {
  const [state, formAction] = useActionState(createTournament, initialState);

  return (
    <form action={formAction} className="space-y-6">
      {/* Tournament name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Tournament name
        </label>
        <input
          type="text"
          name="name"
          placeholder="e.g. World Cup 2025"
          className="w-full rounded-md border px-3 py-2 text-sm"
          required
          aria-describedby="name-error"
        />
        {state.errors?.name && (
          <p id="name-error" className="text-red-500 text-sm">
            {state.errors.name.join(", ")}
          </p>
        )}
      </div>

      {/* Tournament config */}
      <div className="mb-10">
        <label className="block text-sm font-medium mb-2">Participants</label>
        <div className="flex gap-2 mb-5">
          <RadioGroup
            name="participantType"
            options={radioButtonOptions.participants}
            required={true}
          />
        </div>
        {state.errors?.participantType && (
          <p id="name-error" className="mt-2 text-sm text-red-500">
            {state.errors.participantType.join(", ")}
          </p>
        )}
      </div>

      {/* Submit */}
      <CustomButton
        type="submit"
        variant="primary"
        size="lg"
        icon={<ArrowRightCircleIcon />}
        iconSize={8}
      >
        Next
      </CustomButton>
      {state.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
}
