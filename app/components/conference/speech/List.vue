<script setup lang="ts">
import type { ConferenceSpeech, ConferenceSpeechPythonLevel } from '~/types/speech'
import { SPEECH_PYTHON_LEVELS } from '~/types/speech'

const { speeches, hideFilters } = defineProps<{
  speeches: ConferenceSpeech[]
  hideFilters?: boolean
}>()

interface FilterItem {
  label: string
  value: string
}

const catagoryFilters = ref<FilterItem[]>([])
const allCategories = computed<FilterItem[]>(() => {
  const categories = new Set<string>(speeches.map(speech => speech.category) ?? [])
  return Array.from(categories).map(category => ({
    label: $t(`speech.category.${category}`),
    value: category,
  }))
})

const pythonLevelFilters = ref<FilterItem[]>([])
const allPythonLevels = computed<FilterItem[]>(() => {
  const pythonLevels = new Set<ConferenceSpeechPythonLevel>(speeches.map(speech => speech.python_level) ?? [])
  return sortByCustomOrder(Array.from(pythonLevels), SPEECH_PYTHON_LEVELS).map(level => ({
    label: $t(`speech.python_level.${level}`),
    value: level,
  }))
})

const talkLanguageFilters = ref<FilterItem[]>([])
const allTalkLanguages = computed<FilterItem[]>(() => {
  const talkLanguages = new Set<string>(speeches.map(speech => getSpeechTalkLanguage(speech.language)) ?? [])
  return Array.from(talkLanguages).map(language => ({
    label: $t(`speech.talk_language.${language}`),
    value: language,
  }))
})

const sorts = computed(() => {
  return [
    { label: $t('common.sort', { criteria: $t('common.time') }), value: 'time' },
    { label: $t('common.sort', { criteria: $t('speech.python_level_title') }), value: 'python_level' },
  ]
})
const sortBy = ref(sorts.value[0]!.value)

const filteredData = computed<ConferenceSpeech[]>(() => {
  const hasCategoryFilters = catagoryFilters.value.length > 0
  const hasPythonLevelFilters = pythonLevelFilters.value.length > 0
  const hasTalkLanguageFilters = talkLanguageFilters.value.length > 0

  if (!hasCategoryFilters && !hasPythonLevelFilters && !hasTalkLanguageFilters) {
    return speeches
  }

  return speeches.filter((speech) => {
    const matchesCategory = !hasCategoryFilters
      || catagoryFilters.value.some(filter => filter.value === speech.category)
    const matchesPythonLevel = !hasPythonLevelFilters
      || pythonLevelFilters.value.some(filter => filter.value === speech.python_level)
    const matchesTalkLanguage = !hasTalkLanguageFilters
      || talkLanguageFilters.value.some(filter => filter.value === getSpeechTalkLanguage(speech.language))

    return matchesCategory && matchesPythonLevel && matchesTalkLanguage
  }) ?? []
})

const sortedData = computed(() => {
  const filtered = [...filteredData.value]
  const sorted = sortBy.value === 'time'
    ? filtered.sort((a, b) => new Date(a.begin_time).getTime() - new Date(b.begin_time).getTime())
    : filtered.sort((a, b) => {
      // first sort: level, second sort: time
        if (a.python_level === b.python_level) {
          return new Date(a.begin_time).getTime() - new Date(b.begin_time).getTime()
        }
        return SPEECH_PYTHON_LEVELS.indexOf(a.python_level) - SPEECH_PYTHON_LEVELS.indexOf(b.python_level)
      })
  return sorted
})
</script>

<template>
  <div>
    <div v-if="!hideFilters" class="mb-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <USelectMenu
        v-model="catagoryFilters"
        :items="allCategories"
        icon="i-lucide:shapes"
        multiple
        size="xl"
        :placeholder="`${$t('speech.category_title')}...`"
        :search-input="{
          placeholder: `${$t('common.search')}...`,
        }"
      >
        <div v-if="catagoryFilters.length" class="flex space-x-2 items-center">
          <div>{{ $t('speech.category_title') }}</div>
          <div class="min-w-4.5 h-4.5 px-1.25 bg-primary rounded-full flex items-center justify-center text-xs text-primary-950">
            {{ catagoryFilters.length }}
          </div>
        </div>
      </USelectMenu>
      <!-- TODO: hover not working when disable search https://github.com/nuxt/ui/issues/5917 -->
      <USelectMenu
        v-model="pythonLevelFilters"
        :items="allPythonLevels"
        icon="i-lucide:graduation-cap"
        multiple
        size="xl"
        :placeholder="`${$t('speech.python_level_title')}...`"
        :search-input="false"
      >
        <div v-if="pythonLevelFilters.length" class="flex space-x-2 items-center">
          <div>{{ $t('speech.python_level_title') }}</div>
          <div class="min-w-4.5 h-4.5 px-1.25 bg-primary rounded-full flex items-center justify-center text-xs text-primary-950">
            {{ pythonLevelFilters.length }}
          </div>
        </div>
      </USelectMenu>
      <USelectMenu
        v-model="talkLanguageFilters"
        :items="allTalkLanguages"
        icon="i-lucide:globe"
        multiple
        size="xl"
        :placeholder="`${$t('speech.talk_language_title')}...`"
        :search-input="false"
      >
        <div v-if="talkLanguageFilters.length" class="flex space-x-2 items-center">
          <div>{{ $t('speech.talk_language_title') }}</div>
          <div class="min-w-4.5 h-4.5 px-1.25 bg-primary rounded-full flex items-center justify-center text-xs text-primary-950">
            {{ talkLanguageFilters.length }}
          </div>
        </div>
      </USelectMenu>
      <USelect v-model="sortBy" :items="sorts" icon="i-lucide:arrow-down-up" size="xl" />
    </div>
    <div class="grid sm:grid-cols-2 gap-4">
      <ConferenceSpeechCard v-for="speech in sortedData" :key="speech.id" :speech="speech" />
    </div>
  </div>
</template>
