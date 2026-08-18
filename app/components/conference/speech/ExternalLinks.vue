<script setup lang="ts">
defineProps<{
  slideLink?: string
  slidoEmbedLink?: string
  hackmdEmbedLink?: string
  youtubeId?: string
}>()

const { t } = useI18n({ useScope: 'local' })
const uiBase = 'max-sm:px-3 max-sm:py-2.5 max-sm:text-base max-sm:gap-2'
</script>

<template>
  <div class="max-sm:grid max-sm:grid-cols-1 max-sm:gap-3 sm:space-x-2">
    <UButton
      v-if="slideLink"
      :to="slideLink"
      variant="subtle"
      color="neutral"
      icon="i-lucide:presentation"
      :ui="{ base: uiBase }"
    >
      {{ t('slides') }}
    </UButton>
    <UButton
      v-if="slidoEmbedLink"
      :to="slidoEmbedLink"
      variant="subtle"
      color="neutral"
      icon="i-lucide:message-square-more"
      :ui="{ base: uiBase }"
    >
      Slido
    </UButton>
    <UButton
      v-if="hackmdEmbedLink"
      :to="hackmdEmbedLink"
      variant="subtle"
      color="neutral"
      icon="i-lucide:file-pen"
      :ui="{ base: uiBase }"
    >
      {{ t('note') }}
    </UButton>
    <UButton
      v-if="youtubeId"
      :to="`https://www.youtube.com/watch?v=${youtubeId}`"
      variant="subtle"
      color="error"
      icon="i-simple-icons:youtube"
      :ui="{ base: uiBase }"
    >
      {{ t('playback') }}
    </UButton>
  </div>
</template>

<i18n lang="yaml">
en-us:
  note: Shared Notes
  slides: Slides
  playback: Playback
zh-hant:
  note: 共筆
  slides: 簡報
  playback: 重播
</i18n>
