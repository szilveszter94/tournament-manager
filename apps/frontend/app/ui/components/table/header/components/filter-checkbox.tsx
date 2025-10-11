/* eslint-disable react-hooks/exhaustive-deps */
import { RangeFilter } from "@/generated/backend/common";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import DropdownTransition from "../../../transitions/dropdown-transition";

type FilterCheckboxProps = {
  filterTypeValue: string;
  filterTypeName: string;
  filterTypeValues: readonly string[] | RangeFilter;
};
export type FilterCheckboxHandle = { clear: () => void };

function FilterCheckbox(
  { filterTypeValue, filterTypeName, filterTypeValues }: FilterCheckboxProps,
  ref: React.Ref<FilterCheckboxHandle>
) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [remountKey, setRemountKey] = useState(1);

  useEffect(() => {
    const values = getPathValues(filterTypeValue);
    if (values) {
      setSelectedValues(values);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setSelectedValues([]);
    },
  }));

  const isFilterActive = () => {
    const v = searchParams.get(filterTypeValue);
    return v && v.trim() !== "" ? v : null;
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
    setSelectedValues(filteredValues);
    filteredValues.forEach((s) => params.append(filterType, s));
    replace(`${pathname}?${params.toString()}`);
  };

  const clearFilter = (): void => {
    const params = new URLSearchParams(searchParams);
    params.delete(filterTypeValue);

    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
    setSelectedValues([]);
    setRemountKey((prev) => prev + 1);
  };

  return (
    <Listbox
      key={`checkbox-key-${remountKey}`}
      multiple
      value={selectedValues}
      onChange={(values: string[]) => onFilterChange(filterTypeValue, values)}
    >
      <div className="relative">
        {/* Button */}
        <ListboxButton className="relative w-full bg-secondary text-secondary-border-color hover:font-black cursor-pointer rounded-md outline-none py-2 pr-10 text-left sm:text-sm">
          <div className="flex gap-1 items-center">
            <FunnelIcon className="h-5 w-5" />
            <span
              className={clsx("text-primary-border-color text-xs", {
                "text-secondary-border-color": isFilterActive(),
              })}
            >
              {filterTypeName}
            </span>
          </div>
        </ListboxButton>
        {/* Dropdown */}
        <DropdownTransition>
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
            {isFilterActive() && (
              <div className="flex items-center px-4 py-2">
                <div
                  className="relative inline-block cursor-pointer"
                  title="Clear filter"
                  onClick={() => clearFilter()}
                >
                  <FunnelIcon className="w-5 h-5 text-gray-500" />
                  <XMarkIcon className="w-4 h-4 text-red-500 absolute -top-1 -right-1" />
                </div>
              </div>
            )}
          </ListboxOptions>
        </DropdownTransition>
      </div>
    </Listbox>
  );
}

export default forwardRef<FilterCheckboxHandle, FilterCheckboxProps>(
  FilterCheckbox
);
