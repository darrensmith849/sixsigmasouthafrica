interface DMAICPhaseIconProps {
  phase: "define" | "measure" | "analyse" | "improve" | "control";
  isHovered: boolean;
  className?: string;
}

export default function DMAICPhaseIcon({ phase, isHovered, className }: DMAICPhaseIconProps) {
  const stroke = isHovered ? "var(--accent2)" : "var(--muted2)";
  const opacity = isHovered ? 0.8 : 0.5;
  const motion = (name: string, duration: string, delay = "0s") =>
    isHovered ? `${name} ${duration} cubic-bezier(0.22,1,0.36,1) ${delay} infinite` : "none";

  const shared = {
    style: { opacity, transition: "opacity 300ms ease" } as const,
    className,
    "aria-hidden": true as const,
  };

  switch (phase) {
    case "define":
      // Crosshair / target — concentric circles with center dot
      return (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24" {...shared}>
          <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="1.5" style={{ animation: motion("dmaic-target-outer", "1.7s") }} />
          <circle cx="12" cy="12" r="5" stroke={stroke} strokeWidth="1" style={{ animation: motion("dmaic-target-inner", "1.7s", "0.08s") }} />
          <circle cx="12" cy="12" r="1.5" fill={stroke} style={{ animation: motion("dmaic-target-dot", "1.4s") }} />
          <line x1="12" y1="1" x2="12" y2="5" stroke={stroke} strokeWidth="1" />
          <line x1="12" y1="19" x2="12" y2="23" stroke={stroke} strokeWidth="1" />
          <line x1="1" y1="12" x2="5" y2="12" stroke={stroke} strokeWidth="1" />
          <line x1="19" y1="12" x2="23" y2="12" stroke={stroke} strokeWidth="1" />
        </svg>
      );

    case "measure":
      // Gauge / dial — arc with needle
      return (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24" {...shared}>
          <path d="M4 18 A10 10 0 0 1 20 18" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <line
            x1="12"
            y1="17"
            x2="16"
            y2="8"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{ transformOrigin: "12px 17px", animation: motion("dmaic-needle-swing", "1.3s") }}
          />
          <circle cx="12" cy="17" r="1.5" fill={stroke} />
          {/* Tick marks */}
          <line x1="5" y1="16" x2="6" y2="15" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
          <line x1="7" y1="10" x2="8" y2="11" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
          <line x1="12" y1="7" x2="12" y2="8.5" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
          <line x1="17" y1="10" x2="16" y2="11" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
          <line x1="19" y1="16" x2="18" y2="15" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
        </svg>
      );

    case "analyse":
      // Magnifier over small bar chart
      return (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24" {...shared}>
          {/* Bar chart */}
          <rect x="3" y="16" width="3" height="5" rx="0.5" stroke={stroke} strokeWidth="1" style={{ animation: motion("dmaic-rise-1", "1.2s") }} />
          <rect x="8" y="12" width="3" height="9" rx="0.5" stroke={stroke} strokeWidth="1" style={{ animation: motion("dmaic-rise-2", "1.2s", "0.05s") }} />
          <rect x="13" y="14" width="3" height="7" rx="0.5" stroke={stroke} strokeWidth="1" style={{ animation: motion("dmaic-rise-3", "1.2s", "0.1s") }} />
          {/* Magnifying glass */}
          <circle cx="16" cy="8" r="5" stroke={stroke} strokeWidth="1.5" style={{ animation: motion("dmaic-lens-scan", "1.5s") }} />
          <line
            x1="19.5"
            y1="11.5"
            x2="22"
            y2="14"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{ animation: motion("dmaic-lens-scan", "1.5s") }}
          />
        </svg>
      );

    case "improve":
      // Rising steps — 3 ascending bars
      return (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24" {...shared}>
          <rect x="3" y="15" width="5" height="7" rx="1" stroke={stroke} strokeWidth="1.5" style={{ animation: motion("dmaic-step-1", "1.1s") }} />
          <rect x="10" y="10" width="5" height="12" rx="1" stroke={stroke} strokeWidth="1.5" style={{ animation: motion("dmaic-step-2", "1.1s", "0.06s") }} />
          <rect x="17" y="5" width="5" height="17" rx="1" stroke={stroke} strokeWidth="1.5" style={{ animation: motion("dmaic-step-3", "1.1s", "0.12s") }} />
          {/* Arrow hint */}
          <path
            d="M5.5 13 L19.5 3"
            stroke={stroke}
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeDasharray="2 2"
            style={{ animation: motion("dmaic-scan", "1.2s") }}
          />
        </svg>
      );

    case "control":
      // Shield with checkmark
      return (
        <svg viewBox="0 0 24 24" fill="none" width="24" height="24" {...shared}>
          <path
            d="M12 2 L20 6 L20 12 C20 17 16 21 12 22 C8 21 4 17 4 12 L4 6 Z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
            style={{ animation: motion("dmaic-shield-breathe", "1.6s") }}
          />
          <path
            d="M8.5 12 L11 14.5 L16 9"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: motion("dmaic-check-draw", "1s") }}
          />
        </svg>
      );
  }
}
