"use client";

import { useState, useCallback, useRef } from "react";
import CourseDetailPanel from "./CourseDetailPanel";
import BeltVisualStack from "./BeltVisualStack";
import MobileCourseCards from "./MobileCourseCards";
import type { Course } from "@/lib/data/courses";

interface WhichCourseExplorerProps {
  courses: Course[];
}

export default function WhichCourseExplorer({ courses }: WhichCourseExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  const displayedCourse = courses[activeIndex];

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleHover = useCallback((index: number | null) => {
    setHoveredIndex(index);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      let newIndex = activeIndex;

      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
          e.preventDefault();
          newIndex = (activeIndex + 1) % courses.length;
          break;
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault();
          newIndex = (activeIndex - 1 + courses.length) % courses.length;
          break;
        case "Home":
          e.preventDefault();
          newIndex = 0;
          break;
        case "End":
          e.preventDefault();
          newIndex = courses.length - 1;
          break;
        default:
          return;
      }

      setActiveIndex(newIndex);
      const tabs = tabListRef.current?.querySelectorAll('[role="tab"]');
      if (tabs?.[newIndex]) {
        (tabs[newIndex] as HTMLElement).focus();
      }
    },
    [activeIndex, courses.length]
  );

  return (
    <>
      <div className="mx-auto max-w-4xl text-center lg:mb-14 lg:text-left">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted2">Which Course</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Choose the right certification pathway
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted lg:mx-0">
          Compare belt pathways and specialist modules by role, readiness, and expected improvement impact.
        </p>
      </div>

      <div className="hidden lg:block" onKeyDown={handleKeyDown} ref={tabListRef}>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-5">
            <div className="sticky top-28">
              <div id="course-detail-panel" role="tabpanel" aria-label={displayedCourse.level} key={displayedCourse.slug}>
                <CourseDetailPanel
                  slug={displayedCourse.slug}
                  level={displayedCourse.level}
                  tagline={displayedCourse.tagline}
                  forWho={displayedCourse.forWho}
                  outcomes={displayedCourse.outcomes}
                  duration={displayedCourse.duration}
                  delivery={displayedCourse.delivery}
                />
              </div>
            </div>
          </div>

          <div className="col-span-7">
            <BeltVisualStack
              courses={courses}
              activeIndex={activeIndex}
              hoveredIndex={hoveredIndex}
              onSelect={handleSelect}
              onHover={handleHover}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 lg:hidden">
        <MobileCourseCards courses={courses} />
      </div>
    </>
  );
}
