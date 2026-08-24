import { useNavigate } from "@tanstack/react-router";
import { Flex, Spin } from "antd";
import { useEffect } from "react";

export function LayoutCatchAllPage() {
  const navigate = useNavigate();
  useEffect(() => {
    void navigate({ to: "/layout/welcome" });
  }, [navigate]);
  return (
    <Flex align="center" className="h-screen w-screen" justify="center">
      <Spin size="large" />
    </Flex>
  );
}
