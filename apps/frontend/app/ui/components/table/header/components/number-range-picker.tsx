import { RangeFilter } from "@/generated/backend/common";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useState } from "react";

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

  const handleMinChange = (number: string) => {
    const params = new URLSearchParams(searchParams);
    if (number) {
      if (!numbersAreValid(+number, Number(params.get(value.max)))) return;
      params.set(value.min, number);
    } else {
      params.delete(value.min);
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  const handleMaxChange = (number: string) => {
    const params = new URLSearchParams(searchParams);
    if (number) {
      if (!numbersAreValid(Number(params.get(value.min)), +number)) return;
      params.set(value.max, number);
    } else {
      params.delete(value.max);
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

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
    return searchParams.get(value)?.toString();
  };

  return (
    <Popover className="relative">
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
              <span className="w-12 text-left">Min: </span>
              <input
                type="number"
                defaultValue={getPathValue(value.min)}
                onChange={(e) => handleMinChange(e.target.value)}
                className="border rounded px-2 py-1 text-xs flex-1"
                placeholder="From"
              />
            </div>
            <div className="flex items-center">
              <span className="w-12 text-left">Max: </span>
              <input
                type="number"
                defaultValue={getPathValue(value.max)}
                onChange={(e) => handleMaxChange(e.target.value)}
                className="border rounded px-2 py-1 text-xs flex-1"
                placeholder="To"
              />
            </div>
            {numberError && (
              <span className="text-red-500 text-xs">{numberError}</span>
            )}
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
