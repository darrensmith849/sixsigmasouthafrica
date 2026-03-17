"use client";

import Link from "next/link";
import { beltCourses } from "@/lib/data/courses";

const beltColors: Record<string, string> = {
  "white-belt": "bg-white/90",
  "yellow-belt": "bg-yellow-400",
  "green-belt": "bg-green-500",
  "black-belt": "bg-zinc-900 ring-1 ring-white/20",
};

export default function BeltPathway() {
  return (
    <div>
      {/* Desktop: horizontal connected timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-6 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40" />

          <div className="grid grid-cols-4 gap-6">
            {beltCourses.map((course, i) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group relative"
              >
                {/* Node */}
                <div className="relative z-10 mb-5 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-elevated transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(22,163,74,0.12)]">
                    <div
                      className={`h-4 w-4 rounded-full ${beltColors[course.slug]} transition-transform duration-300 group-hover:scale-125`}
                    />
                  </div>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-border bg-surface p-5 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-accent/25 group-hover:shadow-[0_4px_24px_rgba(22,163,74,0.06)]">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                      Level {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-medium text-muted2">
                      {course.isFree ? "Free" : course.duration}
                    </span>
                  </div>
                  <h3 className="mb-1.5 text-base font-semibold text-text">
                    {course.level}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted">
                    {course.tagline}
                  </p>
                  <ul className="mb-3 space-y-1">
                    {course.outcomes.slice(0, 2).map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                        <span className="text-xs leading-relaxed text-muted2">
                          {o}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className="text-xs font-medium text-accent transition-colors group-hover:text-accent2">
                    View course &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical connected pathway */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-accent/40" />

          <div className="space-y-6">
            {beltCourses.map((course, i) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group relative flex gap-5"
              >
                {/* Node */}
                <div className="relative z-10 flex shrink-0 items-start pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-elevated">
                    <div
                      className={`h-4 w-4 rounded-full ${beltColors[course.slug]}`}
                    />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-border bg-surface p-5 transition-colors group-hover:border-accent/25">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                      Level {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-medium text-muted2">
                      {course.isFree ? "Free" : course.duration}
                    </span>
                  </div>
                  <h3 className="mb-1 text-base font-semibold text-text">
                    {course.level}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {course.tagline}
                  </p>
                  <span className="mt-2 inline-block text-xs font-medium text-accent">
                    View course &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
