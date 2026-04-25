import { createRootRoute } from "@tanstack/react-router";
import { RootNotFound } from "./components/root-not-found.tsx";
import { RootPage } from "./components/root-page.tsx";

export const Route = createRootRoute({
  component: RootPage,
  notFoundComponent: RootNotFound,
});
