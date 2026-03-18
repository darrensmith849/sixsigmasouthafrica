"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";

interface MobileCourse {
  slug: string;
  level: string;
  tagline: string;
  duration: string;
  delivery: string[];
  forWho: string;
  outcomes: string[];
  description: string;
}

interface MobileCourseCardsProps {
  courses: MobileCourse[];
}

function MobileCard({
  course,
  isOpen,
  onToggle,
}: {
  course: MobileCourse;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const measure = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measure();
  }, [measure]);

  return (
    <section className="border-b border-border/70 pb-5">
      <button onClick={onToggle} className="flex w-full items-start justify-between gap-4 py-4 text-left">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted2">Pathway</p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-text">{course.level}</p>
          <p className="mt-1 text-sm text-accent2">{course.tagline}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3 pt-1">
          <span className="text-[11px] text-muted2">{course.duration}</span>
          <span
            className="h-7 w-7 rounded-full border border-border/80 bg-surface-elevated text-center text-lg leading-[26px] text-muted2"
            aria-hidden="true"
          >
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden motion-reduce:transition-none"
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 280ms ease, opacity 220ms ease",
        }}
      >
        <div className="pt-1">
          <p className="text-sm leading-relaxed text-muted">{course.description}</p>

          <div className="mt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted2">Who It Is For</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{course.forWho}</p>
          </div>

          <div className="mt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted2">Core Outcomes</p>
            <ul className="mt-2 space-y-2.5">
              {course.outcomes.slice(0, 3).map((outcome) => (
                <li key={outcome} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-muted">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-muted2">
            <span className="rounded-full border border-border/70 px-3 py-1.5">{course.duration}</span>
            <span className="rounded-full border border-border/70 px-3 py-1.5">{course.delivery.join(" • ")}</span>
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="mt-5 inline-block rounded-full border border-accent-border bg-accent px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-accent2 active:bg-accent-pressed"
          >
            View full details
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function MobileCourseCards({ courses }: MobileCourseCardsProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-background-secondary px-5 pb-2 pt-2">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(500px circle at 80% -20%, rgba(22,163,74,0.1), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
        }}
      />
      <div className="relative z-10">
        {courses.map((course, i) => (
          <MobileCard
            key={course.slug}
            course={course}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </div>
  );
}
