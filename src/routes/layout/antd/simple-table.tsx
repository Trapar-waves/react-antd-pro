import { ProTable } from "@ant-design/pro-components";
import { createFileRoute } from "@tanstack/react-router";
import type { TableListItem, TableListParameters } from "../../../api/table/table.api.ts";
import { getTableList } from "../../../api/table/table.api.ts";
import { usePaginationTable } from "../../../hooks/use-pagination-table.ts";
import { columns } from "./components/columns.tsx";

export const Route = createFileRoute("/layout/antd/simple-table")({
  component: RouteComponent,
});

function RouteComponent() {
  const tableProperties = usePaginationTable<TableListItem, TableListParameters>({
    queryFn: getTableList,
    queryKey: "getTableListExample",
  });
  return (
    <ProTable<TableListItem, TableListParameters>
      columns={columns}
      {...tableProperties}
    />
  );
}
