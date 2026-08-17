# @trapar-waves/react-antd-pro

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-antd-pro)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-antd-pro)
![License](https://img.shields.io/github/license/Trapar-waves/react-antd-pro)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-antd-pro)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-antd-pro/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [Русский язык](./README-RU.md)

> React 19 と Ant Design Pro 5 に基づくエンタープライズアプリケーション開発テンプレート。TanStack ツールチェーン（Router/Query）、Rsbuild ビルドツール、Tailwind CSS スタイリングソリューションを統合し、効率的な開発と型安全性に焦点を当てています。

![react-antd-pro hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **モダンフレームワーク：** React 19 をベースに構築され、コンポーネントベース開発と hooks パターンをサポート。
- **エンタープライズ UI：** Ant Design 5 基本コンポーネント + Ant Design Pro ビジネスコンポーネント（ProTable/ProForm など）を統合。
- **型安全性：** 完全な TypeScript 開発で、API 型定義と状態型チェックをカバーする完全な型システムを提供。
- **高速ビルド：** 従来の webpack の代わりに Rsbuild を使用し、開発サーバーのコールドスタートを 2 秒で実現。
- **インテリジェントルーティング：** TanStack Router によるファイルベースルーティングで、ルート構成を自動生成（ネストルートをサポート）。
- **状態管理：** 複雑な Redux の代わりに軽量な Zustand を採用し、コンポーザブルなアトミック状態ソリューションを提供。
- **データフェッチング：** ラップされた Axios インスタンス + TanStack Query（v5）により、リクエストの自動キャッシュ/リトライ/ページネーションを実現。
- **スタイリングソリューション：** Tailwind CSS v4 + CSS Modules を統合し、テーマ設定とレスポンシブデザインをサポート。
- **デバッグツール：** 組み込みの TanStack DevTools（Query/Router）と Rsbuild ビルド分析パネルを搭載。
- **アニメーション強化：** Motion ライブラリを介してトランジションアニメーション（ルート切り替え、コンポーネントの表示/非表示など）を実装。

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **ベースフレームワーク：** `React` — コンポーネントベース開発のコア。
- **UI コンポーネントライブラリ：** `Ant Design` & `Ant Design Pro` — エンタープライズレベルの基本コンポーネント & ビジネスコンポーネントライブラリ（ProTable/ProForm）。
- **状態管理：** `Zustand` — 軽量な状態管理ソリューション。
- **ルーティング：** `TanStack Router` — ファイルベースルーティング + 型安全な設定。
- **データフェッチング：** `Axios` & `TanStack Query` — HTTP クライアントラッパー & サーバー状態管理（自動キャッシュ/リトライ）。
- **ビルドツール：** `Rsbuild` — webpack に基づくモダンなビルドツール。
- **スタイリングソリューション：** `Tailwind CSS` & `CSS Modules` — アトミック CSS フレームワーク & ローカルスコープコンポーネントスタイル。
- **型システム：** `TypeScript` — 静的型チェック。
- **デバッグツール：** `TanStack DevTools` — Query/Router デバッグパネル。
- **アニメーション：** `Motion` — 宣言型アニメーションライブラリ（ルート/コンポーネントトランジション）。

依存関係の完全なリストは [package.json](../package.json) を参照してください。

![Getting Started](../assets/readme/headers/getting-started.svg)

## 前提条件

- Node.js（>= 18.x 推奨）
- パッケージマネージャー（npm、yarn、または pnpm）

### インストール

1. テンプレートを使用して新しいプロジェクトを作成：

   ```bash
   pnpm create trapar-waves
   ```

2. プロジェクトディレクトリに移動し、依存関係をインストール：

   ```bash
   pnpm install
   ```

3. 開発サーバーを起動：

   ```bash
   pnpm dev
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── public/             # 静的アセット
├── mock/               # 開発用モックデータ
├── src/                # ソースコード
│   ├── api/            # API 層（Axios インスタンス、型定義）
│   ├── hooks/          # カスタム React hooks
│   ├── layout/         # アプリケーションレイアウトコンポーネント
│   ├── pages/          # ページレベルコンポーネント
│   ├── routes/         # TanStack Router ファイルベースルート
│   ├── store/          # Zustand 状態管理
│   ├── themes/         # テーマ設定
│   ├── global.css      # グローバルスタイルと Tailwind インポート
│   ├── index.tsx       # エントリーポイント
│   └── router.ts       # ルーター設定
├── rsbuild.config.ts   # Rsbuild 設定
├── tsconfig.json       # TypeScript 設定
├── eslint.config.js    # ESLint 設定
└── package.json        # プロジェクトの依存関係とスクリプト
```

![Contributing](../assets/readme/headers/contributing.svg)

コントリビュートを歓迎します！以下の手順に従ってコントリビュートしてください：

1. リポジトリをフォーク
2. 機能ブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更をコミット（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュ（`git push origin feature/amazing-feature`）
5. Pull Request を作成

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub プロフィール：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

- **リポジトリ：** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
- **Issues：** [https://github.com/Trapar-waves/react-antd-pro/issues](https://github.com/Trapar-waves/react-antd-pro/issues)
