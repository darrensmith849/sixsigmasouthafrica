import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import AtmosphericField from "@/components/AtmosphericField";
import WhichCourseExplorer from "@/components/which-course/WhichCourseExplorer";
import { beltCourses } from "@/lib/data/courses";
import type { Course } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Which Course",
  description:
    "Find the right Lean Six Sigma course for your role, experience level, and objectives. Compare belt levels and specialist modules.",
};

const specialistEntry: Course = {
  slug: "root-cause-analysis",
  level: "Specialist Modules",
  tagline: "Targeted skill-building",
  duration: "1–3 days per module",
  delivery: ["Online", "Virtual (instructor-led)", "Classroom"],
  description:
    "Standalone specialist modules that complement any belt programme. Choose from Root Cause Analysis, Kaizen, 5S, and Six Sigma Statistics — each focused on a specific competency.",
  outcomes: [
    "Deepen expertise in a specific Lean Six Sigma discipline",
    "Apply specialist tools to real workplace challenges",
    "Complement and extend your belt certification",
  ],
  forWho:
    "Belt holders looking to specialise, or professionals who need targeted capability in a specific area.",
  category: "specialist",
};

const explorerCourses = [...beltCourses, specialistEntry];

export default function WhichCoursePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-background">
        <AtmosphericField className="opacity-80" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 1000px 520px at 58% -6%, rgba(22,163,74,0.08), transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <WhichCourseExplorer courses={explorerCourses} />
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
