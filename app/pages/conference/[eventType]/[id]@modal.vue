<script setup lang="ts">
import type { ConferenceSpeech, ConferenceTalkDetail } from '~/types/speech'

const route = useParentRoute()

const { data: speech } = await useApiFetch<ConferenceTalkDetail>(`/events/speeches/${route.params.eventType}/${route.params.id}/`)
const { data: relatedSpeeches } = speech.value ? await useApiFetch<ConferenceSpeech[]>(`/events/speeches/category/${speech.value.category}`) : { data: undefined }

const open = ref(true)

definePageMeta({
  validate: validateConferenceRoute,
})
</script>

<template>
  <UiResponsiveModal
    v-model:open="open"
    @closed="$modalRouter.close()"
  >
    <template #body>
      <ConferenceSpeechDetailView v-if="speech" :speech="speech" :related-speeches="relatedSpeeches" modal />
    </template>
  </UiResponsiveModal>
</template>
