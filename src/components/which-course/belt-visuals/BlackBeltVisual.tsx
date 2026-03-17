interface BeltVisualProps {
  isActive: boolean;
  isHovered: boolean;
  className?: string;
}

export default function BlackBeltVisual({ isActive, isHovered, className }: BeltVisualProps) {
  const stroke = isActive ? "var(--accent2)" : isHovered ? "var(--muted)" : "var(--muted2)";
  const opacity = isActive ? 1 : isHovered ? 0.6 : 0.3;

  const pathStyle = (delay: number) => ({
    strokeDasharray: isActive ? 0 : 400,
    strokeDashoffset: isActive ? 0 : 400,
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
      {/* Three ascending stepped platforms */}
      {/* Bottom platform */}
      <rect x="30" y="140" width="50" height="30" rx="2" stroke={stroke} strokeWidth="1.5" style={pathStyle(0)} />
      {/* Middle platform */}
      <rect x="75" y="105" width="50" height="30" rx="2" stroke={stroke} strokeWidth="1.5" style={pathStyle(80)} />
      {/* Top platform */}
      <rect x="120" y="70" width="50" height="30" rx="2" stroke={stroke} strokeWidth="1.5" style={pathStyle(160)} />

      {/* Connecting risers */}
      <line x1="80" y1="140" x2="80" y2="135" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.6"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="125" y1="105" x2="125" y2="100" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.6"
        style={{ transition: "stroke 300ms ease" }} />

      {/* Ascending arrow hint */}
      <line x1="55" y1="140" x2="145" y2="60" stroke={stroke} strokeWidth="1" strokeOpacity="0.2"
        strokeDasharray="4 4" style={{ transition: "stroke 300ms ease" }} />

      {/* Small tick marks on platforms (measurement detail) */}
      <line x1="40" y1="140" x2="40" y2="137" stroke={stroke} strokeWidth="1" strokeOpacity="0.3"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="50" y1="140" x2="50" y2="137" stroke={stroke} strokeWidth="1" strokeOpacity="0.3"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="60" y1="140" x2="60" y2="137" stroke={stroke} strokeWidth="1" strokeOpacity="0.3"
        style={{ transition: "stroke 300ms ease" }} />
      <line x1="70" y1="140" x2="70" y2="137" stroke={stroke} strokeWidth="1" strokeOpacity="0.3"
        style={{ transition: "stroke 300ms ease" }} />
    </svg>
  );
}
