import type { ProColumns } from "@ant-design/pro-components";
import type { TableListItem, TableListParams } from "../../../api/table/table.api";
import { ProTable, TableDropdown } from "@ant-design/pro-components";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Input } from "antd";
import { useState } from "react";
import { getTableList } from "../../../api/table/table.api";
import { usePagination } from "../../../hooks/usePagination.ts";

export const Route = createFileRoute("/layout/antd/pro-table")({
  component: RouteComponent,
});

export const columns: ProColumns<TableListItem>[] = [
  {
    title: "排序",
    dataIndex: "index",
    valueType: "indexBorder",
    width: 48,
  },
  {
    title: "应用名称",
    dataIndex: "name",
    render: _ => <a>{_}</a>,
    // 自定义筛选项功能具体实现请参考 https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input style={{ width: 188, marginBlockEnd: 8, display: "block" }} />
      </div>
    ),
    filterIcon: filtered => (
      <span className="icon-[ant-design--search-outlined]" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
  },
  {
    title: "创建者",
    dataIndex: "creator",
    valueEnum: {
      all: { text: "全部" },
      付小小: { text: "付小小" },
      曲丽丽: { text: "曲丽丽" },
      林东东: { text: "林东东" },
      陈帅帅: { text: "陈帅帅" },
      兼某某: { text: "兼某某" },
    },
  },
  {
    title: "状态",
    dataIndex: "status",
    initialValue: "all",
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: "全部", status: "Default" },
      close: { text: "关闭", status: "Default" },
      running: { text: "运行中", status: "Processing" },
      online: { text: "已上线", status: "Success" },
      error: { text: "异常", status: "Error" },
    },
  },
  {
    title: "备注",
    dataIndex: "memo",
    ellipsis: true,
    copyable: true,
  },
  {
    title: "操作",
    width: 180,
    key: "option",
    valueType: "option",
    render: () => [
      <a key="link">链路</a>,
      <a key="link2">报警</a>,
      <a key="link3">监控</a>,
      <TableDropdown
        key="actionGroup"
        menus={[
          { key: "copy", name: "复制" },
          { key: "delete", name: "删除" },
        ]}
      />,
    ],
  },
];

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
