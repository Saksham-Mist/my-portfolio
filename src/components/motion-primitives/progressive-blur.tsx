"use client";

import { cn } from "@/lib/utils";

type ProgressiveBlurProps = {
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  blurIntensity?: number;
};

const DIRECTION_GRADIENTS: Record<string, string> = {
  left: "to right",
  right: "to left",
  top: "to bottom",
  bottom: "to top",
};

export function ProgressiveBlur({
  className,
  direction = "left",
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const gradientDirection = DIRECTION_GRADIENTS[direction];
  const maskImage = `linear-gradient(${gradientDirection}, black 0%, rgba(0,0,0,0.55) 55%, transparent 100%)`;

  return (
    <div className={cn(className)} aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: `blur(${(6 * blurIntensity).toFixed(1)}px)`,
          WebkitBackdropFilter: `blur(${(6 * blurIntensity).toFixed(1)}px)`,
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${gradientDirection}, #0a0e27 0%, transparent 100%)`,
          opacity: 0.45,
        }}
      />
    </div>
  );
}
