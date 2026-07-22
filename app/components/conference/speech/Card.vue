<script setup lang="ts">
import type { ConferenceSpeech } from '~/types/speech'

const { speech } = defineProps<{
  speech: ConferenceSpeech
}>()

const cardClass = computed(() => {
  if (speech.event_type === 'sponsored') {
    return 'border-amber-300/30 bg-amber-400/10 shadow-lg shadow-amber-950/10'
  }

  return 'border-default bg-default/50 shadow-lg shadow-primary-950/10'
})

const locationLabel = computed(() => {
  return resolveRoomLabel(speech.location)
})

const timeLabel = computed(() => {
  return getSessionTimeLabel(speech.begin_time)
})

const speakerNames = computed(() => speech.speakers.map(({ name }) => name).join(', '))

const languageLabel = computed(() => {
  return $t(`speech.talk_language.${getSpeechTalkLanguage(speech.language)}`)
})

const levelLabel = computed<{ text: string, color: 'success' | 'info' | 'error' | 'neutral' }>(() => {
  switch (speech.python_level) {
    case 'NOVICE':
      return { text: $t('speech.python_level.NOVICE'), color: 'success' }
    case 'INTERMEDIATE':
      return { text: $t('speech.python_level.INTERMEDIATE'), color: 'info' }
    case 'EXPERIENCED':
      return { text: $t('speech.python_level.EXPERIENCED'), color: 'error' }
    default:
      return { text: speech.python_level, color: 'neutral' }
  }
})
</script>

<template>
  <article
    class="flex h-full flex-col overflow-hidden rounded-xl border p-5 backdrop-blur-sm transition-colors"
    :class="cardClass"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="min-w-0">
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span class="inline-flex items-center gap-1.5">
            <UIcon name="i-lucide:clock-3" class="size-4 text-dimmed" />
            <span>{{ $t('common.day_title', { number: getConferenceDateNumber(speech.begin_time) }) }} • {{ timeLabel }}</span>
          </span>
          <span class="inline-flex items-center gap-1.5">
            <UIcon name="i-lucide:map-pin" class="size-4 text-dimmed" />
            {{ locationLabel }}
          </span>
        </div>
      </div>

      <UBadge variant="subtle" :color="levelLabel.color">
        {{ levelLabel.text }}
      </UBadge>
    </div>

    <h3 class="mt-3 text-lg font-semibold leading-snug text-highlighted sm:text-xl">
      {{ speech.title }}
    </h3>

    <div class="mt-4 flex flex-wrap gap-2">
      <UBadge class="rounded-full" variant="subtle">
        {{ $t(`speech.category.${speech.category}`) }}
      </UBadge>
      <UBadge class="rounded-full" variant="subtle" color="neutral">
        {{ languageLabel }}
      </UBadge>
    </div>

    <div class="mt-5 flex flex-1 flex-col justify-end">
      <div class="flex items-center gap-3">
        <div class="flex shrink-0 -space-x-3">
          <img
            v-for="speaker in speech.speakers"
            :key="speaker.name"
            :src="speaker.thumbnail_url"
            :alt="speaker.name"
            class="h-10 w-10 rounded-full border-2 border-default object-cover"
          >
        </div>

        <div class="min-w-0 flex-1">
          <p class="text-sm font-semibold text-highlighted">
            {{ speakerNames }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
