"use client";

import type { ReactNode, MouseEventHandler } from "react";
import { cn } from "@/lib/utils";
import { GlowEffect } from "./motion-primitives/glow-effect";

type CTAButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "default" | "icon";
  children: ReactNode;
  onClick?: MouseEventHandler;
  href?: string;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
};

const VARIANT_CLASSES: Record<string, string> = {
  primary: "bg-neon text-[#04140b] hover:shadow-[0_0_24px_rgba(0,255,136,0.55)]",
  secondary:
    "bg-transparent text-neon border border-neon/60 hover:border-neon hover:bg-neon/5",
  tertiary:
    "liquid-glass text-text-primary hover:bg-white/[0.05] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]",
};

const SIZE_CLASSES: Record<string, string> = {
  default: "px-6 sm:px-8 py-2.5 sm:py-3",
  icon: "px-4 py-2.5 sm:px-5 sm:py-3",
};

export function CTAButton({
  variant = "primary",
  size = "default",
  children,
  onClick,
  href,
  disabled,
  className,
  ariaLabel,
  target,
  rel,
}: CTAButtonProps) {
  const base =
    "relative z-10 inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 ease-out hover:scale-[1.03] active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-bg";
  const classes = cn(
    base,
    SIZE_CLASSES[size],
    VARIANT_CLASSES[variant],
    disabled && "pointer-events-none opacity-50",
    className
  );

  return (
    <div className="group relative inline-flex">
      {variant === "primary" && (
        <GlowEffect colors={["#00ff88", "#00cc6a"]} mode="pulse" blur="medium" className="rounded-full" />
      )}
      {href ? (
        <a href={href} className={classes} aria-label={ariaLabel} target={target} rel={rel} onClick={onClick}>
          {children}
        </a>
      ) : (
        <button type="button" className={classes} aria-label={ariaLabel} disabled={disabled} onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
}
