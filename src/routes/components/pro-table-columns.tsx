import type { ProColumns } from "@ant-design/pro-components";
import { TableDropdown } from "@ant-design/pro-components";
import { Input } from "antd";
import type { TableListItem } from "../../api/table/table.api.ts";

export const proTableColumns: ProColumns<TableListItem>[] = [
  {
    dataIndex: "index",
    title: "排序",
    valueType: "indexBorder",
    width: 48,
  },
  {
    dataIndex: "name",
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input style={{ display: "block", marginBlockEnd: 8, width: 188 }} />
      </div>
    ),
    filterIcon: filtered => (
      <span className="icon-[ant-design--search-outlined]" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    render: _ => <a>{_}</a>,
    title: "应用名称",
  },
  {
    dataIndex: "creator",
    title: "创建者",
    valueEnum: {
      all: { text: "全部" },
      付小小: { text: "付小小" },
      兼某某: { text: "兼某某" },
      曲丽丽: { text: "曲丽丽" },
      林东东: { text: "林东东" },
      陈帅帅: { text: "陈帅帅" },
    },
  },
  {
    dataIndex: "status",
    filters: true,
    initialValue: "all",
    onFilter: true,
    title: "状态",
    valueEnum: {
      all: { status: "Default", text: "全部" },
      close: { status: "Default", text: "关闭" },
      error: { status: "Error", text: "异常" },
      online: { status: "Success", text: "已上线" },
      running: { status: "Processing", text: "运行中" },
    },
  },
  {
    copyable: true,
    dataIndex: "memo",
    ellipsis: true,
    title: "备注",
  },
  {
    key: "option",
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
    title: "操作",
    valueType: "option",
    width: 180,
  },
];
