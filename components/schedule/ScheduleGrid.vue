<template>
    <div class="hidden lg:block">
        <div class="scheduleRooms sticky grid px-4" :class="`day${day}`">
            <schedule-room
                v-for="(room, i) in rooms"
                :key="$makeKey(i, 'schedule_room')"
                :value="room"
            ></schedule-room>
        </div>
        <div class="scheduleTable grid w-full px-4" :class="`day${day}`">
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

export default {
    name: 'ScheduleGrid',
    components: {
        ScheduleEvent,
        ScheduleRoom,
    },
    props: {
        day: { type: Number, default: 1 },
        schedule: { type: Object, default: () => {} },
    },
    computed: {
        events() {
            return this.getEvents(this.schedule)
        },
        rooms() {
            switch (this.day) {
                case 2:
                    return [
                        '4-r0',
                        '4-r0-1',
                        '5-r1',
                        '5-r1-1',
                        '6-r2',
                        '6-r2-1',
                        '1-r3',
                    ]
                case 1:
                default:
                    return [
                        '4-r0',
                        '4-r0-1',
                        '4-r0-2',
                        '5-r1',
                        '5-r1-1',
                        '5-r1-2',
                        '6-r2',
                        '6-r2-1',
                        '1-r3',
                    ]
            }
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
    },
}
</script>

<style lang="postcss" scoped>
.scheduleRooms {
    top: 64px;
    z-index: 3;
    background-color: rgba(18, 16, 35, 0.6);
    min-width: 100%;
    width: fit-content;
}

.day1.scheduleRooms,
.day1.scheduleTable {
    grid-gap: 12px;
    grid-template-columns:
        [room-4-r0] minmax(200px, 2fr)
        [room-4-r0-1] minmax(200px, 2fr)
        [room-4-r0-2] minmax(200px, 2fr)
        [room-5-r1] minmax(200px, 2fr)
        [room-5-r1-1] minmax(200px, 2fr)
        [room-5-r1-2] minmax(200px, 2fr)
        [room-6-r2] minmax(200px, 2fr)
        [room-6-r2-1] minmax(200px, 2fr)
        [room-1-r3] minmax(200px, 2fr)
        [];
}

.day1.scheduleTable .scheduleEvent.room-3-r012 {
    grid-column: room-4-r0 / span 8;
}

.day1.scheduleTable .scheduleEvent.room-4-r0 {
    grid-column: room-4-r0 / span 1;
}

.day1.scheduleTable .scheduleEvent.room-4-r0-1 {
    grid-column: room-4-r0-1 / span 1;
}

.day1.scheduleTable .scheduleEvent.room-4-r0-2 {
    grid-column: room-4-r0-2 / span 1;
}

.day1.scheduleTable .scheduleEvent.room-5-r1 {
    grid-column: room-5-r1 / span 1;
}

.day1.scheduleTable .scheduleEvent.room-5-r1-1 {
    grid-column: room-5-r1-1 / span 1;
}

.day1.scheduleTable .scheduleEvent.room-5-r1-2 {
    grid-column: room-5-r1-2 / span 1;
}

.day1.scheduleTable .scheduleEvent.room-6-r2 {
    grid-column: room-6-r2 / span 1;
}

.day1.scheduleTable .scheduleEvent.room-6-r2-1 {
    grid-column: room-6-r2-1 / span 1;
}

.day1.scheduleTable .scheduleEvent.room-1-r3 {
    grid-column: room-1-r3 / span 1;
}

.day1.scheduleTable .scheduleEvent.room-2-all {
    grid-column: room-4-r0 / -1;
}

.day2.scheduleRooms,
.day2.scheduleTable {
    grid-gap: 12px;
    grid-template-columns:
        [room-4-r0] minmax(200px, 2fr)
        [room-4-r0-1] minmax(200px, 2fr)
        [room-5-r1] minmax(200px, 2fr)
        [room-5-r1-1] minmax(200px, 2fr)
        [room-6-r2] minmax(200px, 2fr)
        [room-6-r2-1] minmax(200px, 2fr)
        [room-1-r3] minmax(200px, 2fr)
        [];
}

.day2.scheduleTable .scheduleEvent.room-3-r012 {
    grid-column: room-4-r0 / span 6;
}

.day2.scheduleTable .scheduleEvent.room-4-r0 {
    grid-column: room-4-r0 / span 1;
}

.day2.scheduleTable .scheduleEvent.room-4-r0-1 {
    grid-column: room-4-r0-1 / span 1;
}

.day2.scheduleTable .scheduleEvent.room-5-r1 {
    grid-column: room-5-r1 / span 1;
}

.day2.scheduleTable .scheduleEvent.room-5-r1-1 {
    grid-column: room-5-r1-1 / span 1;
}

.day2.scheduleTable .scheduleEvent.room-6-r2 {
    grid-column: room-6-r2 / span 1;
}

.day2.scheduleTable .scheduleEvent.room-6-r2-1 {
    grid-column: room-6-r2-1 / span 1;
}

.day2.scheduleTable .scheduleEvent.room-1-r3 {
    grid-column: room-1-r3 / span 1;
}

.day2.scheduleTable .scheduleEvent.room-2-all {
    grid-column: room-4-r0 / -1;
}
</style>
