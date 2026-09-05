"use client";

import { Navbar } from "@/components/Navbar";
import { TechSlider } from "@/components/TechSlider";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative w-full bg-canvas px-4 py-20 sm:px-6 md:py-32">
      <Navbar />

      <div className="mx-auto max-w-4xl pt-12 sm:pt-20">
        {/* Eyebrow label */}
        <div className="mb-6 sm:mb-8">
          <span className="eyebrow">Backend Engineer · Production-Ready</span>
        </div>

        {/* Hero headline — display serif with compressed tracking */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight text-ink-black mb-6">
          Building Agentic AI
        </h1>

        {/* Subheading with serif accent */}
        <p className="max-w-2xl text-lg sm:text-xl text-pencil mb-8 leading-relaxed">
          Debugging production systems, exploring agentic architectures, and building systems that actually work at scale.
        </p>

        {/* Tech stack preview */}
        <div className="mb-12 sm:mb-16">
          <TechSlider />
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
          <button
            onClick={scrollToProjects}
            className="btn-primary"
          >
            View Projects
          </button>
          <a href="#about" className="btn-secondary text-center">
            Learn More
          </a>
        </div>

        {/* Status badge */}
        <div className="mt-12 inline-block">
          <div className="border-hairline rounded-full px-4 py-2 text-sm text-pencil">
            ✓ Available for backend roles
          </div>
        </div>
      </div>
    </section>
  );
}
