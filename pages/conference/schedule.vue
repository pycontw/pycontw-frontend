<template>
    <i18n-page-wrapper>
        <core-h1 title="Schedules"></core-h1>
        <schedule>
            <schedule-day-tabs v-model="selectedDayIndex">
                <schedule-day-tab
                    v-for="(day, i) in days"
                    :key="$makeKey(i, 'schedule_day_tab')"
                    :date="day.date"
                    :index="i"
                >
                    {{ day.label }}
                </schedule-day-tab>
            </schedule-day-tabs>
            <schedule-rooms>
                <schedule-block></schedule-block>
                <schedule-room
                    v-for="(room, i) in rooms"
                    :key="$makeKey(i, 'schedule_room')"
                    :value="room"
                ></schedule-room>
            </schedule-rooms>
            <schedule-table>
                <schedule-tick
                    v-for="(tick, i) in table.ticks"
                    :key="$makeKey(i, 'schedule_tick')"
                    :style="tick.style"
                >
                    {{ tick.label }}
                </schedule-tick>
                <schedule-event
                    v-for="event in table.events"
                    :key="$makeKey(event.event_id, 'schedule_table_event')"
                    :value="event"
                    :timeline-begin="table.timeline.begin"
                ></schedule-event>
            </schedule-table>
            <schedule-list>
                <schedule-list-group
                    v-for="(group, i) in list.groups"
                    :key="$makeKey(i, 'schedule_list_group')"
                >
                    <schedule-tick>{{ group.tick }}</schedule-tick>
                    <schedule-event
                        v-for="event in group.events"
                        :key="$makeKey(event.event_id, 'schedule_list_event')"
                        :value="event"
                        in-list
                    >
                        <template #prepend>
                            <schedule-room
                                :value="event.room"
                                inline
                            ></schedule-room>
                        </template>
                    </schedule-event>
                </schedule-list-group>
            </schedule-list>
        </schedule>
    </i18n-page-wrapper>
</template>

<script>
import { mapState } from 'vuex'

import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import Schedule from '@/components/schedule/Schedule'
import ScheduleBlock from '@/components/schedule/ScheduleBlock'
import ScheduleDayTab from '@/components/schedule/ScheduleDayTab'
import ScheduleDayTabs from '@/components/schedule/ScheduleDayTabs'
import ScheduleEvent from '@/components/schedule/ScheduleEvent'
import ScheduleList from '@/components/schedule/ScheduleList'
import ScheduleListGroup from '@/components/schedule/ScheduleListGroup'
import ScheduleRoom from '@/components/schedule/ScheduleRoom'
import ScheduleRooms from '@/components/schedule/ScheduleRooms'
import ScheduleTable from '@/components/schedule/ScheduleTable'
import ScheduleTick from '@/components/schedule/ScheduleTick'

export default {
    name: 'PageConferenceSchedule',
    components: {
        CoreH1,
        I18nPageWrapper,
        Schedule,
        ScheduleBlock,
        ScheduleDayTab,
        ScheduleDayTabs,
        ScheduleList,
        ScheduleListGroup,
        ScheduleRoom,
        ScheduleRooms,
        ScheduleTable,
        ScheduleEvent,
        ScheduleTick,
    },
    data() {
        return {
            selectedDayIndex: 0,
            rooms: [],
            days: [],
            tables: [],
            lists: [],
            defaultTable: {
                events: [],
                ticks: [],
                timeline: {},
            },
            defaultList: {
                groups: [],
            },
        }
    },
    computed: {
        ...mapState(['schedulesData']),
        table() {
            return this.tables[this.selectedDayIndex] || this.defaultTable
        },
        list() {
            return this.lists[this.selectedDayIndex] || this.defaultList
        },
    },
    async created() {
        await this.$store.dispatch('$getSchedulesData')
        this.processData()
    },
    methods: {
        processData() {
            this.makeDays()
            this.makeRooms()
            this.makeTables()
            this.makeLists()
        },
        makeDays() {
            this.days = this.schedulesData.map(({ date, name }) => {
                const formattedDate = this.$datetimeToString(date, {
                    inputFormat: 'YYYY-MM-DD',
                    outputFormat: 'MM/D',
                })
                return {
                    label: `${name} (${formattedDate})`,
                    date,
                }
            })
        },
        makeRooms() {
            this.rooms = ['4-r0', '5-r1', '6-r2', '1-r3']
        },
        makeTables() {
            this.tables = this.schedulesData.map((schedule) => ({
                events: this.getEvents(schedule),
                ticks: this.getTicks(schedule),
                timeline: schedule.timeline,
            }))
        },
        makeLists() {
            this.lists = this.schedulesData.map((schedule) => ({
                groups: this.getGroups(schedule),
            }))
        },
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
            const start = this.$parseDate(this.$padTimezone(timeline.begin))
            const end = this.$parseDate(this.$padTimezone(timeline.end))
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
                    tick: this.$datetimeToString(this.$padTimezone(beginTime), {
                        outputFormat: 'HH:mm',
                    }),
                    events: slotsByBeginTime[beginTime],
                }))
        },
    },
}
</script>

<style lang="postcss" scoped></style>
