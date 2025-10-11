import { Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

type DropdownTransitionProps = {
  children: ReactNode;
};

export default function DropdownTransition({
  children,
}: DropdownTransitionProps) {
  return (
    <Transition
      as={Fragment}
      enter="transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      enterFrom="opacity-0 scale-95 translate-y-2"
      enterTo="opacity-100 scale-100 translate-y-0"
      leave="transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
      leaveFrom="opacity-100 scale-100 translate-y-0"
      leaveTo="opacity-0 scale-95 translate-y-2"
    >
      {children}
    </Transition>
  );
}
