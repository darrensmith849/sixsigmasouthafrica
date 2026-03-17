"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    function handleMove(e: MouseEvent) {
      const rect = parent!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el!.style.setProperty("--gx", `${x}px`);
      el!.style.setProperty("--gy", `${y}px`);
      el!.style.opacity = "1";
    }

    function handleLeave() {
      el!.style.opacity = "0";
    }

    parent.addEventListener("mousemove", handleMove);
    parent.addEventListener("mouseleave", handleLeave);
    return () => {
      parent.removeEventListener("mousemove", handleMove);
      parent.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-0 hidden transition-opacity duration-500 md:block"
      style={{
        opacity: 0,
        background:
          "radial-gradient(600px circle at var(--gx, 50%) var(--gy, 50%), rgba(22, 163, 74, 0.06), transparent 50%)",
      }}
      aria-hidden="true"
    />
  );
}
