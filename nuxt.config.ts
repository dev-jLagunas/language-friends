// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
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
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["./app/assets/css/main.css"],
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  modules: ["@nuxt/icon"],
  vite: {
    plugins: [tailwindcss()],
  },
});
