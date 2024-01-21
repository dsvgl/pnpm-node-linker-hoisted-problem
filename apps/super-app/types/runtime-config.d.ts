export interface CompanyRuntimeConfigOptions {
  FOO: boolean;
}

declare module '@nuxt/types/config/runtime' {
  interface NuxtRuntimeConfig extends Partial<CompanyRuntimeConfigOptions> {}
}

export {};
