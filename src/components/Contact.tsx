"use client";

import { Mail, Github, Linkedin, Code } from "lucide-react";
import { InView } from "@/components/motion-primitives/in-view";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Saksham-Mist", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/saksham-sharma-mist", icon: Linkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/MistakenMaestro", icon: Code },
];

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="w-full bg-gradient-to-br from-neon to-bg px-6 py-16 sm:py-20 md:py-32 md:px-10"
    >
      <InView className="mx-auto max-w-4xl text-center">
        <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#08321d] uppercase">
          (04) &mdash; Get in touch
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
          Let&apos;s Connect
        </h2>

        <p className="mt-4 text-base text-white/90 sm:text-lg">
          Open to backend and SDE roles — reach out and let&apos;s talk.
        </p>

        <a
          href="mailto:ssharma_be23@thapar.edu"
          className="mt-8 inline-flex items-center gap-2 rounded text-lg font-semibold text-white transition-colors hover:text-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neon"
        >
          <Mail size={20} />
          Email
        </a>

        <div className="mt-10 flex justify-center gap-6">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded text-white transition-all duration-300 hover:scale-125 hover:text-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neon"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>

        <p className="mt-12 font-mono text-xs text-white/70">
          &copy; {year}. Made with Next.js &bull; Built with passion.
        </p>
      </InView>
    </footer>
  );
}
