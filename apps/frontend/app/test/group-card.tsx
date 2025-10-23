// components/GroupCard.tsx
"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";

export function GroupCard({ name, color }: { name: string; color: string }) {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useState(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  });

  return (
    <Transition
      as="div"
      show={visible}
      enter="transition duration-700 ease-out"
      enterFrom="opacity-0 translate-y-3"
      enterTo="opacity-100 translate-y-0">
      {/* Glowing border effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-10 blur-xl`} />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{name}</h2>
          <button onClick={() => setExpanded(!expanded)} className="p-2 rounded-md hover:bg-gray-800 transition">
            <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {/* Players */}
          <div>
            <h3 className="text-sm text-gray-400 mb-1">Players</h3>
            <ul className="space-y-1">
              {["Player 1", "Player 2", "Player 3", "Player 4"].map((p) => (
                <li
                  key={p}
                  className="flex justify-between bg-gray-800/50 px-3 py-2 rounded-md hover:bg-gray-700/50 transition">
                  <span>{p}</span>
                  <span className="text-gray-400 text-sm">2W / 1L</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Matches */}
          <Transition
            as="div"
            show={expanded}
            enter="transition-all duration-500 ease-out"
            enterFrom="opacity-0 max-h-0"
            enterTo="opacity-100 max-h-screen"
            leave="transition-all duration-300 ease-in"
            leaveFrom="opacity-100 max-h-screen"
            leaveTo="opacity-0 max-h-0">
            <h3 className="text-sm text-gray-400 mb-1 mt-4">Matches</h3>
            <div className="space-y-2">
              {[
                { p1: "Player 1", p2: "Player 2" },
                { p1: "Player 3", p2: "Player 4" },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-800/50 px-3 py-2 rounded-md">
                  <span>
                    {m.p1} vs {m.p2}
                  </span>
                  <button className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded-md transition">
                    Set Result
                  </button>
                </div>
              ))}
            </div>
          </Transition>

          {/* Ranking */}
          <div className="mt-4">
            <h3 className="text-sm text-gray-400 mb-1">Ranking</h3>
            <table className="w-full text-sm text-gray-300">
              <thead>
                <tr className="text-gray-500">
                  <th className="text-left">#</th>
                  <th className="text-left">Player</th>
                  <th>P</th>
                  <th>W</th>
                  <th>L</th>
                </tr>
              </thead>
              <tbody>
                {["Player 1", "Player 2", "Player 3", "Player 4"].map((p, i) => (
                  <tr key={p} className="border-t border-gray-800 hover:bg-gray-800/50 transition">
                    <td>{i + 1}</td>
                    <td>{p}</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Transition>
  );
}
