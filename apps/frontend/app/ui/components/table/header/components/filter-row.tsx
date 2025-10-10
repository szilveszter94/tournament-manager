import { Column } from "@/lib/global-constants";
import Search from "./search";
import FilterCheckbox from "./filter-checkbox";
import { RangeFilter } from "@/generated/backend/common";
import DateRangePicker from "./date-range-picker";
import NumberRangePicker from "./number-range-picker";

type FilterRowProps<T> = {
  columns: Column<T>[];
};

export default function FilterRow<T>({ columns }: FilterRowProps<T>) {
  return (
    <tr>
      {columns.map((col) =>
        col.buttons ? (
          <th
            key={col.value as string}
            className="border border-primary-border-color"
          ></th>
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
                filterTypeValue={col.value as string}
                filterTypeName={col.name}
                filterTypeValues={col.typeValues}
              />
            ) : col.filterType === "search" ? (
              <Search placeholder={col.name} />
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
