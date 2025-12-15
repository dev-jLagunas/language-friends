// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    baseURL: "/",
    buildAssetsDir: "assets",
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Work+Sans:ital,wght@0,100..900;1,100..900&family=Yomogi&display=swap",
        },
      ],
    },
  },
  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/app/components", pathPrefix: false },
  ],
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["./app/assets/css/main.css"],
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  modules: ["@nuxt/icon", "@nuxtjs/color-mode", "@nuxtjs/i18n"],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
    storageKey: "color-mode",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: [
      { code: "ja", name: "日本語", file: "ja.json" },
      { code: "en", name: "EN", file: "en.json" },
    ],
    defaultLocale: "ja",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
    },
  },
});
