import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import { faqs } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Six Sigma South Africa's training, certification, consulting, and accreditation.",
};

const categories = [
  { key: "general" as const, label: "General" },
  { key: "training" as const, label: "Training" },
  { key: "accreditation" as const, label: "Accreditation" },
  { key: "consulting" as const, label: "Consulting" },
];

export default function FAQPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Answers to common questions about our training, certification, consulting, and accreditation."
          />
        </div>
      </section>

      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20">
          {categories.map((cat) => {
            const items = faqs.filter((f) => f.category === cat.key);
            if (items.length === 0) return null;
            return (
              <div key={cat.key} className="mb-12 last:mb-0">
                <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted2">
                  {cat.label}
                </h3>
                <Accordion items={items} />
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Question not answered?"
        description="Get in touch directly. We are happy to discuss your specific requirements."
        primaryCTA="Contact Us"
        primaryHref="/contact"
        secondaryCTA="View Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
