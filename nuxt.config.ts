// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nitro-cloudflare-dev"],
  experimental: {
    componentIslands: true
  },
  runtimeConfig: {
    public: {
      FIREBASE_CONFIG: JSON.parse(
        process.env.NUXT_PUBLIC_FIREBASE_CONFIG!
      ),
      dev: process.env.NODE_ENV !== 'production'
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})