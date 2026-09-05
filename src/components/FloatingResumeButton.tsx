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
        <div className="mb-3 flex flex-col gap-2 rounded-lg p-3 bg-card border border-hairline">
          <p className="flex items-center gap-1.5 px-1 text-xs font-medium text-faint">
            <FileText size={12} />
            Resume
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-ink-black px-4 py-2 text-sm font-semibold text-canvas hover:bg-pencil transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <Download size={14} />
              Download
            </button>
            <button
              onClick={handleOpen}
              className="flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-hairline px-4 py-2 text-sm font-semibold text-ink-black hover:bg-hairline/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
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
        className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink-black text-canvas shadow-lg transition-all duration-300 hover:bg-pencil focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      >
        <Download size={20} />
      </button>
    </div>
  );
}
