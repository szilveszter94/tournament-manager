"use client";

import { useState } from "react";
import Modal from "../base/modal";
import CustomButton from "../../custom-button/custom-button";

type TwoOptionModalProps<T> = {
  open: boolean;
  title?: string;
  message?: string;
  option1: { label: string; value: T };
  option2: { label: string; value: T };
  onClose: () => void;
  onSelect: (result: T) => void;
};

export default function TwoOptionModal<T>({
  open,
  title = "Choose an option",
  message = "Please select one of the options",
  option1,
  option2,
  onClose,
  onSelect,
}: TwoOptionModalProps<T>) {
  const [loading, setLoading] = useState(false);

  const handleSelect = (value: T) => {
    setLoading(true);
    onSelect(value);
    setLoading(false);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <p className="mb-6 text-sm text-muted-foreground">{message}</p>
      <div className="flex justify-end gap-3">
        <CustomButton variant="primary" onClick={() => handleSelect(option1.value)} disabled={loading}>
          {option1.label}
        </CustomButton>
        <CustomButton variant="primary" onClick={() => handleSelect(option2.value)} disabled={loading}>
          {option2.label}
        </CustomButton>
      </div>
    </Modal>
  );
}
