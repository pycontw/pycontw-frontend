<template>
    <div class="scheduleList flex w-full flex-col px-4 lg:hidden">
        <div
            v-for="(group, i) in groups"
            :key="$makeKey(i, 'schedule_list_group')"
            class="scheduleListGroup flex flex-col"
        >
            <schedule-tick> {{ group.tick }}</schedule-tick>
            <schedule-event
                v-for="event in group.events"
                :key="
                    $makeKey(
                        event.event_id,
                        'schedule_list_event',
                        event.event_type,
                    )
                "
                :value="event"
                in-list
            >
                <template #prepend>
                    <schedule-room :value="event.room" inline></schedule-room>
                </template>
            </schedule-event>
        </div>
    </div>
</template>

<script>
import ScheduleEvent from '@/components/schedule/ScheduleEvent'
import ScheduleRoom from '@/components/schedule/ScheduleRoom'
import ScheduleTick from '@/components/schedule/ScheduleTick'

export default {
    name: 'ScheduleList',
    components: {
        ScheduleEvent,
        ScheduleRoom,
        ScheduleTick,
    },
    props: {
        schedule: { type: Object, default: () => {} },
    },
    computed: {
        groups() {
            return this.getGroups(this.schedule)
        },
    },
    methods: {
        getGroups(schedule) {
            const slotsByBeginTime = schedule.rooms.reduce((result, room) => {
                schedule.slots[room].forEach((slot) => {
                    const item = { ...slot, room }
                    if (result[slot.begin_time]) {
                        result[slot.begin_time].push(item)
                    } else {
                        result[slot.begin_time] = [item]
                    }
                })
                return result
            }, {})
            return Object.keys(slotsByBeginTime)
                .sort((timeA, timeB) => {
                    if (timeA > timeB) {
                        return 1
                    } else if (timeA < timeB) {
                        return -1
                    } else {
                        return 0
                    }
                })
                .map((beginTime) => ({
                    tick: this.$datetimeToString(beginTime, {
                        outputFormat: 'HH:mm',
                    }),
                    events: slotsByBeginTime[beginTime],
                }))
        },
    },
}
</script>

<style lang="postcss">
.scheduleList .scheduleTick {
    @apply sticky;
    top: 48px;
    z-index: 100;
    background-color: rgba(18, 16, 35, 0.8);
    padding: 12px 0;
}

.scheduleList .scheduleEvent,
.scheduleList .scheduleListGroup {
    margin-bottom: 12px;
}

.scheduleList .scheduleEvent.room-2-all {
    order: 1;
}

.scheduleList .scheduleEvent.room-3-r012 {
    order: 2;
}

.scheduleList .scheduleEvent.room-4-r0 {
    order: 3;
}

.scheduleList .scheduleEvent.room-5-r1 {
    order: 4;
}

.scheduleList .scheduleEvent.room-6-r2 {
    order: 5;
}

.scheduleList .scheduleEvent.room-1-r3 {
    order: 6;
}
</style>
