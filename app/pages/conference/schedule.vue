<script setup lang="ts">
import type { ScheduleApiEnvelope } from '~/types/schedule'
import { normalizeConferenceScheduleDays } from '~/composables/conferenceSchedule'

const { data } = await useApiFetch<ScheduleApiEnvelope>('/events/schedule/')

const days = computed(() => data.value?.data ? data.value.data.map(normalizeConferenceScheduleDays) : [])
const dayDates = computed(() => data.value?.data ? data.value.data.map(day => day.date) : [])
const activeDate = ref(dayDates.value[0] ?? '')
const activeDay = computed(() => days.value.find(day => day.date === activeDate.value) ?? days.value[0] ?? null)

useHead({ title: $t('conference.schedule') })
</script>

<template>
  <div class="w-full max-w-max mx-auto pb-20 pt-8 md:pt-12">
    <template v-if="days.length">
      <div class="flex justify-center">
        <ConferenceScheduleDayTabs v-model="activeDate" :days="dayDates" class="mt-10" />
      </div>
      <ConferenceScheduleGrid v-if="activeDay" :day="activeDay" class="mt-8" />
    </template>
  </div>
</template>
