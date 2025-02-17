/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_TELEGRAM_BOT_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
