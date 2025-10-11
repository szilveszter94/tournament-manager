import { FunnelIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { usePathname, useRouter } from "next/navigation";

type ClearAllFiltersProps = {
  onClear: () => void;
};

export default function ClearAllFilters({ onClear }: ClearAllFiltersProps) {
  const pathname = usePathname();
  const { replace } = useRouter();

  const clearAllFilters = (): void => {
    onClear();
    replace(`${pathname}`);
  };

  return (
    <div
      className="relative inline-block cursor-pointer"
      title="Clear filters"
      onClick={clearAllFilters}
    >
      <FunnelIcon className="w-5 h-5 text-gray-500" />
      <XMarkIcon className="w-4 h-4 text-red-500 absolute -top-1 -right-1" />
    </div>
  );
}
