import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import HowWeWorkStrip from "@/components/consulting/HowWeWorkStrip";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Operational improvement consulting from Six Sigma South Africa. Hands-on deployment support, project coaching, management-system embedding, and programme design.",
};

export default function ConsultingPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Consulting"
            title="Operational improvement consulting"
            description="For organisations that want hands-on support beyond training. We help you deploy, embed, and sustain structured improvement across your operations."
          />
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h3 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted2">
            What We Deliver
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card
              number="01"
              title="Rapid diagnostics"
              description="A focused assessment to identify your highest-value improvement opportunities, map current-state processes, and define the business case for change. Typically completed in two weeks."
            />
            <Card
              number="02"
              title="Deployment support"
              description="Hands-on project coaching alongside your teams. We help scope, plan, and execute DMAIC improvement projects with measurable financial and operational outcomes."
            />
            <Card
              number="03"
              title="Management-system embedding"
              description="We help you build the SOPs, KPIs, management routines, and governance structures that sustain improvement after the project ends. The capability stays institutional, not individual."
            />
            <Card
              number="04"
              title="Programme design"
              description="For organisations rolling out Lean Six Sigma at scale. We design the belt deployment strategy, project pipeline, champion structure, and reporting framework."
            />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-border/60 bg-background-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            title="How we work"
            description="A structured, low-risk approach to operational improvement."
          />

          <HowWeWorkStrip />
        </div>
      </section>

      {/* When to engage */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            title="When consulting makes sense"
            description="Training builds capability. Consulting builds outcomes. Consider consulting when you need:"
          />

          <div className="mx-auto grid max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
            {[
              "A clear business case for your improvement initiative",
              "Hands-on project coaching alongside your teams",
              "Help designing a multi-project CI programme",
              "Sustained change, not just a training event",
              "External facilitation for Kaizen events",
              "Management-system and SOP development support",
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
        title="Ready to talk about improvement?"
        description="Start with a conversation. We will assess your situation and recommend the right engagement model — whether that is training, consulting, or a combined approach."
        primaryCTA="Enquire Now"
        primaryHref="/contact"
        secondaryCTA="View Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
