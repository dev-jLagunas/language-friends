// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    baseURL: "/",
    buildAssetsDir: "assets",
    head: {
      title: "The Language Friends | 英語えほんシリーズ",
      titleTemplate: "%s · The Language Friends",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        // Basic
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content:
            "The Language Friends は、親子で一緒に英語を楽しむためのやさしい英語えほんシリーズです。繰り返し・パターン・視覚的理解を通して、自然に英語に親しめます。",
        },

        // Keywords (light use, still okay)
        {
          name: "keywords",
          content:
            "英語えほん, 子供 英語, 親子 英語, 英語 多読, 英語 学習 幼児, bilingual kids books, English picture books for kids",
        },

        // Author / Brand
        { name: "author", content: "The Language Friends" },
        { name: "publisher", content: "The Language Friends" },

        // Robots
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },

        // Open Graph (Facebook / general)
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "The Language Friends",
        },
        {
          property: "og:title",
          content: "The Language Friends | 親子で楽しむ英語えほん",
        },
        {
          property: "og:description",
          content:
            "親子で一緒に読む、やさしくて楽しい英語えほん。英語を勉強ではなく、日常の一部として自然に身につけます。",
        },
        {
          property: "og:url",
          content: "https://language-friends.netlify.app/",
        },
        {
          property: "og:image",
          content: "/images/og/og-default.png",
        },
        {
          property: "og:image:alt",
          content: "The Language Friends 英語えほんシリーズ",
        },

        // Twitter / X
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "The Language Friends | 親子で楽しむ英語えほん",
        },
        {
          name: "twitter:description",
          content:
            "繰り返しとパターンで自然に英語に親しめる、親子向け英語えほんシリーズ。",
        },
        {
          name: "twitter:image",
          content: "/images/og/og-default.png",
        },

        // Apple / Mobile
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-title",
          content: "The Language Friends",
        },
        { name: "format-detection", content: "telephone=no" },

        // Theme
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ],
      link: [
        // Fonts
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

        // Favicon
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },

        // Canonical
        {
          rel: "canonical",
          href: "https://thelanguagefriends.com",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
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
