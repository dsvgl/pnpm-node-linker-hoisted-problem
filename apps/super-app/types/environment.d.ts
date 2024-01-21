import type { PublisherIdAny } from '@typings';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      FOO: string | undefined;

      [key: string]: string | undefined;
    }
  }
}

export {};
