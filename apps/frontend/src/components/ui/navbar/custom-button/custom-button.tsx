"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string; // optional for navigation
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: ReactNode;
  iconSize?: number;
  className?: string;
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
}: ButtonProps) {
  const router = useRouter();
  const formattedIconSize = `w-${iconSize} h-${iconSize}`;
  const baseStyles =
    "flex items-center justify-center gap-2 font-bold rounded-lg transition text-primary-text-color flex-1";
  const variantStyles = {
    primary: "bg-primary hover:bg-on-primary",
    secondary: "bg-secondary hover:bg-on-secondary",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-5 py-2 text-xl",
    xl: "px-6 py-3 text-2xl",
  };

  function handleClick() {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && (
        <span className={clsx(formattedIconSize)}>
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
