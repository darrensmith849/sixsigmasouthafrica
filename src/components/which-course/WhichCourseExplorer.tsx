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

  const displayIndex = hoveredIndex ?? activeIndex;
  const displayedCourse = courses[displayIndex];

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
          e.preventDefault();
          newIndex = (activeIndex + 1) % courses.length;
          break;
        case "ArrowUp":
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

      // Focus the newly active tab
      const tabs = tabListRef.current?.querySelectorAll('[role="tab"]');
      if (tabs?.[newIndex]) {
        (tabs[newIndex] as HTMLElement).focus();
      }
    },
    [activeIndex, courses.length]
  );

  return (
    <>
      {/* Desktop layout */}
      <div
        className="hidden lg:grid lg:grid-cols-12 lg:gap-12"
        onKeyDown={handleKeyDown}
        ref={tabListRef}
      >
        {/* Left column — sticky detail panel */}
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div
              id="course-detail-panel"
              role="tabpanel"
              aria-label={displayedCourse.level}
              key={displayedCourse.slug}
            >
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

        {/* Right column — interactive belt stack */}
        <div className="lg:col-span-7">
          <BeltVisualStack
            courses={courses}
            activeIndex={activeIndex}
            hoveredIndex={hoveredIndex}
            onSelect={handleSelect}
            onHover={handleHover}
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden">
        <MobileCourseCards courses={courses} />
      </div>
    </>
  );
}
