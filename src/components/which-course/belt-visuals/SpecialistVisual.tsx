interface BeltVisualProps {
  isActive: boolean;
  isHovered: boolean;
  className?: string;
}

export default function SpecialistVisual({ isActive, isHovered, className }: BeltVisualProps) {
  const stroke = isActive ? "var(--accent2)" : isHovered ? "var(--muted)" : "var(--muted2)";
  const opacity = isActive ? 1 : isHovered ? 0.6 : 0.3;

  const lineStyle = (delay: number) => ({
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
      {/* Central node */}
      <circle cx="100" cy="100" r="14" stroke={stroke} strokeWidth="1.5"
        style={lineStyle(0)} />
      <circle cx="100" cy="100" r="3" stroke={stroke} strokeWidth="1.5"
        style={{ transition: "stroke 300ms ease" }} />

      {/* Branch 1 — top right */}
      <line x1="112" y1="90" x2="150" y2="55" stroke={stroke} strokeWidth="1.5" style={lineStyle(60)} />
      <circle cx="155" cy="50" r="10" stroke={stroke} strokeWidth="1.5" style={lineStyle(100)} />

      {/* Branch 2 — right */}
      <line x1="114" y1="100" x2="155" y2="100" stroke={stroke} strokeWidth="1.5" style={lineStyle(120)} />
      <circle cx="165" cy="100" r="10" stroke={stroke} strokeWidth="1.5" style={lineStyle(160)} />

      {/* Branch 3 — bottom */}
      <line x1="100" y1="114" x2="100" y2="150" stroke={stroke} strokeWidth="1.5" style={lineStyle(180)} />
      <circle cx="100" cy="160" r="10" stroke={stroke} strokeWidth="1.5" style={lineStyle(220)} />

      {/* Branch 4 — top left */}
      <line x1="88" y1="90" x2="55" y2="60" stroke={stroke} strokeWidth="1.5" style={lineStyle(240)} />
      <circle cx="48" cy="53" r="10" stroke={stroke} strokeWidth="1.5" style={lineStyle(280)} />
    </svg>
  );
}
