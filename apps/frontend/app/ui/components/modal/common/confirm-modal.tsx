"use client";

import { useState } from "react";
import Modal from "../base/modal";
import CustomButton from "../../custom-button/custom-button";

type ConfirmModalProps = {
  open: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
  onConfirm: (result: boolean) => void; // true for Yes, false for No
};

export default function ConfirmModal({
  open,
  title = "Are you sure?",
  message = "Do you want to continue?",
  onClose,
  onConfirm,
}: ConfirmModalProps) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = (result: boolean) => {
    setLoading(true);
    onConfirm(result);
    setLoading(false);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <p className="mb-6 text-sm text-muted-foreground">{message}</p>
      <div className="flex justify-end gap-3">
        <CustomButton variant="secondary" onClick={() => handleConfirm(false)} disabled={loading}>
          No
        </CustomButton>
        <CustomButton variant="primary" onClick={() => handleConfirm(true)} disabled={loading}>
          Yes
        </CustomButton>
      </div>
    </Modal>
  );
}
