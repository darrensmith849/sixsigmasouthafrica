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
  return (
    <div className="content-fade-in">
      <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
        Course Finder
      </span>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text md:text-3xl">
        {level}
      </h2>

      <p className="mt-2 text-sm text-accent2">{tagline}</p>

      <div className="mt-6">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-muted2">
          Who it&rsquo;s for
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{forWho}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-muted2">
          Key outcomes
        </h3>
        <ul className="mt-3 space-y-2.5">
          {outcomes.slice(0, 3).map((outcome) => (
            <li key={outcome} className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <p className="text-sm leading-relaxed text-muted">{outcome}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted2">
        <span>{duration}</span>
        <span className="text-border">|</span>
        <span>{delivery.join(", ")}</span>
      </div>

      <Link
        href={`/courses/${slug}`}
        className="mt-8 inline-block rounded-full border border-accent-border bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-accent2 hover:shadow-[0_0_20px_rgba(22,163,74,0.15)] active:scale-100 active:bg-accent-pressed"
      >
        View full course details
      </Link>
    </div>
  );
}
