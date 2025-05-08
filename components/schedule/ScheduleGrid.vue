<template>
    <div class="hidden lg:block">
        <div class="scheduleRooms sticky grid">
            <span></span>
            <schedule-room
                v-for="(room, i) in rooms"
                :key="$makeKey(i, 'schedule_room')"
                :value="room"
            ></schedule-room>
        </div>
        <div class="scheduleTable grid w-full">
            <schedule-tick
                v-for="(tick, i) in ticks"
                :key="$makeKey(i, 'schedule_tick')"
                :style="tick.style"
            >
                {{ tick.label }}
            </schedule-tick>
            <schedule-event
                v-for="event in events"
                :key="
                    $makeKey(
                        event.event_id,
                        'schedule_table_event',
                        event.event_type,
                    )
                "
                :value="event"
                :timeline-begin="timeline.begin"
            ></schedule-event>
        </div>
    </div>
</template>

<script>
import ScheduleEvent from '@/components/schedule/ScheduleEvent'
import ScheduleRoom from '@/components/schedule/ScheduleRoom'
import ScheduleTick from '@/components/schedule/ScheduleTick'

export default {
    name: 'ScheduleGrid',
    components: {
        ScheduleEvent,
        ScheduleRoom,
        ScheduleTick,
    },
    props: {
        schedule: { type: Object, default: () => {} },
    },
    computed: {
        events() {
            return this.getEvents(this.schedule)
        },
        ticks() {
            return this.getTicks(this.schedule)
        },
        rooms() {
            return ['4-r0', '5-r1', '6-r2', '1-r3']
        },
        timeline() {
            return this.schedule.timeline
        },
    },
    methods: {
        getEvents(schedule) {
            return schedule.rooms.reduce((events, room) => {
                const slots = schedule.slots[room].map((slot) => ({
                    ...slot,
                    room,
                }))
                return [...events, ...slots]
            }, [])
        },
        getTicks(schedule) {
            const { timeline } = schedule
            const start = this.$parseDate(timeline.begin)
            const end = this.$parseDate(timeline.end)
            const diff = end.diff(start, 'minute')
            const unitInMinutes = 30
            const unitPerGridColumn = 6
            const tickCount = parseInt(`${diff / unitInMinutes}`, 10) + 1
            return Array.from({ length: tickCount }).map((val, i) => {
                const gridRowStart = unitPerGridColumn * i + 1
                const gridRowEnd = unitPerGridColumn * i + unitPerGridColumn
                const label = start
                    .add(i * unitInMinutes, 'minute')
                    .format('HH:mm')
                const style = { gridRowStart, gridRowEnd }
                return { label, style }
            })
        },
    },
}
</script>

<style lang="postcss" scoped>
.scheduleRooms,
.scheduleTable {
    grid-gap: 12px;
    grid-template-columns:
        [timeline] 1fr
        [room-4-r0-start] 2fr
        [room-4-r0-end room-5-r1-start] 2fr
        [room-5-r1-end room-6-r2-start] 2fr
        [room-6-r2-end room-1-r3-start] 2fr
        [room-1-r3-end];
}

.scheduleRooms {
    top: 64px;
    z-index: 3;
    background-color: rgba(18, 16, 35, 0.6);
}

.scheduleTable .scheduleTick {
    grid-column: timeline;
    justify-self: center;
}

.scheduleTable .scheduleEvent.room-3-r012 {
    grid-column: room-4-r0-start / room-6-r2-end;
}

.scheduleTable .scheduleEvent.room-4-r0 {
    grid-column: room-4-r0-start / room-4-r0-end;
}

.scheduleTable .scheduleEvent.room-5-r1 {
    grid-column: room-5-r1-start / room-5-r1-end;
}

.scheduleTable .scheduleEvent.room-6-r2 {
    grid-column: room-6-r2-start / room-6-r2-end;
}

.scheduleTable .scheduleEvent.room-1-r3 {
    grid-column: room-1-r3-start / room-1-r3-end;
}

.scheduleTable .scheduleEvent.room-2-all {
    grid-column: room-4-r0-start / room-1-r3-end;
}
</style>
