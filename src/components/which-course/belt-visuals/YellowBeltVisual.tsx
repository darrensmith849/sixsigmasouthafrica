interface BeltVisualProps {
  isActive: boolean;
  isHovered: boolean;
  className?: string;
}

export default function YellowBeltVisual({ isActive, isHovered, className }: BeltVisualProps) {
  const stroke = isActive ? "var(--accent2)" : isHovered ? "var(--muted)" : "var(--muted2)";
  const opacity = isActive ? 1 : isHovered ? 0.6 : 0.3;

  const blockStyle = (delay: number) => ({
    strokeDasharray: isActive ? 0 : 200,
    strokeDashoffset: isActive ? 0 : 200,
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
      {/* 2x2 grid of blocks */}
      <rect x="40" y="40" width="45" height="45" rx="4" stroke={stroke} strokeWidth="1.5" style={blockStyle(0)} />
      <rect x="115" y="40" width="45" height="45" rx="4" stroke={stroke} strokeWidth="1.5" style={blockStyle(60)} />
      <rect x="40" y="115" width="45" height="45" rx="4" stroke={stroke} strokeWidth="1.5" style={blockStyle(120)} />
      <rect x="115" y="115" width="45" height="45" rx="4" stroke={stroke} strokeWidth="1.5" style={blockStyle(180)} />

      {/* Connecting lines between blocks */}
      <line x1="85" y1="62" x2="115" y2="62" stroke={stroke} strokeWidth="1" strokeOpacity="0.5"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="85" y1="137" x2="115" y2="137" stroke={stroke} strokeWidth="1" strokeOpacity="0.5"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="62" y1="85" x2="62" y2="115" stroke={stroke} strokeWidth="1" strokeOpacity="0.5"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="137" y1="85" x2="137" y2="115" stroke={stroke} strokeWidth="1" strokeOpacity="0.5"
        style={{ transition: "stroke 300ms ease" }} />
      {/* Diagonal connections */}
      <line x1="85" y1="85" x2="115" y2="115" stroke={stroke} strokeWidth="1" strokeOpacity="0.3"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="115" y1="85" x2="85" y2="115" stroke={stroke} strokeWidth="1" strokeOpacity="0.3"
        style={{ transition: "stroke 300ms ease" }} />
    </svg>
  );
}
