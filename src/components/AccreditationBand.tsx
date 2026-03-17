const credentials = [
  {
    title: "CSSC Accredited",
    subtitle: "International recognition",
    description:
      "Programmes accredited through the Council for Six Sigma Certification — the global standard for Lean Six Sigma credentials.",
  },
  {
    title: "SETA-Structured",
    subtitle: "Levy claim eligible",
    description:
      "Training structured to support Skills Development Levy claims under South African SETA frameworks.",
  },
  {
    title: "RPL Pathway",
    subtitle: "Recognition of prior learning",
    description:
      "Experienced practitioners can fast-track certification through our Recognition of Prior Learning assessment process.",
  },
  {
    title: "Project-Based",
    subtitle: "Evidence-led assessment",
    description:
      "Certification earned through live improvement projects with measurable outcomes — not just written exams.",
  },
];

export default function AccreditationBand() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {credentials.map((cred) => (
        <div
          key={cred.title}
          className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_4px_24px_rgba(22,163,74,0.06)]"
        >
          {/* Green top accent line */}
          <div className="h-0.5 bg-gradient-to-r from-accent/60 via-accent to-accent/60" />

          <div className="p-5">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-accent">
              {cred.subtitle}
            </p>
            <h3 className="mb-2 text-base font-semibold text-text">
              {cred.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {cred.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
