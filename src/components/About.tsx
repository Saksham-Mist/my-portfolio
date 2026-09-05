"use client";

export function About() {
  return (
    <section id="about" className="w-full bg-canvas px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <span className="eyebrow">About</span>
        <h2 className="mt-6 mb-12 font-serif text-4xl sm:text-5xl leading-tight text-ink-black">
          The short version
        </h2>

        <div className="max-w-3xl space-y-6">
          <p className="text-lg leading-relaxed text-ink-black">
            Backend engineer exploring agentic systems and production infrastructure. I learn best by building — trying out generative models, debugging whatever breaks in production, and getting a feel for how to make systems <span className="font-semibold">smarter and more efficient</span>.
          </p>
          <p className="text-lg leading-relaxed text-ink-black">
            <span className="font-semibold">Backend is where I'm strongest; AI is where I'm having the most fun right now.</span> No grand plan yet, just a lot of curiosity and a hunch that the two will end up overlapping in my work. If you're doing something in that space, I'd love to be part of it.
          </p>
        </div>
      </div>
    </section>
  );
}
