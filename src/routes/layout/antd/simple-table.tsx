import type { TableListItem, TableListParams } from "../../../api/table/table.api.ts";
import { ProTable } from "@ant-design/pro-components";
import { createFileRoute } from "@tanstack/react-router";
import { getTableList } from "../../../api/table/table.api.ts";
import { usePaginationTable } from "../../../hooks/usePaginationTable.ts";
import { columns } from "./pro-table.tsx";

export const Route = createFileRoute("/layout/antd/simple-table")({
  component: RouteComponent,
});

function RouteComponent() {
  const tableProps = usePaginationTable<TableListItem, TableListParams>({
    queryFn: getTableList,
    queryKey: "getTableListExample",
  });
  return (
    <ProTable<TableListItem, TableListParams>
      columns={columns}
      {...tableProps}
    />
  );
}
