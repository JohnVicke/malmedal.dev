import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/edge";
import { defineConfig } from "astro/config";
import { toString as mdastToString } from "mdast-util-to-string";
import rehypePrettyCode from "rehype-pretty-code";

/**
 * @param {string} content
 * @param {number} wpm
 * @returns {number}
 * */
function estimateReadingTime(content, wpm = 200) {
  const lines = content.split("\n");
  const startIndex = lines.findIndex((line) => line.trim().startsWith("#"));
  const cleanedContent = lines.slice(startIndex).join("\n");
  const wordCount = cleanedContent
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  return Math.ceil(wordCount / wpm);
}

/**
 * @typedef {import('mdast').Root} Root
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {Number} [wpm]
 *   Word per minute (default: 200).
 */

/** @type {import('unified').Plugin<[Options?], Root>} */
function remarkReadingTime(options) {
  return function transformer(tree, { data }) {
    const textOnPage = mdastToString(tree);
    data.astro.frontmatter.minutesRead = estimateReadingTime(
      textOnPage,
      options?.wpm,
    );
  };
}

/** @type {import('rehype-pretty-code').Options} */
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
    remarkPlugins: [remarkReadingTime],
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
