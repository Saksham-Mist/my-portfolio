"use client";

import { useEffect, useRef, useState } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingResumeButton() {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Saksham-Sharma-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setExpanded(false);
  };

  const handleOpen = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
    setExpanded(false);
  };

  return (
    <div ref={ref} className="fixed bottom-4 right-4 z-40 flex flex-col items-end sm:bottom-6 sm:right-6">
      {expanded && (
        <div className="liquid-glass mb-3 flex flex-col gap-2 rounded-2xl p-3 animate-fade-in">
          <p className="flex items-center gap-1.5 px-1 text-xs font-medium text-text-secondary">
            <FileText size={12} />
            Resume
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="focus-ring glow-on-hover flex items-center gap-1.5 whitespace-nowrap rounded-full bg-neon px-4 py-2 text-sm font-semibold text-[#04140b]"
            >
              <Download size={14} />
              Download
            </button>
            <button
              onClick={handleOpen}
              className="focus-ring glow-on-hover flex items-center gap-1.5 whitespace-nowrap rounded-full border border-neon px-4 py-2 text-sm font-semibold text-neon"
            >
              <ExternalLink size={14} />
              Open
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-label="Resume options"
        aria-expanded={expanded}
        className={cn(
          "focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-neon text-[#04140b] shadow-lg transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,255,136,0.65)] hover:scale-105",
          !expanded && "animate-pulse-glow"
        )}
      >
        <Download size={24} />
      </button>
    </div>
  );
}
