import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
/** @type {import('rehype-pretty-code').Options} */
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: {
    dark: "github-dark-dimmed",
    light: "github-light",
  },
  keepBackground: false,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [
        {
          type: "text",
          value: " ",
        },
      ];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {},
};

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
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
});
