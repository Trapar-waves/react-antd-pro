import { ProTable } from "@ant-design/pro-components";
import type { TableListItem, TableListParameters } from "../../api/table/table.api.ts";
import { getTableList } from "../../api/table/table.api.ts";
import { usePaginationTable } from "../../hooks/use-pagination-table.ts";
import { proTableColumns } from "./pro-table-columns.tsx";

export function SimpleTablePage() {
  const tableProperties = usePaginationTable<TableListItem, TableListParameters>({
    queryFn: getTableList,
    queryKey: "getTableListExample",
  });
  return (
    <ProTable<TableListItem, TableListParameters>
      columns={proTableColumns}
      {...tableProperties}
    />
  );
}
