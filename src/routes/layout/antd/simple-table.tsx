import { createFileRoute } from "@tanstack/react-router";
import { SimpleTablePage } from "../../components/simple-table-page.tsx";

export const Route = createFileRoute("/layout/antd/simple-table")({
  component: SimpleTablePage,
});
