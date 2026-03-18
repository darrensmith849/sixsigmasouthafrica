"use client";

import { useState } from "react";

const phases = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "Identify the bottleneck, map the process, define the improvement target.",
  },
  {
    step: "02",
    title: "Scope",
    description:
      "Narrow to the highest-value use case with the clearest ROI path.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Deploy the improvement project with structured coaching and rigour.",
  },
  {
    step: "04",
    title: "Embed",
    description:
      "Build the standards, routines, and governance that make the change permanent.",
  },
  {
    step: "05",
    title: "Sustain",
    description:
      "Monitor, review, and extend over time with ongoing retainer support.",
  },
];

function PhaseVisual({ index, animated = false }: { index: number; animated?: boolean }) {
  const stroke = "var(--muted2)";
  const accent = "var(--accent2)";
  const anim = (name: string, duration: string, delay = "0s") =>
    animated ? `${name} ${duration} ease-in-out ${delay} infinite` : "none";

  if (index === 0) {
    return (
      <svg viewBox="0 0 220 140" fill="none" className="h-24 w-full" aria-hidden="true">
        <rect x="14" y="14" width="192" height="112" rx="14" stroke={stroke} strokeOpacity="0.45" />
        <circle cx="110" cy="70" r="30" stroke={accent} strokeOpacity="0.72" style={{ animation: anim("dmaic-pulse", "2.2s") }} />
        <circle cx="110" cy="70" r="14" stroke={accent} strokeOpacity="0.55" style={{ animation: anim("dmaic-pulse", "2.2s", "0.2s") }} />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 220 140" fill="none" className="h-24 w-full" aria-hidden="true">
        <rect x="14" y="14" width="192" height="112" rx="14" stroke={stroke} strokeOpacity="0.45" />
        <rect x="40" y="50" width="52" height="40" rx="6" stroke={accent} strokeOpacity="0.65" style={{ animation: anim("dmaic-rise-1", "1.9s") }} />
        <rect x="128" y="50" width="52" height="40" rx="6" stroke={accent} strokeOpacity="0.65" style={{ animation: anim("dmaic-rise-2", "1.9s", "0.1s") }} />
        <line x1="92" y1="70" x2="128" y2="70" stroke={stroke} strokeOpacity="0.5" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 220 140" fill="none" className="h-24 w-full" aria-hidden="true">
        <rect x="14" y="14" width="192" height="112" rx="14" stroke={stroke} strokeOpacity="0.45" />
        <polyline points="38,98 74,76 108,84 142,62 178,46" stroke={accent} strokeWidth="1.5" strokeOpacity="0.8" style={{ animation: anim("dmaic-drift", "2s") }} />
        <line x1="34" y1="104" x2="186" y2="104" stroke={stroke} strokeOpacity="0.45" />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg viewBox="0 0 220 140" fill="none" className="h-24 w-full" aria-hidden="true">
        <rect x="14" y="14" width="192" height="112" rx="14" stroke={stroke} strokeOpacity="0.45" />
        <circle cx="72" cy="70" r="16" stroke={accent} strokeOpacity="0.55" style={{ animation: anim("dmaic-lock", "2.1s") }} />
        <circle cx="110" cy="70" r="16" stroke={accent} strokeOpacity="0.72" style={{ animation: anim("dmaic-lock", "2.1s", "0.15s") }} />
        <circle cx="148" cy="70" r="16" stroke={accent} strokeOpacity="0.55" style={{ animation: anim("dmaic-lock", "2.1s", "0.3s") }} />
        <line x1="88" y1="70" x2="94" y2="70" stroke={accent} strokeOpacity="0.7" />
        <line x1="126" y1="70" x2="132" y2="70" stroke={accent} strokeOpacity="0.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 140" fill="none" className="h-24 w-full" aria-hidden="true">
      <rect x="14" y="14" width="192" height="112" rx="14" stroke={stroke} strokeOpacity="0.45" />
      <path d="M44 94 H176" stroke={stroke} strokeOpacity="0.35" strokeDasharray="3 5" />
      <rect x="54" y="66" width="26" height="28" rx="4" stroke={accent} strokeOpacity="0.55" style={{ animation: anim("dmaic-step-1", "2s") }} />
      <rect x="97" y="56" width="26" height="38" rx="4" stroke={accent} strokeOpacity="0.7" style={{ animation: anim("dmaic-step-2", "2s") }} />
      <rect x="140" y="46" width="26" height="48" rx="4" stroke={accent} strokeOpacity="0.85" style={{ animation: anim("dmaic-step-3", "2s") }} />
    </svg>
  );
}

export default function HowWeWorkStrip() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const previewIndex = hoveredIndex ?? activeIndex;
  const visiblePhase = phases[previewIndex];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background-secondary p-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(560px circle at 20% -30%, rgba(22,163,74,0.11), transparent 65%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
        }}
      />

      <div className="relative z-10 hidden md:block">
        <div className="relative mb-7">
          <div className="absolute left-[8%] right-[8%] top-6 h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />
          <div className="grid grid-cols-5 gap-4">
            {phases.map((phase, i) => {
              const isDisplayed = previewIndex === i;

              return (
                <button
                  key={phase.step}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(i)}
                  onBlur={() => setHoveredIndex(null)}
                  className="text-center"
                >
                  <div
                    className="relative z-10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border"
                    style={{
                      borderColor: isDisplayed ? "var(--accent-border)" : "rgba(255,255,255,0.16)",
                      boxShadow: isDisplayed ? "0 0 22px rgba(22,163,74,0.14)" : "none",
                    }}
                  >
                    <span className={`text-xs font-semibold ${isDisplayed ? "text-accent2" : "text-muted2"}`}>{phase.step}</span>
                  </div>
                  <p className={`text-sm font-semibold ${isDisplayed ? "text-text" : "text-muted2"}`}>{phase.title}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 rounded-2xl border border-white/[0.08] bg-surface/55 px-5 py-4">
          <div className="col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted2">Current Phase</p>
            <h3 className="mt-2 text-lg font-semibold text-text">{visiblePhase.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{visiblePhase.description}</p>
          </div>
          <div className="col-span-5">
            <PhaseVisual index={previewIndex} animated={hoveredIndex !== null} />
          </div>
        </div>
      </div>

      <div className="relative z-10 space-y-3 md:hidden">
        {phases.map((phase, i) => (
          <button
            key={phase.step}
            onClick={() => setActiveIndex(i)}
            className="w-full rounded-xl border border-border/70 bg-surface/70 px-4 py-3 text-left"
            style={{ borderColor: activeIndex === i ? "var(--accent-border)" : undefined }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-accent">{phase.step}</span>
              <span className="text-sm font-semibold text-text">{phase.title}</span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted">{phase.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
