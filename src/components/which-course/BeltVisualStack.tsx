import { useEffect, useRef, useState } from "react";
import WhiteBeltVisual from "./belt-visuals/WhiteBeltVisual";
import YellowBeltVisual from "./belt-visuals/YellowBeltVisual";
import GreenBeltVisual from "./belt-visuals/GreenBeltVisual";
import BlackBeltVisual from "./belt-visuals/BlackBeltVisual";
import SpecialistVisual from "./belt-visuals/SpecialistVisual";

interface ExplorerCourse {
  slug: string;
  level: string;
  tagline: string;
  forWho: string;
}

interface BeltVisualStackProps {
  courses: ExplorerCourse[];
  activeIndex: number;
  hoveredIndex: number | null;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

const visuals = [WhiteBeltVisual, YellowBeltVisual, GreenBeltVisual, BlackBeltVisual, SpecialistVisual];

const positions = [
  "left-[6%] top-[12%]",
  "right-[14%] top-[8%]",
  "left-[10%] bottom-[16%]",
  "right-[7%] bottom-[14%]",
  "left-[36%] top-[30%]",
];

const sizes = ["h-[180px] w-[180px]", "h-[180px] w-[180px]", "h-[180px] w-[180px]", "h-[180px] w-[180px]", "h-[230px] w-[230px]"];

export default function BeltVisualStack({
  courses,
  activeIndex,
  hoveredIndex,
  onSelect,
  onHover,
}: BeltVisualStackProps) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const displayIndex = hoveredIndex ?? activeIndex;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const node = fieldRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    node.style.setProperty("--mx", `${x}%`);
    node.style.setProperty("--my", `${y}%`);
  }

  function resetMove() {
    const node = fieldRef.current;
    if (!node) return;
    node.style.setProperty("--mx", "50%");
    node.style.setProperty("--my", "50%");
  }

  return (
    <div
      ref={fieldRef}
      className="relative min-h-[640px] overflow-hidden rounded-[34px] border border-border/70 bg-background-secondary"
      style={{
        background:
          "radial-gradient(850px circle at var(--mx,50%) var(--my,50%), rgba(22,163,74,0.11), transparent 56%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
      }}
      onMouseMove={handleMove}
      onMouseLeave={resetMove}
      role="tablist"
      aria-label="Course selection"
      aria-orientation="vertical"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,139,149,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(124,139,149,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at center, black 25%, transparent 85%)",
        }}
      />
      <div className="pointer-events-none absolute inset-[12%] rounded-[28px] border border-white/[0.05]" />
      <div className="pointer-events-none absolute inset-x-12 top-16 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-12 bottom-16 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 h-full p-8 xl:p-10">
        <div className="mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted2">Training Decision Surface</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            Hover or select a pathway to preview where it leads.
          </p>
        </div>

        <div className="relative h-[430px]">
          {courses.map((course, i) => {
            const isDisplayed = displayIndex === i;
            const isActive = activeIndex === i;
            const isHovered = hoveredIndex === i;
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
                onFocus={() => onHover(i)}
                onBlur={() => onHover(null)}
                onMouseLeave={() => onHover(null)}
                className={`absolute ${positions[i]} group focus-visible:outline-none`}
                style={{
                  transform: reducedMotion
                    ? "translate3d(0,0,0) scale(1)"
                    : isDisplayed
                      ? "translate3d(0,0,0) scale(1)"
                      : "translate3d(0,0,0) scale(0.88)",
                  opacity: isDisplayed ? 1 : 0.68,
                  zIndex: isDisplayed ? 20 : 10 - i,
                  transition: reducedMotion
                    ? "none"
                    : "transform 320ms cubic-bezier(0.22,1,0.36,1), opacity 280ms ease",
                }}
              >
                <div className="relative">
                  <div
                    className="pointer-events-none absolute -inset-6 rounded-[28px]"
                    style={{
                      boxShadow: isDisplayed ? "0 0 0 1px rgba(22,163,74,0.28), 0 0 44px rgba(22,163,74,0.14)" : "none",
                      transition: reducedMotion ? "none" : "box-shadow 320ms ease",
                    }}
                  />
                  <Visual isActive={isDisplayed} isHovered={isHovered} className={sizes[i]} />
                </div>
              </button>
            );
          })}

          <div className="pointer-events-none absolute left-0 right-0 bottom-0 mx-auto w-[85%] rounded-2xl border border-white/[0.08] bg-surface/65 px-5 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted2">Who It Is For</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">
              {courses[activeIndex]?.forWho}
            </p>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-5 gap-2 border-t border-white/[0.06] pt-6">
          {courses.map((course, i) => {
            const isDisplayed = displayIndex === i;
            const isActive = activeIndex === i;

            return (
              <button
                key={`${course.slug}-label`}
                onClick={() => onSelect(i)}
                onMouseEnter={() => onHover(i)}
                onMouseLeave={() => onHover(null)}
                className="relative text-left"
                aria-label={`Show ${course.level}`}
              >
                <span
                  className="mb-2 block h-px"
                  style={{
                    background: isDisplayed
                      ? "linear-gradient(90deg, rgba(22,163,74,0.6), rgba(22,163,74,0))"
                      : "linear-gradient(90deg, rgba(124,139,149,0.45), rgba(124,139,149,0))",
                    transition: "background 240ms ease",
                  }}
                />
                <p className={`text-xs font-semibold tracking-wide ${isDisplayed ? "text-text" : "text-muted2"}`}>
                  {course.level}
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-muted2">{course.tagline}</p>
                {isActive && (
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-accent2">Selected</p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
