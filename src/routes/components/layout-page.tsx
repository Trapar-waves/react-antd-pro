import { PageContainer, ProCard, ProLayout } from "@ant-design/pro-components";
import { Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { layoutRoute } from "../../layout/menu-item.tsx";

export function LayoutPage() {
  const matches = useRouterState({ select: s => s.location });
  const navigate = useNavigate();
  function handleNavigateClick(href: string) {
    void navigate({ to: href });
  }
  return (
    <ProLayout
      location={{
        pathname: matches.pathname,
      }}
      menuItemRender={(item, dom) => (
        <div
          onClick={() => {
            handleNavigateClick(item.path || "/welcome");
          }}
        >
          {dom}
        </div>
      )}
      route={layoutRoute}
      siderWidth={256}
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
