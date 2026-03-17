import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Six Sigma South Africa is the accredited training and certification arm of the 2KO group — Africa's leading Lean Six Sigma training partner.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="About"
            title="Africa's leading Six Sigma training partner"
            description="Six Sigma South Africa is the accredited training, certification, and consulting arm of the 2KO group. We have trained thousands of practitioners across Southern Africa in Lean Six Sigma methodology."
          />
        </div>
      </section>

      {/* Our story */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-text">
              Our approach
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                Most training providers deliver the curriculum and leave. We
                treat training as the beginning of improvement, not the end.
              </p>
              <p>
                Our programmes are built around live improvement projects with
                measurable outcomes. We focus on embedding change into how
                organisations actually operate — through SOPs, management
                routines, and governance structures — so that the capability is
                institutional, not individual.
              </p>
              <p>
                As part of the 2KO group, we combine training with consulting
                and systems capability. This means we can support organisations
                from initial awareness through to full-scale operational
                transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border/60 bg-background-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            title="What we stand for"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card
              number="01"
              title="Results, not reports"
              description="We measure by outcomes — operational improvement, financial returns, and sustained performance. Not slide decks and certificates."
            />
            <Card
              number="02"
              title="Permanence over performance"
              description="A good improvement project shows results. A great one locks them in permanently. We focus on building the management system, not just running the project."
            />
            <Card
              number="03"
              title="Honest scope"
              description="We start where the impact is clearest and the ROI is strongest. We do not oversell the engagement or overcomplicate the approach."
            />
            <Card
              number="04"
              title="Method over magic"
              description="Lean Six Sigma works because the methodology is sound. We apply it with discipline and rigour — no shortcuts, no theatre."
            />
          </div>
        </div>
      </section>

      {/* 2KO Group */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="2KO Group"
            title="Part of the wider 2KO ecosystem"
            description="Three entities, one operational improvement capability."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-2 text-base font-semibold text-text">
                2KO Africa
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Training and improvement delivery across Southern Africa.
                The group&apos;s delivery engine for operational excellence
                capability building.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-accent/40 bg-surface p-6">
              <h3 className="mb-2 text-base font-semibold text-text">
                Six Sigma South Africa
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Accredited Lean Six Sigma training, certification, and
                consulting. The group&apos;s credentialing and standards arm for
                operational excellence.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-2 text-base font-semibold text-text">
                2KO Systems
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Custom systems and intelligent automation for established
                businesses. The group&apos;s technology arm for operational
                digitisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reach */}
      <section className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold text-text">5,000+</p>
              <p className="mt-1 text-sm text-muted2">
                Practitioners trained
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-text">8</p>
              <p className="mt-1 text-sm text-muted2">
                Accredited programmes
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-text">5</p>
              <p className="mt-1 text-sm text-muted2">
                Classroom locations
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-text">10+</p>
              <p className="mt-1 text-sm text-muted2">
                Sectors served
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to work with us?"
        description="Whether you need training, consulting, or both — get in touch to discuss how we can support your operational improvement objectives."
        primaryCTA="Enquire Now"
        primaryHref="/contact"
        secondaryCTA="View Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
