import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { beltCourses, specialistCourses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Upcoming Six Sigma training dates for Lean Six Sigma certification courses across South Africa. Enquire about next available sessions.",
};

export default function SchedulePage() {
  return (
    <>
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Schedule"
            title="Upcoming training schedule"
            description="We run training programmes throughout the year across all delivery modes. Enquire for the next available dates."
          />
        </div>
      </section>

      {/* Schedule grid */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h3 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted2">
            Belt Programmes
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {beltCourses.map((course) => (
              <div
                key={course.slug}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-text">
                      {course.level}
                    </h3>
                    <p className="mt-1 text-sm text-accent2">
                      {course.duration} · {course.delivery.join(", ")}
                    </p>
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {course.isFree ? "Free" : "Enquire"}
                  </span>
                </div>

                <div className="mt-4 rounded-xl border border-border/60 bg-background/50 p-4">
                  <p className="text-sm text-muted">
                    Next sessions available on request. We run regular cohorts
                    across all delivery modes — contact us for the next
                    available dates.
                  </p>
                </div>

                <div className="mt-4 flex gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full border border-accent-border bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent2 hover:text-black"
                  >
                    Request Dates
                  </Link>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-text transition-colors hover:border-accent/40 hover:bg-white/5"
                  >
                    Course Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mb-8 mt-14 text-xs font-semibold uppercase tracking-widest text-muted2">
            Specialist Modules
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {specialistCourses.map((course) => (
              <div
                key={course.slug}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-text">
                      {course.level}
                    </h3>
                    <p className="mt-1 text-sm text-accent2">
                      {course.duration} · {course.delivery.join(", ")}
                    </p>
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Enquire
                  </span>
                </div>

                <div className="mt-4 rounded-xl border border-border/60 bg-background/50 p-4">
                  <p className="text-sm text-muted">
                    Scheduled on demand for groups and individuals. Contact us
                    with your preferred dates and delivery mode.
                  </p>
                </div>

                <div className="mt-4 flex gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full border border-accent-border bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent2 hover:text-black"
                  >
                    Request Dates
                  </Link>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-text transition-colors hover:border-accent/40 hover:bg-white/5"
                  >
                    Course Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group training */}
      <section className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h3 className="text-lg font-semibold text-text">
            Need dedicated dates for your team?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            We regularly run corporate programmes with custom scheduling. Get in
            touch to discuss dedicated cohort dates, on-site delivery, or
            blended programmes tailored to your operational calendar.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="rounded-full border border-accent-border bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent2 hover:text-black"
            >
              Request Group Training
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer to discuss first?"
        description="Call us on 021 426 5300 or submit an enquiry. We will recommend the right programme and schedule for your needs."
        primaryCTA="Enquire Now"
        primaryHref="/contact"
        secondaryCTA="Which Course?"
        secondaryHref="/which-course"
      />
    </>
  );
}
