import { ProSkeleton } from "@ant-design/pro-components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/layout/antd/pro-skeleton")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-6 ">
      <ProSkeleton type="list" />
    </div>
  );
}
