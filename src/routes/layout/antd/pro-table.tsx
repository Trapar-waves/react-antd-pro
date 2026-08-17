import type { TableListItem, TableListParams } from "../../../api/table/table.api";
import { ProTable } from "@ant-design/pro-components";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getTableList } from "../../../api/table/table.api";
import { usePagination } from "../../../hooks/usePagination.ts";
import { columns } from "./components/columns.tsx";

export const Route = createFileRoute("/layout/antd/pro-table")({
  component: RouteComponent,
});

function RouteComponent() {
  const pagination = usePagination({ current: 1, pageSize: 10 });
  const [tableParams, setTableParams] = useState<TableListParams>({});
  const { data, isLoading } = useQuery({
    queryFn: () => getTableList({ ...tableParams, ...pagination }),
    queryKey: ["getTableList", pagination, tableParams],
  });

  return (
    <ProTable<TableListItem, TableListParams>
      columns={columns}
      onSubmit={setTableParams}
      dataSource={data?.data}
      loading={isLoading}
      pagination={{ ...pagination, total: data?.total }}
    />
  );
}
