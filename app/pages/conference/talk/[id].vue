<script setup lang="ts">
import type { ConferenceSpeech, ConferenceTalkDetail } from '~/types/speech'

const route = useParentRoute()

const { data: speech } = await useApiFetch<ConferenceTalkDetail>(`/events/speeches/talk/${route.params.id}/`)

if (!speech.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not Found',
  })
}

const { data: relatedSpeeches } = await useApiFetch<ConferenceSpeech[]>(`/events/speeches/category/${speech.value?.category}`)

const { t, locale } = useI18n({ useScope: 'local' })

useHead({
  title: speech.value?.title,
})

function getDisplayInfo(speech: ConferenceTalkDetail) {
  const location = resolveRoomLabel(speech.location)
  const localizedBeginTime = getLocalizedDate(speech.begin_time)
  const date = locale.value === 'zh-hant' ? localizedBeginTime['zh-hant'] : localizedBeginTime['en-us']
  const talkLanguage = $t(`speech.talk_language.${getSpeechTalkLanguage(speech.language)}`)
  const slidesLanguage = $t(`speech.slides_language.${getSpeechSlidesLanguage(speech.language)}`)

  return {
    date,
    location,
    beginTime: getSessionTimeLabel(speech.begin_time),
    endTime: getSessionTimeLabel(speech.end_time),
    talkLanguage,
    slidesLanguage,
  }
}

const info = computed(() => getDisplayInfo(speech.value!))

definePageMeta({
  // fix for scroll up when modal route popup
  scrollToTop: false,
})
</script>

<template>
  <UContainer>
    <UPage v-if="speech">
      <ContentHeader :title="speech.title" />
      <UPageBody>
        <div>
          <ConferenceSpeechSpeakersInfo :speakers="speech.speakers" />

          <!-- time, place, lang -->
          <div>
            <div class="flex flex-wrap items-center gap-4">
              <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span class="inline-flex items-center gap-1.5">
                  <UIcon name="i-lucide:clock-3" class="size-4 text-dimmed" />
                  <span class="autospace-normal">{{ info.date }}</span>
                  <span class="autospace-normal">{{ info.beginTime }} - {{ info.endTime }}</span>
                </span>
                <span class="inline-flex items-center gap-1.5">
                  <UIcon name="i-lucide:map-pin" class="size-4 text-dimmed" />
                  {{ info.location }}
                </span>
              </div>

              <div class="flex items-center gap-2">
                <UIcon name="translate" class="h-5 w-5 shrink-0" />
                <span class="text-sm text-highlighted">{{ info.talkLanguage }}</span>
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="translate" class="h-5 w-5 shrink-0" />
                <span class="text-sm text-highlighted">{{ info.slidesLanguage }}</span>
              </div>
            </div>
          </div>

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

          <div>
            <ConferenceSpeechSpeakerDetail v-for="speaker in speech.speakers" :key="speaker.name" :speaker="speaker" class="my-6" />
          </div>

          <USeparator />

          <h2 class="my-6 text-2xl font-bold text-highlighted">
            {{ t('related_speeches') }}
          </h2>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ConferenceSpeechCard v-for="relatedSpeech in relatedSpeeches" :key="relatedSpeech.id" :speech="relatedSpeech" />
          </div>
        </div>
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<i18n lang="yaml">
en-us:
  detailed_description: "Description"
  related_speeches: "Related Speeches"
zh-hant:
  detailed_description: "說明"
  related_speeches: "相關演講"
</i18n>
