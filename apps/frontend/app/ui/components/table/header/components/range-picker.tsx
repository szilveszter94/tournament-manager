import { RangeFilter, RangeFilterType } from "@/generated/backend/common";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import DropdownTransition from "../../../transitions/dropdown-transition";
import { validateDateRange, validateNumberRange } from "../../helper/helper";

interface RangeFilterProps {
  name: string;
  value: RangeFilter;
  type: RangeFilterType;
}

export default function RangePicker({
  name,
  value,
  type,
}: RangeFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [error, setError] = useState<string | null>(null);

  const distributeMinChange = (data: string) => {
    switch (type) {
      case "date":
        handleMinDateChange(data);
        break;
      case "number":
        handleMinNumberChange(data);
        break;
      default:
        break;
    }
  };

  const distributeMaxChange = (data: string) => {
    switch (type) {
      case "date":
        handleMaxDateChange(data);
        break;
      case "number":
        handleMaxNumberChange(data);
        break;
      default:
        break;
    }
  };

  const handleMaxDateChange = (date: string) => {
    const params = new URLSearchParams(searchParams);
    if (date) {
      const errorMessage = validateDateRange(params.get(value.min), date);
      setError(errorMessage || null);
      if (errorMessage) return;
      params.set(value.max, date);
    } else {
      params.delete(value.max);
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  const handleMinDateChange = (date: string) => {
    const params = new URLSearchParams(searchParams);
    if (date) {
      const errorMessage = validateDateRange(date, params.get(value.max));
      setError(errorMessage || null);
      if (errorMessage) return;
      params.set(value.min, date);
    } else {
      params.delete(value.min);
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  const handleMinNumberChange = useDebouncedCallback((number: string) => {
    const params = new URLSearchParams(searchParams);
    const minValue = number.trim() === "" ? null : Number(number);
    const maxValueString = params.get(value.max);
    const maxValue = maxValueString ? Number(maxValueString) : null;
    const errorMessage = validateNumberRange(minValue, maxValue);
    setError(errorMessage || null);
    if (errorMessage) return;

    if (minValue !== null) {
      params.set(value.min, minValue.toString());
    } else {
      params.delete(value.min);
    }

    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleMaxNumberChange = useDebouncedCallback((number: string) => {
    const params = new URLSearchParams(searchParams);
    const maxValue = number.trim() === "" ? null : Number(number);
    const minValueString = params.get(value.min);
    const minValue = minValueString ? Number(minValueString) : null;
    const errorMessage = validateNumberRange(minValue, maxValue);
    setError(errorMessage || null);
    if (errorMessage) return;

    if (maxValue !== null) {
      params.set(value.max, maxValue.toString());
    } else {
      params.delete(value.max);
    }

    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const getPathValue = (value: string) => {
    const v = searchParams.get(value);
    return v && v.trim() !== "" ? v : null;
  };

  const isFilterActive = (): boolean => {
    return Boolean(getPathValue(value.min) || getPathValue(value.max));
  };

  const clearFilter = (): void => {
    setError("");
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
          <PopoverButton className="w-full bg-secondary text-secondary-border-color hover:font-black cursor-pointer rounded-md py-2 pr-10 text-left outline-none sm:text-sm">
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

          <DropdownTransition>
            <PopoverPanel className="absolute outline-none py-2 px-4 mt-1 max-h-60 min-w-max bg-secondary overflow-auto rounded-md shadow-lg sm:text-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <span className="w-15 text-left">Min: </span>
                  <input
                    type={type}
                    defaultValue={getPathValue(value.min)?.toString()}
                    onChange={(e) => distributeMinChange(e.target.value)}
                    className="border rounded px-2 py-1 text-xs flex-1"
                    placeholder="Min"
                  />
                </div>
                <div className="flex items-center">
                  <span className="w-15 text-left">Max: </span>
                  <input
                    type={type}
                    defaultValue={getPathValue(value.max)?.toString()}
                    onChange={(e) => distributeMaxChange(e.target.value)}
                    className="border rounded px-2 py-1 text-xs flex-1"
                    placeholder="Max"
                  />
                </div>
                {error && <span className="text-red-500 text-xs">{error}</span>}
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
          </DropdownTransition>
        </>
      )}
    </Popover>
  );
}
