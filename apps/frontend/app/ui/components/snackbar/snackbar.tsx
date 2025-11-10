"use client";
import { useSelector, useDispatch } from "react-redux";
import { hideSnackbar } from "@/app/store/features/snackbar/snackbarSlice";
import { useEffect } from "react";
import { RootState } from "@/app/store/store";
import { XMarkIcon } from "@heroicons/react/16/solid";

export default function Snackbar() {
  const dispatch = useDispatch();
  const { open, message, type } = useSelector((state: RootState) => state.snackbar);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => dispatch(hideSnackbar()), 3000);
      return () => clearTimeout(timer);
    }
  }, [open, dispatch]);

  const onClose = () => {
    dispatch(hideSnackbar());
  };

  if (!open) return null;

  const bgColor =
    type === "success"
      ? "bg-green-primary"
      : type === "error"
        ? "bg-red-primary"
        : type === "warning"
          ? "bg-yellow-primary"
          : "bg-blue-primary";

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg text-foreground shadow-lg transition-all flex items-center gap-3 ${bgColor}`}>
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 cursor-pointer rounded-full hover:bg-on-foreground transition p-1">
        <XMarkIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
