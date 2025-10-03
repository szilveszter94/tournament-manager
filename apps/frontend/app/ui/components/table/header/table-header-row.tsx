"use client";

import { tournamentTableHeaders } from "@/app/ui/tournament/constants";
import { Transition } from "@headlessui/react";
import DateRangePicker from "./components/date-range-picker";
import { DateFilter } from "@/generated/backend/shared";
import ToggleFilterRow from "./components/toggle-filter-row";
import { useState } from "react";
import Search from "./components/search";
import FilterCheckbox from "./components/filter-checkbox";

export default function TableHeaderRow() {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const toggleFilterPanel = () => {
    setIsFilterPanelOpen(!isFilterPanelOpen);
  };

  return (
    <thead className="bg-secondary text-foreground">
      <ToggleFilterRow
        toggleFilterPanel={toggleFilterPanel}
        isFilterPanelOpen={isFilterPanelOpen}
      />
      {/* Filter row */}
      <Transition
        show={isFilterPanelOpen}
        enter="transition-all duration-300 ease-out"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-200 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <tr>
          <th className="border border-primary-border-color"></th>
          {tournamentTableHeaders.map((col) => (
            <th
              key={col.value}
              className="border border-primary-border-color px-4"
            >
              {col.filterType === "date" ? (
                <DateRangePicker
                  name={col.name.split(" ")[0]}
                  value={col.typeValues as DateFilter}
                />
              ) : col.filterType === "checkbox" ? (
                // Dropdown for enum values
                <FilterCheckbox
                  filterTypeValue={col.value}
                  filterTypeName={col.name}
                  filterTypeValues={col.typeValues}
                />
              ) : (
                // Text input for free search
                <Search placeholder={col.name} />
              )}
            </th>
          ))}
        </tr>
      </Transition>
    </thead>
  );
}
