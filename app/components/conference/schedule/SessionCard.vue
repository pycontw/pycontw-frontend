<script setup lang="ts">
import type { ScheduleSessionView } from '~/composables/conferenceSchedule'
import { NuxtLink, PlusModalLink } from '#components'

const { session } = defineProps<{
  session: ScheduleSessionView
}>()

const { locale } = useI18n()
const localePath = useLocalePath()

const cardClass = computed(() => {
  if (session.break_event) {
    return 'border-default'
  }

  switch (session.event_type) {
    case 'keynote':
      return 'border-primary-300/45 bg-primary-400/20 shadow-lg shadow-primary-950/20'
    case 'tutorial':
      return 'border-emerald-300/30 bg-emerald-400/14'
    case 'sponsored':
      return 'border-amber-300/30 bg-amber-400/14'
    default: {
      if (session.custom_event || session.event_type === 'custom') {
        return 'border-sky-300/30 bg-sky-400/12'
      }
      return 'border-default'
    }
  }
})

const wideSession = computed(() => session.gridColumnSpan > 1)
const title = computed(() => resolveLocalizedText(session.title, locale.value))
const speakers = computed(() => session.speakers.map(speaker => resolveLocalizedText(speaker, locale.value)).join(', '))

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
</script>

<template>
  <component
    :is="comp"
    class="h-full overflow-hidden rounded-xl border backdrop-blur-smx p-3"
    :class="[cardClass, wideSession ? 'flex flex-col items-center justify-center text-center' : '']"
    :to="eventPagePath?.to"
  >
    <p class="text-xs font-medium uppercase tracking-wide text-muted">
      {{ session.timeLabel }}
    </p>

    <div class="mt-1.5 font-semibold leading-snug text-highlighted line-wrap">
      {{ title }} {{ session.event_type }}
    </div>

    <p v-if="speakers" class="mt-2 text-sm leading-5 text-muted">
      {{ speakers }}
    </p>
  </component>
</template>

<style scoped>
@reference "../../../assets/css/main.css";

.line-wrap {
  @apply wrap-break-word hyphens-auto;

  /* HACK: show hyphens */
  -webkit-locale: 'en';
}
</style>
