import Link from "next/link";
import LogoStrip from "@/components/LogoStrip";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { beltCourses, specialistCourses } from "@/lib/data/courses";
import { deliveryModes } from "@/lib/data/delivery";
import { sectors } from "@/lib/data/clients";
import { caseStudies } from "@/lib/data/caseStudies";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-background">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 420px at 50% -8%, rgba(100,127,133,0.12), transparent 58%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 backdrop-blur">
              Six Sigma South Africa
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Africa&apos;s leading Six Sigma training and certification partner.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              Accredited Lean Six Sigma programmes from White Belt to Black
              Belt. Delivered online, virtually, and in the classroom across
              South Africa. Part of the 2KO group.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/courses"
                className="rounded-full border border-accent-border bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent2 hover:text-black active:bg-accent-pressed"
              >
                Explore Courses
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-text transition-colors hover:border-accent/40 hover:bg-white/5"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust logos */}
      <LogoStrip />

      {/* Course pathway */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Training Pathway"
            title="From awareness to advanced leadership"
            description="A structured certification pathway for individuals and teams at every level. Start free, build capability, and lead operational improvement."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beltCourses.map((course) => (
              <Link key={course.slug} href={`/courses/${course.slug}`} className="group">
                <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30">
                  <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                    {course.isFree ? "Free" : course.duration}
                  </span>
                  <h3 className="mb-2 text-base font-semibold text-text">
                    {course.level}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted">
                    {course.tagline}
                  </p>
                  <span className="text-xs font-medium text-accent transition-colors group-hover:text-accent2">
                    View course &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Specialist modules */}
          <div className="mt-8">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted2">
              Specialist Modules
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {specialistCourses.map((course) => (
                <Link key={course.slug} href={`/courses/${course.slug}`} className="group">
                  <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30">
                    <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                      {course.duration}
                    </span>
                    <h3 className="mb-2 text-base font-semibold text-text">
                      {course.level}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-muted">
                      {course.tagline}
                    </p>
                    <span className="text-xs font-medium text-accent transition-colors group-hover:text-accent2">
                      View course &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery modes */}
      <section className="border-t border-border/60 bg-background-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Delivery"
            title="Learn your way"
            description="Every programme is available in the delivery format that suits your team, schedule, and location."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {deliveryModes.map((mode) => (
              <Card
                key={mode.mode}
                title={mode.mode}
                description={mode.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Six Sigma SA */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Why Us"
            title="Built for real operations, not just certification"
            description="We focus on measurable outcomes — not just credentials. Every programme is grounded in operational reality."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card
              number="01"
              title="Internationally accredited"
              description="Programmes accredited through the Council for Six Sigma Certification (CSSC) and structured to support SETA Skills Development Levy claims."
            />
            <Card
              number="02"
              title="Evidence-led certification"
              description="Certification is earned through live improvement projects with measurable outcomes — not just written exams."
            />
            <Card
              number="03"
              title="Operational focus"
              description="We treat training as the beginning of improvement, not the end. Programmes are designed to embed change into how your organisation works."
            />
            <Card
              number="04"
              title="Continental reach"
              description="The leading Six Sigma training partner in Africa, with delivery across all major South African cities and a track record spanning thousands of participants."
            />
          </div>
        </div>
      </section>

      {/* Accreditation band */}
      <section className="border-t border-border/60 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Accreditation
              </p>
              <p className="mt-2 text-lg font-semibold text-text">
                Credentials that carry weight
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="text-center">
                <p className="text-sm font-semibold text-text">CSSC</p>
                <p className="text-xs text-muted2">International recognition</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-text">SETA-Structured</p>
                <p className="text-xs text-muted2">Levy claim eligible</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-text">RPL Pathway</p>
                <p className="text-xs text-muted2">Recognition of prior learning</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-text">Project-Based</p>
                <p className="text-xs text-muted2">Evidence-led assessment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors served */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Industries"
            title="Proven across sectors"
            description="Our training and consulting has delivered measurable results in operations-led organisations across Southern Africa."
          />

          <div className="mx-auto grid max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="flex items-center gap-3 border-b border-border/60 p-5 sm:[&:nth-child(odd)]:border-r"
              >
                <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <p className="text-sm text-text">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected client outcomes */}
      <section className="border-t border-border/60 bg-background-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Outcomes"
            title="Selected client outcomes"
            description="Real improvements, real organisations. Client details withheld where confidential."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.slice(0, 4).map((cs) => (
              <div
                key={cs.id}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                  {cs.industry}
                </span>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {cs.challenge}
                </p>
                <div className="rounded-xl border border-border/60 bg-background/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted2">
                    Result
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text">
                    {cs.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/case-studies"
              className="text-sm font-medium text-accent transition-colors hover:text-accent2"
            >
              View all case studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 2KO Group ecosystem */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="2KO Group"
            title="Part of the wider 2KO ecosystem"
            description="Six Sigma South Africa is the accredited training and certification arm of the 2KO group. Our work is grounded in real operational improvement, not just course delivery."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-2 text-base font-semibold text-text">
                2KO Africa
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Training and improvement delivery across Southern Africa.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-accent/40 bg-surface p-6">
              <h3 className="mb-2 text-base font-semibold text-text">
                Six Sigma South Africa
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Accredited training, certification, and consulting for
                operational excellence.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-2 text-base font-semibold text-text">
                2KO Systems
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Custom systems and intelligent automation for established
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to upskill your team?"
        description="Start with a free White Belt, explore our full course catalogue, or get in touch to discuss a corporate programme."
        primaryCTA="Enquire Now"
        primaryHref="/contact"
        secondaryCTA="View Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
