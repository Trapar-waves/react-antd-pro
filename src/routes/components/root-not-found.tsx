import { Flex, Spin } from "antd";

export function RootNotFound() {
  return (
    <Flex justify="center" align="center" className="h-screen w-screen">
      <Spin size="large" />
    </Flex>
  );
}
