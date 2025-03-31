import { createRootRoute, Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Flex, Spin } from "antd";
import * as React from "react";
import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";
import { useGlobalStore } from "../store/global.store.ts";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => (
    <Flex justify="center" align="center" className="h-screen w-screen">
      <Spin size="large" />
    </Flex>
  ),
});
function RootComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useAuthStore();
  const { updateRedirectUrl } = useGlobalStore();
  useEffect(() => {
    // scan({
    //   enabled: true,
    // });
    const inWhiteList = ["/login"].some(item => location.pathname.startsWith(item));
    if (!inWhiteList) {
      if (!token) {
        updateRedirectUrl(location.pathname);
        navigate({ to: "/login" }).then();
      }
      else {
        // if (!location.pathname.startsWith("/layout")) {
        //   navigate({ to: "/layout/welcome" }).then();
        // }
      }
    }
  }, []);
  return (
    <React.Fragment>
      <TanStackRouterDevtools />
      <Outlet />
    </React.Fragment>
  );
}
