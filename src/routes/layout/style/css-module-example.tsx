import { createFileRoute } from "@tanstack/react-router";
import CSSModuleExample from "../../../pages/CSSModuleExample";

export const Route = createFileRoute("/layout/style/css-module-example")({
  component: CSSModuleExample,
});
