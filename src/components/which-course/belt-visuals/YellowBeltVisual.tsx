interface BeltVisualProps {
  isActive: boolean;
  isHovered: boolean;
  className?: string;
}

export default function YellowBeltVisual({ isActive, isHovered, className }: BeltVisualProps) {
  const stroke = isActive ? "var(--accent2)" : isHovered ? "var(--muted)" : "var(--muted2)";
  const opacity = isActive ? 1 : isHovered ? 0.68 : 0.36;
  const motionOn = isActive || isHovered;

  return (
    <svg
      viewBox="0 0 360 360"
      fill="none"
      className={className}
      style={{ opacity, transition: "opacity 320ms ease" }}
      aria-hidden="true"
    >
      <rect x="46" y="56" width="268" height="248" rx="26" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.34" />

      <g className={motionOn ? "wc-motion-group wc-drift-left" : undefined}>
        <rect x="86" y="92" width="78" height="78" rx="9" stroke={stroke} strokeWidth="1.5" />
      </g>
      <g className={motionOn ? "wc-motion-group wc-drift-right" : undefined}>
        <rect x="196" y="92" width="78" height="78" rx="9" stroke={stroke} strokeWidth="1.5" />
      </g>
      <g className={motionOn ? "wc-motion-group wc-float-soft" : undefined}>
        <rect x="141" y="192" width="78" height="78" rx="9" stroke={stroke} strokeWidth="1.5" />
      </g>

      <line x1="164" y1="131" x2="196" y2="131" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="125" y1="170" x2="157" y2="192" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.6" />
      <line x1="235" y1="170" x2="203" y2="192" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.6" />

      <path d="M86 131 H66" stroke={stroke} strokeOpacity="0.34" />
      <path d="M274 131 H294" stroke={stroke} strokeOpacity="0.34" />
      <path d="M180 270 V292" stroke={stroke} strokeOpacity="0.34" />

      <g className={motionOn ? "wc-motion-group wc-pulse-soft" : undefined}>
        <circle cx="66" cy="131" r="3" fill="var(--accent2)" fillOpacity={isActive ? "0.65" : "0.28"} />
        <circle cx="294" cy="131" r="3" fill="var(--accent2)" fillOpacity={isActive ? "0.65" : "0.28"} />
        <circle cx="180" cy="292" r="3" fill="var(--accent2)" fillOpacity={isActive ? "0.65" : "0.28"} />
      </g>
    </svg>
  );
}
