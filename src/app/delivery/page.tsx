import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CTASection from "@/components/CTASection";
import { deliveryModes, trainingLocations } from "@/lib/data/delivery";

export const metadata: Metadata = {
  title: "Delivery Modes",
  description:
    "Choose how you learn. Six Sigma South Africa delivers training online, via live virtual sessions, and in the classroom across major South African cities.",
};

export default function DeliveryPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Delivery"
            title="Choose how you learn"
            description="Every programme is available in the delivery format that suits your team, schedule, and location."
          />
        </div>
      </section>

      {/* Delivery modes */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {deliveryModes.map((mode) => (
              <div
                key={mode.mode}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-text">
                  {mode.mode}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {mode.description}
                </p>
                <ul className="space-y-2">
                  {mode.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <p className="text-sm text-muted">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-border/60 bg-background-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Locations"
            title="Classroom venues across South Africa"
            description="In-person training is delivered in major cities. We also offer on-site delivery for corporate groups at your premises."
          />

          <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3">
            {trainingLocations.map((city) => (
              <span
                key={city}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text"
              >
                {city}
              </span>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            Need training at a different location? We offer on-site delivery for
            corporate groups anywhere in South Africa.
          </p>
        </div>
      </section>

      {/* Corporate delivery */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              number="01"
              title="Corporate programmes"
              description="Dedicated cohorts for your organisation, tailored to your operational context with customised project selection and internal case studies."
            />
            <Card
              number="02"
              title="On-site delivery"
              description="We bring the training to your premises. Ideal for large groups, shift-based teams, or organisations with specific facility requirements."
            />
            <Card
              number="03"
              title="Blended learning"
              description="Combine online self-study with live virtual or classroom sessions for a flexible approach that fits around operational schedules."
            />
            <Card
              number="04"
              title="Group discounts"
              description="Dedicated pricing for organisations enrolling multiple delegates. Contact us to discuss group rates and multi-programme packages."
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Need a tailored delivery format?"
        description="Get in touch to discuss corporate programmes, on-site training, or group bookings."
        primaryCTA="Enquire Now"
        primaryHref="/contact"
        secondaryCTA="View Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
