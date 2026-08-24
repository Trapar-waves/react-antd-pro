import { rentonReact } from "@renton/eslint-config-react";

export default rentonReact({
  stylistic: {
    quotes: "double",
    semi: true,
  },
  tanstackQuery: true,
  tanstackRouter: true,
}, {
  files: ["**/*.ts", "**/*.tsx"],
  rules: {
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/router/create-route-property-order": "warn",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
  },
}, {
  files: ["pnpm-workspace.yaml"],
  name: "trapar/pnpm-workspace-yaml-trust-policy",
  rules: {
    "pnpm/yaml-enforce-settings": "off",
  },
}, {
  files: ["src/routes/**/*.tsx"],
  name: "trapar/tanstack-router-routes",
  rules: {
    "react-refresh/only-export-components": "off",
  },
});
