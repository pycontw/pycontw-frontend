<script setup lang="ts">
import type { ConferenceKeynote } from '~/types/keynote'

const { keynote } = defineProps<{
  modal?: boolean
  keynote: ConferenceKeynote
}>()

const { locale } = useI18n({ useScope: 'local' })

const localized = computed(() => {
  const isZh = locale.value === 'zh-hant'
  return {
    sessionTitle: isZh ? keynote.session.title_zh_hant : keynote.session.title_en_us,
    sessionDescription: isZh ? keynote.session.description_zh_hant : keynote.session.description_en_us,
    speakerName: isZh ? keynote.speaker.name_zh_hant : keynote.speaker.name_en_us,
    speakerBio: isZh ? keynote.speaker.bio_zh_hant : keynote.speaker.bio_en_us,
  }
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-highlighted leading-snug" :class="modal ? 'mb-8 sm:text-4xl' : 'my-8 sm:text-5xl'">
      {{ localized.sessionTitle }}
    </h1>

    <ConferenceSpeechSpeakersInfo :speakers="[{ name: localized.speakerName, thumbnail_url: keynote.speaker.photo }]" />

    <ConferenceSpeechExternalLinks
      :slide-link="keynote.session.slides"
      :slido-embed-link="keynote.slido"
      :hackmd-embed-link="keynote.hackmd_embed_link"
      :youtube-id="keynote.youtube_id"
      class="my-4"
    />

    <MDC class="custom-content" :value="localized.sessionDescription" />

    <USeparator />

    <ConferenceSpeechSpeakerDetail :speaker="keynote" class="my-6" />
  </div>
</template>
