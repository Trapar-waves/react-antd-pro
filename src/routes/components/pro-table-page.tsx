import { ProTable } from "@ant-design/pro-components";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { TableListItem, TableListParameters } from "../../api/table/table.api.ts";
import { getTableList } from "../../api/table/table.api.ts";
import { usePagination } from "../../hooks/use-pagination.ts";
import { proTableColumns } from "./pro-table-columns.tsx";

export function ProTablePage() {
  const pagination = usePagination({ current: 1, pageSize: 10 });
  const [tableParameters, setTableParameters] = useState<TableListParameters>({});
  const { data, isLoading } = useQuery({
    queryFn: () => getTableList({ ...tableParameters, ...pagination }),
    queryKey: ["getTableList", pagination, tableParameters],
  });

  return (
    <ProTable<TableListItem, TableListParameters>
      columns={proTableColumns}
      dataSource={data?.data}
      loading={isLoading}
      onSubmit={setTableParameters}
      pagination={{ ...pagination, total: data?.total }}
    />
  );
}
