<script setup lang="ts">
import type { ScheduleDayView, ScheduleRoomView, ScheduleSessionView, ScheduleTimePoint } from '~/composables/conferenceSchedule'

const props = defineProps<{
  day: ScheduleDayView
}>()

const SLOT_MIN_HEIGHT = 20
const TIME_AXIS_WIDTH = 88
const COLUMN_WIDTH = 220
const COLUMN_START_OFFSET = 1
const ROW_START_OFFSET = 0

const bodyScroller = useTemplateRef<HTMLDivElement>('bodyScroller')
const headerScroller = useTemplateRef<HTMLDivElement>('headerScroller')
const sharedClass = 'px-2 md:px-4'

useSyncScroll(bodyScroller, headerScroller)

const totalColumns = computed(() => {
  return props.day.rooms.reduce((max, room) => Math.max(max, room.gridColumnStart + room.gridColumnSpan - 1), 0)
})

const gridTemplateColumns = computed(() => {
  return `${TIME_AXIS_WIDTH}px repeat(${totalColumns.value}, ${COLUMN_WIDTH}px)`
})

const headerGridStyle = computed(() => {
  return {
    gridTemplateColumns: gridTemplateColumns.value,
  }
})

const bodyGridStyle = computed(() => {
  return {
    gridTemplateColumns: gridTemplateColumns.value,
    gridTemplateRows: `repeat(${props.day.timePoints.length}, minmax(${SLOT_MIN_HEIGHT}px, auto))`,
  }
})

function getRoomHeaderStyle(room: ScheduleRoomView) {
  return { gridColumn: `${room.gridColumnStart + COLUMN_START_OFFSET}`, gridRow: '1' }
}

function getTimePointStyle(point: ScheduleTimePoint) {
  return { gridColumn: '1', gridRow: `${point.gridRowStart + ROW_START_OFFSET}` }
}

function getSessionStyle(session: ScheduleSessionView) {
  return {
    gridColumn: `${session.gridColumnStart + COLUMN_START_OFFSET} / span ${session.gridColumnSpan}`,
    gridRow: `${session.gridRowStart + ROW_START_OFFSET} / span ${session.gridRowSpan}`,
  }
}
</script>

<template>
  <div>
    <div
      ref="headerScroller"
      class="sticky top-(--ui-header-height) z-30 overflow-hidden"
      :class="sharedClass"
    >
      <div
        class="grid min-w-max gap-1"
        :style="headerGridStyle"
      >
        <template v-for="room in props.day.rooms" :key="room.id">
          <div
            v-if="room.label"
            class="rounded-xl border px-3 py-4 backdrop-blur border-default bg-neutral-950"
            :style="getRoomHeaderStyle(room)"
          >
            <p class="text-sm font-semibold text-highlighted md:text-base">
              {{ room.label }}
            </p>
          </div>
        </template>
      </div>
    </div>

    <div
      ref="bodyScroller"
      class="overflow-x-auto pt-4"
      :class="sharedClass"
    >
      <div class="grid min-w-max gap-1" :style="bodyGridStyle">
        <div
          v-for="point in props.day.timePoints"
          :key="`${point.label}-${point.gridRowStart}`"
          class="sticky left-0 z-20 px-1 -translate-y-4"
          :style="getTimePointStyle(point)"
        >
          <span class="tabular-nums inline-flex rounded-full border border-default bg-neutral-950/94 px-2.5 py-1 text-[11px] font-medium backdrop-blur">
            {{ point.label }}
          </span>
        </div>

        <ConferenceScheduleSessionCard
          v-for="session in props.day.sessions"
          :key="session.id"
          :session="session"
          class="z-10"
          :style="getSessionStyle(session)"
        />
      </div>
    </div>
  </div>
</template>
