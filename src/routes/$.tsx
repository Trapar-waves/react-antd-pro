import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Flex, Spin } from "antd";
import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store.ts";

export const Route = createFileRoute("/$")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { token } = useAuthStore();

  useEffect(() => {
    if (!token) {
      navigate({ to: "/login" }).then();
    }
    else {
      navigate({ to: "/layout/welcome" }).then();
    }
  }, [navigate, token]);
  return (
    <Flex justify="center" align="center" className="h-screen w-screen">
      <Spin size="large" />
    </Flex>
  );
}
