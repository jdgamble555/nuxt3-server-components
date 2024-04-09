// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    componentIslands: {
      selectiveClient: 'deep'
    }
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