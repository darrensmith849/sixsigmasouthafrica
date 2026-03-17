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
    <div className={`rounded-2xl border transition-colors duration-300 ${
      isOpen ? "border-accent/30 bg-surface-elevated" : "border-border bg-surface"
    }`}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div className={`h-2.5 w-2.5 shrink-0 rounded-full transition-colors duration-300 ${
            isOpen ? "bg-accent2" : "bg-muted2/40"
          }`} />
          <div>
            <p className="text-sm font-semibold text-text">{course.level}</p>
            <p className="text-xs text-accent2">{course.tagline}</p>
          </div>
        </div>
        <span className="text-xs text-muted2">{course.duration}</span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="border-t border-border/60 px-5 pb-5 pt-4">
          <p className="text-sm leading-relaxed text-muted">{course.description}</p>

          <div className="mt-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted2">
              Who it&rsquo;s for
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{course.forWho}</p>
          </div>

          <div className="mt-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted2">
              Key outcomes
            </h4>
            <ul className="mt-2 space-y-2">
              {course.outcomes.slice(0, 3).map((outcome) => (
                <li key={outcome} className="flex items-start gap-2.5">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm leading-relaxed text-muted">{outcome}</p>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="mt-5 inline-block rounded-full border border-accent-border bg-accent px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-accent2 active:bg-accent-pressed"
          >
            View full details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function MobileCourseCards({ courses }: MobileCourseCardsProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {courses.map((course, i) => (
        <MobileCard
          key={course.slug}
          course={course}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
