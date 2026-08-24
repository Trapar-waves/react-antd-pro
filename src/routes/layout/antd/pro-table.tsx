import { ProTable } from "@ant-design/pro-components";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { TableListItem, TableListParameters } from "../../../api/table/table.api";
import { getTableList } from "../../../api/table/table.api";
import { usePagination } from "../../../hooks/use-pagination.ts";
import { columns } from "./components/columns.tsx";

export const Route = createFileRoute("/layout/antd/pro-table")({
  component: RouteComponent,
});

function RouteComponent() {
  const pagination = usePagination({ current: 1, pageSize: 10 });
  const [tableParameters, setTableParameters] = useState<TableListParameters>({});
  const { data, isLoading } = useQuery({
    queryFn: () => getTableList({ ...tableParameters, ...pagination }),
    queryKey: ["getTableList", pagination, tableParameters],
  });

  return (
    <ProTable<TableListItem, TableListParameters>
      columns={columns}
      dataSource={data?.data}
      loading={isLoading}
      onSubmit={setTableParameters}
      pagination={{ ...pagination, total: data?.total }}
    />
  );
}
