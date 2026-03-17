import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Accreditation",
  description:
    "Six Sigma South Africa sets the standards for Lean Six Sigma accreditation and certification in Africa. CSSC-accredited, SETA-structured, with Recognition of Prior Learning pathways.",
};

export default function AccreditationPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Accreditation"
            title="Credentials that carry weight"
            description="Six Sigma South Africa sets the standards for Lean Six Sigma accreditation and certification in South Africa and the rest of Africa."
          />
        </div>
      </section>

      {/* Accreditation pillars */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card
              number="01"
              title="CSSC Accredited"
              description="Our programmes are accredited through the Council for Six Sigma Certification (CSSC), providing internationally recognised certification for all belt levels."
            />
            <Card
              number="02"
              title="SETA-Structured"
              description="Training programmes are structured to support Skills Development Levy claims under the relevant SETAs. We provide the documentation required for submission."
            />
            <Card
              number="03"
              title="Evidence-Led Certification"
              description="Certification is earned through live improvement projects with measurable outcomes — not just written exams. This ensures that certified practitioners can deliver real results."
            />
            <Card
              number="04"
              title="Recognition of Prior Learning"
              description="For experienced practitioners who have been applying Lean Six Sigma but do not hold formal certification, we offer a portfolio-based RPL pathway against our certification criteria."
            />
          </div>
        </div>
      </section>

      {/* Certification standards */}
      <section className="border-t border-border/60 bg-background-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            title="What our accreditation means"
            description="Our certification standards are aligned with internationally recognised quality frameworks. Here is what each belt level requires."
          />

          <div className="space-y-6">
            {[
              {
                belt: "White Belt",
                requirements:
                  "Online self-study with knowledge assessment. No project requirement. Free to complete.",
              },
              {
                belt: "Yellow Belt",
                requirements:
                  "Completion of a 2-day programme covering DMAIC fundamentals, waste identification, and basic improvement tools. Assessment via knowledge check.",
              },
              {
                belt: "Green Belt",
                requirements:
                  "Completion of a 5-day programme plus a live improvement project demonstrating full DMAIC application. Project must show measurable operational or financial outcomes.",
              },
              {
                belt: "Black Belt",
                requirements:
                  "Completion of a 10+ day advanced programme plus a complex improvement project. Must demonstrate coaching capability, advanced statistical analysis, and organisational change management.",
              },
            ].map((item) => (
              <div
                key={item.belt}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="mb-2 text-base font-semibold text-text">
                  {item.belt}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.requirements}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer value */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            title="Value for employers"
            description="Investing in accredited Six Sigma training delivers measurable returns."
          />

          <div className="mx-auto grid max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
            {[
              "Skills Development Levy claims through SETA alignment",
              "Internationally recognised credentials for your team",
              "Evidence-based certification that proves capability",
              "Structured improvement methodology embedded in your operations",
              "RPL pathways for experienced practitioners",
              "Corporate programmes tailored to your sector and context",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-border/60 p-5 sm:[&:nth-child(odd)]:border-r"
              >
                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <p className="text-sm text-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Questions about accreditation?"
        description="Contact us for more detail on certification standards, SETA alignment, or Recognition of Prior Learning pathways."
        primaryCTA="Enquire Now"
        primaryHref="/contact"
        secondaryCTA="View Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
