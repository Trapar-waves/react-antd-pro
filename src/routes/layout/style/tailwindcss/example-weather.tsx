import { createFileRoute } from "@tanstack/react-router";
import { TailwindExampleWeatherPage } from "../../../components/tailwind-example-weather-page.tsx";

export const Route = createFileRoute(
  "/layout/style/tailwindcss/example-weather",
)({
  component: TailwindExampleWeatherPage,
});
