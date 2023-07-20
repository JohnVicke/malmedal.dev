/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro",
  ],
  tailwindConfig: "./tailwind.config.cjs",
  importOrderTypeScriptVersion: "4.4.0",
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@/utils/(.*)$",
    "^@/layouts/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

module.exports = config;
