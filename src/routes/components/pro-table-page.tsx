import type { TableListItem, TableListParams } from "../../api/table/table.api.ts";
import { ProTable } from "@ant-design/pro-components";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getTableList } from "../../api/table/table.api.ts";
import { usePagination } from "../../hooks/usePagination.ts";
import { proTableColumns } from "./pro-table-columns.tsx";

export function ProTablePage() {
  const pagination = usePagination({ current: 1, pageSize: 10 });
  const [tableParams, setTableParams] = useState<TableListParams>({});
  const { data, isLoading } = useQuery({
    queryFn: () => getTableList({ ...tableParams, ...pagination }),
    queryKey: ["getTableList", pagination, tableParams],
  });

  return (
    <ProTable<TableListItem, TableListParams>
      columns={proTableColumns}
      onSubmit={setTableParams}
      dataSource={data?.data}
      loading={isLoading}
      pagination={{ ...pagination, total: data?.total }}
    />
  );
}
