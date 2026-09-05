"use client";

import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

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
    <section id="projects" className="w-full bg-canvas px-4 py-section sm:px-6">
      <div className="mx-auto max-w-4xl mb-12">
        <span className="eyebrow">Projects</span>
        <h2 className="mt-6 font-serif text-4xl sm:text-5xl leading-tight text-ink-black">
          Things I've shipped
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-pencil leading-relaxed">
          Three services built end-to-end — designed, tested, and deployed. Each one is live on GitHub.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-4xl">
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
                  className="w-[90%] max-w-[600px] rounded-lg border border-hairline bg-card p-7 text-left sm:p-8"
                >
                  <h3 className="font-display text-lg font-semibold text-text-primary">{project.title}</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="border border-hairline rounded px-3 py-1.5 text-xs font-mono text-pencil bg-canvas/40"
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
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-black hover:text-pencil transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </article>
              </div>
            );
          })}
        </div>

      </div>

      <div className="mt-8 flex flex-col items-center gap-4 sm:gap-6">
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={goPrev}
            aria-label="Previous project"
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-hairline text-pencil hover:bg-card hover:text-ink-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {projects.map((project, i) => (
              <button
                key={project.id}
                aria-label={`Go to ${project.title}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
                  i === index ? "w-6 bg-ink-black" : "w-1 bg-hairline"
                )}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            aria-label="Next project"
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-hairline text-pencil hover:bg-card hover:text-ink-black transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <span className="text-xs font-mono text-text-secondary">
          {index + 1} of {projects.length}
        </span>
      </div>
    </section>
  );
}
