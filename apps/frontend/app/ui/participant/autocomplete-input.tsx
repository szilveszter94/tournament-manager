"use client";

import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import type { Participant, ParticipantType } from "@/generated/api";
import { fetchAutocompleteParticipants } from "@/app/participant/api";
import clsx from "clsx";

type AutocompleteInputProps = {
  type: ParticipantType;
  onSelect: (p: Participant | null) => void;
  query: string;
  setQuery: (value: string) => void;
};

export default function AutocompleteInput({ type, onSelect, query, setQuery }: AutocompleteInputProps) {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [selected, setSelected] = useState<Participant | null>(null);

  const search = useDebouncedCallback(async (value: string) => {
    if (value.trim().length < 3) {
      setParticipants([]);
      return;
    }

    const res = await fetchAutocompleteParticipants(value, type);
    if (res.ok && res.data) setParticipants(res.data);
  }, 300);

  const onSelectedChange = (p: Participant | null) => {
    setSelected(p);
    setQuery(p?.name ?? "");
    onSelect(p);
  };

  const onInputChange = (value: string) => {
    setQuery(value);

    const existing = participants.find((p) => p.name === value) || null;
    if (existing) {
      setSelected(existing);
      onSelect(existing);
    } else {
      setSelected({ id: 0, name: value } as Participant);
      onSelect(null);
    }

    search(value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) form.requestSubmit();
    }
  };

  return (
    <div className="relative">
      <Combobox as="div" value={selected} onChange={(p) => onSelectedChange(p)} className="relative">
        <ComboboxInput
          type="search"
          className="w-full rounded-md border px-3 py-2 text-sm"
          placeholder={clsx(type === "Individual" ? "John Doe" : "The A Squad")}
          autoComplete="off"
          value={query}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={onKeyDown}
        />

        {/* Dropdown */}
        {participants.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 w-full rounded-md bg-secondary shadow-lg max-h-60 overflow-auto text-sm">
            {participants.map((p) => (
              <ComboboxOption
                key={p.id}
                value={p}
                className={({ focus }) => `cursor-pointer select-none px-3 py-2 ${focus ? "bg-on-secondary" : ""}`}>
                {p.name}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </Combobox>
    </div>
  );
}
