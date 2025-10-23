"use client";

import { Transition } from "@headlessui/react";
import { GroupCard } from "./group-card";
import { useEffect, useState } from "react";

const mockGroups = [
  {
    id: 1,
    name: "Group A",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Group B",
    color: "from-pink-500 to-red-500",
  },
  {
    id: 3,
    name: "Group C",
    color: "from-emerald-500 to-lime-500",
  },
];

export default function GroupStagesPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white p-6">
      <Transition
        as="div"
        show={show}
        enter="transition duration-700 ease-out"
        enterFrom="opacity-0 -translate-y-3"
        enterTo="opacity-100 translate-y-0">
        <h1 className="text-4xl font-bold text-center mb-8 tracking-wide">Group Stages</h1>
      </Transition>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockGroups.map((group) => (
          <GroupCard key={group.id} {...group} />
        ))}
      </div>
    </div>
  );
}
