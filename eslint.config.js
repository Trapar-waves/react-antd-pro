import antfu from "@antfu/eslint-config";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginRouter from "@tanstack/eslint-plugin-router";

export default antfu(
  {
    jsonc: true,
    javascript: true,
    yaml: true,
    stylistic: { indent: 2, quotes: "double", semi: true, jsx: true },
    react: true,
  },
  {
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
  },
);
