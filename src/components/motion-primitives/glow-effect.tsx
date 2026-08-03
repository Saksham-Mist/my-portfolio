"use client";

import { cn } from "@/lib/utils";

type GlowEffectProps = {
  className?: string;
  colors?: string[];
  mode?: "static" | "pulse" | "breathe" | "rotate";
  blur?: "soft" | "medium" | "strong" | number;
};

const BLUR_MAP: Record<string, string> = {
  soft: "blur-md",
  medium: "blur-xl",
  strong: "blur-2xl",
};

// Hover-triggered animation only — driven entirely by the ancestor `.group`'s
// :hover state via CSS, so this costs nothing (no JS, no paint) at rest. A
// framer-motion `animate`/`whileHover` prop here previously kept an infinite
// loop running from mount regardless of hover, and its inline styles beat the
// `opacity-0`/`group-hover:opacity-100` classes below — the glow was visibly
// on at 40-90% opacity all the time instead of only on hover.
const MODE_ANIMATION_CLASS: Record<string, string> = {
  pulse: "group-hover:[animation:glowPulse_2.5s_ease-in-out_infinite]",
  breathe: "group-hover:[animation:glowBreathe_4s_ease-in-out_infinite]",
  rotate: "group-hover:[animation:glowRotate_8s_linear_infinite]",
  static: "",
};

export function GlowEffect({
  className,
  colors = ["#00ff88"],
  mode = "static",
  blur = "medium",
}: GlowEffectProps) {
  const blurClass = typeof blur === "number" ? "" : BLUR_MAP[blur];
  const blurStyle = typeof blur === "number" ? { filter: `blur(${blur}px)` } : undefined;

  const background =
    colors.length > 1
      ? `conic-gradient(from 0deg, ${colors.join(", ")}, ${colors[0]})`
      : `radial-gradient(circle, ${colors[0]} 0%, transparent 70%)`;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
        blurClass,
        MODE_ANIMATION_CLASS[mode],
        className
      )}
      style={{ background, ...blurStyle }}
    />
  );
}
