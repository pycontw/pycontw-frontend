<script setup lang="ts">
interface TimeZoneDefinition {
  label: string
  offset: string
  timeZone: string
}

const { iso } = defineProps<{
  iso: string
}>()

const { locale, t } = useI18n()
const isSupportHover = useMediaQuery('(hover: hover)')
const userTimeZone = ref<string>()

const fixedTimeZones: TimeZoneDefinition[] = [
  { label: 'AoE', offset: 'UTC−12', timeZone: 'Etc/GMT+12' },
  { label: 'UTC', offset: 'UTC', timeZone: 'UTC' },
  { label: 'Taipei', offset: 'UTC+8', timeZone: 'Asia/Taipei' },
]

const date = computed(() => {
  const parsedDate = new Date(iso)
  return Number.isNaN(parsedDate.getTime()) ? undefined : parsedDate
})

function formatDateTime(timeZone: string): string {
  if (!date.value)
    return 'Invalid date time'

  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone,
  }).format(date.value)
}

function getUtcOffset(timeZone: string): string {
  if (!date.value)
    return ''

  const offset = new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName: 'longOffset',
  }).formatToParts(date.value).find(part => part.type === 'timeZoneName')?.value

  if (!offset || offset === 'GMT')
    return 'UTC'

  const match = /^GMT([+-])(\d{2}):(\d{2})$/.exec(offset)

  if (!match)
    return offset.replace('GMT', 'UTC')

  const [, sign, hour, minute] = match
  const normalizedSign = sign === '-' ? '−' : '+'
  const normalizedHour = Number(hour)

  return `UTC${normalizedSign}${normalizedHour}${minute === '00' ? '' : `:${minute}`}`
}

const fixedTimeZoneRows = computed(() => fixedTimeZones.map(timeZone => ({
  ...timeZone,
  value: formatDateTime(timeZone.timeZone),
})))

const userTimeZoneRow = computed(() => {
  if (!userTimeZone.value) {
    return null
  }

  const utcOffset = getUtcOffset(userTimeZone.value)

  return {
    label: t('common.your_time_zone'),
    offset: utcOffset ? `${userTimeZone.value} (${utcOffset})` : userTimeZone.value,
    value: formatDateTime(userTimeZone.value),
  }
})

onMounted(() => {
  userTimeZone.value = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
})
</script>

<template>
  <UPopover
    arrow
    :content="{ hideWhenDetached: true, side: 'top' }"
    :mode="isSupportHover ? 'hover' : 'click'"
  >
    <slot />

    <template #content>
      <div class="w-72 max-w-[calc(100vw-2rem)] p-3 text-sm tabular-nums">
        <dl class="space-y-3">
          <div v-for="timeZone in fixedTimeZoneRows" :key="timeZone.timeZone">
            <dt class="flex items-baseline justify-between gap-6">
              <span class="font-semibold text-highlighted">{{ timeZone.label }}</span>
              <span class="text-xs text-muted">{{ timeZone.offset }}</span>
            </dt>
            <dd class="mt-0.5 whitespace-nowrap text-default autospace-normal">
              {{ timeZone.value }}
            </dd>
          </div>

          <div v-if="userTimeZoneRow" class="border-t border-default pt-3">
            <dt class="flex items-baseline justify-between gap-6">
              <span class="font-semibold text-highlighted">{{ userTimeZoneRow.label }}</span>
              <span v-if="userTimeZoneRow.offset" class="min-w-0 break-all text-right text-xs text-muted">
                {{ userTimeZoneRow.offset }}
              </span>
            </dt>
            <dd class="mt-0.5 whitespace-nowrap text-default autospace-normal">
              {{ userTimeZoneRow.value }}
            </dd>
          </div>
        </dl>
      </div>
    </template>
  </UPopover>
</template>
