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

## ✨ Возможности

- **Современный фреймворк:** Строится на React 19, поддерживая компонентно-ориентированную разработку и паттерн хуков.
- **Корпоративный UI:** Интегрирует базовые компоненты Ant Design 5 + бизнес-компоненты Ant Design Pro (включая ProTable/ProForm и т.д.).
- **Безопасность типов:** Полная разработка на TypeScript с полной системой типов, охватывающей определения типов API и проверку типов состояния.
- **Быстрая сборка:** Использует Rsbuild вместо традиционного webpack, обеспечивая холодный старт сервера разработки за 2 секунды.
- **Интеллектуальный роутинг:** Файловый роутинг с TanStack Router, автоматическая генерация конфигураций роутов (поддерживает вложенные роуты).
- **Управление состоянием:** Легковесный Zustand вместо сложного Redux, предоставляющий составные атомарные решения для состояния.
- **Получение данных:** Обёрнутый экземпляр Axios + TanStack Query (v5) для автоматического кеширования/повтора/пагинации запросов.
- **Решение для стилизации:** Интегрированный Tailwind CSS v4 + CSS Modules, поддерживающий конфигурацию темы и адаптивный дизайн.
- **Инструменты отладки:** Встроенные TanStack DevTools (Query/Router) и панель анализа сборки Rsbuild.
- **Улучшение анимации:** Реализует переходные анимации (например, переключение роутов, отображение/скрытие компонентов) через библиотеку Motion.

## 💻 Технологический стек

- **Базовый фреймворк：** `React` — Ядро для компонентно-ориентированной разработки.
- **Библиотека UI-компонентов：** `Ant Design` & `Ant Design Pro` — Корпоративная библиотека базовых компонентов и бизнес-компонентов (ProTable/ProForm).
- **Управление состоянием：** `Zustand` — Легковесное решение для управления состоянием.
- **Роутинг：** `TanStack Router` — Файловый роутинг + безопасная по типам конфигурация.
- **Получение данных：** `Axios` & `TanStack Query` — Обёртка HTTP-клиента и управление серверным состоянием (авто-кеширование/повтор).
- **Инструмент сборки：** `Rsbuild` — Современный инструмент сборки на основе webpack.
- **Решение для стилизации：** `Tailwind CSS` & `CSS Modules` — Атомарный CSS-фреймворк и локальные стили компонентов.
- **Система типов：** `TypeScript` — Статическая проверка типов.
- **Инструменты отладки：** `TanStack DevTools` — Панель отладки Query/Router.
- **Анимация：** `Motion` — Декларативная библиотека анимаций (переходы роутов/компонентов).

Полный список зависимостей смотрите в [package.json](../package.json).

## 🚀 Начало работы

### Предварительные требования

- Node.js (рекомендуется >= 18.x)
- Менеджер пакетов (npm, yarn или pnpm)

### Установка

1. Создайте новый проект с помощью шаблона:

   ```bash
   pnpm create trapar-waves
   ```

2. Перейдите в директорию проекта и установите зависимости:

   ```bash
   pnpm install
   ```

3. Запустите сервер разработки:

   ```bash
   pnpm dev
   ```

## 📁 Структура проекта

```
├── public/             # Статические ресурсы
├── mock/               # Мок-данные для разработки
├── src/                # Исходный код
│   ├── api/            # API слой (экземпляр Axios, определения типов)
│   ├── hooks/          # Пользовательские React hooks
│   ├── layout/         # Компоненты макета приложения
│   ├── pages/          # Компоненты страниц
│   ├── routes/         # Файловые роуты TanStack Router
│   ├── store/          # Управление состоянием Zustand
│   ├── themes/         # Конфигурация темы
│   ├── global.css      # Глобальные стили и импорты Tailwind
│   ├── index.tsx       # Точка входа
│   └── router.ts       # Конфигурация роутера
├── rsbuild.config.ts   # Конфигурация Rsbuild
├── tsconfig.json       # Конфигурация TypeScript
├── eslint.config.js    # Конфигурация ESLint
└── package.json        # Зависимости и скрипты проекта
```

## 🤝 Участие в разработке

Участие приветствуется и высоко ценится! Пожалуйста, следуйте этим шагам для вклада:

1. Fork репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

MIT License © 2025 Trapar Waves

## 👤 Автор

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **Профиль GitHub:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

- **Репозиторий:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
- **Issues:** [https://github.com/Trapar-waves/react-antd-pro/issues](https://github.com/Trapar-waves/react-antd-pro/issues)
