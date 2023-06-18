const DEFAULT_BASE_URL = 'https://tw.pycon.org/prs'
const DEFAULT_ROUTER_BASE = '/2023/'
const DEFAULT_BUILD_TARGET = 'static'
const DEFAULT_VUE_DEVTOOL = false

export default {
    vue: {
        config: {
            devtools: process.env.VUE_DEVTOOL || DEFAULT_VUE_DEVTOOL,
        },
    },
    // Target (https://go.nuxtjs.dev/config-target)
    target: process.env.BUILD_TARGET || DEFAULT_BUILD_TARGET,

    // Re-route for GitHub Pages to serve with /assets
    router: {
        base: process.env.ROUTER_BASE || DEFAULT_ROUTER_BASE,
        // scroll behavior config for scroll to hash
        // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router#scrollbehavior
        // https://stackoverflow.com/questions/60952725/anchor-in-nuxt-component-not-working-on-same-page-the-anchor-is-included-on
        async scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            }

            const findEl = (hash, x = 0) => {
                return (
                    document.querySelector(hash) ||
                    new Promise((resolve) => {
                        if (x > 50) {
                            return resolve(document.querySelector('#app'))
                        }
                        setTimeout(() => {
                            resolve(findEl(hash, ++x || 1))
                        }, 100)
                    })
                )
            }

            if (to.hash) {
                const el = await findEl(to.hash)
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({
                        top: el.offsetTop,
                        behavior: 'smooth',
                    })
                } else {
                    return window.scrollTo(0, el.offsetTop)
                }
            }

            return { x: 0, y: 0 }
        },
    },
    // Global page headers (https://go.nuxtjs.dev/config-head)
    // Move to layout/default.vue due to gtm-module not support head function (https://github.com/nuxt-community/gtm-module/issues/56)
    head: {},

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/iterator.js',
        '~/plugins/http.js',
        '~/plugins/strings.js',
        '~/plugins/vue-dompurify.js',
        '~/plugins/vue-awesome-swiper.js',
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: [{ path: '~/components/', extensions: ['vue'] }],

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        [
            '@nuxtjs/router',
            {
                path: 'configs',
                keepDefaultRouter: true,
            },
        ],
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxt/http',
        // https://github.com/nuxt-community/gtm-module
        '@nuxtjs/gtm',
        // https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module
        'nuxt-facebook-pixel-module',
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
                    {
                        set: '@fortawesome/free-regular-svg-icons',
                        icons: ['far'],
                    },
                ],
            },
        ],
        // https://github.com/nuxt-community/markdownit-module
        '@nuxtjs/markdownit',
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

    facebook: {
        track: 'PageView',
        pixelId: '164677453055289',
        autoPageView: true,
        disabled: false,
    },

    markdownit: {
        runtime: true,
        html: true,
        preset: 'default',
        linkify: true,
        breaks: true,
    },

    publicRuntimeConfig: {
        gtm: {
            id: process.env.GOOGLE_TAG_MANAGER_ID,
        },
    },
}
