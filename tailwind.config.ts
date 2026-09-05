import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Subframe palette: warm off-white canvas, monochromatic
        canvas: "#fafafa",
        card: "#ededed",
        "surface-dark": "#242424",
        "ink-black": "#171717",
        "pencil": "#5c5c5c",
        "faint": "#a3a3a3",
        "hairline": "#e5e7eb",
        // Fallback for components still using old colors (being updated)
        neon: "#171717",
        bg: "#fafafa",
        "bg-alt": "#ededed",
        "text-primary": "#171717",
        "text-secondary": "#5c5c5c",
        "text-tertiary": "#a3a3a3",
        border: "#e5e7eb",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
      },
      spacing: {
        "section": "48px",
        "section-sm": "32px",
      },
    },
  },
  plugins: [],
};

export default config;
