import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content_en_us: defineCollection({
      type: 'page',
      source: {
        include: 'en-us/**',
        prefix: '',
      },
    }),
    content_zh_hant: defineCollection({
      type: 'page',
      source: {
        include: 'zh-hant/**',
        prefix: '',
      },
    }),
  },
})
