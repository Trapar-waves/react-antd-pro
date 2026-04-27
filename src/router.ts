import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";

const basepath = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "") || "/";

export const router = createRouter({
  routeTree,
  basepath,
});
