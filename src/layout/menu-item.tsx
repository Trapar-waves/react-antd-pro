import type { MenuDataItem } from "@ant-design/pro-components";

type Route = Omit<MenuDataItem, "routes"> & {
  children?: Route[];
};
export const layoutRoute: Route = {
  path: "/layout/",
  routes: [
    {
      path: "/layout/welcome",
      name: "欢迎",
      icon: <span className="icon-[mdi--human-welcome]" />,
    },
    {
      path: "/layout/antd",
      name: "Antd",
      icon: <span className="icon-[ant-design--ant-design-outlined]" />,
      access: "canAdmin",
      routes: [
        {
          path: "/layout/antd/pro-table",
          name: "Pro Table",
        },
        {
          path: "/layout/antd/pro-form",
          name: "Pro Form",
        },
        {
          path: "/layout/antd/pro-skeleton",
          name: "Pro Skeleton",
        },
        {
          path: "/layout/antd/simple-table",
          name: "Simple Table",
        },
      ],
    },
    {
      name: "样式示例",
      icon: <span className="icon-[material-symbols--list-rounded]" />,
      path: "/layout/style",
      routes: [
        {
          path: "/layout/style/tailwindcss",
          name: "Tailwind CSS",
          routes: [
            {
              path: "/layout/style/tailwindcss/example-card",
              name: "Example Card",
            },
            {
              path: "/layout/style/tailwindcss/example-weather",
              name: "Example Weather",
            },
            {
              path: "/layout/style/tailwindcss/example-dashboard",
              name: "Example Dashboard",
            },
          ],
        },
        {
          path: "/layout/style/css-module-example",
          name: "CSS Module Example",
        },
        {
          path: "/layout/list/sub-page3",
          name: "三级列表页面",
        },
      ],
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <span className="icon-[material-symbols--dashboard]"></span>,
      routes: [
        { path: "/dashboard/example-dashboard", name: "Example Dashboard" },
      ],
    },
    {
      path: "https://ant.design",
      name: "Ant Design 官网外链",
      icon: <span className="icon-[material-symbols--link-rounded]" />,
    },
  ],
};
