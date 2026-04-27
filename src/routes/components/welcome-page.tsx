import { Link } from "@tanstack/react-router";
import { Button, Card, Flex, Space, Typography } from "antd";
import { useAuthStore } from "../../store/auth.store.ts";

const { Title, Paragraph, Text } = Typography;

const HOMEPAGE = "https://github.com/Trapar-waves/react-antd-pro";

const tiles: Array<{ title: string; desc: string; to: string }> = [
  {
    title: "Tailwind 数据看板",
    desc: "栅格与图表风格的示例页",
    to: "/layout/style/tailwindcss/example-dashboard",
  },
  {
    title: "Tailwind 卡片",
    desc: "卡片与排版组合",
    to: "/layout/style/tailwindcss/example-card",
  },
  {
    title: "Tailwind 天气",
    desc: "信息层次与色板",
    to: "/layout/style/tailwindcss/example-weather",
  },
  {
    title: "Pro Table",
    desc: "Ant Design Pro 表格与列配置",
    to: "/layout/antd/pro-table",
  },
  {
    title: "Pro Form",
    desc: "复杂表单与分步场景",
    to: "/layout/antd/pro-form",
  },
  {
    title: "Simple Table",
    desc: "轻量表格示例",
    to: "/layout/antd/simple-table",
  },
];

export function WelcomePage() {
  const { updateToken } = useAuthStore();

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px 48px" }}>
      <style>
        {`
          .trapar-skip:focus { transform: translateY(0); outline: 3px solid #fa8c16; outline-offset: 2px; }
          @media (prefers-reduced-motion: reduce) {
            * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
          }
        `}
      </style>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Typography id="welcome-main">
          <Text type="secondary" style={{ letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 12 }}>
            Trapar-waves · 模板导览
          </Text>
          <Title level={2} style={{ marginTop: 8, marginBottom: 0 }}>
            react-antd-pro 能力一览
          </Title>
          <Paragraph type="secondary" style={{ fontSize: 16, maxWidth: 640 }}>
            本仓库集成 Ant Design、Pro Components、TanStack Router/Query 与 Tailwind。以下为示例路由入口；部署在 GitHub Pages 子路径下时，路由与静态资源已对齐 BASE_PATH。
          </Paragraph>
        </Typography>
        <Flex wrap="wrap" gap="middle">
          <Button type="primary" size="large" href={HOMEPAGE} target="_blank" rel="noreferrer">
            打开模板仓库
          </Button>
          <Button size="large" onClick={() => updateToken("")}>
            清除登录态
          </Button>
        </Flex>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {tiles.map(item => (
            <Link key={item.to} to={item.to} style={{ textDecoration: "none", color: "inherit" }}>
              <Card
                hoverable
                title={item.title}
                styles={{ body: { minHeight: 88 } }}
                style={{ borderRadius: 12 }}
              >
                <Text type="secondary">{item.desc}</Text>
              </Card>
            </Link>
          ))}
        </div>
      </Space>
    </div>
  );
}
