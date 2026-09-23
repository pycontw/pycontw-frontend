<script setup lang="ts">
import type { ConferenceSpeech, ConferenceTalkDetail } from '~/types/speech'

const { speech, relatedSpeeches } = defineProps<{
  modal?: boolean
  speech: ConferenceTalkDetail
  relatedSpeeches?: ConferenceSpeech[]
}>()

const { t } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()

const filteredRelatedSpeeches = computed(() => {
  return relatedSpeeches?.filter(relatedSpeech => relatedSpeech.id !== speech.id) ?? []
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-highlighted leading-snug" :class="modal ? 'mb-8 sm:text-4xl' : 'my-8 sm:text-5xl'">
      {{ speech.title }}
    </h1>

    <ConferenceSpeechSpeakersInfo :speakers="speech.speakers" />

    <ConferenceSessionInfo
      :begin-time="speech.begin_time"
      :end-time="speech.end_time"
      :location="speech.location"
      :language="speech.language"
      :category="speech.category"
      :python-level="speech.python_level"
    />

    <ConferenceSpeechExternalLinks
      :slide-link="speech.slide_link"
      :slido-embed-link="speech.slido_embed_link"
      :hackmd-embed-link="speech.hackmd_embed_link"
      :youtube-id="speech.youtube_id"
      class="my-4"
    />

    <MDC class="custom-content" :value="speech.abstract" />

    <h2 class="my-6 text-2xl font-bold text-highlighted">
      {{ t('detailed_description') }}
    </h2>
    <MDC class="custom-content mb-8" :value="speech.detailed_description" />

    <USeparator />

    <ConferenceSpeechSpeakerDetail v-for="speaker in speech.speakers" :key="speaker.name" :speaker="speaker" class="my-6" />

    <template v-if="filteredRelatedSpeeches.length">
      <USeparator />

      <h2 class="my-6 text-2xl font-bold text-highlighted">
        {{ t('related_speeches') }}
      </h2>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <template v-for="relatedSpeech in filteredRelatedSpeeches" :key="relatedSpeech.id">
          <NuxtLink :to="localePath(`/conference/${relatedSpeech.event_type}/${relatedSpeech.id}`)">
            <ConferenceSpeechCard :speech="relatedSpeech" />
          </NuxtLink>
        </template>
      </div>
    </template>
  </div>
</template>

<i18n lang="yaml">
en-us:
  detailed_description: "Description"
  related_speeches: "Related Speeches"
zh-hant:
  detailed_description: "說明"
  related_speeches: "相關演講"
</i18n>
