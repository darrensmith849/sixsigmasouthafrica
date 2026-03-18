interface DMAICFrameworkVisualProps {
  phase: "define" | "measure" | "analyse" | "improve" | "control";
  animated?: boolean;
}

export default function DMAICFrameworkVisual({ phase, animated = false }: DMAICFrameworkVisualProps) {
  const stroke = "var(--muted2)";
  const accent = "var(--accent2)";
  const anim = (name: string, duration: string, delay = "0s") =>
    animated ? `${name} ${duration} ease-in-out ${delay} infinite` : "none";

  if (phase === "define") {
    return (
      <svg viewBox="0 0 260 160" fill="none" className="h-28 w-full" aria-hidden="true">
        <rect x="18" y="18" width="224" height="124" rx="16" stroke={stroke} strokeOpacity="0.45" />
        <circle
          cx="130"
          cy="80"
          r="34"
          stroke={accent}
          strokeWidth="1.5"
          strokeOpacity="0.7"
          style={{ animation: anim("dmaic-pulse", "2.4s") }}
        />
        <circle
          cx="130"
          cy="80"
          r="17"
          stroke={accent}
          strokeWidth="1.2"
          strokeOpacity="0.5"
          style={{ animation: anim("dmaic-pulse", "2.4s", "0.25s") }}
        />
        <circle cx="130" cy="80" r="4" fill={accent} fillOpacity="0.8" />
        <line x1="130" y1="18" x2="130" y2="42" stroke={stroke} strokeOpacity="0.45" />
        <line x1="130" y1="118" x2="130" y2="142" stroke={stroke} strokeOpacity="0.45" />
        <line x1="18" y1="80" x2="42" y2="80" stroke={stroke} strokeOpacity="0.45" />
        <line x1="218" y1="80" x2="242" y2="80" stroke={stroke} strokeOpacity="0.45" />
      </svg>
    );
  }

  if (phase === "measure") {
    return (
      <svg viewBox="0 0 260 160" fill="none" className="h-28 w-full" aria-hidden="true">
        <rect x="18" y="18" width="224" height="124" rx="16" stroke={stroke} strokeOpacity="0.45" />
        <line x1="42" y1="120" x2="42" y2="56" stroke={stroke} strokeOpacity="0.5" />
        <line x1="42" y1="120" x2="220" y2="120" stroke={stroke} strokeOpacity="0.5" />
        <rect x="62" y="92" width="18" height="28" rx="2" stroke={accent} strokeOpacity="0.55" style={{ animation: anim("dmaic-rise-1", "1.9s") }} />
        <rect x="96" y="76" width="18" height="44" rx="2" stroke={accent} strokeOpacity="0.65" style={{ animation: anim("dmaic-rise-2", "1.9s") }} />
        <rect x="130" y="66" width="18" height="54" rx="2" stroke={accent} strokeOpacity="0.75" style={{ animation: anim("dmaic-rise-3", "1.9s") }} />
        <rect x="164" y="82" width="18" height="38" rx="2" stroke={accent} strokeOpacity="0.55" style={{ animation: anim("dmaic-rise-2", "1.9s", "0.2s") }} />
        <path d="M60 54 H202" stroke={stroke} strokeOpacity="0.3" strokeDasharray="3 5" style={{ animation: anim("dmaic-scan", "2.4s") }} />
      </svg>
    );
  }

  if (phase === "analyse") {
    return (
      <svg viewBox="0 0 260 160" fill="none" className="h-28 w-full" aria-hidden="true">
        <rect x="18" y="18" width="224" height="124" rx="16" stroke={stroke} strokeOpacity="0.45" />
        <polyline
          points="44,112 78,92 110,101 146,70 182,82 216,48"
          stroke={accent}
          strokeWidth="1.5"
          strokeOpacity="0.75"
          style={{ animation: anim("dmaic-drift", "2.1s") }}
        />
        <circle cx="146" cy="70" r="20" stroke={accent} strokeOpacity="0.65" style={{ animation: anim("dmaic-pulse", "2.4s") }} />
        <line x1="160" y1="84" x2="184" y2="108" stroke={accent} strokeOpacity="0.65" style={{ animation: anim("dmaic-drift", "2.1s", "0.2s") }} />
        <line x1="42" y1="120" x2="220" y2="120" stroke={stroke} strokeOpacity="0.45" />
        <line x1="42" y1="120" x2="42" y2="40" stroke={stroke} strokeOpacity="0.45" />
      </svg>
    );
  }

  if (phase === "improve") {
    return (
      <svg viewBox="0 0 260 160" fill="none" className="h-28 w-full" aria-hidden="true">
        <rect x="18" y="18" width="224" height="124" rx="16" stroke={stroke} strokeOpacity="0.45" />
        <rect x="50" y="96" width="38" height="24" rx="4" stroke={accent} strokeOpacity="0.55" style={{ animation: anim("dmaic-step-1", "2s") }} />
        <rect x="102" y="78" width="38" height="42" rx="4" stroke={accent} strokeOpacity="0.7" style={{ animation: anim("dmaic-step-2", "2s") }} />
        <rect x="154" y="60" width="38" height="60" rx="4" stroke={accent} strokeOpacity="0.85" style={{ animation: anim("dmaic-step-3", "2s") }} />
        <path d="M56 72 L88 72 L88 58" stroke={stroke} strokeOpacity="0.35" />
        <path d="M108 54 L140 54 L140 42" stroke={stroke} strokeOpacity="0.35" />
        <path d="M160 36 L192 36 L192 24" stroke={stroke} strokeOpacity="0.35" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 260 160" fill="none" className="h-28 w-full" aria-hidden="true">
      <rect x="18" y="18" width="224" height="124" rx="16" stroke={stroke} strokeOpacity="0.45" />
      <circle cx="86" cy="80" r="20" stroke={accent} strokeOpacity="0.58" style={{ animation: anim("dmaic-lock", "2.2s") }} />
      <circle cx="130" cy="80" r="20" stroke={accent} strokeOpacity="0.72" style={{ animation: anim("dmaic-lock", "2.2s", "0.15s") }} />
      <circle cx="174" cy="80" r="20" stroke={accent} strokeOpacity="0.58" style={{ animation: anim("dmaic-lock", "2.2s", "0.3s") }} />
      <line x1="106" y1="80" x2="110" y2="80" stroke={accent} strokeOpacity="0.7" />
      <line x1="150" y1="80" x2="154" y2="80" stroke={accent} strokeOpacity="0.7" />
      <path d="M72 108 H188" stroke={stroke} strokeOpacity="0.35" strokeDasharray="3 5" />
      <path d="M72 52 H188" stroke={stroke} strokeOpacity="0.35" strokeDasharray="3 5" />
    </svg>
  );
}
