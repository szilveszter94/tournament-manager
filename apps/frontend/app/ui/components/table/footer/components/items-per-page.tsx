"use client";

import { ITEMS_PER_PAGE_LIST } from "@/lib/global-constants";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react";

export default function ItemsPerPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onItemsPerPageChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("itemsPerPage", value.toString());
    } else {
      params.delete("itemsPerPage");
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 items-center">
      <h1>Items per page</h1>
      <Listbox
        value={
          searchParams.get("itemsPerPage")?.toString() ??
          ITEMS_PER_PAGE_LIST[0].toString()
        }
        onChange={(value: string) => onItemsPerPageChange(value)}
      >
        <div className="relative w-20">
          {/* Button */}
          <ListboxButton className="relative w-full cursor-pointer rounded border border-primary-border-color bg-secondary py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm">
            <span className="block truncate">
              {searchParams.get("itemsPerPage")?.toString() ??
                ITEMS_PER_PAGE_LIST[0]}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
            </span>
          </ListboxButton>

          {/* Options */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-10 bottom-full mb-1 max-h-60 w-20 overflow-auto rounded-md bg-secondary py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {ITEMS_PER_PAGE_LIST.map((i) => (
                <ListboxOption
                  key={i}
                  value={i.toString()}
                  className={({ focus, selected }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      focus ? "bg-primary text-white" : "text-foreground"
                    } ${selected ? "font-medium" : "font-normal"}`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className="block truncate">{i}</span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                          <CheckIcon className="h-5 w-5" />
                        </span>
                      )}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
