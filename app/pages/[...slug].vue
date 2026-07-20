<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const props = defineProps<{
  slug?: string | string[]
}>()

const route = useRoute()
const { locale, locales } = useI18n()
const slug = computed(() => {
  const _slug = props.slug || route.params.slug
  return Array.isArray(_slug) ? withLeadingSlash(String(_slug.join('/'))) : withLeadingSlash(String(_slug))
})

const routeLocale = computed(() => {
  const localeCodes = locales.value.map(item => typeof item === 'string' ? item : item.code)
  return localeCodes.find(code => route.path === `/${code}` || route.path.startsWith(`/${code}/`)) || locale.value
})

const { data: page } = await useAsyncData(`page-${routeLocale.value}-${slug.value}`, async () => {
  const collection = (`content_${routeLocale.value.replace('-', '_')}`) as keyof Collections

  const content = await queryCollection(collection).path(slug.value).first()

  // Optional: fallback to default locale if content is missing
  // if (!content && routeLocale.value !== 'en-us') {
  //   return await queryCollection('content_en_us').path(slug.value).first()
  // }

  return content
}, {
  watch: [routeLocale, slug],
})

useHead({ title: page.value?.title })
</script>

<template>
  <UContainer>
    <UPage v-if="page">
      <ContentHeader
        v-if="page.title || page.description"
        :title="page.title"
        :description="page.description"
      />
      <UPageBody>
        <ContentRenderer :value="page" class="custom-content" />
      </UPageBody>
    </UPage>
    <div v-else class="py-20 text-center">
      <h1 class="text-5xl text-gradient-neutral">
        404 Not Found
      </h1>
    </div>
  </UContainer>
</template>
