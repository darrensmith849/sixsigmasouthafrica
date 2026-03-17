import WhiteBeltVisual from "./belt-visuals/WhiteBeltVisual";
import YellowBeltVisual from "./belt-visuals/YellowBeltVisual";
import GreenBeltVisual from "./belt-visuals/GreenBeltVisual";
import BlackBeltVisual from "./belt-visuals/BlackBeltVisual";
import SpecialistVisual from "./belt-visuals/SpecialistVisual";

interface ExplorerCourse {
  slug: string;
  level: string;
  tagline: string;
}

interface BeltVisualStackProps {
  courses: ExplorerCourse[];
  activeIndex: number;
  hoveredIndex: number | null;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

const visuals = [WhiteBeltVisual, YellowBeltVisual, GreenBeltVisual, BlackBeltVisual, SpecialistVisual];

export default function BeltVisualStack({
  courses,
  activeIndex,
  hoveredIndex,
  onSelect,
  onHover,
}: BeltVisualStackProps) {
  return (
    <div className="relative" role="tablist" aria-label="Course selection" aria-orientation="vertical">
      {/* Vertical gradient line behind the stack */}
      <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-accent/40 via-accent/15 to-accent/40" />

      <div className="flex flex-col gap-2">
        {courses.map((course, i) => {
          const isActive = activeIndex === i;
          const isHovered = hoveredIndex === i;
          const displayIndex = hoveredIndex ?? activeIndex;
          const isDisplayed = displayIndex === i;
          const Visual = visuals[i];

          return (
            <button
              key={course.slug}
              role="tab"
              aria-selected={isActive}
              aria-controls="course-detail-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(i)}
              onMouseEnter={() => onHover(i)}
              onMouseLeave={() => onHover(null)}
              className={`
                relative flex items-center gap-5 rounded-2xl border px-5 text-left
                transition-all duration-300 ease-out
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
                ${isDisplayed
                  ? "border-accent/30 bg-surface-elevated shadow-[0_0_30px_rgba(22,163,74,0.06)]"
                  : "border-transparent bg-transparent hover:border-border hover:bg-surface/50"
                }
              `}
              style={{
                height: isDisplayed ? 280 : 60,
                transition: "height 300ms ease, border-color 300ms ease, background-color 300ms ease, box-shadow 300ms ease",
              }}
            >
              {/* Belt color indicator dot */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center">
                <div
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    isDisplayed ? "bg-accent2 shadow-[0_0_8px_rgba(22,163,74,0.4)]" : "bg-muted2/40"
                  }`}
                />
              </div>

              {/* Label + visual */}
              <div className="flex min-w-0 flex-1 items-center justify-between overflow-hidden">
                <div className="min-w-0">
                  <p className={`text-sm font-semibold transition-colors duration-300 ${
                    isDisplayed ? "text-text" : "text-muted2"
                  }`}>
                    {course.level}
                  </p>
                  {isDisplayed && (
                    <p className="mt-0.5 text-xs text-accent2">{course.tagline}</p>
                  )}
                </div>

                {/* SVG Visual — only expanded when displayed */}
                {Visual && (
                  <div
                    className="shrink-0 transition-all duration-300"
                    style={{
                      width: isDisplayed ? 200 : 40,
                      height: isDisplayed ? 200 : 40,
                      opacity: isDisplayed ? 1 : 0.15,
                    }}
                  >
                    <Visual
                      isActive={isActive}
                      isHovered={isHovered}
                      className="h-full w-full"
                    />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
