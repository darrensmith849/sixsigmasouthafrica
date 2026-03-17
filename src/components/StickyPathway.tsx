"use client";

import Link from "next/link";
import { beltCourses } from "@/lib/data/courses";

export default function StickyPathway() {
  return (
    <>
      {/* Desktop: sticky storytelling */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-5 gap-8">
          {/* Sticky left column */}
          <div className="col-span-2">
            <div className="sticky top-28">
              <span className="mb-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                Training Pathway
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
                From awareness to advanced leadership
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                A structured certification pathway for individuals and teams at
                every level. Start free, build capability, and lead operational
                improvement.
              </p>
              <div className="mt-8">
                <Link
                  href="/which-course"
                  className="text-sm font-medium text-accent transition-colors hover:text-accent2"
                >
                  Not sure where to start? &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Scrolling right column */}
          <div className="col-span-3 space-y-6">
            {beltCourses.map((course, i) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group block"
              >
                <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_4px_24px_rgba(22,163,74,0.06)]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted2">
                      {course.isFree ? "Free" : course.duration}
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-text">
                    {course.level}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-accent/80">
                    {course.tagline}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {course.description}
                  </p>
                  <ul className="space-y-1.5">
                    {course.outcomes.slice(0, 3).map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                        <span className="text-xs leading-relaxed text-muted2">
                          {o}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs font-medium text-accent transition-colors group-hover:text-accent2">
                    View full course &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet & mobile: clean stacked layout */}
      <div className="lg:hidden">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            Training Pathway
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-text">
            From awareness to advanced leadership
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
            A structured certification pathway for individuals and teams at
            every level. Start free, build capability, and lead operational
            improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {beltCourses.map((course, i) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group"
            >
              <div className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/25">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft text-[10px] font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted2">
                    {course.isFree ? "Free" : course.duration}
                  </span>
                </div>
                <h3 className="mb-1 text-base font-semibold text-text">
                  {course.level}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {course.tagline}
                </p>
                <p className="mt-3 text-xs font-medium text-accent">
                  View course &rarr;
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/which-course"
            className="text-sm font-medium text-accent transition-colors hover:text-accent2"
          >
            Not sure where to start? &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
