"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/which-course", label: "Which Course" },
  { href: "/delivery", label: "Delivery" },
  { href: "/schedule", label: "Schedule" },
  { href: "/consulting", label: "Consulting" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-text">
          Six Sigma <span className="text-accent">South Africa</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full border border-accent-border bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent2 hover:shadow-[0_0_16px_rgba(22,163,74,0.15)] active:bg-accent-pressed"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-text transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-text transition-all ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-text transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background/98 px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-muted transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-block rounded-full border border-accent-border bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-accent2 hover:shadow-[0_0_16px_rgba(22,163,74,0.15)] active:bg-accent-pressed"
            >
              Enquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
