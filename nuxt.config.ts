// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // plugin modules
  modules: ['nuxt-headlessui', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  //Define auto import components locations
  components: ['~/components/header', '~/components'],

  devtools: {
    enabled: true
  },
  i18n: {
    experimental: {
      jsTsFormatResource: true
    },
    precompile: {
      strictMessage: false,
      escapeHtml: true
    },
    langDir: 'locales',
    lazy: true,
    baseUrl: 'http://localhost:3000',
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
    // strategy: 'no_prefix',
    // strategy: 'prefix',
    // strategy: 'prefix_and_default',
    strategy: 'prefix_except_default',
    // rootRedirect: '/ja/about-ja',
    dynamicRouteParams: true,
    // customRoutes: 'config',
    pages: {
      history: {
        ja: '/history-ja'
      },
      about: {
        ja: '/about-ja'
      }
    },
    // differentDomains: true,
    // skipSettingLocaleOnNavigate: true,
    // detectBrowserLanguage: false,
    detectBrowserLanguage: {
      useCookie: true
      // alwaysRedirect: true
      // cookieKey: 'i18n_redirected',
      // // cookieKey: 'my_custom_cookie_name',
      // redirectOn: 'root'
    }
  }
})
