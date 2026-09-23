import { fileURLToPath } from 'node:url'
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    jobs: defineCollection({
      type: 'data',
      source: {
        cwd: fileURLToPath(new URL('./app/data/jobs', import.meta.url)),
        include: '**/*.md',
      },
      schema: z.object({
        company: z.string().min(1),
        company_description: z.string().optional(),
        logo: z.string().min(1),
        job_title: z.string().min(1),
        apply_url: z.string().url(),
        // Data collections need an explicit body field to retain parsed Markdown.
        body: z.record(z.string(), z.unknown()),
      }),
    }),
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
