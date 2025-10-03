import { Tournament } from "@/generated/api";
import {
  ArrowTopRightOnSquareIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

type TableBodyProps = {
  tournament: Tournament[];
};

export default function TableBody({ tournament }: TableBodyProps) {
  return (
    <tbody>
      {tournament?.map((t) => (
        <tr
          key={t.id}
          className="border-t border-primary-border-color hover:bg-on-secondary"
        >
          <td className="flex gap-3 justify-center py-2">
            <Link title="Open Tournament" href={`/tournament/${t.id}`}>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-icon" />
            </Link>
            <TrashIcon
              title="Delete Tournament"
              className="cursor-pointer w-5 h-5 text-red-500"
            />
          </td>
          <td className="border border-primary-border-color px-4 py-2">
            {t.name}
          </td>
          <td className="border border-primary-border-color px-4 py-2">
            {t.status}
          </td>
          <td className="border border-primary-border-color px-4 py-2">
            {t.type}
          </td>
          <td className="border border-primary-border-color px-4 py-2">
            {t.createdAt.split("T")[0]}
          </td>
          <td className="border border-primary-border-color px-4 py-2">
            {t.updatedAt.split("T")[0]}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
