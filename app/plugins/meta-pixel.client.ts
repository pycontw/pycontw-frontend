export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()
  const { proxy } = useScriptMetaPixel()

  // Nuxt Scripts tracks the initial PageView when Meta Pixel is initialized.
  let lastTrackedPath = route.fullPath

  nuxtApp.hook('page:finish', () => {
    if (route.fullPath === lastTrackedPath)
      return

    lastTrackedPath = route.fullPath
    proxy.fbq('track', 'PageView')
  })
})
