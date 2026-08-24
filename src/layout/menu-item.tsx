import type { MenuDataItem } from "@ant-design/pro-components";

type Route = Omit<MenuDataItem, "routes"> & {
  children?: Route[];
};
export const layoutRoute: Route = {
  path: "/layout/",
  routes: [
    {
      icon: <span className="icon-[mdi--human-welcome]" />,
      name: "欢迎",
      path: "/layout/welcome",
    },
    {
      access: "canAdmin",
      icon: <span className="icon-[ant-design--ant-design-outlined]" />,
      name: "Antd",
      path: "/layout/antd",
      routes: [
        {
          name: "Pro Table",
          path: "/layout/antd/pro-table",
        },
        {
          name: "Pro Form",
          path: "/layout/antd/pro-form",
        },
        {
          name: "Pro Skeleton",
          path: "/layout/antd/pro-skeleton",
        },
        {
          name: "Simple Table",
          path: "/layout/antd/simple-table",
        },
      ],
    },
    {
      icon: <span className="icon-[material-symbols--list-rounded]" />,
      name: "样式示例",
      path: "/layout/style",
      routes: [
        {
          name: "Tailwind CSS",
          path: "/layout/style/tailwindcss",
          routes: [
            {
              name: "Example Card",
              path: "/layout/style/tailwindcss/example-card",
            },
            {
              name: "Example Weather",
              path: "/layout/style/tailwindcss/example-weather",
            },
            {
              name: "Example Dashboard",
              path: "/layout/style/tailwindcss/example-dashboard",
            },
          ],
        },
        {
          name: "CSS Module Example",
          path: "/layout/style/css-module-example",
        },
        {
          name: "三级列表页面",
          path: "/layout/list/sub-page3",
        },
      ],
    },
    {
      icon: <span className="icon-[material-symbols--dashboard]"></span>,
      name: "Dashboard",
      path: "/dashboard",
      routes: [
        { name: "Example Dashboard", path: "/dashboard/example-dashboard" },
      ],
    },
    {
      icon: <span className="icon-[material-symbols--link-rounded]" />,
      name: "Ant Design 官网外链",
      path: "https://ant.design",
    },
  ],
};
