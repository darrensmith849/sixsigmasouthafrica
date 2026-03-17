import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { beltCourses, specialistCourses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Accredited Lean Six Sigma courses from White Belt to Black Belt, plus specialist modules in Root Cause Analysis, Kaizen, 5S, and Statistics. Delivered online, virtually, and in the classroom.",
};

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Training"
            title="Lean Six Sigma courses"
            description="A structured certification pathway for individuals and teams. From free introductory awareness through to advanced Black Belt leadership — plus specialist modules for targeted capability."
          />
        </div>
      </section>

      {/* Belt programmes */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h3 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted2">
            Belt Programmes
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beltCourses.map((course) => (
              <Link key={course.slug} href={`/courses/${course.slug}`} className="group">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30">
                  <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                    {course.isFree ? "Free" : course.duration}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-text">
                    {course.level}
                  </h3>
                  <p className="mb-1 text-sm font-medium text-accent2">
                    {course.tagline}
                  </p>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                    {course.description}
                  </p>
                  <div className="mt-auto">
                    <p className="mb-2 text-xs text-muted2">
                      {course.delivery.join(" · ")}
                    </p>
                    <span className="text-xs font-medium text-accent transition-colors group-hover:text-accent2">
                      View course details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist modules */}
      <section className="border-t border-border/60 bg-background-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h3 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted2">
            Specialist Modules
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specialistCourses.map((course) => (
              <Link key={course.slug} href={`/courses/${course.slug}`} className="group">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30">
                  <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                    {course.duration}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-text">
                    {course.level}
                  </h3>
                  <p className="mb-1 text-sm font-medium text-accent2">
                    {course.tagline}
                  </p>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                    {course.description}
                  </p>
                  <div className="mt-auto">
                    <p className="mb-2 text-xs text-muted2">
                      {course.delivery.join(" · ")}
                    </p>
                    <span className="text-xs font-medium text-accent transition-colors group-hover:text-accent2">
                      View course details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure? */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <p className="text-base text-muted">
            Not sure which course is right?{" "}
            <Link href="/which-course" className="font-medium text-accent hover:text-accent2">
              Use our course finder &rarr;
            </Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to get started?"
        description="Enquire about individual bookings, corporate programmes, or group discounts."
        primaryCTA="Enquire Now"
        primaryHref="/contact"
        secondaryCTA="View Schedule"
        secondaryHref="/schedule"
      />
    </>
  );
}
