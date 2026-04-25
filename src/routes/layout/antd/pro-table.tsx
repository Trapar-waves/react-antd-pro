import { createFileRoute } from "@tanstack/react-router";
import { ProTablePage } from "../../components/pro-table-page.tsx";

export const Route = createFileRoute("/layout/antd/pro-table")({
  component: ProTablePage,
});
