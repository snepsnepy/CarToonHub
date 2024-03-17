// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    tsConfig: {
      extends: "../../../tsconfig.base.json",
    },
  },

  imports: {
    autoImport: true,
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-vuefire"],
  vuefire: {
    auth: {
      enabled: false,
    },
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
    },
  },
});
