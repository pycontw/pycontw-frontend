const DEFAULT_BASE_URL = 'http://localhost:3000'
const DEFAULT_ROUTER_BASE = '/pycontw-2021/'

export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

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
        '@nuxtjs/axios',
        // https://i18n.nuxtjs.org/
        'nuxt-i18n',
    ],

    i18n: {
        strategy: 'prefix',
        locale: 'en',
        defaultLocale: 'en',
        fallbackLocale: 'en',
        locales: ['en', 'zh'],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            onlyOnRoot: true, // recommended
        },
    },

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.BASE_URL || DEFAULT_BASE_URL,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
}
