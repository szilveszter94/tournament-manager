"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavSettings from "./nav-settings";
import { navItems } from "./nav-items";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeMobileMenu() {
      setIsOpen(false);
    }

    window.addEventListener("resize", closeMobileMenu);
    return () => {
      window.removeEventListener("resize", closeMobileMenu);
    };
  }, []);

  return (
    <nav className="bg-background text-foreground border-b border-primary-border-color">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-3.png"
                alt="Tournament Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">Tournament Simulator</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-on-foreground font-bold text-lg"
              >
                {item.label}
              </Link>
            ))}
            <NavSettings />
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-on-secondary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background px-2 pt-2 pb-3">
          {/* Top row with Settings */}
          <div className="flex justify-end mb-3">
            <NavSettings />
          </div>

          {/* Nav items list */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md hover:bg-on-secondary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
