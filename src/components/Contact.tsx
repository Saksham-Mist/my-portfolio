"use client";

import { Mail, Github, Linkedin, Code } from "lucide-react";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Saksham-Mist", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/saksham-sharma-mist", icon: Linkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/MistakenMaestro", icon: Code },
];

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-canvas px-4 py-section sm:px-6 border-t border-hairline">
      <div className="mx-auto max-w-4xl text-center">
        <span className="eyebrow">Contact</span>
        <h2 className="mt-6 font-serif text-4xl sm:text-5xl leading-tight text-ink-black">
          Let's build something
          <br />
          <span className="text-pencil">worth shipping.</span>
        </h2>

        <p className="mt-6 text-lg text-pencil leading-relaxed">
          Open to backend and SDE roles — reach out and let's talk.
        </p>

        <a
          href="mailto:ssharma_be23@thapar.edu"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ink-black text-canvas font-semibold transition-all hover:bg-pencil focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <Mail size={18} />
          Email me
        </a>

        <div className="mt-12 flex justify-center gap-4">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-lg border border-hairline text-pencil hover:text-ink-black hover:border-ink-black transition-all hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <p className="mt-16 pt-8 border-t border-hairline font-mono text-xs text-faint">
          © {year} Saksham Sharma. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
