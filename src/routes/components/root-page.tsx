import { Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { useEffect } from "react";
import { useAuthStore } from "../../store/auth.store.ts";
import { useGlobalStore } from "../../store/global.store.ts";

export function RootPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useAuthStore();
  const { updateRedirectUrl } = useGlobalStore();
  useEffect(() => {
    // scan({
    //   enabled: true,
    // });
    const isInWhiteList = ["/login"].some(item => location.pathname.startsWith(item));
    if (!isInWhiteList) {
      if (token) {
        // if (!location.pathname.startsWith("/layout")) {
        //   navigate({ to: "/layout/welcome" }).then();
        // }
      }
      else {
        updateRedirectUrl(location.pathname);
        void navigate({ to: "/login" });
      }
    }
  }, [location.pathname, navigate, token, updateRedirectUrl]);
  return (
    <React.Fragment>
      <TanStackRouterDevtools />
      <Outlet />
    </React.Fragment>
  );
}
