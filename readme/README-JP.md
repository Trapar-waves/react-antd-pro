# @trapar-waves/react-antd-pro

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-antd-pro)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-antd-pro)
![License](https://img.shields.io/github/license/Trapar-waves/react-antd-pro)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/react-antd-pro)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/react-antd-pro/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [Русский язык](./README-RU.md)

> React 19とAnt Design Pro 5に基づくエンタープライズアプリケーション開発テンプレートで、TanStackツールチェーン（Router/Query）、Rsbuildビルドツール、Tailwind CSSスタイリングソリューションを統合し、効率的な開発と型安全性に焦点を当てています。

## ✨ 特徴

- **モダンフレームワーク:** React 19をベースに構築され、コンポーネントベース開発とhooksパターンをサポートします。
- **エンタープライズUI:** Ant Design 5基本コンポーネント+Ant Design Proビジネスコンポーネント（ProTable/ProFormなどを含む）を統合しています。
- **型安全性:** 完全なTypeScript開発で、API型定義と状態型チェックをカバーする完全な型システムを提供します。
- **高速ビルド:** 従来のwebpackの代わりにRsbuildを使用し、開発サーバーのコールドスタートを2秒で実現します。
- **インテリジェントルーティング:** TanStack Routerによるファイルベースルーティングで、ルート構成を自動生成します（ネストルートをサポート）。
- **状態管理:** 複雑なReduxの代わりに軽量なZustandを採用し、コンポーザブルなアトミック状態ソリューションを提供します。
- **データフェッチング:** ラップされたAxiosインスタンス+TanStack Query（v5）により、リクエストの自動キャッシュ/リトライ/ページネーションを実現します。
- **スタイリングソリューション:** Tailwind CSS v4+CSS Modulesを統合し、テーマ設定とレスポンシブデザインをサポートします。
- **デバッグツール:** 組み込みのTanStack DevTools（Query/Router）とRsbuildビルド分析パネルを搭載しています。
- **アニメーション強化:** Motionライブラリを介してトランジションアニメーション（ルート切り替え、コンポーネントの表示/非表示など）を実装します。

## 💻 技術スタック

- **ベースフレームワーク:** `React`：コンポーネントベース開発のコア。
- **UIコンポーネントライブラリ:** `Ant Design`&`Ant Design Pro`：エンタープライズレベルの基本コンポーネント＆ビジネスコンポーネントライブラリ（ProTable/ProForm）。
- **状態管理:** `Zustand`：軽量な状態管理ソリューション。
- **ルーティング:** `TanStack Router`：ファイルベースルーティング+型安全な設定。
- **データフェッチング:** `Axios`&`TanStack Query`：HTTPクライアントラッパー＆サーバー状態管理（自動キャッシュ/リトライ）。
- **ビルドツール:** `Rsbuild`：webpackに基づくモダンなビルドツール。
- **スタイリングソリューション:** `Tailwind CSS`&`CSS Modules`：アトミックCSSフレームワーク＆ローカルスコープコンポーネントスタイル。
- **型システム:** `TypeScript`：静的型チェック。
- **デバッグツール:** `TanStack DevTools`：Query/Routerデバッグパネル。
- **アニメーション:** `Motion`：宣言型アニメーションライブラリ（ルート/コンポーネントトランジション）。

依存関係の完全なリストについては[package.json](../package.json)を参照してください。

## 🚀 始め方

以下の手順に従ってプロジェクトをローカルで実行してください。

### 前提条件

以下がインストールされていることを確認してください：

- Node.js (推奨バージョン >= 18.x)
- パッケージマネージャー (npm, yarn または pnpm)

```bash
node -v
npm -v
```

### インストール

スクリプトの実行

```bash
pnpm create trapar-waves
```

依存関係のインストール

```bash
npm install
yarn install
pnpm install
```

### 開発

開発サーバーの起動：

```bash
npm run dev
yarn dev
pnpm dev
```

本番ビルド：

```bash
npm run build
yarn build
pnpm build
```

本番ビルドのプレビュー：

```bash
npm run preview
yarn preview
pnpm preview
```

コードチェック：

```bash
npm run lint
yarn lint
pnpm lint
```

## 🤝 コントリビューション

貢献は歓迎され、非常に高く評価されています！貢献するには以下の手順に従ってください：

1. リポジトリをフォークする
2. 機能ブランチを作成する（`git checkout -b feature/amazing-feature`）
3. 変更をコミットする（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュする（`git push origin feature/amazing-feature`）
5. Pull Requestを開く

## 👤 Author

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **リポジトリ:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
- **ホームページ:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
- **イシュー:** [https://github.com/Trapar-waves/react-antd-pro/issues](https://github.com/Trapar-waves/react-antd-pro/issues)
