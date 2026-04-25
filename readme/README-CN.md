# @trapar-waves/react-antd-pro

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-antd-pro)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-antd-pro)
![License](https://img.shields.io/github/license/Trapar-waves/react-antd-pro)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-antd-pro)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-antd-pro/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](./README-JP.md) | [Русский язык](./README-RU.md)

> 基于React 19和Ant Design Pro 5的企业级应用开发模板，集成TanStack工具链（Router/Query）、Rsbuild构建工具和Tailwind CSS样式方案，专注于高效开发与类型安全。

## ✨ 特性

- **现代框架:** 构建于React 19之上，支持组件化开发和hooks模式。
- **企业级UI:** 集成Ant Design 5基础组件+Ant Design Pro业务组件（包含ProTable/ProForm等）。
- **类型安全:** 全TypeScript开发，完整的类型系统覆盖API类型定义和状态类型检查。
- **快速构建:** 使用Rsbuild替代传统webpack，实现2秒内开发服务器冷启动。
- **智能路由:** 基于TanStack Router的文件路由，自动生成路由配置（支持嵌套路由）。
- **状态管理:** 采用轻量级Zustand替代复杂Redux，提供可组合的原子化状态解决方案。
- **数据请求:** 封装Axios实例+TanStack Query（v5）实现请求自动缓存/重试/分页。
- **样式方案:** 集成Tailwind CSS v4+CSS Modules，支持主题配置和响应式设计。
- **调试工具:** 内置TanStack DevTools（Query/Router）和Rsbuild构建分析面板。
- **动画增强:** 通过Motion库实现过渡动画（如路由切换、组件显隐）。

## 💻 技术栈

- **基础框架:** `React`：组件化开发核心。
- **UI组件库:** `Ant Design`&`Ant Design Pro`：企业级基础组件&业务组件库（ProTable/ProForm）。
- **状态管理:** `Zustand`：轻量级状态管理方案。
- **路由管理:** `TanStack Router`：文件路由+类型安全配置。
- **数据请求:** `Axios`&`TanStack Query`：HTTP客户端封装&服务端状态管理（自动缓存/重试）。
- **构建工具:** `Rsbuild`：基于webpack的现代构建工具。
- **样式方案:** `Tailwind CSS`&`CSS Modules`：原子化CSS框架&组件样式局部作用域。
- **类型系统:** `TypeScript`：静态类型检查。
- **调试工具:** `TanStack DevTools`：Query/Router调试面板。
- **动画效果:** `Motion`：声明式动画库（路由/组件过渡）。

完整依赖列表参见[package.json](../package.json)。

## 🚀 开始使用

按照以下说明在本地运行项目。

### 前提条件

确保已安装以下软件：

- Node.js (推荐 >= 18.x 版本)
- 包管理器 (npm, yarn 或 pnpm)

```bash
node -v
npm -v
```

### 安装步骤

运行脚本

```bash
pnpm create trapar-waves
```

安装依赖

```bash
npm install
yarn install
pnpm install
```

### 开发

启动开发服务器：

```bash
npm run dev
yarn dev
pnpm dev
```

构建生产版本：

```bash
npm run build
yarn build
pnpm build
```

预览生产构建：

```bash
npm run preview
yarn preview
pnpm preview
```

代码检查：

```bash
npm run lint
yarn lint
pnpm lint
```

## 🤝 贡献指南

欢迎贡献，非常感谢您的支持！请按照以下步骤进行贡献：

1. Fork 本仓库
2. 创建功能分支（`git checkout -b feature/amazing-feature`）
3. 提交您的更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 打开Pull Request

## 👤 Author

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **仓库:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
- **主页:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
- **问题:** [https://github.com/Trapar-waves/react-antd-pro/issues](https://github.com/Trapar-waves/react-antd-pro/issues)
