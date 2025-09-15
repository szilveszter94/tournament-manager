"use client";

import { useState } from "react";
import {
  EliminationPhaseType,
  FirstPhaseType,
} from "../../../../custom-entity/types/enums";
import RadioGroup from "@/components/ui/navbar/radio-button/radio-group";
import CustomButton from "@/components/ui/navbar/custom-button/custom-button";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

export default function Page() {
  const [name, setName] = useState("");
  const [firstPhase, setFirstPhase] = useState<FirstPhaseType | "">("GroupStage");
  const [eliminationPhase, setEliminationPhase] =
    useState<EliminationPhaseType>("SingleElimination");

  const changeFirstPhase = (type: FirstPhaseType) => {
    setFirstPhase(type);
  };

  const changeEliminationPhase = (type: EliminationPhaseType) => {
    setEliminationPhase(type);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { name, firstPhase, eliminationPhase };
    console.log(payload);
  };

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Tournament</h1>

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

        {/* Add phases */}
        <div className="mb-10">
          <label className="block text-sm font-medium mb-2">First Phase</label>
          <div className="flex gap-2 mb-5">
            <RadioGroup
              name="firstPhase"
              value={firstPhase}
              onChange={changeFirstPhase}
              options={[
                { label: "No first phase", value: "" },
                { label: "Group Stage", value: "GroupStage" },
                { label: "Round Robin", value: "RoundRobin" },
              ]}
            />
          </div>
          <label className="block text-sm font-medium mb-2">Second Phase</label>
          <div className="flex gap-2">
            <RadioGroup
              name="secondPhase"
              value={eliminationPhase}
              onChange={changeEliminationPhase}
              options={[
                { label: "Knockout", value: "SingleElimination" },
                { label: "Double Elimination", value: "DoubleElimination" },
              ]}
            />
          </div>
        </div>

        {/* Submit */}
        <CustomButton type="submit" variant="primary" size="lg" icon={<CheckCircleIcon/>} iconSize={8}>
          Submit
        </CustomButton>
      </form>
    </main>
  );
}
