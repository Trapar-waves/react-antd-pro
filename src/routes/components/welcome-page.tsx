import { Link } from "@tanstack/react-router";
import { Button, Card, Divider, Flex, List, Space, Typography } from "antd";
import { useAuthStore } from "../../store/auth.store.ts";

const { Title, Paragraph, Text } = Typography;

const HOMEPAGE = "https://github.com/Trapar-waves/react-antd-pro";
const LOGOS_SET_URL = "https://icon-sets.iconify.design/logos/";

interface TechItem {
  id: string;
  label: string;
  hint: string;
  iconClass: string;
}

/** 与 README 及 package.json 依赖一致；图标来自 Iconify `logos`（CC0）。 */
const techStack: TechItem[] = [
  { id: "react", label: "React 19", hint: "组件与 Hooks 模型", iconClass: "icon-[logos--react]" },
  { id: "antd", label: "Ant Design 5 · Pro", hint: "antd · @ant-design/pro-components", iconClass: "icon-[logos--ant-design]" },
  { id: "ts", label: "TypeScript", hint: "类型覆盖路由、请求与状态", iconClass: "icon-[logos--typescript-icon]" },
  { id: "tailwind", label: "Tailwind CSS 4", hint: "原子类与主题扩展", iconClass: "icon-[logos--tailwindcss-icon]" },
  { id: "rsbuild", label: "Rsbuild", hint: "@rsbuild/core · @rsbuild/plugin-react", iconClass: "icon-[material-icon-theme--rstack]" },
  { id: "tanstack", label: "TanStack Router / Query", hint: "文件路由与服务器状态", iconClass: "icon-[logos--markdown]" },
  { id: "zustand", label: "Zustand", hint: "轻量组合式状态", iconClass: "icon-[logos--markdown]" },
  { id: "axios", label: "Axios", hint: "HTTP 客户端封装", iconClass: "icon-[logos--markdown]" },
  { id: "motion", label: "Motion", hint: "路由与显隐过渡动画", iconClass: "icon-[logos--markdown]" },
  { id: "eslint", label: "ESLint", hint: "@antfu/eslint-config 等", iconClass: "icon-[logos--eslint]" },
  { id: "postcss", label: "PostCSS", hint: "@tailwindcss/postcss", iconClass: "icon-[logos--postcss]" },
  { id: "pnpm", label: "pnpm", hint: "包管理与 CI", iconClass: "icon-[logos--pnpm]" },
  { id: "node", label: "Node.js", hint: "本地开发环境", iconClass: "icon-[logos--nodejs-icon]" },
  { id: "github", label: "GitHub Actions", hint: "Release 与 Pages", iconClass: "icon-[logos--github-icon]" },
];

const readmeFeatures: string[] = [
  "基于 React 19 的组件化与 Hooks 开发。",
  "Ant Design 5 与 Ant Design Pro（ProTable、ProForm 等）企业级组件。",
  "TypeScript 贯穿路由、接口与 Zustand 状态。",
  "Rsbuild 替代传统 webpack，冷启动与构建更快。",
  "TanStack Router 文件式路由与类型安全配置。",
  "Zustand 提供可组合的原子化状态。",
  "Axios 实例与 TanStack Query v5：缓存、重试与分页。",
  "Tailwind CSS v4 与 CSS Modules：主题与响应式。",
  "内置 TanStack DevTools 与 Rsbuild 分析面板（开发体验）。",
  "Motion 实现路由切换等过渡动画。",
  "GitHub Pages：BASE_PATH、404.html 与可选 PUBLIC_STATIC_API 静态演示。",
];

const readmeTechNote = "README 将 Rsbuild 表述为基于 webpack；实际由 Rspack 驱动，此处使用 Material Icon Theme 的 rstack 字形作 Rsbuild/Rspack 生态示意。生产部署真实后端时不应设置 PUBLIC_STATIC_API。";

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
          .trapar-skip {
            position: absolute;
            left: 16px;
            top: 12px;
            z-index: 100;
            padding: 8px 14px;
            border-radius: 8px;
            background: #1677ff;
            color: #fff;
            font-weight: 600;
            font-size: 14px;
            text-decoration: none;
            transform: translateY(-200%);
            transition: transform 180ms ease-out;
          }
          .trapar-skip:focus { transform: translateY(0); outline: 3px solid #fa8c16; outline-offset: 2px; }
          @media (prefers-reduced-motion: reduce) {
            .trapar-skip { transition: none; }
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
          <Paragraph type="secondary" style={{ fontSize: 16, maxWidth: 680 }}>
            本仓库集成 Ant Design、Pro Components、TanStack Router/Query 与 Tailwind。以下为 README 特性摘要与
            {" "}
            <a href={LOGOS_SET_URL} target="_blank" rel="noreferrer">Iconify logos</a>
            {" "}
            技术栈示意；其下仍为示例路由入口。部署在 GitHub Pages 子路径下时，路由与静态资源已对齐 BASE_PATH。
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

        <div>
          <Title level={4} style={{ marginBottom: 8 }}>
            技术栈一览
          </Title>
          <Paragraph type="secondary" style={{ marginBottom: 16, maxWidth: 680 }}>
            Rsbuild/Rspack 生态示意使用
            {" "}
            <Text code>material-icon-theme--rstack</Text>
            ；无独立字形的库在卡片说明中标注。
          </Paragraph>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {techStack.map(item => (
              <Card key={item.id} size="small" styles={{ body: { padding: "12px 14px" } }}>
                <Flex gap="small" align="flex-start">
                  <span className={`${item.iconClass} text-[1.5rem] shrink-0 text-[#1677ff]`} aria-hidden />
                  <div>
                    <Text strong>{item.label}</Text>
                    <Paragraph type="secondary" style={{ margin: "6px 0 0", fontSize: 12, marginBottom: 0 }}>
                      {item.hint}
                    </Paragraph>
                  </div>
                </Flex>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Title level={4} style={{ marginBottom: 8 }}>
            README 特性摘要
          </Title>
          <List
            size="small"
            dataSource={readmeFeatures}
            renderItem={item => <List.Item style={{ padding: "6px 0" }}>{item}</List.Item>}
          />
          <Paragraph type="secondary" italic style={{ marginTop: 12, marginBottom: 0, fontSize: 13 }}>
            {readmeTechNote}
          </Paragraph>
        </div>

        <div>
          <Title level={4} style={{ marginBottom: 8 }}>
            图标与可访问性
          </Title>
          <Paragraph type="secondary" style={{ marginBottom: 0, maxWidth: 680 }}>
            装饰性 logos 集合矢量图标使用
            {" "}
            <Text code>aria-hidden</Text>
            ，避免与标题重复播报；源码中的类名与 Iconify
            {" "}
            <Text code>slug</Text>
            一一对应。主按钮满足较大触控目标。页面顶部提供「跳到主要内容」链接。
          </Paragraph>
        </div>

        <Divider orientation="left">示例路由</Divider>
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

        <Paragraph type="secondary" style={{ fontSize: 12, marginBottom: 0 }}>
          技术品牌图标来自
          {" "}
          <a href={LOGOS_SET_URL} target="_blank" rel="noreferrer">Iconify SVG Logos</a>
          {" "}
          集合（CC0）；感谢 Gil Barbara 与 Iconify 社区维护。
        </Paragraph>
      </Space>
    </div>
  );
}
