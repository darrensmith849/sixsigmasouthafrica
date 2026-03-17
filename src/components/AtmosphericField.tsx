"use client";

import { useEffect, useRef } from "react";

/**
 * Silent atmospheric visual — layered, slow-drifting green-tinted gradients.
 * Pure CSS animation, ZERO audio, respects prefers-reduced-motion.
 * Degrades to a static subtle gradient on mobile / reduced-motion.
 */
export default function AtmosphericField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced && ref.current) {
      // Kill all animation, show static fallback
      ref.current.style.animationPlayState = "paused";
      const children = ref.current.querySelectorAll("[data-atmo-layer]");
      children.forEach((child) => {
        (child as HTMLElement).style.animationPlayState = "paused";
      });
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Layer 1: Large slow-drifting orb — top-left bias */}
      <div
        data-atmo-layer
        className="absolute -top-1/4 -left-1/4 h-[120%] w-[120%] animate-[atmo-drift-1_45s_ease-in-out_infinite] opacity-[0.035]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(22,163,74,1), transparent 70%)",
        }}
      />
      {/* Layer 2: Medium orb — centre-right drift */}
      <div
        data-atmo-layer
        className="absolute -top-1/3 -right-1/4 h-[130%] w-[130%] animate-[atmo-drift-2_55s_ease-in-out_infinite] opacity-[0.025]"
        style={{
          background:
            "radial-gradient(ellipse 45% 55% at 65% 45%, rgba(22,163,74,1), transparent 65%)",
        }}
      />
      {/* Layer 3: Subtle lower accent — very slow */}
      <div
        data-atmo-layer
        className="absolute -bottom-1/4 left-0 h-[100%] w-[100%] animate-[atmo-drift-3_65s_ease-in-out_infinite] opacity-[0.02] hidden md:block"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 80%, rgba(22,163,74,1), transparent 60%)",
        }}
      />
    </div>
  );
}
