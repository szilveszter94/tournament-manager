"use client";
import { BeakerIcon, Cog6ToothIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useTheme } from "next-themes";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import DropdownTransition from "../transitions/dropdown-transition";
import clsx from "clsx";

const themes = [
  { key: "light", name: "Light" },
  { key: "dark", name: "Dark" },
  { key: "dark-purple", name: "Dark purple" },
];

export default function NavSettings() {
  const { theme, setTheme } = useTheme();

  return (
    <Popover className="relative">
      <PopoverButton className="rounded-full bg-secondary hover:bg-on-secondary p-2 focus:outline-none">
        <Cog6ToothIcon className="h-6 w-6" />
      </PopoverButton>

      <DropdownTransition>
        <PopoverPanel className="absolute right-0 mt-1 py-2 px-4 w-52 rounded-md bg-secondary p-3 shadow-lg z-50 origin-top-left">
          <p className="text-sm font-semibold mb-3 text-primary-text-color">Appearance</p>
          <div className="grid grid-cols-1 gap-2">
            {themes.map((t) => (
              <button
                key={t.key}
                onClick={() => setTheme(t.key)}
                className={clsx(
                  "flex items-center gap-2 px-3 py-2 rounded-xl transition",
                  theme === t.key ? "bg-primary" : "hover:bg-on-secondary text-primary-text-color"
                )}>
                {t.key === "dark" ? <MoonIcon className="h-5 w-5" /> : null}
                {t.key === "light" ? <SunIcon className="h-5 w-5" /> : null}
                {t.key === "dark-purple" ? <BeakerIcon className="h-5 w-5" /> : null}
                {t.name}
              </button>
            ))}
          </div>
        </PopoverPanel>
      </DropdownTransition>
    </Popover>
  );
}
