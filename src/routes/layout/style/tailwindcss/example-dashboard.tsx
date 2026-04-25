import { createFileRoute } from "@tanstack/react-router";
import { TailwindExampleDashboardPage } from "../../../components/tailwind-example-dashboard-page.tsx";

export const Route = createFileRoute(
  "/layout/style/tailwindcss/example-dashboard",
)({
  component: TailwindExampleDashboardPage,
});
