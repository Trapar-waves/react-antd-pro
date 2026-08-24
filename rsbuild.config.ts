import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import tailwind from "@tailwindcss/postcss";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";
import process from "node:process";
import TurboConsole from "unplugin-turbo-console/rspack";
import { createMockMiddleware } from "./mock/development-server-handlers.ts";

const { publicVars } = loadEnv({ prefixes: ["APP_"] });

function normalizeBasePath(): string {
  const raw = process.env.BASE_PATH?.trim();
  if (!raw || raw === "/") {
    return "/";
  }
  const prefixed = raw.startsWith("/") ? raw : `/${raw}`;
  return prefixed.endsWith("/") ? prefixed : `${prefixed}/`;
}

const basePath = normalizeBasePath();
const isUseSubpath = basePath !== "/";

const isEnableRsdoctor = Boolean(process.env.RSDOCTOR);
const isEnableTurboConsole = process.env.NODE_ENV === "development";

export default defineConfig({
  ...(isUseSubpath && { output: { assetPrefix: basePath } }),
  performance: {
    ...(isEnableRsdoctor && { buildCache: false }),
  },
  plugins: [pluginReact()],
  server: {
    ...(isUseSubpath && { base: basePath }),
    port: 6543,
    proxy: {
      "/api": "https://example.com",
    },
    setup: ({ action, server }) => {
      if (action === "dev") {
        server.middlewares.use(createMockMiddleware());
      }
    },
  },
  source: {
    define: publicVars,
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwind],
      },
    },
    rspack: {
      plugins: [
        TanStackRouterRspack({ autoCodeSplitting: true, routeFileIgnorePattern: ".css.d.ts", routeFileIgnorePrefix: "components", target: "react" }),
        ...(isEnableTurboConsole ? [TurboConsole()] : []),
        ...(isEnableRsdoctor
          ? [
              new RsdoctorRspackPlugin({
                output: {
                  mode: "brief",
                  options: {
                    type: ["json"],
                  },
                },
              }),
            ]
          : []),
      ],
    },
  },
});
