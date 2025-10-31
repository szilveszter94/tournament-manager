"use client";

import React, { createContext, useContext, useRef, useState } from "react";
import ConfirmModal from "../ui/components/modal/common/confirm-modal";

type ConfirmFn = (options?: { title?: string; message?: string }) => Promise<boolean>;

const ConfirmContext = createContext<ConfirmFn | null>(null);

export function ConfirmProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [opts, setOpts] = useState<{ title?: string; message?: string }>({});
  const resolverRef = useRef<((value: boolean) => void) | null>(null);

  const confirm: ConfirmFn = (options = {}) => {
    setOpts(options);
    setOpen(true);
    return new Promise<boolean>((resolve) => {
      resolverRef.current = resolve;
    });
  };

  const handleClose = () => {
    setOpen(false);
    resolverRef.current?.(false);
    resolverRef.current = null;
  };

  const handleConfirm = (result: boolean) => {
    setOpen(false);
    resolverRef.current?.(result);
    resolverRef.current = null;
  };

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      <ConfirmModal
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title={opts.title ?? "Are you sure?"}
        message={opts.message ?? "Do you want to continue?"}
      />
    </ConfirmContext.Provider>
  );
}

export function useConfirm(): ConfirmFn {
  const ctx = useContext(ConfirmContext);
  if (!ctx) {
    throw new Error("useConfirm must be used within ConfirmProvider");
  }
  return ctx;
}
