import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { courses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Which Course",
  description:
    "Find the right Lean Six Sigma course for your role, experience level, and objectives. Compare belt levels and specialist modules.",
};

export default function WhichCoursePage() {
  return (
    <>
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Course Finder"
            title="Which course is right for you?"
            description="Use this guide to find the programme that matches your role, experience level, and objectives."
          />
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h3 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted2">
            Quick Comparison
          </h3>

          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-2xl border border-border md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-widest text-muted2">
                    Course
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-widest text-muted2">
                    Duration
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-widest text-muted2">
                    Best For
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-widest text-muted2">
                    Delivery
                  </th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>
              <tbody>
                {courses.map((c) => (
                  <tr key={c.slug} className="border-b border-border/60 last:border-0">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-text">{c.level}</p>
                      <p className="text-xs text-accent">{c.tagline}</p>
                    </td>
                    <td className="px-5 py-4 text-muted">{c.duration}</td>
                    <td className="max-w-xs px-5 py-4 text-muted">
                      {c.forWho}
                    </td>
                    <td className="px-5 py-4 text-muted">
                      {c.delivery.join(", ")}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        href={`/courses/${c.slug}`}
                        className="text-xs font-medium text-accent hover:text-accent2"
                      >
                        Details &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {courses.map((c) => (
              <Link key={c.slug} href={`/courses/${c.slug}`}>
                <div className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/30">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-text">{c.level}</h3>
                    <span className="text-xs text-accent">{c.isFree ? "Free" : c.duration}</span>
                  </div>
                  <p className="mt-1 text-xs text-accent2">{c.tagline}</p>
                  <p className="mt-2 text-sm text-muted">{c.forWho}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guidance */}
      <section className="border-t border-border/60 bg-background-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            title="Not sure where to start?"
            description="Here are some common starting points based on your role and objectives."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-2 text-base font-semibold text-text">
                New to Six Sigma
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                Start with the free White Belt to understand the framework, then
                progress to Yellow Belt for foundational awareness.
              </p>
              <Link
                href="/courses/white-belt"
                className="text-xs font-medium text-accent hover:text-accent2"
              >
                Start with White Belt &rarr;
              </Link>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-2 text-base font-semibold text-text">
                Leading improvement projects
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                The Green Belt is for practitioners who will lead their own DMAIC
                projects and deliver measurable outcomes.
              </p>
              <Link
                href="/courses/green-belt"
                className="text-xs font-medium text-accent hover:text-accent2"
              >
                Explore Green Belt &rarr;
              </Link>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-2 text-base font-semibold text-text">
                Driving the programme
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                The Black Belt is for senior leaders who will coach teams, manage
                multiple projects, and drive organisational change.
              </p>
              <Link
                href="/courses/black-belt"
                className="text-xs font-medium text-accent hover:text-accent2"
              >
                Explore Black Belt &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Still not sure?"
        description="Get in touch and we will recommend the right starting point for your team."
        primaryCTA="Enquire Now"
        primaryHref="/contact"
        secondaryCTA="View All Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
