interface BeltVisualProps {
  isActive: boolean;
  isHovered: boolean;
  className?: string;
}

export default function SpecialistVisual({ isActive, isHovered, className }: BeltVisualProps) {
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
      <rect x="44" y="56" width="272" height="248" rx="26" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.34" />

      <g className={motionOn ? "wc-motion-group wc-pulse-soft" : undefined}>
        <circle cx="180" cy="180" r="22" stroke={stroke} strokeWidth="1.5" />
        <circle cx="180" cy="180" r="6" fill="var(--accent2)" fillOpacity={isActive ? "0.6" : "0.22"} />
      </g>

      <line x1="200" y1="170" x2="260" y2="124" stroke={stroke} strokeWidth="1.3" />
      <line x1="205" y1="186" x2="278" y2="186" stroke={stroke} strokeWidth="1.3" />
      <line x1="188" y1="202" x2="226" y2="252" stroke={stroke} strokeWidth="1.3" />
      <line x1="160" y1="188" x2="106" y2="230" stroke={stroke} strokeWidth="1.3" />
      <line x1="160" y1="170" x2="110" y2="132" stroke={stroke} strokeWidth="1.3" />

      <g className={motionOn ? "wc-motion-group wc-drift-right" : undefined}>
        <rect x="252" y="110" width="34" height="28" rx="6" stroke={stroke} strokeWidth="1.4" />
      </g>
      <g className={motionOn ? "wc-motion-group wc-float-soft" : undefined}>
        <rect x="278" y="170" width="34" height="28" rx="6" stroke={stroke} strokeWidth="1.4" />
      </g>
      <g className={motionOn ? "wc-motion-group wc-drift-left" : undefined}>
        <rect x="214" y="248" width="34" height="28" rx="6" stroke={stroke} strokeWidth="1.4" />
      </g>
      <g className={motionOn ? "wc-motion-group wc-float-deep" : undefined}>
        <rect x="82" y="216" width="34" height="28" rx="6" stroke={stroke} strokeWidth="1.4" />
      </g>
      <g className={motionOn ? "wc-motion-group wc-drift-left" : undefined}>
        <rect x="84" y="118" width="34" height="28" rx="6" stroke={stroke} strokeWidth="1.4" />
      </g>
    </svg>
  );
}
