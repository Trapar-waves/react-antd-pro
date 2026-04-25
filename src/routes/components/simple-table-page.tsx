import type { TableListItem, TableListParams } from "../../api/table/table.api.ts";
import { ProTable } from "@ant-design/pro-components";
import { getTableList } from "../../api/table/table.api.ts";
import { usePaginationTable } from "../../hooks/usePaginationTable.ts";
import { proTableColumns } from "./pro-table-columns.tsx";

export function SimpleTablePage() {
  const tableProps = usePaginationTable<TableListItem, TableListParams>({
    queryFn: getTableList,
    queryKey: "getTableListExample",
  });
  return (
    <ProTable<TableListItem, TableListParams>
      columns={proTableColumns}
      {...tableProps}
    />
  );
}
