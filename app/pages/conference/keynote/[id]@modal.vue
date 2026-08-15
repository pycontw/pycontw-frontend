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

const open = ref(true)
</script>

<template>
  <UModal
    v-model:open="open"
    :ui="{ content: 'max-w-5xl' }"
    @after:leave="$modalRouter.close()"
  >
    <template #body>
      <ConferenceKeynoteDetailView v-if="keynote" :keynote="keynote" modal />
    </template>
  </UModal>
</template>
