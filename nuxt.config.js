// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxtjs/i18n'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: './i18n.config.js', // if you are using custom path, default
  },
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
    },
  },
})
