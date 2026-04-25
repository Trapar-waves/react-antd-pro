import { createFileRoute } from "@tanstack/react-router";
import { WelcomePage } from "../components/welcome-page.tsx";

export const Route = createFileRoute("/layout/welcome")({
  component: WelcomePage,
});
