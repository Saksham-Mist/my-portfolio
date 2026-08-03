"use client";

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { techStack } from "@/data/tech";

export function TechSlider() {
  return (
    <div className="relative h-[100px] w-full sm:h-[120px]">
      <InfiniteSlider gap={24} duration={32} className="h-full items-center">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="liquid-glass flex h-16 shrink-0 items-center gap-2 rounded-full px-4 sm:h-[72px] sm:px-5"
            >
              <Icon size={18} className="shrink-0 text-neon" />
              <span className="whitespace-nowrap text-xs font-medium text-text-primary sm:text-sm">
                {tech.name}
              </span>
            </div>
          );
        })}
      </InfiniteSlider>

      <ProgressiveBlur
        direction="left"
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[80px] sm:w-[140px]"
      />
      <ProgressiveBlur
        direction="right"
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[80px] sm:w-[140px]"
      />
    </div>
  );
}
