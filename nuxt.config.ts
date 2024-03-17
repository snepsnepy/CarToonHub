// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },

  imports: {
    autoImport: true,
  },

  modules: ["@nuxtjs/tailwindcss"],
  supabase: {
    redirect: false,
  },
});
