<script setup lang="ts">
import type { ScheduleSessionView } from '~/composables/conferenceSchedule'
import { NuxtLink, PlusModalLink } from '#components'

const { session } = defineProps<{
  session: ScheduleSessionView
}>()

const { locale } = useI18n()
const localePath = useLocalePath()

const wideSession = computed(() => session.gridColumnSpan > 1)
const title = computed(() => resolveLocalizedText(session.title, locale.value))
const speakers = computed(() => session.speakers.map(speaker => resolveLocalizedText(speaker, locale.value)).join(', '))
const levelLabel = computed(() => resolvePythonLevelLabel(session.python_level))
const languageLabel = computed(() => session.language ? $t(`speech.language_label.${session.language}`) : null)

function isFullUrl(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

const eventPagePath = computed<{ to: string, isModal: boolean } | null>(() => {
  if (session.event_type === 'keynote') {
    return { to: localePath(`/conference/keynote/${session.event_id}`), isModal: true }
  } else if (WHITELIST_DETAILS_EVENT_TYPES.includes(session.event_type)) {
    return { to: localePath(`/conference/${session.event_type}/${session.event_id}`), isModal: true }
  } else if (session.event_type === 'custom') {
    if (!session.custom_event_path)
      return null

    return { to: isFullUrl(session.custom_event_path)
      ? session.custom_event_path
      : localePath(session.custom_event_path), isModal: false }
  }
  return null
})

const comp = computed(() => {
  if (eventPagePath.value) {
    if (eventPagePath.value.isModal) {
      return PlusModalLink
    } else {
      return NuxtLink
    }
  }
  return 'article'
})

const cardClass = computed(() => {
  if (eventPagePath.value)
    return 'border-default bg-accented/40 hover:bg-accented/60 transition-all'
  else
    return 'border-default'
})
</script>

<template>
  <component
    :is="comp"
    class="h-full overflow-hidden rounded-xl border backdrop-blur-smx p-3 lg:p-3.5"
    :class="[cardClass, wideSession ? 'flex flex-col items-center justify-center text-center' : '']"
    :to="eventPagePath?.to"
  >
    <p class="text-xs lg:text-sm font-medium uppercase tracking-wide text-muted">
      {{ session.timeLabel }}
    </p>

    <div class="mt-2 space-y-2">
      <UBadge v-if="session.event_type === 'keynote'" variant="outline" color="neutral" class="rounded-full">
        {{ $t('conference.keynote') }}
      </UBadge>
      <UBadge v-else-if="session.event_type === 'tutorial'" variant="outline" color="neutral" class="rounded-full">
        {{ $t('conference.tutorial') }}
      </UBadge>

      <div class="lg:text-lg font-semibold leading-snug text-highlighted line-wrap">
        {{ title }}
      </div>

      <div class="space-x-0.75 space-y-0.5">
        <UBadge v-if="levelLabel.text" variant="outline" color="neutral" class="rounded-full">
          {{ levelLabel.text }}
        </UBadge>
        <UBadge v-if="languageLabel" variant="outline" color="neutral" class="rounded-full">
          {{ languageLabel }}
        </UBadge>
      </div>
    </div>

    <p v-if="speakers" class="mt-2 text-sm lg:text-base leading-5 text-muted">
      {{ speakers }}
    </p>
  </component>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.line-wrap {
  @apply wrap-break-word hyphens-auto;

  /* HACK: show hyphens */
  -webkit-locale: 'en';
}
</style>
