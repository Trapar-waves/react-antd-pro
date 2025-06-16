import antfu from "@antfu/eslint-config";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginRouter from "@tanstack/eslint-plugin-router";

export default antfu({
  stylistic: {
    quotes: "double",
    semi: true,
  },
  markdown: true,
  jsonc: true,
  test: true,
  typescript: true,
  yaml: true,
  react: true,
  formatters: {
    markdown: "prettier",
  },
}, {
  files: ["**/*.ts", "**/*.tsx"],
  plugins: {
    "@tanstack/router": pluginRouter,
    "@tanstack/query": pluginQuery,
  },
  rules: {
    "antfu/top-level-function": "off",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "@tanstack/router/create-route-property-order": "warn",
    "@tanstack/query/exhaustive-deps": "error",
  },
});
