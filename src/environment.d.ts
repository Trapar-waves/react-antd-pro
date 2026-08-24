/// <reference types="@rsbuild/core/types" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  /**
  * 设为 `true` 时走浏览器内 mock，不请求真实 `/api`（GitHub Pages 构建会开启）。
  */
  readonly PUBLIC_STATIC_API?: string;
}
