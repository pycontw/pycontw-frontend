<script setup lang="ts">
import type { ConferenceSpeech, ConferenceTalkDetail } from '~/types/speech'

const route = useParentRoute()

const { data: speech } = await useApiFetch<ConferenceTalkDetail>(`/events/speeches/${route.params.eventType}/${route.params.id}/`)
const { data: relatedSpeeches } = speech.value ? await useApiFetch<ConferenceSpeech[]>(`/events/speeches/category/${speech.value.category}`) : { data: undefined }

useHead({
  title: speech.value?.title,
})

definePageMeta({
  // fix for scroll up when modal route popup
  scrollToTop: false,
  validate: validateConferenceRoute,
})
</script>

<template>
  <UContainer>
    <UPage v-if="speech">
      <UPageBody>
        <ConferenceSpeechDetailView :speech="speech" :related-speeches="relatedSpeeches" />
      </UPageBody>
    </UPage>
  </UContainer>
</template>
