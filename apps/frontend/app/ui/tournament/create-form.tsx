"use client";

import { createTournament } from "@/app/tournament/actions";
import {
  CreateTournamentWithPhaseDto,
  ParticipantType,
  PhaseType,
} from "@/generated/api";
import { useState } from "react";
import RadioGroup from "@/app/ui/components/radio-button/radio-group";
import { radioButtonOptions } from "./constants";
import CustomButton from "@/app/ui/components/custom-button/custom-button";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

export default function CreateTournamentForm() {
  const [name, setName] = useState("");
  const [firstPhase, setFirstPhase] = useState<PhaseType>(PhaseType.NONE);
  const [eliminationPhase, setEliminationPhase] = useState<PhaseType>(
    PhaseType.SINGLE_ELIMINATION
  );
  const [participantType, setParticipantType] = useState<ParticipantType>(
    ParticipantType.INDIVIDUAL
  );

  const changeFirstPhase = (type: PhaseType) => {
    setFirstPhase(type);
  };

  const changeEliminationPhase = (type: PhaseType) => {
    setEliminationPhase(type);
  };

  const changeParticipantType = (type: ParticipantType) => {
    setParticipantType(type);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const entity: CreateTournamentWithPhaseDto = {
      tournament: {
        name: name,
        type: participantType,
      },
      phases: [
        {
          phaseType: firstPhase,
          order: 1,
        },
        {
          phaseType: eliminationPhase,
          order: 2,
        },
      ],
    };

    await createTournament(entity);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tournament name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Tournament name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. World Cup 2025"
          className="w-full rounded-md border px-3 py-2 text-sm"
          required
        />
      </div>

      {/* Tournament config */}
      <div className="mb-10">
        <label className="block text-sm font-medium mb-2">First Phase</label>
        <div className="flex gap-2 mb-5">
          <RadioGroup
            name="firstPhase"
            value={firstPhase}
            onChange={changeFirstPhase}
            options={radioButtonOptions.firstPhase}
          />
        </div>
        <label className="block text-sm font-medium mb-2">Second Phase</label>
        <div className="flex gap-2 mb-5">
          <RadioGroup
            name="secondPhase"
            value={eliminationPhase}
            onChange={changeEliminationPhase}
            options={radioButtonOptions.secondPhase}
          />
        </div>
        <label className="block text-sm font-medium mb-2">Participants</label>
        <div className="flex gap-2 mb-5">
          <RadioGroup
            name="participants"
            value={participantType}
            onChange={changeParticipantType}
            options={radioButtonOptions.participants}
          />
        </div>
      </div>

      {/* Submit */}
      <CustomButton
        type="submit"
        variant="primary"
        size="lg"
        icon={<CheckCircleIcon />}
        iconSize={8}
      >
        Submit
      </CustomButton>
    </form>
  );
}
