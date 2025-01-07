import defaultTheme from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        inter: [
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
        grotesque: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
      },
      minWidth: {
        8: "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config
