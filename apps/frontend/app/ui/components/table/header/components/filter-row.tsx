import { Column } from "@/lib/global-constants";
import Search, { SearchHandle } from "./search";
import FilterCheckbox, { FilterCheckboxHandle } from "./filter-checkbox";
import { RangeFilter } from "@/generated/backend/common";
import DateRangePicker from "./date-range-picker";
import NumberRangePicker from "./number-range-picker";
import ClearAllFilters from "./clear-all-filters";
import { useRef } from "react";

type FilterRowProps<T> = {
  columns: Column<T>[];
};

export default function FilterRow<T>({ columns }: FilterRowProps<T>) {
  const searchRefs = useRef<SearchHandle[]>([]);
  const filterCheckboxRefs = useRef<FilterCheckboxHandle[]>([]);

  const onClear = () => {
    searchRefs.current.forEach((ref) => ref?.clear());
    filterCheckboxRefs.current.forEach((ref) => ref?.clear());
  };

  const addSearchRef = (ref: SearchHandle | null) => {
    if (ref && !searchRefs.current.includes(ref)) {
      searchRefs.current.push(ref);
    }
  };

  const addCheckboxRef = (ref: FilterCheckboxHandle | null) => {
    if (ref && !filterCheckboxRefs.current.includes(ref)) {
      filterCheckboxRefs.current.push(ref);
    }
  };

  return (
    <tr>
      {columns.map((col) =>
        col.buttons ? (
          <th
            key={col.value as string}
            className="border border-primary-border-color "
          >
            <div className="flex items-center justify-center">
              <ClearAllFilters onClear={onClear} />
            </div>
          </th>
        ) : (
          <th
            key={col.value as string}
            className="border border-primary-border-color px-4"
          >
            {col.filterType === "date" ? (
              <DateRangePicker
                name={col.name}
                value={col.typeValues as RangeFilter}
              />
            ) : col.filterType === "checkbox" ? (
              <FilterCheckbox
                ref={addCheckboxRef}
                filterTypeValue={col.value as string}
                filterTypeName={col.name}
                filterTypeValues={col.typeValues}
              />
            ) : col.filterType === "search" ? (
              <Search placeholder={col.name} ref={addSearchRef} />
            ) : col.filterType === "number" ? (
              <NumberRangePicker
                name={col.name}
                value={col.typeValues as RangeFilter}
              />
            ) : (
              <></>
            )}
          </th>
        )
      )}
    </tr>
  );
}
