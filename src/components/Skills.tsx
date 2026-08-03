"use client";

import { InView } from "@/components/motion-primitives/in-view";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { SkillGauge } from "@/components/SkillGauge";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="w-full bg-bg px-5 py-10 sm:px-10 sm:py-16">
      <InView className="mx-auto max-w-4xl">
        <span className="eyebrow">(02) &mdash; Toolbox</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Technical Skills
        </h2>
        <p className="mt-3 max-w-md text-sm text-text-secondary sm:text-base">
          Depth in backend engineering and testing, with the full-stack range to ship a
          product end to end.
        </p>
      </InView>

      <InView className="relative mx-auto mt-10 w-full max-w-6xl" transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
        <InfiniteSlider gap={24} duration={45} className="py-2">
          {skills.map((skill) => (
            <SkillGauge key={skill.id} skill={skill} />
          ))}
        </InfiniteSlider>

        <ProgressiveBlur
          direction="left"
          blurIntensity={1}
          className="pointer-events-none absolute top-0 left-0 hidden h-full w-[200px] sm:block"
        />
        <ProgressiveBlur
          direction="right"
          blurIntensity={1}
          className="pointer-events-none absolute top-0 right-0 hidden h-full w-[200px] sm:block"
        />
      </InView>
    </section>
  );
}
