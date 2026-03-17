const stages = [
  {
    step: "01",
    title: "Train",
    description: "Accredited Lean Six Sigma programmes tailored to your team and sector.",
    stat: "8",
    statLabel: "Programmes",
  },
  {
    step: "02",
    title: "Apply",
    description: "Live improvement projects embedded in your real operations from day one.",
    stat: "100%",
    statLabel: "Project-based",
  },
  {
    step: "03",
    title: "Measure",
    description: "Data-driven validation of outcomes with statistical rigour.",
    stat: "5 000+",
    statLabel: "Practitioners",
  },
  {
    step: "04",
    title: "Impact",
    description: "Sustained operational gains that compound across your organisation.",
    stat: "10+",
    statLabel: "Sectors served",
  },
];

export default function TransformationFlow() {
  return (
    <div>
      {/* Desktop: horizontal connected flow */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40" />

          <div className="grid grid-cols-4 gap-5">
            {stages.map((stage) => (
              <div key={stage.step} className="relative text-center">
                {/* Step number node */}
                <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-surface-elevated">
                  <span className="text-xs font-bold text-accent">{stage.step}</span>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <h3 className="mb-2 text-lg font-semibold text-text">
                    {stage.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {stage.description}
                  </p>
                  <div className="border-t border-border/60 pt-3">
                    <p className="text-2xl font-semibold text-accent">
                      {stage.stat}
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-muted2">
                      {stage.statLabel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-accent/40" />

          <div className="space-y-5">
            {stages.map((stage) => (
              <div key={stage.step} className="relative flex gap-4">
                {/* Node */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface-elevated">
                  <span className="text-xs font-bold text-accent">{stage.step}</span>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-border bg-surface p-4">
                  <h3 className="mb-1 text-base font-semibold text-text">
                    {stage.title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted">
                    {stage.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-semibold text-accent">
                      {stage.stat}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-muted2">
                      {stage.statLabel}
                    </span>
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
