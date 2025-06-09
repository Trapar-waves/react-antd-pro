# @trapar-waves/react-antd-pro

![npm 版本](https://img.shields.io/npm/v/@trapar-waves/react-antd-pro)
![npm 月下载量](https://img.shields.io/npm/dm/@trapar-waves/react-antd-pro)
![开源许可](https://img.shields.io/badge/license-MIT-green)
![GitHub 最后提交](https://img.shields.io/github/last-commit/trapar-waves/react-antd-pro)

[English](../README.md) | [日本語](README-JP.md) | [Русский](README-RU.md)

> 基于 React 19 和 Ant Design Pro 5 的企业级应用开发模板，集成 TanStack 工具链（Router/Query）、Rsbuild 构建工具及 Tailwind CSS 样式方案，聚焦高效开发与类型安全。

## ✨ 核心特性

### 技术栈优势
- **现代化框架：** 基于 React 19 构建，支持组件化开发与 Hooks 模式。
- **企业级 UI：** 集成 Ant Design 5 基础组件 + Ant Design Pro 业务组件（含 ProTable/ProForm 等）。
- **类型安全：** 全 TypeScript 开发，覆盖 API 类型定义、状态类型检查的完整类型系统。

### 开发体验优化
- **极速构建：** 采用 Rsbuild 替代传统 webpack，实现开发服务器冷启动 2 秒内。
- **智能路由：** TanStack Router 文件路由，自动生成路由配置（支持嵌套路由）。
- **状态管理：** 采用轻量 Zustand 替代复杂 Redux，提供可组合的原子状态方案。

### 工程化能力
- **数据请求：** 封装 Axios 实例 + TanStack Query（v4）实现请求自动缓存/重试/分页。
- **样式方案：** 集成 Tailwind CSS v3 + CSS Modules，支持主题配置与响应式设计。
- **调试工具：** 内置 TanStack DevTools（Query/Router）及 Rsbuild 构建分析面板。
- **动画增强：** 通过 Motion 库实现过渡动画（如路由切换、组件显隐）。

## 🚀 快速上手

### 环境要求
- Node.js ≥ 18.17.0（推荐使用 nvm 管理版本）
- 包管理器：pnpm ≥ 8.0（推荐）/ npm ≥ 9.0 / yarn ≥ 3.0

```bash
# 检查 Node.js 版本
node -v
# 检查 pnpm 版本（推荐）
pnpm -v
```

### 项目初始化

```bash
# 克隆仓库
git clone https://github.com/Trapar-waves/react-antd-pro.git
# 进入项目目录
cd react-antd-pro
# 安装依赖（推荐 pnpm）
pnpm install
```

## 🛠️ 常用命令

通过 `pnpm run <命令>`（推荐 pnpm）执行：

| 命令              | 描述                                                                 |
|-------------------|----------------------------------------------------------------------|
| `dev`             | 启动开发服务器（默认端口 8080，支持 HMR 热更新）                     |
| `build`           | 构建生产包（输出至 `dist` 目录，自动优化）                           |
| `build:rsdoctor`  | 带诊断工具构建（生成构建分析报告）                                   |
| `preview`         | 本地预览生产构建（模拟线上环境）                                     |
| `lint`            | 运行 ESLint + Prettier 代码检查（提交前自动触发）                     |

```bash
# 启动开发服务器（推荐）
pnpm dev

# 构建生产包并预览
pnpm build && pnpm preview
```

## 💻 技术栈

| 分类             | 技术选型               | 版本       | 描述                                   |
|------------------|------------------------|------------|----------------------------------------|
| 基础框架         | React                  | 19.0.2     | 组件化开发核心                         |
| UI 组件库        | Ant Design             | 5.9.2      | 企业级基础组件                         |
|                  | Ant Design Pro         | 2.8.0      | 业务组件库（ProTable/ProForm）         |
| 状态管理         | Zustand                | 4.4.1      | 轻量级状态管理方案                     |
| 路由             | TanStack Router        | 0.3.12     | 文件路由 + 类型安全配置                |
| 数据请求         | Axios                  | 1.5.0      | HTTP 客户端封装                        |
|                  | TanStack Query         | 4.35.0     | 服务器状态管理（自动缓存/重试）        |
| 构建工具         | Rsbuild                | 0.15.3     | 基于 webpack 的现代化构建工具           |
| 样式方案         | Tailwind CSS           | 3.3.3      | 原子化 CSS 框架                        |
|                  | CSS Modules            | -          | 组件样式局部作用域                     |
| 类型系统         | TypeScript             | 5.2.2      | 静态类型检查                           |
| 调试工具         | TanStack DevTools      | 0.1.12     | Query/Router 调试面板                  |
| 动画             | Motion                 | 10.25.1    | 声明式动画库（路由/组件过渡）           |

完整依赖列表见 [package.json](package.json)。

## 🤝 如何贡献

我们欢迎社区贡献！参与前请阅读以下指南：

1. **Issue 指南：** 缺陷报告需提供复现步骤；功能请求需说明使用场景。
2. **PR 指南：** 分支命名格式 `feat/xxx`（新功能）或 `fix/xxx`（缺陷修复）；必须通过 ESLint 检查。
3. **代码风格：** 统一 Prettier 配置（提交时自动格式化）。
4. **文档更新：** 修改功能时同步更新 README 或相关文档（如新增组件需补充示例）。

## 📄 开源许可

采用 **MIT** 许可证分发。更多信息见 `LICENSE` 文件。

## 👤 维护者

| 角色             | 姓名/昵称       | 联系方式                 | GitHub 主页                          |
|------------------|----------------|--------------------------|---------------------------------------|
| 项目负责人       | Rikka          | admin@rikka.cc           | [@Muromi-Rikka](https://github.com/Muromi-Rikka) |
| 核心贡献者       | 社区成员       | -                        | 见 [贡献者列表](https://github.com/Trapar-waves/react-antd-pro/graphs/contributors) |

## 🔗 链接

* **仓库：** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
* **主页：** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
* **问题反馈：** [https://github.com/Trapar-waves/react-antd-pro/issues](https://github.com/Trapar-waves/react-antd-pro/issues)
* **英文文档：** [README.md](https://github.com/Trapar-waves/react-antd-pro/README.md)
* **俄文文档：** [README-RU.md](https://github.com/Trapar-waves/react-antd-pro/readme/README-RU.md)
* **日文文档：** [README-JP.md](https://github.com/Trapar-waves/react-antd-pro/readme/README-JP.md)
