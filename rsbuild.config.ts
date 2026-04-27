import process from "node:process";
import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsdoctorRspackPlugin } from "@rsdoctor/rspack-plugin";
import tailwind from "@tailwindcss/postcss";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";
import TurboConsole from "unplugin-turbo-console/rspack";
import { createMockMiddleware } from "./mock/dev-server-handlers.ts";

const { publicVars } = loadEnv({ prefixes: ["APP_"] });
const enableRsdoctor = Boolean(process.env.RSDOCTOR);
const enableTurboConsole = process.env.NODE_ENV === "development";

export default defineConfig({
  performance: {
    ...(enableRsdoctor ? { buildCache: false } : {}),
  },
  plugins: [pluginReact()],
  source: {
    define: publicVars,
  },
  server: {
    port: 6543,
    proxy: {
      "/api": "https://example.com",
    },
    setup: ({ server, action }) => {
      if (action === "dev") {
        server.middlewares.use(createMockMiddleware());
      }
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
        ...(enableTurboConsole ? [TurboConsole()] : []),
        ...(enableRsdoctor
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
