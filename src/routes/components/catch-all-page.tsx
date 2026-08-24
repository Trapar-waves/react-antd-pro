import { useNavigate } from "@tanstack/react-router";
import { Flex, Spin } from "antd";
import { useEffect } from "react";
import { useAuthStore } from "../../store/auth.store.ts";

export function CatchAllPage() {
  const navigate = useNavigate();
  const { token } = useAuthStore();

  useEffect(() => {
    if (token) {
      void navigate({ to: "/layout/welcome" });
    }
    else {
      void navigate({ to: "/login" });
    }
  }, [navigate, token]);
  return (
    <Flex align="center" className="h-screen w-screen" justify="center">
      <Spin size="large" />
    </Flex>
  );
}
