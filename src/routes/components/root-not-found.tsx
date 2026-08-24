import { Flex, Spin } from "antd";

export function RootNotFound() {
  return (
    <Flex align="center" className="h-screen w-screen" justify="center">
      <Spin size="large" />
    </Flex>
  );
}
