import { createFileRoute } from "@tanstack/react-router";
import { DashboardExamplePage } from "../components/dashboard-example-page.tsx";

export const Route = createFileRoute("/dashboard/example-dashboard")({
  component: DashboardExamplePage,
});
