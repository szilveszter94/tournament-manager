"use client";

import React, { createContext, useContext, useRef, useState } from "react";
import ConfirmModal from "../ui/components/modal/common/confirm-modal";
import TwoOptionModal from "../ui/components/modal/common/two-option-modal";

// Confirm modal now returns 0 or 1
export type ConfirmModalOptions = {
  type: "confirm";
  title?: string;
  message?: string;
};

export type OptionModalOptions = {
  type: "option";
  title?: string;
  message?: string;
  option1: { label: string; value: number };
  option2: { label: string; value: number };
};

export type ModalOptions = ConfirmModalOptions | OptionModalOptions;

type ShowModalFn = {
  (opts: ConfirmModalOptions): Promise<number>;
  (opts: OptionModalOptions): Promise<number>;
};

const ModalContext = createContext<ShowModalFn | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [opts, setOpts] = useState<ModalOptions | null>(null);
  const resolverRef = useRef<((value: number) => void) | null>(null);

  const showModal: ShowModalFn = (options: ModalOptions) => {
    setOpts(options);
    setOpen(true);
    return new Promise<number>((resolve) => {
      resolverRef.current = resolve;
    });
  };

  const handleClose = () => {
    setOpen(false);
    if (!opts) return;
    resolverRef.current?.(0);
    resolverRef.current = null;
  };

  const handleSelect = (value: number) => {
    resolverRef.current?.(value);
    setOpen(false);
    resolverRef.current = null;
  };

  if (!opts) return <ModalContext.Provider value={showModal}>{children}</ModalContext.Provider>;

  return (
    <ModalContext.Provider value={showModal}>
      {children}
      {opts.type === "confirm" ? (
        <ConfirmModal
          open={open}
          onClose={handleClose}
          onConfirm={handleSelect}
          title={opts.title}
          message={opts.message}
        />
      ) : (
        <TwoOptionModal
          open={open}
          onClose={handleClose}
          onSelect={handleSelect}
          title={opts.title}
          message={opts.message}
          option1={opts.option1}
          option2={opts.option2}
        />
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
