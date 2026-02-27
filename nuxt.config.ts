// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      title: 'Karbon Planet',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png'},
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  plugins: [
    '~/plugins/lenis.client.ts',
    '~/plugins/preserve-scroll.client.ts'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    preload: true,
    families: {
      'Konkhmer Sleokchher': true,
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