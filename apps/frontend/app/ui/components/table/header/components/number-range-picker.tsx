import { RangeFilter } from "@/generated/backend/common";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface NumberRangeFilterProps {
  name: string;
  value: RangeFilter;
}

export default function NumberRangePicker({
  name,
  value,
}: NumberRangeFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [numberError, setNumberError] = useState<string | null>(null);

  const handleMinChange = useDebouncedCallback((number: string) => {
    const params = new URLSearchParams(searchParams);
    const minValue = number.trim() === "" ? null : Number(number);
    const maxValueString = params.get(value.max);
    const maxValue = maxValueString ? Number(maxValueString) : null;

    if (!numbersAreValid(minValue, maxValue)) return;

    if (minValue !== null) {
      params.set(value.min, minValue.toString());
    } else {
      params.delete(value.min);
    }

    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleMaxChange = useDebouncedCallback((number: string) => {
    const params = new URLSearchParams(searchParams);
    const maxValue = number.trim() === "" ? null : Number(number);
    const minValueString = params.get(value.min);
    const minValue = minValueString ? Number(minValueString) : null;

    if (!numbersAreValid(minValue, maxValue)) return;

    if (maxValue !== null) {
      params.set(value.max, maxValue.toString());
    } else {
      params.delete(value.max);
    }

    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const numbersAreValid = (
    minValue: number | null,
    maxValue: number | null
  ): boolean => {
    if (minValue !== null && isNaN(minValue)) {
      setNumberError("Minimum value must be a number");
      return false;
    }

    if (maxValue !== null && isNaN(maxValue)) {
      setNumberError("Maximum value must be a number");
      return false;
    }

    if (minValue !== null && maxValue !== null && minValue > maxValue) {
      setNumberError("Minimum value cannot be greater than maximum value");
      return false;
    }

    setNumberError(null);
    return true;
  };

  const getPathValue = (value: string) => {
    const v = searchParams.get(value);
    return v && v.trim() !== "" ? v : null;
  };

  const isFilterActive = (): boolean => {
    return Boolean(getPathValue(value.min) || getPathValue(value.max));
  };

  const clearFilter = (): void => {
    setNumberError("");
    const params = new URLSearchParams(searchParams);
    params.delete(value.min);
    params.delete(value.max);

    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <PopoverButton className="w-full bg-secondary text-secondary-border-color hover:font-black cursor-pointer rounded-md py-2 pr-10 text-left focus:outline-none shadow-sm sm:text-sm">
            <div className="flex gap-1 items-center">
              <FunnelIcon className="h-5 w-5" />
              <span
                className={clsx("text-primary-border-color text-xs", {
                  "text-secondary-border-color": isFilterActive(),
                })}
              >
                {name}
              </span>
            </div>
          </PopoverButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="fixed z-50 w-55 rounded-md bg-secondary p-3 shadow-lg">
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <span className="w-15 text-left">Min: </span>
                  <input
                    type="number"
                    defaultValue={getPathValue(value.min)?.toString()}
                    onChange={(e) => handleMinChange(e.target.value)}
                    className="border rounded px-2 py-1 text-xs flex-1"
                    placeholder="Min"
                  />
                </div>
                <div className="flex items-center">
                  <span className="w-15 text-left">Max: </span>
                  <input
                    type="number"
                    defaultValue={getPathValue(value.max)?.toString()}
                    onChange={(e) => handleMaxChange(e.target.value)}
                    className="border rounded px-2 py-1 text-xs flex-1"
                    placeholder="Max"
                  />
                </div>
                {numberError && (
                  <span className="text-red-500 text-xs">{numberError}</span>
                )}
                {isFilterActive() && (
                  <div className="flex items-center">
                    <div
                      className="relative inline-block cursor-pointer"
                      title="Clear filter"
                      onClick={() => {
                        clearFilter();
                        close();
                      }}
                    >
                      <FunnelIcon className="w-5 h-5 text-gray-500" />
                      <XMarkIcon className="w-4 h-4 text-red-500 absolute -top-1 -right-1" />
                    </div>
                  </div>
                )}
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
