import { createFileRoute } from "@tanstack/react-router";
import { LayoutNotFoundResult } from "./components/layout-not-found-result.tsx";
import { LayoutPage } from "./components/layout-page.tsx";

export const Route = createFileRoute("/layout")({
  component: LayoutPage,
  notFoundComponent: LayoutNotFoundResult,
});
