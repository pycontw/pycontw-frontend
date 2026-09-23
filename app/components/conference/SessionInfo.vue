<script setup lang="ts">
import type { ConferenceSpeechCategory, ConferenceSpeechLanguage, ConferenceSpeechPythonLevel } from '~/types/speech'

const { beginTime, endTime, location, language, category, pythonLevel } = defineProps<{
  beginTime?: string
  endTime: string
  location?: string
  language: ConferenceSpeechLanguage
  category?: ConferenceSpeechCategory
  pythonLevel?: ConferenceSpeechPythonLevel
}>()

const { t, locale } = useI18n({ useScope: 'local' })

const info = computed(() => {
  const localizedDate = beginTime ? getLocalizedDate(beginTime) : { 'zh-hant': '', 'en-us': '' }

  return {
    date: locale.value === 'zh-hant' ? localizedDate['zh-hant'] : localizedDate['en-us'],
    dateNumberLabel: beginTime ? $t('common.day_title', { number: getConferenceDateNumber(beginTime) }) : '',
    location: location ? resolveLocalizedText(resolveRoomLabel(location), locale.value) : '',
    beginTime: beginTime ? getSessionTimeLabel(beginTime) : '',
    endTime: getSessionTimeLabel(endTime),
    languageLabel: $t(`speech.language_label.${language}`),
    classificationTitle: [category && $t('speech.category_title'), pythonLevel && $t('speech.python_level_title')].filter(Boolean).join(' • '),
    classificationLabel: [category && $t(`speech.category.${category}`), pythonLevel && $t(`speech.python_level.${pythonLevel}`)].filter(Boolean).join(' • '),
  }
})
</script>

<template>
  <UiBorderContainer class="my-6 p-4 rounded-xl">
    <div class="grid sm:grid-cols-2 gap-4" :class="category || pythonLevel ? 'lg:grid-cols-4' : 'lg:grid-cols-3'">
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
          <span class="autospace-normal">{{ $t('speech.language') }}</span>
        </div>
        <div data-value>
          {{ info.languageLabel }}
        </div>
      </div>

      <div v-if="category || pythonLevel" class="info-item">
        <div data-label>
          <UIcon name="i-lucide:shapes" class="size-4 text-dimmed" />
          <span class="autospace-normal">{{ info.classificationTitle }}</span>
        </div>
        <div data-value>
          {{ info.classificationLabel }}
        </div>
      </div>
    </div>
  </UiBorderContainer>
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
  location: Location
zh-hant:
  location: 地點
</i18n>
