import { resolve } from "path";

export default {
  ssr: true,

  env: {
    FOO: "true",
  },

  publicRuntimeConfig: {
    FOO: true,
  },

  head: {
    title: "super-app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  plugins: [],

  components: true,

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/composition-api/module"],

  modules: [],

  typescript: {
    typeCheck: false,
  },

  css: ["~/styles/main.scss"],

  build: {
    extractCSS: {
      ignoreOrder: true,
    },
    loaders: {
      scss: {
        additionalData: `
          @import '${resolve(__dirname, "styles/_vars.scss")}';
        `,
      },
    },
  },
};
