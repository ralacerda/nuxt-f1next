// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/api/**": {
      // 2 hour max age, 30 minutes
      cache: { maxAge: 60 * 60 * 2, staleMaxAge: 60 * 30, swr: true },
    },
  },
  css: ["sanitize.css", "@/assets/index.css"],
  modules: ["unplugin-icons/nuxt", "@vueuse/nuxt", "@nuxtjs/robots"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "F1 Next",
      meta: [
        {
          name: "description",
          content:
            "F1 Next is a web app that displays Formula 1 race schedules, adapts to the user's local time zone, and uses serverless functions to maintain updated data. Created to help fans stay informed",
        },
        {
          name: "og:type",
          content: "website",
        },
        { name: "og:title", content: "F1 Next" },
        {
          name: "og:description",
          content:
            "F1 Next is a web app that displays Formula 1 race schedules, adapts to the user's local time zone, and uses serverless functions to maintain updated data. Created to help fans stay informed",
        },
        { name: "og:image", content: "https://f1next.netlify.app/preview.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://f1next.netlify.app/" },
        { name: "twitter:title", content: "F1 Next" },
        {
          name: "twitter:description",
          content:
            "F1 Next is a web app that displays Formula 1 race schedules, adapts to the user's local time zone, and uses serverless functions to maintain updated data. Created to help fans stay informed",
        },
        {
          name: "twitter:image",
          content: "https://f1next.netlify.app/preview.png",
        },
      ],
    },
  },
});
