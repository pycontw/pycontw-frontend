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
        <div class="flex text-muted space-x-2">
          <ULink v-if="keynote.social_item.github" :to="keynote.social_item.github">
            <UIcon name="i-simple-icons:github" />
          </ULink>
          <ULink v-if="keynote.social_item.twitter" :to="keynote.social_item.twitter">
            <UIcon name="i-simple-icons:x" />
          </ULink>
          <ULink v-if="keynote.social_item.linkedin" :to="keynote.social_item.linkedin">
            <UIcon name="i-simple-icons:linkedin" />
          </ULink>
        </div>
      </div>
    </div>

    <h2 class="text-xl sm:text-3xl font-semibold my-4 text-highlighted">
      {{ localized.sessionTitle }}
    </h2>

    <div class="space-x-2">
      <UButton
        v-if="keynote.session.slides"
        :to="keynote.session.slides"
        variant="subtle"
        color="neutral"
        icon="i-lucide:presentation"
      >
        {{ t('slides') }}
      </UButton>
      <UButton
        v-if="keynote.slido"
        :to="keynote.slido"
        variant="subtle"
        color="neutral"
        icon="i-lucide:message-square-more"
      >
        Slido
      </UButton>
      <UButton
        v-if="keynote.hackmd_embed_link"
        :to="keynote.hackmd_embed_link"
        variant="subtle"
        color="neutral"
        icon="i-lucide:file-pen"
      >
        {{ t('note') }}
      </UButton>
      <UButton
        v-if="keynote.youtube_id"
        :to="`https://www.youtube.com/watch?v=${keynote.youtube_id}`"
        variant="subtle"
        color="error"
        icon="i-simple-icons:youtube"
      >
        {{ t('playback') }}
      </UButton>
    </div>

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
  note: Shared Notes
  slides: Slides
  playback: Playback
zh-hant:
  about_speaker: 關於講者
  read_more: 查看更多
  note: 共筆
  slides: 簡報
  playback: 重播
</i18n>
