import { readdirSync } from 'node:fs'
import { extname, join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const contentDir = fileURLToPath(new URL('./content', import.meta.url))
const markdownExtension = /\.md$/

function getContentPrerenderRoutes() {
  const routes: string[] = []

  function visit(dir: string) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name)

      if (entry.isDirectory()) {
        visit(path)
        continue
      }

      if (!entry.isFile() || extname(entry.name) !== '.md') {
        continue
      }

      const parts = relative(contentDir, path).split(sep)
      const file = parts.pop()

      if (!file) {
        continue
      }

      const slug = file.replace(markdownExtension, '')
      const routeParts = slug === 'index' ? parts : [...parts, slug]

      routes.push(`/${routeParts.join('/')}`)
    }
  }

  visit(contentDir)

  return routes.sort()
}

const contentPrerenderRoutes = getContentPrerenderRoutes()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/scripts',
  ],

  css: ['~/assets/css/main.css'],

  devServer: {
    port: 3030,
  },

  runtimeConfig: {
    apiUrl: 'https://tw.pycon.org/prs/api/',
    apiAuthToken: '', // set in .env file
  },

  // Cloudflare Pages SSR uses Nuxt Content's D1 adapter, so serve markdown
  // pages as static assets to keep direct refreshes independent of D1.
  nitro: {
    prerender: {
      routes: contentPrerenderRoutes,
    },
  },

  i18n: {
    defaultLocale: 'en-us',
    strategy: 'prefix',
    locales: [
      { code: 'en-us', name: 'English', file: 'en-us.ts' },
      { code: 'zh-hant', name: '繁體中文', file: 'zh-hant.ts' },
    ],
    detectBrowserLanguage: {
      redirectOn: 'no prefix',
    },
  },

  content: {
    experimental: {
      sqliteConnector: 'native',
    },
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        // disable auto generated heading, we type them manually
        contentHeading: false,
      },
    },
  },

  // stop color mode auto switching and set the default to dark
  ui: {
    colorMode: false,
  },
  app: {
    head: {
      htmlAttrs: {
        class: 'dark',
      },
    },
    baseURL: '/2026/',
  },

  $production: {
    scripts: {
      registry: {
        metaPixel: {
          id: '164677453055289',
          trigger: 'onNuxtReady',
        },
      },
    },
  },

  icon: {
    provider: 'none',
    clientBundle: {
      scan: {
        globInclude: ['**\/*.{vue,jsx,tsx,md,mdc,mdx,ts}'],
      },
      icons: [
        'lucide:arrow-down',
        'lucide:arrow-left',
        'lucide:arrow-right',
        'lucide:arrow-up',
        'lucide:arrow-up-right',
        'lucide:check',
        'lucide:chevron-down',
        'lucide:chevron-left',
        'lucide:chevron-right',
        'lucide:chevrons-left',
        'lucide:chevrons-right',
        'lucide:chevron-up',
        'lucide:circle-alert',
        'lucide:circle-check',
        'lucide:circle-x',
        'lucide:copy',
        'lucide:copy-check',
        'lucide:ellipsis',
        'lucide:eye',
        'lucide:eye-off',
        'lucide:file',
        'lucide:folder',
        'lucide:folder-open',
        'lucide:grip-vertical',
        'lucide:hash',
        'lucide:info',
        'lucide:lightbulb',
        'lucide:loader-circle',
        'lucide:menu',
        'lucide:minus',
        'lucide:monitor',
        'lucide:moon',
        'lucide:panel-left-close',
        'lucide:panel-left-open',
        'lucide:plus',
        'lucide:rotate-ccw',
        'lucide:search',
        'lucide:square',
        'lucide:sun',
        'lucide:terminal',
        'lucide:triangle-alert',
        'lucide:upload',
        'lucide:x',
      ],
      includeCustomCollections: true,
    },
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
  },
})
