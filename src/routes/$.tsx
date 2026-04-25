import { createFileRoute } from "@tanstack/react-router";
import { CatchAllPage } from "./components/catch-all-page.tsx";

export const Route = createFileRoute("/$")({
  component: CatchAllPage,
});
