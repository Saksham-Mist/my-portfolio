import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0e27",
        "bg-alt": "#1a1a2e",
        "text-primary": "#f5f5f5",
        "text-secondary": "#b0b0b0",
        "text-tertiary": "#6b7280",
        neon: "#00ff88",
        border: "#2a3a3a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      keyframes: {
        blurFadeUp: {
          from: {
            opacity: "0",
            filter: "blur(20px)",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            filter: "blur(0)",
            transform: "translateY(0)",
          },
        },
        gradientShift: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(0, 255, 136, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 0 10px rgba(0, 255, 136, 0)",
          },
        },
        slideLeft: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "blur-fade-up": "blurFadeUp 1s ease-out forwards",
        "gradient-shift": "gradientShift 18s ease-in-out infinite",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
