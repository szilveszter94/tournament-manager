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

type ModalContextType = {
  showModal: ShowModalFn;
  showModalWithClose: ShowModalFn;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [opts, setOpts] = useState<ModalOptions | null>(null);
  const resolverRef = useRef<((value: number) => void) | null>(null);
  const manualCloseRef = useRef(false);

  const showModal: ShowModalFn = (options: ModalOptions) => {
    manualCloseRef.current = false;
    setOpts(options);
    setOpen(true);
    return new Promise<number>((resolve) => {
      resolverRef.current = resolve;
    });
  };

  const showModalWithClose: ShowModalFn = (options: ModalOptions) => {
    manualCloseRef.current = true;
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
    manualCloseRef.current = false;
  };

  const handleSelect = (value: number) => {
    resolverRef.current?.(value);
    if (!manualCloseRef.current) {
      setOpen(false);
      resolverRef.current = null;
    }
  };

  const contextValue: ModalContextType = {
    showModal,
    showModalWithClose,
    closeModal: handleClose,
  };

  if (!opts) return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {opts.type === "confirm" ? (
        <ConfirmModal
          open={open}
          onClose={handleClose}
          onConfirm={handleSelect}
          title={opts.title}
          message={opts.message}
          autoClose={!manualCloseRef.current}
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
          autoClose={!manualCloseRef.current}
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
