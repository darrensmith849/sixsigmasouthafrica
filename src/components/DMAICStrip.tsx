"use client";

import { useState } from "react";
import DMAICPhaseIcon from "./dmaic/DMAICPhaseIcon";

const phases = [
  {
    letter: "D",
    name: "Define",
    phase: "define" as const,
    description: "Identify the problem, scope, and business case.",
  },
  {
    letter: "M",
    name: "Measure",
    phase: "measure" as const,
    description: "Quantify current performance with data.",
  },
  {
    letter: "A",
    name: "Analyse",
    phase: "analyse" as const,
    description: "Find root causes through statistical analysis.",
  },
  {
    letter: "I",
    name: "Improve",
    phase: "improve" as const,
    description: "Implement and test targeted solutions.",
  },
  {
    letter: "C",
    name: "Control",
    phase: "control" as const,
    description: "Sustain gains with monitoring and standards.",
  },
];

export default function DMAICStrip() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Desktop: horizontal connected strip */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-gradient-to-r from-accent/50 via-accent/30 to-accent/50" />

          <div className="grid grid-cols-5 gap-4">
            {phases.map((phase, i) => {
              const isHovered = hoveredIndex === i;
              const hasSomeHovered = hoveredIndex !== null;
              const dimmed = hasSomeHovered && !isHovered;

              return (
                <div
                  key={phase.letter}
                  className="relative text-center"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                    opacity: dimmed ? 0.7 : 1,
                    transition: "transform 300ms ease, opacity 300ms ease",
                  }}
                >
                  {/* Circle node */}
                  <div
                    className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border bg-surface-elevated transition-all duration-300"
                    style={{
                      borderColor: isHovered
                        ? "var(--accent-border)"
                        : "rgba(22, 163, 74, 0.3)",
                      boxShadow: isHovered
                        ? "0 0 24px rgba(22, 163, 74, 0.15)"
                        : "none",
                    }}
                  >
                    <span className="text-xl font-bold text-accent">
                      {phase.letter}
                    </span>
                  </div>

                  {/* Phase icon */}
                  <div className="mx-auto mb-2 flex h-6 w-6 items-center justify-center">
                    <DMAICPhaseIcon phase={phase.phase} isHovered={isHovered} />
                  </div>

                  {/* Phase label */}
                  <h3 className="mb-1.5 text-sm font-semibold text-text">
                    {phase.name}
                  </h3>
                  <p className="mx-auto max-w-[180px] text-xs leading-relaxed text-muted">
                    {phase.description}
                  </p>

                  {/* Step indicator */}
                  <p className="mt-3 text-[10px] font-medium uppercase tracking-widest text-muted2">
                    Phase {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: vertical connected strip */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/30 to-accent/50" />

          <div className="space-y-6">
            {phases.map((phase, i) => (
              <div key={phase.letter} className="relative flex gap-4">
                {/* Circle node */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface-elevated">
                  <span className="text-sm font-bold text-accent">
                    {phase.letter}
                  </span>
                </div>

                {/* Content */}
                <div className="flex items-start gap-3 pt-1.5">
                  {/* Static icon on mobile */}
                  <div className="mt-0.5 shrink-0 opacity-50">
                    <DMAICPhaseIcon phase={phase.phase} isHovered={false} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-text">
                        {phase.name}
                      </h3>
                      <span className="text-[10px] font-medium text-muted2">
                        Phase {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
