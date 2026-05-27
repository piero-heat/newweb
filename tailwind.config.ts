import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        "hero-sub": "hsl(var(--hero-sub) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Geist Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["General Sans", "Geist Sans", "ui-sans-serif", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
