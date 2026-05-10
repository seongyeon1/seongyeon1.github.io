import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        border: "var(--shadow-border)",
        "border-hover": "var(--shadow-border-hover)",
      },
      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.2, 0, 0, 1)",
      },
      colors: {
        // Vercel-inspired electric blue (anchor at #0070F3 — Vercel's signature)
        primary: {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#bae0ff",
          300: "#7cc5fd",
          400: "#36a5f8",
          500: "#0c8aef",
          600: "#0070f3",
          700: "#015dc7",
          800: "#064ea1",
          900: "#0a3f7f",
          950: "#082955",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            code: {
              backgroundColor: "#f4f4f5", // zinc-100
              color: "#3f3f46", // zinc-700
              padding: "0.15em 0.4em",
              borderRadius: "0.375rem",
              fontWeight: "500",
              fontSize: "0.85em",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
          },
        },
        invert: {
          css: {
            code: {
              backgroundColor: "#27272a", // zinc-800
              color: "#d4d4d8", // zinc-300
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
