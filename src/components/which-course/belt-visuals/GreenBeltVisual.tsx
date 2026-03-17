interface BeltVisualProps {
  isActive: boolean;
  isHovered: boolean;
  className?: string;
}

export default function GreenBeltVisual({ isActive, isHovered, className }: BeltVisualProps) {
  const stroke = isActive ? "var(--accent2)" : isHovered ? "var(--muted)" : "var(--muted2)";
  const opacity = isActive ? 1 : isHovered ? 0.6 : 0.3;

  const pathStyle = (delay: number) => ({
    strokeDasharray: isActive ? 0 : 600,
    strokeDashoffset: isActive ? 0 : 600,
    transition: `stroke-dashoffset 500ms ease-out ${delay}ms, stroke 300ms ease`,
  });

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      style={{ opacity, transition: "opacity 300ms ease" }}
      aria-hidden="true"
    >
      {/* Isometric wireframe cube */}
      {/* Front face */}
      <path d="M100 60 L155 90 L155 140 L100 170 L45 140 L45 90 Z" stroke={stroke} strokeWidth="1.5"
        strokeLinejoin="round" style={pathStyle(0)} />
      {/* Top face interior */}
      <path d="M100 60 L155 90 L100 120 L45 90 Z" stroke={stroke} strokeWidth="1" strokeOpacity="0.5"
        strokeLinejoin="round" style={pathStyle(100)} />
      {/* Center vertical */}
      <line x1="100" y1="120" x2="100" y2="170" stroke={stroke} strokeWidth="1" strokeOpacity="0.5"
        style={{ transition: "stroke 300ms ease" }} />
      {/* Measurement ticks on left edge */}
      <line x1="42" y1="100" x2="48" y2="97" stroke={stroke} strokeWidth="1" strokeOpacity="0.4"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="42" y1="115" x2="48" y2="112" stroke={stroke} strokeWidth="1" strokeOpacity="0.4"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="42" y1="130" x2="48" y2="127" stroke={stroke} strokeWidth="1" strokeOpacity="0.4"
        style={{ transition: "stroke 300ms ease" }} />
      {/* Measurement ticks on right edge */}
      <line x1="158" y1="100" x2="152" y2="97" stroke={stroke} strokeWidth="1" strokeOpacity="0.4"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="158" y1="115" x2="152" y2="112" stroke={stroke} strokeWidth="1" strokeOpacity="0.4"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="158" y1="130" x2="152" y2="127" stroke={stroke} strokeWidth="1" strokeOpacity="0.4"
        style={{ transition: "stroke 300ms ease" }} />
    </svg>
  );
}
