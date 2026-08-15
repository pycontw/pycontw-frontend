<script setup lang="ts">
import type { ConferenceKeynote } from '~/types/keynote'

const { keynote } = defineProps<{
  keynote: ConferenceKeynote
}>()

const { locale, t } = useI18n({ useScope: 'local' })

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
  <UiBorderContainer class="p-4 md:p-6 rounded-lg md:rounded-2xl">
    <div class="flex items-center space-x-5 mb-6">
      <div class="shrink-0">
        <img :src="keynote.speaker.photo" alt="Speaker Photo" class="w-18 h-18 rounded-full object-cover">
      </div>
      <div class="space-y-2">
        <div class="font-semibold text-xl">
          {{ localized.speakerName }}
        </div>
        <ConferenceSpeechSpeakerSocialLinks
          :github="keynote.social_item.github"
          :x="keynote.social_item.twitter"
          :linkedin="keynote.social_item.linkedin"
        />
      </div>
    </div>

    <h2 class="text-xl sm:text-3xl font-semibold my-4 text-highlighted">
      {{ localized.sessionTitle }}
    </h2>

    <ConferenceSpeechExternalLinks
      :slide-link="keynote.session.slides"
      :slido-embed-link="keynote.slido"
      :hackmd-embed-link="keynote.hackmd_embed_link"
      :youtube-id="keynote.youtube_id"
    />

    <AutoShrink overflow class="my-4" :more-text="t('read_more')">
      <div class="whitespace-pre-line text-base sm:text-lg sm:leading-8 mb-8">
        {{ localized.sessionDescription }}
      </div>
    </AutoShrink>

    <h4 class="font-semibold my-4 ">
      {{ t('about_speaker') }}
    </h4>
    <div class="whitespace-pre-line text-muted">
      {{ localized.speakerBio }}
    </div>
  </UiBorderContainer>
</template>

<i18n lang="yaml">
en-us:
  about_speaker: About the Speaker
  read_more: Read More
zh-hant:
  about_speaker: 關於講者
  read_more: 查看更多
</i18n>
