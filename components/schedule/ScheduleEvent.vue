<template>
    <schedule-block
        :class="classes"
        :style="styles"
        :text-align-center="textAlignCenter"
        :primary="!isCustomEvent"
        :secondary="isCustomEvent"
        :to="eventPagePath"
        active
    >
        <div v-if="$slots.prepend" class="scheduleEvent__prepend flex">
            <slot name="prepend"></slot>
        </div>
        <div class="scheduleEvent__context sticky">
            <div class="font-bold">{{ value.title }}</div>
            <br v-if="!isCustomEvent" />
            <div v-if="byLine" class="font-medium text-sm">by {{ byLine }}</div>
            <div v-if="duration" class="font-medium text-sm">
                {{ duration }}
            </div>
        </div>
    </schedule-block>
</template>

<script>
import ScheduleBlock from '@/components/schedule/ScheduleBlock'

export default {
    name: 'ScheduleEvent',
    components: {
        ScheduleBlock,
    },
    props: {
        value: {
            type: undefined,
            default: () => ({
                room: '',
                event_id: 0,
                event_type: 'Type',
                title: 'Title',
                speakers: [],
                is_remote: false,
                recording_policy: false,
                break_event: false,
                language: '',
                python_level: '',
                begin_time: '',
                end_time: '',
            }),
        },
        timelineBegin: { type: String, default: '08:30' },
        inList: { type: Boolean, default: false },
    },
    data() {
        const format = 'HH:mm'
        return {
            format,
            options: { outputFormat: format },
            startPoint: this.$parseDate(this.$padTimezone(this.timelineBegin)),
        }
    },
    computed: {
        isCustomEvent() {
            return this.value.event_type === 'custom'
        },
        textAlignCenter() {
            return ['custom', 'keynote'].includes(this.value.event_type)
        },
        byLine() {
            return this.value.speakers.join(', ')
        },
        duration() {
            const startTime = this.$datetimeToString(
                this.$padTimezone(this.value.begin_time),
                this.options,
            )
            const endTime = this.$datetimeToString(
                this.$padTimezone(this.value.end_time),
                this.options,
            )
            return `${startTime} ~ ${endTime}`
        },
        roomClass() {
            return `room-${this.value.room}`
        },
        classes() {
            return ['scheduleEvent', 'p-0', this.roomClass]
        },
        styles() {
            if (this.inList) {
                return
            }
            return {
                gridRowStart: this.getGridRow(this.value.begin_time),
                gridRowEnd: this.getGridRow(this.value.end_time),
            }
        },
        eventPagePath() {
            const { event_type: eventType, event_id: eventId } = this.value
            if (eventType === 'keynote') {
                // TODO: navigate to specific anchor (hash)
                return '/conference/keynotes/'
            } else if (['talk', 'tutorial', 'sponsored'].includes(eventType)) {
                return `/conference/${eventType}/${eventId}/`
            }
            return ''
        },
    },
    methods: {
        getGridRow(t) {
            const time = this.$padTimezone(t)
            const diff = this.$parseDate(time).diff(this.startPoint, 'minute')
            const unit = 5
            return parseInt(`${diff / unit}`, 10) + 1
        },
    },
}
</script>

<style lang="postcss" scoped>
.scheduleEvent__context {
    top: 132px;
}
</style>
