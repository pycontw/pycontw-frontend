import { createResolver, defineNuxtModule } from 'nuxt/kit'

function normalizePath(path: string) {
  return path.replaceAll('\\', '/')
}

function isInContentDir(file: string, contentDir: string) {
  return file === contentDir || file.startsWith(`${contentDir}/`)
}

/**
 * This module is a workaround to trigger Tailwind's JIT rebuild on markdown file changes,
 * since Nuxt Content uses its own file watcher and Vite doesn't see the changes.
 *
 * It does this by emitting a fake change event for the Tailwind entry CSS file
 * whenever Nuxt Content finishes parsing a changed markdown file.
 */
export default defineNuxtModule({
  meta: {
    name: 'fix-content-tailwind-hmr',
  },
  setup(_, nuxt) {
    if (!nuxt.options.dev) {
      return
    }

    const { resolve } = createResolver(import.meta.url)
    const contentDir = normalizePath(resolve(nuxt.options.rootDir, 'content'))
    const tailwindEntry = normalizePath(resolve(nuxt.options.rootDir, 'app/assets/css/main.css'))
    let clientServer: any

    nuxt.hook('vite:serverCreated', (server, ctx) => {
      if (ctx.isClient) {
        clientServer = server
      }
    })

    // Nuxt Content watches content/** with its own chokidar instance, so Vite
    // never sees markdown edits. Re-emit a change for the Tailwind entry CSS
    // whenever content is reparsed to force the normal Tailwind/Vite rebuild.
    nuxt.hook('content:file:afterParse', ({ file }) => {
      if (!clientServer) {
        return
      }

      if (!isInContentDir(normalizePath(file.path), contentDir)) {
        return
      }

      clientServer.watcher.emit('change', tailwindEntry)
    })
  },
})
