# @trapar-waves/react-antd-pro

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-antd-pro)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-antd-pro)
![License](https://img.shields.io/github/license/Trapar-waves/react-antd-pro)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-antd-pro)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-antd-pro/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](./README-JP.md) | [Русский язык](./README-RU.md)

> 基于 React 19 和 Ant Design Pro 5 的企业级应用开发模板，集成 TanStack 工具链（Router/Query）、Rsbuild 构建工具和 Tailwind CSS 样式方案，专注于高效开发与类型安全。

![react-antd-pro hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **现代框架：** 构建于 React 19 之上，支持组件化开发和 hooks 模式。
- **企业级 UI：** 集成 Ant Design 5 基础组件 + Ant Design Pro 业务组件（包含 ProTable/ProForm 等）。
- **类型安全：** 全 TypeScript 开发，完整的类型系统覆盖 API 类型定义和状态类型检查。
- **快速构建：** 使用 Rsbuild 替代传统 webpack，实现 2 秒内开发服务器冷启动。
- **智能路由：** 基于 TanStack Router 的文件路由，自动生成路由配置（支持嵌套路由）。
- **状态管理：** 采用轻量级 Zustand 替代复杂 Redux，提供可组合的原子化状态解决方案。
- **数据请求：** 封装 Axios 实例 + TanStack Query（v5）实现请求自动缓存/重试/分页。
- **样式方案：** 集成 Tailwind CSS v4 + CSS Modules，支持主题配置和响应式设计。
- **调试工具：** 内置 TanStack DevTools（Query/Router）和 Rsbuild 构建分析面板。
- **动画增强：** 通过 Motion 库实现过渡动画（如路由切换、组件显隐）。

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **基础框架：** `React` — 组件化开发核心。
- **UI 组件库：** `Ant Design` & `Ant Design Pro` — 企业级基础组件 & 业务组件库（ProTable/ProForm）。
- **状态管理：** `Zustand` — 轻量级状态管理方案。
- **路由管理：** `TanStack Router` — 文件路由 + 类型安全配置。
- **数据请求：** `Axios` & `TanStack Query` — HTTP 客户端封装 & 服务端状态管理（自动缓存/重试）。
- **构建工具：** `Rsbuild` — 基于 webpack 的现代构建工具。
- **样式方案：** `Tailwind CSS` & `CSS Modules` — 原子化 CSS 框架 & 组件样式局部作用域。
- **类型系统：** `TypeScript` — 静态类型检查。
- **调试工具：** `TanStack DevTools` — Query/Router 调试面板。
- **动画效果：** `Motion` — 声明式动画库（路由/组件过渡）。

查看 [package.json](../package.json) 获取完整的依赖列表。

![Getting Started](../assets/readme/headers/getting-started.svg)

## 前置条件

- Node.js（推荐 >= 18.x）
- 包管理器（npm、yarn 或 pnpm）

### 安装

1. 使用模板创建新项目：

   ```bash
   pnpm create trapar-waves
   ```

2. 导航到项目目录并安装依赖：

   ```bash
   pnpm install
   ```

3. 启动开发服务器：

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── public/             # 静态资源
├── mock/               # 开发用模拟数据
├── src/                # 源代码
│   ├── api/            # API 层（Axios 实例、类型定义）
│   ├── hooks/          # 自定义 React hooks
│   ├── layout/         # 应用布局组件
│   ├── pages/          # 页面级组件
│   ├── routes/         # TanStack Router 文件路由
│   ├── store/          # Zustand 状态管理
│   ├── themes/         # 主题配置
│   ├── global.css      # 全局样式和 Tailwind 导入
│   ├── index.tsx       # 入口点
│   └── router.ts       # 路由配置
├── rsbuild.config.ts   # Rsbuild 配置
├── tsconfig.json       # TypeScript 配置
├── eslint.config.js    # ESLint 配置
└── package.json        # 项目依赖和脚本
```

![Contributing](../assets/readme/headers/contributing.svg)

欢迎贡献，非常感谢！请按照以下步骤贡献：

1. Fork 仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 创建 Pull Request

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub 主页：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

- **仓库：** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
- **Issues：** [https://github.com/Trapar-waves/react-antd-pro/issues](https://github.com/Trapar-waves/react-antd-pro/issues)
