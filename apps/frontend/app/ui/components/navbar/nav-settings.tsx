"use client";
import { BeakerIcon, Cog6ToothIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useTheme } from "next-themes";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { key: "light", name: "Light" },
  { key: "dark", name: "Dark" },
  { key: "dark-purple", name: "Dark purple" },
];

export default function NavSettings() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") closeDropdown();
    }

    function closeDropdown() {
      setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", closeDropdown);
    };
  }, []);

  return (
    <div ref={settingsRef} className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full bg-secondary hover:bg-on-secondary p-2 focus:outline-none"
      >
        <Cog6ToothIcon className="h-6 w-6" />
      </button>

      {/* Popover */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -5 }}
            transition={{ duration: 0.35 }}
            className="absolute right-0 mt-3 w-56 rounded-2xl bg-secondary shadow-xl border border-primary-border-color/50 p-4"
          >
            <p className="text-sm font-semibold mb-3 text-primary-text-color">
              Appearance
            </p>
            <div className="grid grid-cols-1 gap-2">
              {themes.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTheme(t.key)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl transition ${
                    theme === t.key
                      ? "bg-primary"
                      : "hover:bg-on-secondary text-primary-text-color"
                  }`}
                >
                  {t.key === "dark" ? <MoonIcon className="h-5 w-5" /> : null}
                  {t.key === "light" ? <SunIcon className="h-5 w-5" /> : null}
                  {t.key === "dark-purple" ? <BeakerIcon className="h-5 w-5" /> : null}
                  {t.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
