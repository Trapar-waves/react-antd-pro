import { Result } from "antd";

export function LayoutNotFoundResult() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="此页面未找到"
    />
  );
}
