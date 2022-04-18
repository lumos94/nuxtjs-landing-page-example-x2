import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - SM Registration Portal',
    title: 'SM Something',
    htmlAttrs: {lang: 'en'},
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name:"robots", content:"noindex, follow"},
      {name: 'Content-Security-Policy', content:'upgrade-insecure-requests; default-src https'},
      {name: 'Content-Security-Policy-Report-Only', content:'default-src https:; report-uri /endpoint'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico'},
      {rel: 'stylesheet', type: '', href: 'https://emoji-css.afeld.me/emoji.css'}

    ],
    script: [
      {
        src: 'https://wchat.freshchat.com/js/widget.js'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vee-validate.js', mode: 'client'},
    //custom axios modules for different api calls other than standard ones
    '~/plugins/customAxios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // [
    //   '@nuxtjs/redirect-module', {
    //   redirect: [
    //     {
    //       from: '^.*(?<!/)$',
    //       to: (from, req) => req.url + '/',
    //       statusCode: 301
    //     }]
    // }],
    [
      '@nuxtjs/i18n', {
      defaultLocale: 'en',
      strategy: 'prefix',
      langDir: 'lang/',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',  // recommended
        lazy: true,
      },
      locales: [
        {code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr', name: 'English'},
        // {code: 'es', iso: 'es-ES', file: 'es.js', dir: 'ltr', name: 'Español'},
      ]
    }]
  ],

// Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios:
    {
      headers: {
        'X-Requested-With': 'xmlhttprequest'
      },
    },

// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme:
      {
        dark: false,
        light: true,
        themes:
          {
            dark: {
              primary: colors.blue.darken2,
              accent: colors.grey.darken3,
              secondary: colors.amber.darken3,
              info: colors.teal.lighten1,
              warning: colors.amber.base,
              error: colors.deepOrange.accent4,
              success: colors.green.accent3,
              bgBlue: '#3d82c4',
              bgBlueLight: '#27aae1',
              darkBgBlue: "#082A47",
              logoGreen: "#8DC63F",
              black: '#000000',
              white: '#FFFFFF'
            },
            light: {
              primary: colors.blue.darken2,
              accent: colors.grey.darken3,
              secondary: colors.amber.darken3,
              info: colors.teal.lighten1,
              warning: colors.amber.base,
              error: colors.deepOrange.accent4,
              success: colors.green.accent3,
              bgBlue: '#3d82c4',
              bgBlueLight: '#27aae1',
              darkBgBlue: "#082A47",
              logoGreen: "#8DC63F",
              black: '#000000',
              white: '#FFFFFF'
            },
          }
      }
  },

//runtime config
//https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config

  publicRuntimeConfig: {
    axios: {
      baseURL: "http://backup.test/registration-signin_portal"
    },
    // baseURL: process.env.LP_URL,
    baseURL: "http://backup.test/registration-signin_portal",
    API_KEY: process.env.API_KEY,
    OTHER_URL: process.env.OTHER_URL,
    CRM_URL: process.env.CRM_URL
  },
  privateRuntimeConfig: {
    // apiSecret: process.env.API_SECRET
  },

// Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "vee-validate/dist/rules",
      "vue-tel-input-vuetify",
      // "@nuxtjs/axios"
    ],
  },


  router: {
    trailingSlashes: true,
    // https://stackoverflow.com/questions/63719727/nuxtjs-static-generated-html-page-does-not-load-javascript-when-calling-index-h
    extendRoutes(routes) {
      routes.forEach((route) => {
        // When options.generate.subFolders is true (default)
        const alias = route.path.length > 1 ? `${route.path}/index.html` : '/index.html'

        // When options.generate.subFolders is false
        // const normalizedRoute = route.path.replace(/\/$/, '') // Remove trailing slashes if they exist
        // const alias =
        //   route.path.length > 1 ? `${normalizedRoute}.html` : '/index.html'

        route.alias = alias
      })
    }
  },
}
