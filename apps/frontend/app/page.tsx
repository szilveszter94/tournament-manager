"use client";

import CustomButton from "@/app/ui/custom-button/custom-button";
import {
  ArrowRightIcon,
  Squares2X2Icon,
  PlayCircleIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      {/* Title */}
      <h1 className="text-6xl md:text-7xl text-primary-text-color text-center font-extrabold mb-4 leading-tight">
        Tournament Simulator
      </h1>

      {/* Subtitle */}
      <p className="text-center text-subtitle-text-color text-lg md:text-xl mb-8">
        Manage and simulate your tournaments with ease. Create new tournaments,
        add participants, and simulate matches to see who comes out on top.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <CustomButton
          href="/tournaments/create"
          variant="primary"
          size="xl"
          icon={<TrophyIcon />}
          iconSize={10}
        >
          Create Tournament
        </CustomButton>
        <CustomButton
          href="/tournaments/list"
          variant="secondary"
          size="xl"
          icon={<ArrowRightIcon />}
          iconSize={10}
        >
          Browse Tournaments
        </CustomButton>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start gap-4 py-6 px-10 bg-tertiary rounded-lg shadow">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <Squares2X2Icon className="w-8 h-8 text-icon" />
              <h2 className="text-xl font-bold text-primary-text-color">
                Organize Tournament
              </h2>
            </div>

            <p className="text-subtitle-text-color">
              Structure brackets, set rules, and manage all aspects of your
              competition.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 bg-tertiary rounded-lg shadow">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <PlayCircleIcon className="w-8 h-8 text-icon" />
              <h2 className="text-xl text-primary-text-color font-bold">
                Simulate Matches
              </h2>
            </div>

            <p className="text-subtitle-text-color">
              Run simulations to predict outcomes and see potential champions
              emerge.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
