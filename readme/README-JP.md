# @trapar-waves/react-antd-pro

![npm version](https://img.shields.io/npm/v/@trapar-waves/react-antd-pro)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/react-antd-pro)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/trapar-waves/react-antd-pro)

[English](../README.md) | [中文](README-CN.md) | [Русский](README-RU.md)

> React 19とAnt Design Pro 5をベースに構築された企業アプリケーション開発テンプレートです。TanStackツールチェーン（Router/Query）、Rsbuildビルドツール、Tailwind CSSスタイリングソリューションを統合し、効率的な開発と型安全性に焦点を当てています。

## ✨ 主な特徴

### 技術スタックの利点
- **モダンフレームワーク:** React 19をベースに構築され、コンポーネントベース開発とHooksパターンをサポートします。
- **企業向けUI:** Ant Design 5の基本コンポーネント + Ant Design Proの業務用コンポーネント（ProTable/ProFormなどを含む）を統合しています。
- **型安全性:** 完全な型システムを備えたTypeScript開発を採用し、API型定義から状態型チェックまで網羅しています。

### 開発体験の最適化
- **高速ビルド:** 従来のwebpackに代わりRsbuildを使用し、開発サーバーのコールドスタートを2秒で実現します。
- **インテリジェントルーティング:** TanStack Routerによるファイルベースルーティングで、ルート設定を自動生成（ネストルート対応）します。
- **状態管理:** 複雑なReduxに代わり軽量なZustandを採用し、合成可能なアトミック状態ソリューションを提供します。

### エンジニアリング機能
- **データフェッチング:** ラップされたAxiosインスタンス + TanStack Query（v4）による自動リクエストキャッシュ/リトライ/ページネーションを実現します。
- **スタイリングソリューション:** Tailwind CSS v3 + CSS Modulesを統合し、テーマ設定とレスポンシブデザインをサポートします。
- **デバッグツール:** 組み込みのTanStack DevTools（Query/Router）とRsbuildビルド分析パネルを搭載しています。
- **アニメーション強化:** Motionライブラリによるトランジションアニメーション（ルート切り替え、コンポーネント表示/非表示など）を実装します。

## 🚀 始め方

### 環境要件
- Node.js ≥ 18.17.0（バージョン管理にはnvmの使用を推奨）
- パッケージマネージャー: pnpm ≥ 8.0（推奨） / npm ≥ 9.0 / yarn ≥ 3.0

```bash
# Node.jsバージョン確認
node -v
# pnpmバージョン確認（推奨）
pnpm -v
```

### プロジェクト初期化
```bash
# リポジトリをクローン
.git clone https://github.com/Trapar-waves/react-antd-pro.git
# プロジェクトディレクトリに移動
cd react-antd-pro
# 依存関係をインストール（pnpm推奨）
pnpm install
```

## 🛠️ よく使用するコマンド

`pnpm run <command>`で実行（pnpm推奨）:

| コマンド              | 説明                                                                 |
|-----------------------|----------------------------------------------------------------------|
| `dev`                 | 開発サーバーを起動（デフォルトポート8080、HMRホットリロード対応）     |
| `build`               | 本番用パッケージをビルド（`dist`ディレクトリに出力、自動最適化）     |
| `build:rsdoctor`      | 診断ツール付きビルド（ビルド分析レポートを生成）                     |
| `preview`             | 本番ビルドをローカルでプレビュー（オンライン環境をシミュレート）       |
| `lint`                | ESLint + Prettierコードチェック実行（コミット前に自動トリガー）       |

```bash
# 開発サー버ー起動（推奨）
pnpm dev

# 本番パッケージビルドとプレビュー
pnpm build && pnpm preview
```

## 💻 技術スタック

| カテゴリ             | 技術選択                | バージョン   | 説明                                   |
|----------------------|-------------------------|------------|----------------------------------------|
| ベースフレームワーク   | React                   | 19.0.2     | コンポーネントベース開発のコア         |
| UIコンポーネントライブラリ | Ant Design             | 5.9.2      | 企業レベルの基本コンポーネント          |
|                      | Ant Design Pro         | 2.8.0      | 業務用コンポーネントライブラリ（ProTable/ProForm） |
| 状態管理             | Zustand                 | 4.4.1      | 軽量な状態管理ソリューション            |
| ルーティング         | TanStack Router         | 0.3.12     | ファイルベースルーティング + 型安全設定 |
| データフェッチング     | Axios                   | 1.5.0      | HTTPクライアントラッパー                |
|                      | TanStack Query          | 4.35.0     | サーバー状態管理（自動キャッシュ/リトライ） |
| ビルドツール         | Rsbuild                 | 0.15.3     | webpackベースのモダンビルドツール       |
| スタイリングソリューション | Tailwind CSS           | 3.3.3      | アトミックCSSフレームワーク             |
|                      | CSS Modules             | -          | コンポーネントスタイルのローカルスコープ化 |
| 型システム           | TypeScript              | 5.2.2      | 静的型チェック                         |
| デバッグツール       | TanStack DevTools       | 0.1.12     | Query/Routerデバッグパネル             |
| アニメーション       | Motion                  | 10.25.1    | 宣言的アニメーションライブラリ（ルート/コンポーネントトランジション） |

完全な依存関係リストは[package.json](package.json)を参照してください。

## 🤝 貢献方法

コミュニティの貢献を歓迎します！参加前に以下のガイドラインをお読みください。

1. **Issueガイドライン:** バグレポートには再現手順を、機能リクエストにはユースケースを明記してください。
2. **PRガイドライン:** ブランチ名は`feat/xxx`（新機能）または`fix/xxx`（バグ修正）形式とし、ESLintチェックに合格する必要があります。
3. **コードスタイル:** 統一されたPrettier設定（コミット時に自動フォーマット）。
4. **ドキュメント更新:** 機能を変更する際はREADMEや関連ドキュメントを同期更新してください（例：新コンポーネントの場合は使用例を追加）。

## 📄 ライセンス

**MIT**ライセンスの下で配布されています。詳細は`LICENSE`ファイルを参照してください。

## 👤 メンテナー

| 役割               | 名前/ニックネーム | 連絡先                  | GitHubプロフィール                      |
|--------------------|-------------------|-------------------------|-----------------------------------------|
| プロジェクトリード   | Rikka             | admin@rikka.cc          | [@Muromi-Rikka](https://github.com/Muromi-Rikka) |
| コアコントリビューター | コミュニティメンバー | -                       | [CONTRIBUTORSリスト](https://github.com/Trapar-waves/react-antd-pro/graphs/contributors) |

## 🔗 リンク

* **リポジトリ:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
* **ホームページ:** [https://github.com/Trapar-waves/react-antd-pro](https://github.com/Trapar-waves/react-antd-pro)
* **Issue:** [https://github.com/Trapar-waves/react-antd-pro/issues](https://github.com/Trapar-waves/react-antd-pro/issues)
