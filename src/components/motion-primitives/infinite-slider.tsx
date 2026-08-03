"use client";

import { Fragment, useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
  autoplay?: boolean;
};

export function InfiniteSlider({
  children,
  gap = 24,
  duration = 30,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
  autoplay = true,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const rawPrefersReducedMotion = useReducedMotion();

  // `useReducedMotion` reads the real matchMedia value synchronously on the
  // client's very first render, but the server always renders as if it were
  // false (no `window` to check). Letting that raw value control className
  // or children here caused a hydration mismatch. Gating it behind `mounted`
  // keeps the first client render identical to the server, then corrects to
  // the real preference a tick later.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  const prefersReducedMotion = mounted && !!rawPrefersReducedMotion;

  const axis = direction === "horizontal" ? "x" : "y";
  const from = "0%";
  const to = reverse ? "50%" : "-50%";
  const shouldAnimate = autoplay && !prefersReducedMotion;

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className={cn(
          "flex w-max shrink-0",
          prefersReducedMotion && "flex-wrap",
          direction === "horizontal" ? "flex-row" : "flex-col"
        )}
        style={{ gap }}
        animate={shouldAnimate ? { [axis]: [from, to] } : undefined}
        transition={{
          duration: currentDuration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        onMouseEnter={() => durationOnHover && setCurrentDuration(durationOnHover)}
        onMouseLeave={() => durationOnHover && setCurrentDuration(duration)}
      >
        <Fragment key="slider-set-a">{children}</Fragment>
        {/* Duplicate set exists only to make the loop seamless — pointless
            (and doubles visible content) once the loop is turned off. */}
        {!prefersReducedMotion && <Fragment key="slider-set-b">{children}</Fragment>}
      </motion.div>
    </div>
  );
}
