"use client";

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { techStack } from "@/data/tech";

export function TechSlider() {
  return (
    <div className="relative w-full overflow-hidden">
      <InfiniteSlider gap={12} duration={40} className="py-4">
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="flex-shrink-0 flex h-10 items-center gap-2 border border-hairline rounded-lg bg-card px-3 text-xs font-mono text-pencil whitespace-nowrap"
            >
              <Icon size={14} className="shrink-0" />
              <span>{tech.name}</span>
            </div>
          );
        })}
      </InfiniteSlider>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-canvas to-transparent" />
    </div>
  );
}
