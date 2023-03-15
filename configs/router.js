// this file is a config for package: "@nuxtjs/router" override nuxt router
// cacheUrlMatcher is a white list for webCache page
// this is a workaround to resolve google search console
// related issue: https://github.com/vuejs/vue-router/issues/2042

import Router from 'vue-router'

const cacheUrlMatchers = [
    {
        hostname: 'yandexwebcache.net',
        pathname: '/yandbtm',
    },
    {
        hostname: 'webcache.googleusercontent.com',
        pathname: '/search',
    },
]

// Check if fullUrl is cache resource
const isCachedUrl = (fullUrl = '') => {
    if (process.server) return null

    const url = new URL(fullUrl)

    return cacheUrlMatchers.some(
        ({ hostname, pathname }) =>
            url.hostname === hostname && url.pathname === pathname,
    )
}

export function createRouter(
    ssrContext,
    createDefaultRouter,
    routerOptions,
    config,
) {
    const defaultRouter = createDefaultRouter(ssrContext, config)
    const options = routerOptions || defaultRouter.options

    // Check for current location is cache
    const isCache = process.client && isCachedUrl(window.location.href)
    // Change mode if we in cache, to prevent "Uncaught DOMException"
    const mode = isCache ? 'abstract' : options.mode

    const resultOptions = {
        ...options,
        mode,
    }
    const router = new Router(resultOptions)
    // Set nuxt replaced methods
    router.push = defaultRouter.push

    // Set init route in cache
    if (isCache) {
        const origRouterResolve = router.resolve.bind(router)
        // Get fullpath of original page
        const { route } = window.__NUXT__.state
        const { fullPath } = route

        // Mock first resolve call
        router.resolve = () => {
            // Unmock all others
            router.resolve = origRouterResolve
            return origRouterResolve(fullPath)
        }
    }

    return router
}
