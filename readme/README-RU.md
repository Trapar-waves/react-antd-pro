# @trapar-waves/react-antd-pro

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-antd-pro)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-antd-pro)
![License](https://img.shields.io/github/license/Trapar-waves/react-antd-pro)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-antd-pro)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-antd-pro/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [日本語](./README-JP.md)

> Шаблон разработки корпоративных приложений на базе React 19 и Ant Design Pro 5, интегрирующий инструментарий TanStack (Router/Query), инструмент сборки Rsbuild и решение для стилизации Tailwind CSS, сосредоточенный на эффективной разработке и безопасности типов.

## ✨ Особенности

- **Современный фреймворк:** Строится на React 19, поддерживая компонентно-ориентированную разработку и паттерн хуков.
- **Корпоративный UI:** Интегрирует базовые компоненты Ant Design 5 + бизнес-компоненты Ant Design Pro (включая ProTable/ProForm и т.д.).
- **Безопасность типов:** Полная разработка на TypeScript с полной системой типов, охватывающей определения типов API и проверку типов состояния.
- **Быстрая сборка:** Использует Rsbuild вместо традиционного webpack, обеспечивая холодный старт сервера разработки за 2 секунды.
- **Интеллектуальный роутинг:** Файловый роутинг с TanStack Router, автоматическая генерация конфигураций роутов (поддерживает вложенные роуты).
- **Управление состоянием:** Принимает легковесный Zustand вместо сложного Redux, предоставляя составные атомарные решения для состояния.
- **Получение данных:** Обёрнутый экземпляр Axios + TanStack Query (v5) для автоматического кеширования/повтора/пагинации запросов.
- **Решение для стилизации:** Интегрированный Tailwind CSS v4 + CSS Modules, поддерживающий конфигурацию темы и адаптивный дизайн.
- **Инструменты отладки:** Встроенные TanStack DevTools (Query/Router) и панель анализа сборки Rsbuild.
- **Улучшение анимации:** Реализует переходные анимации (например, переключение роутов, отображение/скрытие компонентов) через библиотеку Motion.

## 💻 Технологический стек

- **Базовый фреймворк:** `React`：Ядро для компонентно-ориентированной разработки.
- **Библиотека UI-компонентов:** `Ant Design`&`Ant Design Pro`：Корпоративная библиотека базовых компонентов и бизнес-компонентов (ProTable/ProForm).
- **Управление состоянием:** `Zustand`：Легковесное решение для управления состоянием.
- **Роутинг:** `TanStack Router`：Файловый роутинг + безопасная по типам конфигурация.
- **Получение данных:** `Axios`&`TanStack Query`：Обёртка HTTP-клиента и управление серверным состоянием (авто-кеширование/повтор).
- **Инструмент сборки:** `Rsbuild`：Современный инструмент сборки на основе webpack.
- **Решение для стилизации:** `Tailwind CSS`&`CSS Modules`：Атомарный CSS-фреймворк и локальные стили компонентов с ограниченной областью действия.
- **Система типов:** `TypeScript`：Статическая проверка типов.
- **Инструменты отладки:** `TanStack DevTools`：Панель отладки Query/Router.
- **Анимация:** `Motion`：Декларативная библиотека анимаций (переходы роутов/компонентов).

Полный список зависимостей см. в [package.json](../package.json).

## 🚀 Начало работы

Следуйте этим инструкциям, чтобы запустить проект локально.

### Предварительные требования

Убедитесь, что у вас установлены следующие компоненты：

- Node.js (рекомендуется версия >= 18.x)
- Пакетный менеджер (npm, yarn или pnpm)

```bash
node -v
npm -v
```

### Установка

Запустить скрипт

```bash
pnpm create trapar-waves
```

Установить зависимости

```bash
npm install
yarn install
pnpm install
```

### Разработка

Запустить сервер разработки:

```bash
npm run dev
yarn dev
pnpm dev
```

Сборка для продакшена:

```bash
npm run build
yarn build
pnpm build
```

Предварительный просмотр сборки продакшена:

```bash
npm run preview
yarn preview
pnpm preview
```

Проверка кода:

```bash
npm run lint
yarn lint
pnpm lint
```

## 🤝 Участие в разработке

Вклад в проект приветствуется и очень ценится! Чтобы внести вклад, следуйте этим шагам:

1. Сделайте форк репозитория
2. Создайте ветку с функцией (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте свои изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 👤 Author

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Репозиторий:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
- **Домашняя страница:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
- **Проблемы:** [https://github.com/Trapar-waves/react-antd-pro/issues](https://github.com/Trapar-waves/react-antd-pro/issues)
