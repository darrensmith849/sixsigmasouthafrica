import Link from "next/link";

interface CourseDetailPanelProps {
  slug: string;
  level: string;
  tagline: string;
  forWho: string;
  outcomes: string[];
  duration: string;
  delivery: string[];
}

export default function CourseDetailPanel({
  slug,
  level,
  tagline,
  forWho,
  outcomes,
  duration,
  delivery,
}: CourseDetailPanelProps) {
  const leadOutcome = outcomes[0] ?? "Build practical improvement capability with measurable impact.";

  return (
    <div className="content-fade-in">
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted2">Course Decision Guide</p>

      <h2 className="mt-5 max-w-md text-3xl font-semibold tracking-tight text-text md:text-4xl">
        {level}
      </h2>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        {tagline}
      </p>

      <div className="mt-10 space-y-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted2">Who It Is For</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{forWho}</p>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted2">Leads To</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-text">{leadOutcome}</p>
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted2">Core Outcomes</p>
          <ul className="mt-3 space-y-2.5">
            {outcomes.slice(0, 3).map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-sm leading-relaxed text-muted">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted2">
        <span className="rounded-full border border-border/80 bg-surface/70 px-3 py-1.5">{duration}</span>
        <span className="rounded-full border border-border/80 bg-surface/70 px-3 py-1.5">{delivery.join(" • ")}</span>
      </div>

      <Link
        href={`/courses/${slug}`}
        className="mt-9 inline-block rounded-full border border-accent-border bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-accent2 hover:shadow-[0_0_20px_rgba(22,163,74,0.15)] active:scale-100 active:bg-accent-pressed"
      >
        View full course details
      </Link>
    </div>
  );
}
