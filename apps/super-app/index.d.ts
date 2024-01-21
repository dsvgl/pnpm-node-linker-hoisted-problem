// https://typescript.nuxtjs.org/guide/setup/#configuration
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module '*.json' {
  const json: any;
  export default json;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
