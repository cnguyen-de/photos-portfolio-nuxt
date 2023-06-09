// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // plugin modules
  modules: ['nuxt-headlessui', '@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt'],

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
    precompile: {
      strictMessage: false,
      escapeHtml: true
    },
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
    dynamicRouteParams: true
    // customRoutes: 'config',
    // differentDomains: true,
    // skipSettingLocaleOnNavigate: true,
    // detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   alwaysRedirect: true,
    //   cookieKey: 'i18n_redirected',
    //   redirectOn: 'root'
    // }
  }
})
