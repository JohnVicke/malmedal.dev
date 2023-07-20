import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      configFile: "./tailwind.config.cjs",
      applyBaseStyles: false,
    }),
    react(),
    mdx(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
