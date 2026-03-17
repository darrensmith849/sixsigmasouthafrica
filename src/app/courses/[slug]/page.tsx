import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import { courses, getCourseBySlug } from "@/lib/data/courses";

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.level} Course`,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <>
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-4">
            <Link
              href="/courses"
              className="text-sm text-muted transition-colors hover:text-text"
            >
              &larr; All courses
            </Link>
          </div>

          <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            {course.category === "belt" ? "Belt Programme" : "Specialist Module"}
          </span>

          <h1 className="text-3xl font-semibold tracking-tight text-text md:text-4xl lg:text-5xl">
            {course.level}
          </h1>

          <p className="mt-2 text-lg font-medium text-accent2">
            {course.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {course.description}
          </p>

          {/* Quick facts */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted2">
                Duration
              </p>
              <p className="mt-2 text-base font-semibold text-text">
                {course.duration}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted2">
                Delivery
              </p>
              <p className="mt-2 text-base font-semibold text-text">
                {course.delivery.join(", ")}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted2">
                Investment
              </p>
              <p className="mt-2 text-base font-semibold text-text">
                {course.isFree ? "Free" : "Contact for pricing"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-t border-border/60 bg-background-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-text">
                What you will learn
              </h2>
              <ul className="space-y-4">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <p className="text-sm leading-relaxed text-muted">
                      {outcome}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-text">
                Who should attend
              </h2>
              <p className="text-sm leading-relaxed text-muted">
                {course.forWho}
              </p>

              <h2 className="mb-6 mt-10 text-2xl font-semibold tracking-tight text-text">
                Delivery options
              </h2>
              <ul className="space-y-3">
                {course.delivery.map((mode) => (
                  <li key={mode} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <p className="text-sm text-muted">{mode}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Interested in the ${course.level}?`}
        description="Get in touch to discuss dates, delivery mode, group bookings, or corporate programme options."
        primaryCTA="Enquire Now"
        primaryHref="/contact"
        secondaryCTA="View Schedule"
        secondaryHref="/schedule"
      />
    </>
  );
}
