const DEFAULT_BASE_URL = 'http://staging.pycon.tw/2021'
const DEFAULT_ROUTER_BASE = '/pycontw-2021/'
const DEFAULT_BUILD_TARGET = 'static'

export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: process.env.BUILD_TARGET || DEFAULT_BUILD_TARGET,

    // Re-route for GitHub Pages to serve with /assets
    router: {
        base: process.env.ROUTER_BASE || DEFAULT_ROUTER_BASE,
    },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'pycontw-2021',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxt/http',
        // https://i18n.nuxtjs.org/
        'nuxt-i18n',
    ],

    i18n: {
        strategy: 'prefix',
        locale: 'en-us',
        defaultLocale: 'en-us',
        fallbackLocale: 'en-us',
        locales: ['en-us', 'zh-hant'],
        detectBrowserLanguage: {
            onlyOnRoot: true, // recommended
        },
    },

    // http module configuration (https://http.nuxtjs.org/options)
    http: {
        baseURL: process.env.BASE_URL || DEFAULT_BASE_URL,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
}
