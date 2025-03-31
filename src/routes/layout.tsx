import { PageContainer, ProCard, ProLayout } from "@ant-design/pro-components";
import { createFileRoute, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { Result } from "antd";
import { layoutRoute } from "../layout/menu-item.tsx";

export const Route = createFileRoute("/layout")({
  component: RouteComponent,
  notFoundComponent: () => (
    <Result
      status="404"
      title="404"
      subTitle="此页面未找到"
    />
  ),
});

function RouteComponent() {
  const matches = useRouterState({ select: s => s.location });
  const navigate = useNavigate();
  function handleNavigateClick(href: string) {
    navigate({ to: href }).then();
  }
  return (
    <ProLayout
      siderWidth={256}
      location={{
        pathname: matches.pathname,
      }}
      route={layoutRoute}
      menuItemRender={(item, dom) => (
        <div
          onClick={() => {
            handleNavigateClick(item.path || "/welcome");
          }}
        >
          {dom}
        </div>
      )}
    >
      <PageContainer>
        <ProCard
          style={{
            minHeight: 800,
          }}
        >
          <Outlet></Outlet>
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
}
