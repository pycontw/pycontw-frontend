<script setup lang="ts">
defineProps<{
  slideLink?: string
  slidoEmbedLink?: string
  hackmdEmbedLink?: string
  youtubeId?: string
}>()

const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <div class="space-x-2">
    <UButton
      v-if="slideLink"
      :to="slideLink"
      variant="subtle"
      color="neutral"
      icon="i-lucide:presentation"
    >
      {{ t('slides') }}
    </UButton>
    <UButton
      v-if="slidoEmbedLink"
      :to="slidoEmbedLink"
      variant="subtle"
      color="neutral"
      icon="i-lucide:message-square-more"
    >
      Slido
    </UButton>
    <UButton
      v-if="hackmdEmbedLink"
      :to="hackmdEmbedLink"
      variant="subtle"
      color="neutral"
      icon="i-lucide:file-pen"
    >
      {{ t('note') }}
    </UButton>
    <UButton
      v-if="youtubeId"
      :to="`https://www.youtube.com/watch?v=${youtubeId}`"
      variant="subtle"
      color="error"
      icon="i-simple-icons:youtube"
    >
      {{ t('playback') }}
    </UButton>
  </div>
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
