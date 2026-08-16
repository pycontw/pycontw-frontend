<script setup lang="ts">
import type { ConferenceSpeech, ConferenceTalkDetail } from '~/types/speech'

const { speech, relatedSpeeches } = defineProps<{
  modal?: boolean
  speech: ConferenceTalkDetail
  relatedSpeeches?: ConferenceSpeech[]
}>()

const { t, locale } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()

function getDisplayInfo(speech: ConferenceTalkDetail) {
  const location = resolveLocalizedText(resolveRoomLabel(speech.location), locale.value)
  const localizedBeginTime = getLocalizedDate(speech.begin_time)
  const date = locale.value === 'zh-hant' ? localizedBeginTime['zh-hant'] : localizedBeginTime['en-us']
  const languageLabel = $t(`speech.language_label.${speech.language}`)
  const dateNumberLabel = $t('common.day_title', { number: getConferenceDateNumber(speech.begin_time) })
  const categoryLabel = $t(`speech.category.${speech.category}`)
  const levelLabel = $t(`speech.python_level.${speech.python_level}`)

  return {
    date,
    dateNumberLabel,
    location,
    beginTime: getSessionTimeLabel(speech.begin_time),
    endTime: getSessionTimeLabel(speech.end_time),
    languageLabel,
    categoryLabel,
    levelLabel,
  }
}

const info = computed(() => getDisplayInfo(speech))
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

    <!-- time, place, lang -->
    <UiBorderContainer class="my-6 p-4 rounded-xl">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="info-item">
          <div data-label>
            <UIcon name="i-lucide:clock-3" class="size-4 text-dimmed" />
            <span class="autospace-normal">{{ info.dateNumberLabel }} • {{ info.date }}</span>
          </div>
          <div data-value>
            {{ info.beginTime }} - {{ info.endTime }}
          </div>
        </div>

        <div class="info-item">
          <div data-label>
            <UIcon name="i-lucide:map-pin" class="size-4 text-dimmed" />
            <span class="autospace-normal">{{ t('location') }}</span>
          </div>
          <div data-value>
            {{ info.location }}
          </div>
        </div>

        <div class="info-item">
          <div data-label>
            <UIcon name="i-lucide:languages" class="size-4 text-dimmed" />
            <span class="autospace-normal">{{ t('speech.language') }}</span>
          </div>
          <div data-value>
            {{ info.languageLabel }}
          </div>
        </div>

        <div class="info-item">
          <div data-label>
            <UIcon name="i-lucide:shapes" class="size-4 text-dimmed" />
            <span class="autospace-normal">{{ t('speech.category_title') }} • {{ t('speech.python_level_title') }}</span>
          </div>
          <div data-value>
            {{ info.categoryLabel }} • {{ info.levelLabel }}
          </div>
        </div>
      </div>
    </UiBorderContainer>

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

<style scoped>
@reference "~/assets/css/main.css";

.info-item {
  [data-label] {
    @apply inline-flex items-center gap-1.5 text-muted text-sm;
  }
  [data-value] {
    @apply font-bold sm:text-lg;
  }
}
</style>

<i18n lang="yaml">
en-us:
  detailed_description: "Description"
  related_speeches: "Related Speeches"
  location: "Location"
zh-hant:
  detailed_description: "說明"
  related_speeches: "相關演講"
  location: "地點"
</i18n>
