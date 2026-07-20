<script setup lang="ts">
import type { ScheduleSessionView } from '~/composables/conferenceSchedule'

const props = defineProps<{
  session: ScheduleSessionView
}>()

const { locale } = useI18n()

const cardClass = computed(() => {
  if (props.session.break_event) {
    return 'border-default'
  }

  switch (props.session.event_type) {
    case 'keynote':
      return 'border-primary-300/45 bg-primary-400/20 shadow-lg shadow-primary-950/20'
    case 'tutorial':
      return 'border-emerald-300/30 bg-emerald-400/14'
    case 'sponsored':
      return 'border-amber-300/30 bg-amber-400/14'
    default: {
      if (props.session.custom_event || props.session.event_type === 'custom') {
        return 'border-sky-300/30 bg-sky-400/12'
      }
      return 'border-default'
    }
  }
})

const wideSession = computed(() => props.session.gridColumnSpan > 1)
const title = computed(() => resolveLocalizedText(props.session.title, locale.value))
const speakers = computed(() => props.session.speakers.map(speaker => resolveLocalizedText(speaker, locale.value)).join(', '))
</script>

<template>
  <article
    class="h-full overflow-hidden rounded-xl border backdrop-blur-sm p-3"
    :class="[cardClass, wideSession ? 'flex flex-col items-center justify-center text-center' : '']"
  >
    <p class="text-xs font-medium uppercase tracking-wide text-muted">
      {{ props.session.timeLabel }}
    </p>

    <div class="mt-1.5 font-semibold leading-snug text-highlighted line-wrap">
      {{ title }}
    </div>

    <p v-if="speakers" class="mt-2 text-sm leading-5 text-muted">
      {{ speakers }}
    </p>
  </article>
</template>

<style scoped>
@reference "../../../assets/css/main.css";

.line-wrap {
  @apply wrap-break-word hyphens-auto;

  /* HACK: show hyphens */
  -webkit-locale: 'en';
}
</style>
