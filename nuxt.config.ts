// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    preload: true,
    families: {
      'Konkhmer Stelokchher': {
        wght: '200..700'
      },
      'Montserrat': {
        wght: '200..900'
      },
      'Roboto': {
        wght: '200..900'
      }
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  }
})