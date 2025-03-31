import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Flex, Spin } from "antd";
import { useEffect } from "react";

export const Route = createFileRoute("/layout/$")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: "/layout/welcome" }).then();
  }, []);
  return (
    <Flex justify="center" align="center" className="h-screen w-screen">
      <Spin size="large" />
    </Flex>
  );
}
