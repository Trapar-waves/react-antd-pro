import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import tailwind from "@tailwindcss/postcss";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";
import { pluginMockServer } from "rspack-plugin-mock/rsbuild";

const { publicVars } = loadEnv({ prefixes: ["APP_"] });

export default defineConfig({
  plugins: [pluginReact(), pluginMockServer()],
  source: {
    define: publicVars,
  },
  server: {
    port: 6543,
    proxy: {
      "/api": "https://example.com",
    },
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwind],
      },
    },
    rspack: {
      plugins: [
        TanStackRouterRspack({ target: "react", autoCodeSplitting: true, routeFileIgnorePattern: ".css.d.ts", routeFileIgnorePrefix: "components" }),
      ],
    },
  },
  html: {
    tags: [
      {
        tag: "script",
        attrs: { src: "me.min.js" },
        head: true,
        append: true,
        publicPath: true,
        hash: true,
      },
    ],
  },
});
