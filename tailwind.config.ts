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
              backgroundColor: "rgb(var(--tw-prose-pre-bg))",
              padding: "0.2em 0.4em",
              borderRadius: "0.375rem",
              fontWeight: "400",
              fontSize: "0.875em",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
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
