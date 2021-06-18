const DEFAULT_BASE_URL = 'http://staging.pycon.tw/prs'
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
    head() {
        return {
            titleTemplate: (titleChunk) => {
                const title = 'PyCon Taiwan 2021'
                return titleChunk && titleChunk !== title
                    ? `${titleChunk} | ${title}`
                    : title
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                { hid: 'description', name: 'description', content: '' },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'PyCon Taiwan 2021',
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: 'PyCon Taiwan 2021',
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: '/og-image.jpg',
                },
                { hid: 'og:type', property: 'og:type', content: 'website' },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/2021/favicon.ico',
                },
                {
                    rel: 'stylesheet',
                    href:
                        'https://fonts.googleapis.com/css?family=Noto%20Serif%20TC',
                },

                {
                    rel: 'canonical',
                    href: 'https://tw.pycon.org' + this.$route.path,
                },
            ],
        }
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['~/plugins/iterator.js'],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxt/http',
        // https://github.com/nuxt-community/gtm-module
        '@nuxtjs/gtm',
        // https://i18n.nuxtjs.org/
        'nuxt-i18n',
        [
            'nuxt-fontawesome',
            {
                component: 'fa',
                imports: [
                    {
                        set: '@fortawesome/free-brands-svg-icons',
                        icons: ['fab'],
                    },
                    {
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: ['fas'],
                    },
                ],
            },
        ],
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

    gtm: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
    },

    publicRuntimeConfig: {
        gtm: {
            id: process.env.GOOGLE_TAG_MANAGER_ID,
        },
    },
}
