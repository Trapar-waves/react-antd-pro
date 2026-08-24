import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/react-router";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import { router } from "./router.ts";
import { DefaultTheme } from "./themes/default.theme.ts";
import "./global.css";
import "@ant-design/v5-patch-for-react-19";

const rootElement = document.querySelector("#root");
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const queryClient = new QueryClient();

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ConfigProvider theme={DefaultTheme}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </QueryClientProvider>
    </>,
  );
}
