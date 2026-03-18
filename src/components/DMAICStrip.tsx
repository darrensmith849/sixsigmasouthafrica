"use client";

import { useRef, useState } from "react";
import DMAICPhaseIcon from "./dmaic/DMAICPhaseIcon";
import DMAICFrameworkVisual from "./dmaic/DMAICFrameworkVisual";

const phases = [
  {
    letter: "D",
    name: "Define",
    phase: "define" as const,
    description: "Identify the problem, scope, and business case.",
    detail: "Clarify objectives, constraints, and stakeholder alignment before solution design.",
  },
  {
    letter: "M",
    name: "Measure",
    phase: "measure" as const,
    description: "Quantify current performance with data.",
    detail: "Establish baseline process capability, defects, variation, and key input measures.",
  },
  {
    letter: "A",
    name: "Analyse",
    phase: "analyse" as const,
    description: "Find root causes through statistical analysis.",
    detail: "Isolate high-impact drivers using structured diagnostics and verified evidence.",
  },
  {
    letter: "I",
    name: "Improve",
    phase: "improve" as const,
    description: "Implement and test targeted solutions.",
    detail: "Deploy countermeasures, validate gains, and scale repeatable process changes.",
  },
  {
    letter: "C",
    name: "Control",
    phase: "control" as const,
    description: "Sustain gains with monitoring and standards.",
    detail: "Lock in outcomes with governance, control plans, and operational ownership.",
  },
];

export default function DMAICStrip() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visualPointer, setVisualPointer] = useState({ x: 0, y: 0 });
  const visualRef = useRef<HTMLDivElement>(null);

  const displayIndex = hoveredIndex ?? activeIndex;
  const activePhase = phases[displayIndex];

  function handleVisualMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = visualRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setVisualPointer({ x, y });
  }

  function resetVisualMove() {
    setVisualPointer({ x: 0, y: 0 });
  }

  return (
    <div>
      <div className="hidden md:block">
        <div className="relative overflow-hidden rounded-[30px] border border-border/70 bg-background-secondary px-8 py-9">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(650px circle at 18% -20%, rgba(22,163,74,0.12), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
            }}
          />

          <div className="relative z-10">
            <div className="relative mb-10">
              <div className="absolute left-[7%] right-[7%] top-8 h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />
              <div
                className="absolute left-[7%] top-8 h-px bg-gradient-to-r from-accent2 to-accent2/20 transition-all duration-300 motion-reduce:transition-none"
                style={{ width: `calc(${(displayIndex / (phases.length - 1)) * 86}% + 2px)` }}
              />

              <div className="grid grid-cols-5 gap-4">
                {phases.map((phase, i) => {
                  const isDisplayed = displayIndex === i;
                  const isActive = activeIndex === i;

                  return (
                    <button
                      key={phase.letter}
                      onClick={() => setActiveIndex(i)}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative text-center focus-visible:outline-none"
                    >
                      <div
                        className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-300"
                        style={{
                          borderColor: isDisplayed ? "var(--accent-border)" : "rgba(255,255,255,0.16)",
                          background: isDisplayed ? "rgba(18,24,33,0.95)" : "rgba(13,17,23,0.75)",
                          boxShadow: isDisplayed ? "0 0 26px rgba(22,163,74,0.16)" : "none",
                        }}
                      >
                        <span className={`text-xl font-bold ${isDisplayed ? "text-accent2" : "text-muted2"}`}>{phase.letter}</span>
                      </div>

                      <div className="mb-2 flex justify-center">
                        <DMAICPhaseIcon phase={phase.phase} isHovered={isDisplayed} />
                      </div>

                      <p className={`text-sm font-semibold ${isDisplayed ? "text-text" : "text-muted2"}`}>{phase.name}</p>
                      <p className="mx-auto mt-1 max-w-[170px] text-xs leading-relaxed text-muted">{phase.description}</p>
                      {isActive && (
                        <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-accent2">Current focus</p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-surface/55 px-6 py-5">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 flex items-start gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/35 text-sm font-bold text-accent2">
                  {activePhase.letter}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted2">Active DMAIC Phase</p>
                    <h3 className="mt-2 text-lg font-semibold text-text">{activePhase.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{activePhase.detail}</p>
                  </div>
                </div>
                <div
                  className="col-span-5"
                  ref={visualRef}
                  onMouseMove={handleVisualMove}
                  onMouseLeave={resetVisualMove}
                >
                  <DMAICFrameworkVisual
                    phase={activePhase.phase}
                    hoverActive={hoveredIndex !== null}
                    pointerX={visualPointer.x}
                    pointerY={visualPointer.y}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 md:hidden">
        {phases.map((phase, i) => {
          const isOpen = activeIndex === i;

          return (
            <button
              key={phase.letter}
              onClick={() => setActiveIndex(i)}
              className="w-full rounded-2xl border border-border/70 bg-surface/65 p-4 text-left transition-colors duration-200"
              style={{ borderColor: isOpen ? "var(--accent-border)" : undefined }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/25 text-sm font-bold text-accent">
                    {phase.letter}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{phase.name}</p>
                    <p className="text-xs text-muted2">Phase {String(i + 1).padStart(2, "0")}</p>
                  </div>
                </div>
                <DMAICPhaseIcon phase={phase.phase} isHovered={isOpen} />
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted">{phase.description}</p>
              {isOpen && <p className="mt-2 text-xs leading-relaxed text-muted">{phase.detail}</p>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
