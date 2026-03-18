interface BeltVisualProps {
  isActive: boolean;
  isHovered: boolean;
  className?: string;
}

export default function BlackBeltVisual({ isActive, isHovered, className }: BeltVisualProps) {
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

      <path d="M78 246 H176 V210 H282 V174" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
      <g className={motionOn ? "wc-motion-group wc-float-soft" : undefined}>
        <rect x="78" y="216" width="64" height="30" rx="5" stroke={stroke} strokeWidth="1.5" />
      </g>
      <g className={motionOn ? "wc-motion-group wc-float-deep" : undefined}>
        <rect x="152" y="180" width="64" height="30" rx="5" stroke={stroke} strokeWidth="1.5" />
      </g>
      <g className={motionOn ? "wc-motion-group wc-drift-right" : undefined}>
        <rect x="226" y="144" width="64" height="30" rx="5" stroke={stroke} strokeWidth="1.5" />
      </g>

      <line x1="142" y1="231" x2="152" y2="195" stroke={stroke} strokeOpacity="0.5" />
      <line x1="216" y1="195" x2="226" y2="159" stroke={stroke} strokeOpacity="0.5" />

      <path d="M96 132 L122 132" stroke={stroke} strokeOpacity="0.35" />
      <path d="M96 146 L122 146" stroke={stroke} strokeOpacity="0.35" />
      <path d="M238 96 L264 96" stroke={stroke} strokeOpacity="0.35" />
      <path d="M238 110 L264 110" stroke={stroke} strokeOpacity="0.35" />

      <g className={motionOn ? "wc-motion-group wc-pulse-soft" : undefined}>
        <circle cx="282" cy="174" r="3" fill="var(--accent2)" fillOpacity={isActive ? "0.72" : "0.22"} />
      </g>
    </svg>
  );
}
