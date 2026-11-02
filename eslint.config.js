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
    "func-style": [
      "error",
      "declaration",
      { allowArrowFunctions: true },
    ],
  },
}, {
  files: ["src/routes/**/*.tsx"],
  name: "trapar/tanstack-router-routes",
  rules: {
    "react-refresh/only-export-components": "off", // 文件路由导出非组件成员（antd/pro-table.tsx:10、antd/simple-table.tsx:8 的 Route 导出）
  },
});
