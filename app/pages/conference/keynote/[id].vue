<script setup lang="ts">
import type { ConferenceKeynote } from '~/types/keynote'

const route = useParentRoute()
const { locale } = useI18n({ useScope: 'local' })

const { data } = await useApiFetch<ConferenceKeynote[]>('/events/keynotes/')

const keynote = computed(() => {
  const numParamId = Number(route.params.id)
  if (Number.isNaN(numParamId))
    return null

  return data.value?.find(k => k.id === numParamId) ?? null
})

const title = computed(() => {
  if (!keynote.value)
    return
  return locale.value === 'zh-hant' ? keynote.value.session.title_zh_hant : keynote.value.session.title_en_us
})

useHead({
  title,
})
</script>

<template>
  <UContainer>
    <UPage v-if="keynote">
      <UPageBody>
        <ConferenceKeynoteDetailView :keynote="keynote" />
      </UPageBody>
    </UPage>
  </UContainer>
</template>
