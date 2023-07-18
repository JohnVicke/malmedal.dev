import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    tailwind({
      configFile: "./tailwind.config.cjs",
      applyBaseStyles: false,
    }),
    react(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
