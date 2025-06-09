# @trapar-waves/react-antd-pro

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-antd-pro)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-antd-pro)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/trapar-waves/react-antd-pro)

[中文](readme/README-CN.md) | [日本語](readme/README-JP.md) | [Русский](readme/README-RU.md)

> An enterprise application development template based on React 19 and Ant Design Pro 5, integrating TanStack toolchain (Router/Query), Rsbuild build tool, and Tailwind CSS styling solution, focusing on efficient development and type safety.

## ✨ Key Features

### Technology Stack Advantages
- **Modern Framework:** Built on React 19, supporting component-based development and hooks pattern.
- **Enterprise UI:** Integrates Ant Design 5 basic components + Ant Design Pro business components (including ProTable/ProForm, etc.).
- **Type Safety:** Full TypeScript development with complete type systems covering API type definitions and state type checks.

### Development Experience Optimization
- **Rapid Build:** Uses Rsbuild instead of traditional webpack, achieving cold start of development server in 2 seconds.
- **Intelligent Routing:** File-based routing with TanStack Router, auto-generating route configurations (supports nested routes).
- **State Management:** Adopts lightweight Zustand instead of complex Redux, providing composable atomic state solutions.

### Engineering Capabilities
- **Data Fetching:** Wrapped Axios instance + TanStack Query (v4) for automatic request caching/retry/pagination.
- **Styling Solution:** Integrated Tailwind CSS v3 + CSS Modules, supporting theme configuration and responsive design.
- **Debugging Tools:** Built-in TanStack DevTools (Query/Router) and Rsbuild build analysis panel.
- **Animation Enhancement:** Implements transition animations (e.g., route switching, component show/hide) via Motion library.

## 🚀 Getting Started

### Environment Requirements
- Node.js ≥ 18.17.0 (recommended to use nvm for version management)
- Package manager: pnpm ≥ 8.0 (recommended) / npm ≥ 9.0 / yarn ≥ 3.0

```bash
# Check Node.js version
node -v
# Check pnpm version (recommended)
pnpm -v
```

### Project Initialization
```bash
# Clone the repository
git clone https://github.com/Trapar-waves/react-antd-pro.git
# Navigate to project directory
cd react-antd-pro
# Install dependencies (recommended pnpm)
pnpm install
```

## 🛠️ Common Commands

Execute via `pnpm run <command>` (recommended pnpm):

| Command             | Description                                                              |
|---------------------|--------------------------------------------------------------------------|
| `dev`               | Start development server (default port 8080, supports HMR hot reload)    |
| `build`             | Build production package (output to `dist` directory, auto-optimized)    |
| `build:rsdoctor`    | Build with diagnostic tools (generates build analysis report)            |
| `preview`           | Locally preview production build (simulates online environment)         |
| `lint`              | Run ESLint + Prettier code check (automatically triggered before commit) |

```bash
# Start development server (recommended)
pnpm dev

# Build production package and preview
pnpm build && pnpm preview
```

## 💻 Tech Stack

| Category           | Technology Selection          | Version    | Description                              |
|--------------------|--------------------------------|------------|------------------------------------------|
| Base Framework     | React                          | 19.0.2     | Core for component-based development     |
| UI Component Library| Ant Design                     | 5.9.2      | Enterprise-level basic components        |
|                    | Ant Design Pro                 | 2.8.0      | Business component library (ProTable/ProForm)|
| State Management   | Zustand                        | 4.4.1      | Lightweight state management solution    |
| Routing            | TanStack Router                | 0.3.12     | File-based routing + type-safe config    |
| Data Fetching      | Axios                          | 1.5.0      | HTTP client wrapper                      |
|                    | TanStack Query                 | 4.35.0     | Server state management (auto-cache/retry)|
| Build Tool         | Rsbuild                        | 0.15.3     | Modern build tool based on webpack       |
| Styling Solution   | Tailwind CSS                   | 3.3.3      | Atomic CSS framework                     |
|                    | CSS Modules                    | -          | Local scoped component styles            |
| Type System        | TypeScript                     | 5.2.2      | Static type checking                     |
| Debugging Tools    | TanStack DevTools              | 0.1.12     | Query/Router debugging panel             |
| Animation          | Motion                         | 10.25.1    | Declarative animation library (route/component transitions)|

Full dependency list see [package.json](package.json).

## 🤝 Contributing

We welcome community contributions! Please read the following guidelines before participating:

1. **Issue Guidelines:** Provide reproduction steps for bug reports; specify use cases for feature requests.
2. **PR Guidelines:** Branch naming format `feat/xxx` (new features) or `fix/xxx` (bug fixes); must pass ESLint checks.
3. **Code Style:** Unified Prettier configuration (auto-formatted on commit).
4. **Documentation Update:** Synchronize README or relevant docs when modifying features (e.g., add examples for new components).

## 📄 License

Distributed under the **MIT** License. See `LICENSE` file for more information.

## 👤 Maintainers

| Role             | Name/Nickname | Contact                   | GitHub Profile                      |
|------------------|---------------|---------------------------|-------------------------------------|
| Project Lead     | Rikka         | admin@rikka.cc            | [@Muromi-Rikka](https://github.com/Muromi-Rikka) |
| Core Contributors| Community Members | -                         | See [ CONTRIBUTORS List ](https://github.com/Trapar-waves/react-antd-pro/graphs/contributors) |

## 🔗 Links

* **Repository:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
* **Homepage:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
* **Issues:** [https://github.com/Trapar-waves/react-antd-pro/issues](https://github.com/Trapar-waves/react-antd-pro/issues)
