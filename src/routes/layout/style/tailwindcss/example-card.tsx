import { createFileRoute } from "@tanstack/react-router";
import { TailwindExampleCardPage } from "../../../components/tailwind-example-card-page.tsx";

export const Route = createFileRoute("/layout/style/tailwindcss/example-card")({
  component: TailwindExampleCardPage,
});
