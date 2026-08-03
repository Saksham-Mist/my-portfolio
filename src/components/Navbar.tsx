"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Projects", href: "#projects", index: "01" },
  { label: "Skills", href: "#skills", index: "02" },
  { label: "About", href: "#about", index: "03" },
  { label: "Contact", href: "#contact", index: "04" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6">
        <a
          href="#top"
          className="focus-ring animate-blur-fade-up flex items-center gap-2 rounded font-display text-lg font-semibold tracking-tight text-text-primary sm:text-xl md:text-2xl"
          style={{ animationDelay: "0ms" }}
        >
          <span className="h-2 w-2 rounded-sm bg-neon" aria-hidden />
          Saksham Sharma
        </a>

        <nav
          className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-bg-alt/70 px-2 py-1 shadow-sm backdrop-blur-md"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "focus-ring animate-blur-fade-up flex items-center gap-1.5 rounded-full px-3 py-2 font-mono text-xs tracking-wide uppercase transition-colors duration-300",
                i === 0
                  ? "font-medium text-neon"
                  : "text-text-secondary hover:text-text-primary"
              )}
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              <span className="text-[10px] opacity-50">{link.index}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="focus-ring animate-blur-fade-up relative z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-bg-alt/70 text-text-primary backdrop-blur-md transition-all duration-300 hover:bg-bg-alt/90 lg:hidden"
          style={{ animationDelay: "350ms" }}
        >
          <Menu
            size={20}
            className={cn(
              "absolute transition-all duration-300",
              open ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
            )}
          />
          <X
            size={20}
            className={cn(
              "absolute transition-all duration-300",
              open ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
            )}
          />
        </button>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-10 bg-black/50 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-20 flex w-[85%] max-w-sm flex-col bg-bg-alt/95 px-8 pt-24 pb-8 shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-1 flex-col" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "focus-ring flex items-center gap-3 border-b border-white/10 py-4 font-display text-2xl font-semibold text-text-primary transition-all duration-500",
                open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              )}
              style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
            >
              <span className="font-mono text-sm text-neon/70">{link.index}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
