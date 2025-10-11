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

interface DateRangeFilterProps {
  name: string;
  value: RangeFilter;
}

export default function DateRangePicker({ name, value }: DateRangeFilterProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [dateError, setDateError] = useState<string | null>(null);

  const handleMinChange = (date: string) => {
    const params = new URLSearchParams(searchParams);
    if (date) {
      if (!datesAreValid(date, params.get(value.max))) return;
      params.set(value.min, date);
    } else {
      params.delete(value.min);
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  const handleMaxChange = (date: string) => {
    const params = new URLSearchParams(searchParams);
    if (date) {
      if (!datesAreValid(params.get(value.min), date)) return;
      params.set(value.max, date);
    } else {
      params.delete(value.max);
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  const datesAreValid = (
    fromDate: string | null,
    toDate: string | null
  ): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    if (from && from > today) {
      setDateError("Start date cannot be later than today");
      return false;
    }

    if (to && to > today) {
      setDateError("End date cannot be later than today");
      return false;
    }

    if (from && to && from > to) {
      setDateError("Start date cannot be later than end date");
      return false;
    }

    setDateError(null);
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
    setDateError("");
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
                  "text-secondary-border-color":
                    getPathValue(value.min) || getPathValue(value.max),
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
            <PopoverPanel className="fixed z-50 w-52 rounded-md bg-secondary p-3 shadow-lg">
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <span className="w-12 text-left">From: </span>
                  <input
                    type="date"
                    defaultValue={getPathValue(value.min)?.toString()}
                    onChange={(e) => handleMinChange(e.target.value)}
                    className="border rounded px-2 py-1 text-xs flex-1"
                    placeholder="From"
                  />
                </div>
                <div className="flex items-center">
                  <span className="w-12 text-left">To: </span>
                  <input
                    type="date"
                    defaultValue={getPathValue(value.max)?.toString()}
                    onChange={(e) => handleMaxChange(e.target.value)}
                    className="border rounded px-2 py-1 text-xs flex-1"
                    placeholder="To"
                  />
                </div>
                {dateError && (
                  <span className="text-red-500 text-xs">{dateError}</span>
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
