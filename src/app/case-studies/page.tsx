import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { caseStudies } from "@/lib/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected client outcomes from Six Sigma South Africa. Real improvements in real organisations across banking, mining, logistics, manufacturing, and more.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Outcomes"
            title="Selected client outcomes"
            description="Real operational improvements in real organisations. Client details withheld where confidential."
          />
        </div>
      </section>

      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                  {cs.industry}
                </span>

                <div className="space-y-4">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted2">
                      Challenge
                    </p>
                    <p className="text-sm leading-relaxed text-muted">
                      {cs.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted2">
                      Approach
                    </p>
                    <p className="text-sm leading-relaxed text-muted">
                      {cs.approach}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-background/50 p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted2">
                      Result
                    </p>
                    <p className="text-sm leading-relaxed text-text">
                      {cs.result}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-muted2">
                  Client details withheld.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want results like these?"
        description="Every outcome above started with a conversation. Get in touch to discuss what Lean Six Sigma could do for your organisation."
        primaryCTA="Enquire Now"
        primaryHref="/contact"
        secondaryCTA="View Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
