"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string; // optional for navigation
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: ReactNode;
  iconSize?: number;
  className?: string;
  disabled?: boolean;
  isPending?: boolean;
};

export default function CustomButton({
  children,
  type = "button",
  onClick,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconSize = 5,
  className,
  disabled = false,
  isPending = false
}: ButtonProps) {
  const { pending } = useFormStatus();
  const router = useRouter();
  const formattedIconSize = `w-${iconSize} h-${iconSize}`;
  const baseStyles =
    "flex items-center justify-center gap-2 font-bold rounded-lg transition text-primary-text-color flex-1";
  const variantStyles = {
    primary: clsx(disabled && "bg-disabled", !disabled && "bg-primary hover:bg-on-primary"),
    secondary: clsx(disabled && "bg-disabled", !disabled && "bg-secondary hover:bg-on-secondary"),
    success: clsx(disabled && "bg-disabled", !disabled && "bg-green-primary hover:bg-green-secondary"),
    danger: clsx(disabled && "bg-disabled", !disabled && "bg-red-primary hover:bg-red-secondary"),
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-5 py-2 text-xl",
    xl: "px-6 py-3 text-2xl",
  };

  function handleClick() {
    if (disabled || pending || isPending) return;
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  }

  return (
    <button
      disabled={disabled || pending || isPending}
      type={type}
      onClick={handleClick}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled ? "cursor-auto" : "cursor-pointer",
        className
      )}>
      {icon && <span className={clsx(formattedIconSize)}>{icon}</span>}
      {pending || isPending ? (
        <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-secondary animate-spin"></div>
      ) : (
        children && children
      )}
    </button>
  );
}
