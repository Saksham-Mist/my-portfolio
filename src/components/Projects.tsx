"use client";

import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Github } from "lucide-react";
import { InView } from "@/components/motion-primitives/in-view";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { CTAButton } from "@/components/CTAButton";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const CATEGORY_COLORS: Record<string, string> = {
  backend: "bg-neon/10 text-neon border-neon/30",
  database: "bg-sky-400/10 text-sky-300 border-sky-400/30",
  testing: "bg-amber-400/10 text-amber-300 border-amber-400/30",
  devops: "bg-fuchsia-400/10 text-fuchsia-300 border-fuchsia-400/30",
  frontend: "bg-indigo-400/10 text-indigo-300 border-indigo-400/30",
};

export function Projects() {
  const [index, setIndex] = useState(0);
  // The carousel stacks cards with position:absolute for the crossfade, which
  // needs an explicit container height. Copy length varies per project and
  // wraps differently at every width, so a fixed h-[Npx] clipped the card on
  // narrower screens (measured up to 575px of real content against a 400px
  // box). Measuring the active card's actual height keeps the container
  // exactly as tall as it needs to be at any width.
  const activeCardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  const goPrev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);
  const goNext = () => setIndex((i) => (i + 1) % projects.length);

  useLayoutEffect(() => {
    const measure = () => {
      if (activeCardRef.current) {
        setCardHeight(activeCardRef.current.scrollHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [index]);

  return (
    <section id="projects" className="w-full bg-bg px-5 py-10 sm:px-10 sm:py-16">
      <InView className="mx-auto max-w-4xl">
        <span className="eyebrow">(01) &mdash; Selected work</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Featured Projects
        </h2>
      </InView>

      <InView
        className="relative mx-auto mt-10 w-full max-w-4xl"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div
          className="relative w-full min-h-[340px] overflow-hidden transition-[height] duration-300 ease-out"
          style={{ height: cardHeight ? `${cardHeight}px` : undefined }}
        >
          {projects.map((project, i) => {
            const offset = i - index;
            let style: CSSProperties = { opacity: 0, transform: "scale(0.6)", zIndex: 0, pointerEvents: "none" };

            if (offset === 0) {
              style = { opacity: 1, transform: "translateX(0%) scale(1)", zIndex: 20, pointerEvents: "auto" };
            } else if (offset === 1 || offset === -(projects.length - 1)) {
              style = { opacity: 0.5, transform: "translateX(55%) scale(0.75)", zIndex: 10, pointerEvents: "none" };
            } else if (offset === -1 || offset === projects.length - 1) {
              style = { opacity: 0.5, transform: "translateX(-55%) scale(0.75)", zIndex: 10, pointerEvents: "none" };
            }

            return (
              <div
                key={project.id}
                className="absolute inset-x-0 top-0 flex justify-center transition-all duration-[400ms] ease-out"
                style={style}
              >
                <article
                  ref={offset === 0 ? activeCardRef : undefined}
                  className="w-[90%] max-w-[600px] rounded-xl border border-border bg-bg-alt p-6 text-left sm:p-8"
                >
                  <h3 className="font-display text-lg font-semibold text-text-primary">{project.title}</h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className={cn(
                          "rounded-full border px-2.5 py-1 text-xs font-medium",
                          CATEGORY_COLORS[tech.category]
                        )}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-3">
                    {project.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
                        <span className="mt-1 text-neon">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-on-hover mt-6 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-bg-alt"
                  >
                    <Github size={16} />
                    GitHub
                    <ArrowRight size={14} />
                  </a>
                </article>
              </div>
            );
          })}
        </div>

        <ProgressiveBlur
          direction="left"
          blurIntensity={1}
          className="pointer-events-none absolute top-0 left-0 z-30 hidden h-full w-[200px] sm:block"
        />
        <ProgressiveBlur
          direction="right"
          blurIntensity={1}
          className="pointer-events-none absolute top-0 right-0 z-30 hidden h-full w-[200px] sm:block"
        />
      </InView>

      <div className="mt-8 flex flex-col items-center gap-4 sm:gap-6">
        <div className="flex items-center justify-center gap-6">
          <CTAButton variant="tertiary" size="icon" ariaLabel="Previous project" onClick={goPrev}>
            <ChevronLeft size={18} />
          </CTAButton>
          <div className="flex items-center gap-2">
            {projects.map((project, i) => (
              <button
                key={project.id}
                aria-label={`Go to ${project.title}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                  i === index ? "w-6 bg-neon" : "w-1.5 bg-border"
                )}
              />
            ))}
          </div>
          <CTAButton variant="tertiary" size="icon" ariaLabel="Next project" onClick={goNext}>
            <ChevronRight size={18} />
          </CTAButton>
        </div>
        <span className="text-xs font-mono text-text-secondary">
          {index + 1} of {projects.length}
        </span>
      </div>
    </section>
  );
}
