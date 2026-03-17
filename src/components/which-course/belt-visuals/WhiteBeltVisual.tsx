interface BeltVisualProps {
  isActive: boolean;
  isHovered: boolean;
  className?: string;
}

export default function WhiteBeltVisual({ isActive, isHovered, className }: BeltVisualProps) {
  const stroke = isActive ? "var(--accent2)" : isHovered ? "var(--muted)" : "var(--muted2)";
  const opacity = isActive ? 1 : isHovered ? 0.6 : 0.3;

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      style={{ opacity, transition: "opacity 300ms ease, stroke 300ms ease" }}
      aria-hidden="true"
    >
      {/* Three layered horizontal planes with perspective offset */}
      <path
        d="M40 130 L100 150 L160 130 L100 110 Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        style={{
          strokeDasharray: isActive ? 0 : 400,
          strokeDashoffset: isActive ? 0 : 400,
          transition: "stroke-dashoffset 500ms ease-out, stroke 300ms ease",
        }}
      />
      <path
        d="M40 100 L100 120 L160 100 L100 80 Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        style={{
          strokeDasharray: isActive ? 0 : 400,
          strokeDashoffset: isActive ? 0 : 400,
          transition: "stroke-dashoffset 500ms ease-out 50ms, stroke 300ms ease",
        }}
      />
      <path
        d="M40 70 L100 90 L160 70 L100 50 Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        style={{
          strokeDasharray: isActive ? 0 : 400,
          strokeDashoffset: isActive ? 0 : 400,
          transition: "stroke-dashoffset 500ms ease-out 100ms, stroke 300ms ease",
        }}
      />
      {/* Vertical connection lines */}
      <line x1="40" y1="70" x2="40" y2="130" stroke={stroke} strokeWidth="1" strokeOpacity="0.4"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="160" y1="70" x2="160" y2="130" stroke={stroke} strokeWidth="1" strokeOpacity="0.4"
        style={{ transition: "stroke 300ms ease" }} />
    </svg>
  );
}
