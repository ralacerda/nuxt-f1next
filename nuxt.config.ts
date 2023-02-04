// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/api/**": {
      // 2 hour max age, 30 minutes
      cache: { maxAge: 60 * 60 * 2, staleMaxAge: 60 * 30, swr: true },
    },
  },
  css: ["sanitize.css", "@/assets/index.css"],
  modules: ["unplugin-icons/nuxt"],
});
