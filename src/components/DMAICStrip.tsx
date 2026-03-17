const phases = [
  {
    letter: "D",
    name: "Define",
    description: "Identify the problem, scope, and business case.",
  },
  {
    letter: "M",
    name: "Measure",
    description: "Quantify current performance with data.",
  },
  {
    letter: "A",
    name: "Analyse",
    description: "Find root causes through statistical analysis.",
  },
  {
    letter: "I",
    name: "Improve",
    description: "Implement and test targeted solutions.",
  },
  {
    letter: "C",
    name: "Control",
    description: "Sustain gains with monitoring and standards.",
  },
];

export default function DMAICStrip() {
  return (
    <div>
      {/* Desktop: horizontal connected strip */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-gradient-to-r from-accent/50 via-accent/30 to-accent/50" />

          <div className="grid grid-cols-5 gap-4">
            {phases.map((phase, i) => (
              <div key={phase.letter} className="relative text-center">
                {/* Circle node */}
                <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-surface-elevated transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_24px_rgba(22,163,74,0.1)]">
                  <span className="text-xl font-bold text-accent">
                    {phase.letter}
                  </span>
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
            ))}
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
                <div className="pt-1.5">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
