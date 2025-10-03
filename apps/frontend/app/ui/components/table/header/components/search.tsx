import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

type SearchProps = {
  placeholder: string;
};

export default function Search({ placeholder }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      type="text"
      placeholder={`Search ${placeholder}`}
      onChange={(e) => handleSearch(e.target.value)}
      className="w-full rounded border border-secondary-border-color bg-secondary px-2 py-1 text-xs text-foreground placeholder-primary-border-color focus:border-secondary-border-color focus:outline-none"
    />
  );
}
