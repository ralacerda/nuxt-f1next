// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/api/**": {
      // 2 hour max age, 30 minutes
      cache: { maxAge: 60 * 60 * 2, staleMaxAge: 60 * 30, swr: true },
    },
  },
  css: ["sanitize.css", "@/assets/index.css"],
  modules: ["unplugin-icons/nuxt", "@vueuse/nuxt"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "F1 Next",
      meta: [
        {
          name: "description",
          content: "A web app to show you schedules for Formula 1 races ",
        },
      ],
    },
  },
});
