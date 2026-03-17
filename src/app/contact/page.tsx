import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Six Sigma South Africa. Enquire about training, certification, consulting, or corporate programmes.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Contact"
            title="Get in touch"
            description="Enquire about training, certification, consulting, group bookings, or anything else. We will come back to you promptly."
          />
        </div>
      </section>

      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Form */}
            <div className="md:col-span-2">
              <EnquiryForm />
            </div>

            {/* Contact details */}
            <div>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="mb-4 text-base font-semibold text-text">
                  Contact details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted2">
                      Phone
                    </p>
                    <p className="mt-1 text-sm text-text">021 426 5300</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted2">
                      Email
                    </p>
                    <p className="mt-1 text-sm text-text">info@2ko.co.za</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted2">
                      Classroom locations
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Johannesburg, Cape Town, Durban, Pretoria, Port Elizabeth
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted2">
                      Part of
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      The 2KO Group
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
                <h3 className="mb-2 text-base font-semibold text-text">
                  Corporate training
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Need a dedicated programme for your organisation? We offer
                  corporate cohorts with customised scheduling, project selection,
                  and group pricing. Mention this in your enquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
