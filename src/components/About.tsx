"use client";

import { InView } from "@/components/motion-primitives/in-view";

export function About() {
  return (
    <section id="about" className="w-full bg-bg px-5 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <InView>
          <span className="eyebrow">(03) &mdash; About</span>
          <h2 className="mt-3 mb-8 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
            The short version
          </h2>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="max-w-[700px] rounded-xl border border-border bg-bg-alt p-8 text-left sm:p-12">
            <p className="text-[15px] leading-[1.8] text-text-secondary sm:text-base">
              Backend engineer exploring agentic systems and production infrastructure.
              I learn best by building — trying out generative models, debugging
              whatever breaks in production, and getting a feel for how to make
              systems{" "}
              <span className="font-semibold text-text-primary">
                smarter and more efficient
              </span>
              .
            </p>
            <p className="mt-5 text-[15px] leading-[1.8] text-text-secondary sm:text-base">
              <span className="font-semibold text-text-primary">
                Backend is where I&apos;m strongest; AI is where I&apos;m having the
                most fun right now.
              </span>{" "}
              No grand plan yet, just a lot of curiosity and a hunch that the two will
              end up overlapping in my work. If you&apos;re doing something in that
              space, I&apos;d love to be part of it.
            </p>
          </div>
        </InView>
      </div>
    </section>
  );
}
