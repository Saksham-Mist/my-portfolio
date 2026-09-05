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
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-5 sm:py-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-serif text-lg font-semibold text-ink-black sm:text-xl"
        >
          <span className="h-2.5 w-2.5 bg-ink-black" aria-hidden />
          Saksham Sharma
        </a>

        <nav
          className="hidden lg:flex items-center gap-1 border border-hairline bg-canvas/70 rounded-lg px-1 py-1 backdrop-blur-sm"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 rounded px-3 py-2 font-mono text-xs text-pencil hover:text-ink-black hover:bg-hairline/40 transition-all"
            >
              <span className="text-[10px] text-faint">{link.index}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-40 flex h-10 w-10 items-center justify-center border border-hairline bg-canvas/70 text-ink-black backdrop-blur-sm rounded-lg transition-all lg:hidden"
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
          "fixed inset-0 z-10 bg-ink-black/20 backdrop-blur-sm transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-20 flex w-[85%] max-w-sm flex-col bg-canvas px-6 pt-20 pb-8 border-l border-hairline backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-1 flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 font-serif text-xl font-semibold text-ink-black rounded-lg hover:bg-card transition-all",
                open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              )}
              style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
            >
              <span className="font-mono text-xs text-faint">{link.index}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
