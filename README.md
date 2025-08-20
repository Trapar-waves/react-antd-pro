# @trapar-waves/react-antd-pro

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-antd-pro)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-antd-pro)
![License](https://img.shields.io/github/license/Trapar-waves/react-antd-pro)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-antd-pro)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-antd-pro/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[中文](./readme/README-CN.md) | [日本語](./readme/README-JP.md) | [Русский язык](./readme/README-RU.md)

> An enterprise application development template based on React 19 and Ant Design Pro 5, integrating TanStack toolchain (Router/Query), Rsbuild build tool, and Tailwind CSS styling solution, focusing on efficient development and type safety.

## ✨ Features

- **Modern Framework:** Built on React 19, supporting component-based development and hooks pattern.
- **Enterprise UI:** Integrates Ant Design 5 basic components + Ant Design Pro business components (including ProTable/ProForm, etc.).
- **Type Safety:** Full TypeScript development with complete type systems covering API type definitions and state type checks.
- **Rapid Build:** Uses Rsbuild instead of traditional webpack, achieving cold start of development server in 2 seconds.
- **Intelligent Routing:** File-based routing with TanStack Router, auto-generating route configurations (supports nested routes).
- **State Management:** Adopts lightweight Zustand instead of complex Redux, providing composable atomic state solutions.
- **Data Fetching:** Wrapped Axios instance + TanStack Query (v5) for automatic request caching/retry/pagination.
- **Styling Solution:** Integrated Tailwind CSS v4 + CSS Modules, supporting theme configuration and responsive design.
- **Debugging Tools:** Built-in TanStack DevTools (Query/Router) and Rsbuild build analysis panel.
- **Animation Enhancement:** Implements transition animations (e.g., route switching, component show/hide) via Motion library.

## 💻 Tech Stack

- **Base Framework:** `React`: Core for component-based development.
- **UI Component Library:** `Ant Design` & `Ant Design Pro`: Enterprise-level basic components & Business component library (ProTable/ProForm).
- **State Management:** `Zustand`: Lightweight state management solution.
- **Routing:** `TanStack Router`: File-based routing + type-safe config.
- **Data Fetching:** `Axios` & `TanStack Query`: HTTP client wrapper & Server state management (auto-cache/retry).
- **Build Tool:** `Rsbuild`: Modern build tool based on webpack.
- **Styling Solution:** `Tailwind CSS` & `CSS Modules`: Atomic CSS framework & Local scoped component styles.
- **Type System:** `TypeScript`: Static type checking.
- **Debugging Tools:** `TanStack DevTools`: Query/Router debugging panel.
- **Animation:** `Motion`: Declarative animation library (route/component transitions).

See the [package.json](./package.json) for a full list of dependencies.

## 🚀 Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 18.x recommended)
- Package manager (npm, yarn, or pnpm)

```bash
node -v
npm -v
```

### Installation

Run script

```bash
pnpm create trapar-waves
```

Install dependencies

```bash
npm install
yarn install
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
yarn dev
pnpm dev
```

Build for production:

```bash
npm run build
yarn build
pnpm build
```

Preview the production build:

```bash
npm run preview
yarn preview
pnpm preview
```

Lint the code:

```bash
npm run lint
yarn lint
pnpm lint
```

## 🤝 Contributing

Contributions are welcome and greatly appreciated! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👤 Author

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Repository:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
- **Homepage:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
- **Issues:** [https://github.com/Trapar-waves/react-antd-pro/issues](https://github.com/Trapar-waves/react-antd-pro/issues)