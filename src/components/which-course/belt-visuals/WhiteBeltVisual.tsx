interface BeltVisualProps {
  isActive: boolean;
  isHovered: boolean;
  className?: string;
}

export default function WhiteBeltVisual({ isActive, isHovered, className }: BeltVisualProps) {
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
      <defs>
        <linearGradient id="wb-accent" x1="80" y1="80" x2="280" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--accent2)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--accent2)" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <rect x="44" y="56" width="272" height="248" rx="26" stroke={stroke} strokeWidth="1.2" strokeOpacity="0.35" />
      <g className={motionOn ? "wc-motion-group wc-float-deep" : undefined}>
        <path d="M76 116 L180 76 L284 116 L180 156 Z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      </g>
      <g className={motionOn ? "wc-motion-group wc-float-soft" : undefined}>
        <path d="M76 170 L180 130 L284 170 L180 210 Z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      </g>
      <g className={motionOn ? "wc-motion-group wc-drift-right" : undefined}>
        <path d="M76 224 L180 184 L284 224 L180 264 Z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      </g>

      <line x1="76" y1="116" x2="76" y2="224" stroke={stroke} strokeOpacity="0.42" />
      <line x1="284" y1="116" x2="284" y2="224" stroke={stroke} strokeOpacity="0.42" />
      <line x1="180" y1="76" x2="180" y2="264" stroke={stroke} strokeOpacity="0.26" />

      <path d="M98 92 L262 92" stroke="url(#wb-accent)" strokeWidth="1" />
      <path d="M98 268 L262 268" stroke="url(#wb-accent)" strokeWidth="1" />
    </svg>
  );
}
