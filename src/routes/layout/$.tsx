import { createFileRoute } from "@tanstack/react-router";
import { LayoutCatchAllPage } from "../components/layout-catch-all-page.tsx";

export const Route = createFileRoute("/layout/$")({
  component: LayoutCatchAllPage,
});
