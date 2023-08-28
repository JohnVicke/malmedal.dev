/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly VERCEL_URL: string;
  readonly XATA_API_KEY: string;
  readonly XATA_BRANCH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
