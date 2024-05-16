// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_principal-page-colors.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      title: 'Pokedex',
      htmlAttrs: {
        lang: 'es'
      },
      
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
})
