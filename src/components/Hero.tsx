"use client";

import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { TechSlider } from "@/components/TechSlider";
import { CTAButton } from "@/components/CTAButton";

const AT_TOP_THRESHOLD_PX = 40;

export function Hero() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= AT_TOP_THRESHOLD_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden sm:h-screen"
    >
      {/* Static dark base with soft, overlapping color blooms — no motion */}
      <div className="hero-background" aria-hidden>
        <div
          className="aurora-blob"
          style={{ bottom: "-24%", right: "-14%", width: 900, height: 900, background: "#00ff88", opacity: 0.34 }}
        />
        <div
          className="aurora-blob"
          style={{ bottom: "-20%", left: "-12%", width: 720, height: 720, background: "#c3e86a", opacity: 0.22 }}
        />
        <div
          className="aurora-blob"
          style={{ top: "-18%", left: "5%", width: 620, height: 620, background: "#6fffb0", opacity: 0.18 }}
        />
      </div>

      <Navbar />

      {/* Bottom blur overlay */}
      <div className="bottom-blur-overlay" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-4 pt-24 pb-8 text-center sm:h-screen sm:items-start sm:px-6 sm:pt-28 sm:text-left md:pb-16 md:pt-32 md:px-10">
        {/* Eyebrow */}
        <div
          className="animate-blur-fade-up mb-5 flex items-center gap-3 sm:mb-6"
          style={{ animationDelay: "0ms" }}
        >
          <span className="hidden h-px w-8 bg-neon/50 sm:block" />
          <span className="eyebrow">Full-Stack &middot; Production-Ready</span>
        </div>

        {/* Title */}
        <h1
          className="animate-blur-fade-up max-w-4xl font-display text-[2.1rem] font-semibold leading-[0.98] tracking-[-0.02em] text-text-primary sm:text-4xl md:text-5xl lg:text-[4.25rem] xl:text-[4.75rem]"
          style={{ animationDelay: "100ms" }}
        >
          Backend Engineer <span className="text-neon mx-[0.18em]">•</span> Building Agentic AI
        </h1>

        {/* Description */}
        <p
          className="animate-blur-fade-up mt-5 max-w-md text-sm text-text-secondary sm:mt-6 sm:text-base"
          style={{ animationDelay: "200ms" }}
        >
          Debugging production systems, exploring agentic architectures, and building systems that actually work at scale.
        </p>

        {/* Tech slider */}
        <div
          className="animate-blur-fade-up mt-8 w-full max-w-3xl sm:mt-10"
          style={{ animationDelay: "300ms" }}
        >
          <TechSlider />
        </div>

        {/* CTA button */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:justify-start sm:gap-4">
          <div className="animate-blur-fade-up" style={{ animationDelay: "400ms" }}>
            <CTAButton variant="primary" href="#projects" onClick={(e) => { e.preventDefault(); scrollToProjects(); }}>
              View Projects
            </CTAButton>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
          <div className="animate-blur-fade-up" style={{ animationDelay: "450ms" }}>
            <CTAButton
              variant="tertiary"
              size="icon"
              ariaLabel="Scroll to top"
              disabled={atTop}
              onClick={scrollToTop}
            >
              <ChevronUp size={18} />
            </CTAButton>
          </div>
          <div className="animate-blur-fade-up" style={{ animationDelay: "500ms" }}>
            <CTAButton
              variant="tertiary"
              size="icon"
              ariaLabel="Scroll to projects"
              onClick={scrollToProjects}
            >
              <ChevronDown size={18} />
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Bottom-right status badge */}
      <div
        className="animate-blur-fade-up absolute bottom-6 left-4 z-10 hidden items-center gap-2 rounded-full border border-white/10 bg-bg-alt/80 px-4 py-2.5 backdrop-blur-md sm:left-auto sm:right-6 sm:flex md:bottom-10 md:right-10"
        style={{ animationDelay: "550ms" }}
      >
        <span className="h-2 w-2 rounded-full bg-neon" aria-hidden />
        <span className="font-mono text-xs font-medium text-text-primary">Open to SDE roles</span>
      </div>
    </section>
  );
}
