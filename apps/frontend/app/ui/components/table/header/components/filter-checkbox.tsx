import { RangeFilter } from "@/generated/backend/common";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react";

type FilterCheckboxProps = {
  filterTypeValue: string;
  filterTypeName: string;
  filterTypeValues: readonly string[] | RangeFilter;
};

export default function FilterCheckbox({
  filterTypeValue,
  filterTypeName,
  filterTypeValues,
}: FilterCheckboxProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const getPathValue = (value: string) => {
    return searchParams.get(value)?.toString();
  };

  const getPathValues = (value: string): string[] | undefined => {
    const values = searchParams.getAll(value)?.toString().split(",");
    return values.length ? values : undefined;
  };

  const onFilterChange = (filterType: string, values: string[]) => {
    if (!filterType) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.delete(filterType);
    const filteredValues = values
      .map((v) => v?.trim())
      .filter((v): v is string => !!v);
    filteredValues.forEach((s) => params.append(filterType, s));
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Listbox
      multiple
      defaultValue={getPathValues(filterTypeValue)}
      onChange={(values: string[]) => onFilterChange(filterTypeValue, values)}
    >
      <div className="relative">
        {/* Button */}
        <ListboxButton className="relative w-full bg-secondary text-secondary-border-color hover:font-black cursor-pointer rounded-md focus:outline-none py-2 pr-10 text-left shadow-sm sm:text-sm">
          <div className="flex gap-1 items-center">
            <FunnelIcon className="h-5 w-5" />
            <span
              className={clsx("text-primary-border-color text-xs", {
                "text-secondary-border-color": getPathValue(filterTypeValue),
              })}
            >
              {filterTypeName}
            </span>
          </div>
        </ListboxButton>
        {/* Dropdown */}
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="absolute outline-none mt-1 max-h-60 min-w-max bg-secondary overflow-auto rounded-md shadow-lg sm:text-sm">
            {Object.values(filterTypeValues).map((option) => (
              <ListboxOption
                key={option}
                value={option}
                className={({ focus }) =>
                  `relative cursor-pointer text-foreground select-none py-2 px-4 text-left ${
                    focus ? "bg-primary" : ""
                  }`
                }
              >
                {({ selected }) => (
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selected}
                      readOnly
                      className={`cursor-pointer h-4 w-4 rounded appearance-none border border-primary-border-color 
                                        ${selected ? "bg-on-primary" : "bg-secondary"}`}
                    />
                    <label
                      className={`cursor-pointer ${selected ? "font-medium" : "font-normal"}`}
                    >
                      {option}
                    </label>
                  </label>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
}
