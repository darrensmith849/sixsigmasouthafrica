import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import WhichCourseExplorer from "@/components/which-course/WhichCourseExplorer";
import { beltCourses, specialistCourses } from "@/lib/data/courses";
import type { Course } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Which Course",
  description:
    "Find the right Lean Six Sigma course for your role, experience level, and objectives. Compare belt levels and specialist modules.",
};

/* Composite "Specialist Modules" entry for the explorer */
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
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
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
