interface BeltVisualProps {
  isActive: boolean;
  isHovered: boolean;
  className?: string;
}

export default function GreenBeltVisual({ isActive, isHovered, className }: BeltVisualProps) {
  const stroke = isActive ? "var(--accent2)" : isHovered ? "var(--muted)" : "var(--muted2)";
  const opacity = isActive ? 1 : isHovered ? 0.68 : 0.36;

  return (
    <svg
      viewBox="0 0 360 360"
      fill="none"
      className={className}
      style={{ opacity, transition: "opacity 320ms ease" }}
      aria-hidden="true"
    >
      <rect x="46" y="56" width="268" height="248" rx="26" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.34" />

      <path d="M180 90 L266 136 L180 182 L94 136 Z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M94 136 V220 L180 266 L266 220 V136" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M180 182 V266" stroke={stroke} strokeOpacity="0.58" />

      <line x1="94" y1="136" x2="76" y2="136" stroke={stroke} strokeOpacity="0.35" />
      <line x1="94" y1="166" x2="76" y2="166" stroke={stroke} strokeOpacity="0.35" />
      <line x1="94" y1="196" x2="76" y2="196" stroke={stroke} strokeOpacity="0.35" />

      <line x1="266" y1="136" x2="284" y2="136" stroke={stroke} strokeOpacity="0.35" />
      <line x1="266" y1="166" x2="284" y2="166" stroke={stroke} strokeOpacity="0.35" />
      <line x1="266" y1="196" x2="284" y2="196" stroke={stroke} strokeOpacity="0.35" />

      <path d="M122 112 L238 112" stroke="var(--accent2)" strokeOpacity={isActive ? "0.32" : "0.12"} />
    </svg>
  );
}
