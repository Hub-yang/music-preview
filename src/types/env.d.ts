/// <reference types="vite/client" />

// 为自定义的环境变量添加ts提示
interface ImportMetaEnv {
  readonly VITE_ENV: string,
  readonly VITE_APP_TRUE_API: string,
  readonly VITE_APP_BASE_API: string,
  readonly VITE_APP_REQUEST_API: string,
  readonly VITE_APP_TITLE: string,
  readonly VITE_APP_DESCRIPTION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
interface baseObj {
  [key: string]: any
}
