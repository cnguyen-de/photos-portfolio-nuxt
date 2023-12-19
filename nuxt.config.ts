// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // plugin modules
  modules: [
    'nuxt-headlessui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-vuefire',
    "@nuxt/image"
  ],

  //Define auto import components locations
  components: ['~/components/header', '~/components/album', '~/components'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
 
  devtools: {
    enabled: true
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    langDir: 'locales',
    lazy: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'vi',
        iso: 'vi-vn',
        files: ['vi.json'],
        name: 'Tiếng Việt'
      },
      {
        code: 'de',
        iso: 'de-de',
        files: ['de.json'],
        name: 'Deutsch'
      }
    ],
    // trailingSlash: true,
    debug: false,
    defaultLocale: 'en',
    strategy: 'no_prefix',
    // strategy: 'prefix',
    // strategy: 'prefix_and_default',
    // strategy: 'prefix_except_default',
    // rootRedirect: '/ja/about-ja',
    // customRoutes: 'config',
    // differentDomains: true,
    // skipSettingLocaleOnNavigate: true,
    // detectBrowserLanguage: false,
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: true,
    },
    config: {
      apiKey: 'AIzaSyAq-TyAZb7OS_NVETKkKeVE9VCD_PmV2_Q',
      authDomain: 'auth.bichbui.com',
      projectId: 'photos-portfolio-300318',
      storageBucket: 'photos-portfolio-300318.appspot.com',
      messagingSenderId: '1015819770341',
      appId: '1:1015819770341:web:21a627b9b289f8a664f70c',
      measurementId: 'G-4XLTWFS73M'
    }
  },
})