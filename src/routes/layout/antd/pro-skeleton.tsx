import { createFileRoute } from "@tanstack/react-router";
import { ProSkeletonPage } from "../../components/pro-skeleton-page.tsx";

export const Route = createFileRoute("/layout/antd/pro-skeleton")({
  component: ProSkeletonPage,
});
