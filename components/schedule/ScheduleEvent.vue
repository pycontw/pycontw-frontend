<template>
    <schedule-block
        :class="classes"
        :style="styles"
        :text-align-center="textAlignCenter"
        :primary="!isBreakEvent"
        :secondary="isBreakEvent"
        :to="eventPagePath"
        active
    >
        <div v-if="$slots.prepend" class="scheduleEvent__prepend flex">
            <slot name="prepend"></slot>
        </div>
        <div class="scheduleEvent__context">
            <div :lang="getTitleLang(value)" class="scheduleEvent__title">
                {{ getValueByLocale(value.title) }}
            </div>
            <br v-if="!isBreakEvent" />
            <div v-if="byLine" class="text-sm font-medium">by {{ byLine }}</div>
            <div class="scheduleEvent__icon">
                <img :src="icon.level[value.python_level]" />
                <img :src="icon.lang[value.language]" />
            </div>
            <div v-if="duration" class="text-sm font-medium">
                {{ duration }}
            </div>
        </div>
    </schedule-block>
</template>

<script>
import ScheduleBlock from '@/components/schedule/ScheduleBlock'
import { langIcons, levelIcons } from '~/utils/icons.utils.js'

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
                custom_event: false,
                custom_event_path: '',
            }),
        },
        timelineBegin: { type: String, default: '08:30' },
        inList: { type: Boolean, default: false },
    },
    data() {
        const timeFormat = 'HH:mm'
        const timezoneFormat = 'z'

        return {
            timeFormat,
            timezoneFormat,
            timeOptions: { outputFormat: timeFormat },
            timezoneOptions: { outputFormat: timezoneFormat },
            startPoint: this.$parseDate(this.timelineBegin),
            icon: {
                lang: langIcons,
                level: levelIcons,
            },
        }
    },
    computed: {
        isBreakEvent() {
            return this.value.break_event
        },
        textAlignCenter() {
            return ['custom', 'keynote'].includes(this.value.event_type)
        },
        byLine() {
            return this.value.speakers
                .map((speaker) => this.getValueByLocale(speaker))
                .join(', ')
        },
        duration() {
            const startTime = this.$datetimeToString(
                this.value.begin_time,
                this.timeOptions,
            )
            const endTime = this.$datetimeToString(
                this.value.end_time,
                this.timeOptions,
            )
            const timezone = this.$datetimeToString(
                this.value.begin_time,
                this.timezoneOptions,
            )
            return `${startTime} ~ ${endTime} (${timezone})`
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
            const {
                event_type: eventType,
                event_id: eventId,
                speakers,
                custom_event_path: customEventPath,
            } = this.value
            if (
                eventType === 'keynote' &&
                speakers.length > 0 &&
                speakers[0].en_us
            ) {
                const keynoteSpeakerId = speakers[0].en_us.replace(/\s+/g, '_')

                return `/conference/keynotes#${keynoteSpeakerId}`
            } else if (['talk', 'tutorial', 'sponsored'].includes(eventType)) {
                return `/conference/${eventType}/${eventId}/`
            } else if (eventType === 'custom') {
                return customEventPath
            }
            return ''
        },
    },
    methods: {
        getGridRow(time) {
            const diff = this.$parseDate(time).diff(this.startPoint, 'minute')
            const unit = 5
            return parseInt(`${diff / unit}`, 10) + 1
        },
        getValueByLocale(data) {
            // Get value from the data with i18n based on current locale setting.
            // Note that the value of `title` and each item of `speakers` for keynote
            // data is an object. Each object has two keys: 'en_us' & 'zh_hant'.
            if (typeof data === 'object') {
                const localeMap = { 'en-us': 'en_us', 'zh-hant': 'zh_hant' }
                return data[localeMap[this.$i18n.locale]]
            }
            return data
        },
        getTitleLang(data) {
            if (data.language.includes('EN')) {
                return 'en'
            }
            return ''
        },
    },
}
</script>

<style lang="postcss" scoped>
div.scheduleEvent {
    @apply px-2 py-3.5 !important;
}

.scheduleEvent__context {
    @apply sticky top-36;
}

.scheduleEvent__title {
    @apply font-bold;
    hyphens: auto;
    overflow-wrap: break-word;
}

.scheduleEvent__icon > img {
    @apply inline transition;
    filter: brightness(80%);
}
.scheduleEvent:hover >>> .scheduleEvent__icon > img {
    filter: brightness(0%);
}
</style>
