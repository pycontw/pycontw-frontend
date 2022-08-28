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
            <div class="scheduleEvent__title">
                {{ getValueByLocale(value.title) }}
            </div>
            <br v-if="!isCustomEvent" />
            <div v-if="byLine" class="font-medium text-sm">by {{ byLine }}</div>
            <div class="scheduleEvent__icon">
                <img :src="icon.level[value.python_level]" />
                <img :src="icon.lang[value.language]" />
            </div>
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
        const timeFormat = 'HH:mm'
        const timezoneFormat = 'z'

        return {
            timeFormat,
            timezoneFormat,
            timeOptions: { outputFormat: timeFormat },
            timezoneOptions: { outputFormat: timezoneFormat },
            startPoint: this.$parseDate(this.timelineBegin),
            icon: {
                lang: {
                    ENEN: require('~/static/img/icons/lang/ENEN.svg'),
                    ZHEN: require('~/static/img/icons/lang/ZHEN.svg'),
                    JPEN: require('~/static/img/icons/lang/JPEN.svg'), // added for PyCon APAC 2022
                    ZHZH: require('~/static/img/icons/lang/ZHZH.svg'), // not used in PyCon APAC 2022
                },
                level: {
                    NOVICE: require('~/static/img/icons/level/novice.svg'),
                    INTERMEDIATE: require('~/static/img/icons/level/intermediate.svg'),
                    EXPERIENCED: require('~/static/img/icons/level/experienced.svg'),
                },
            },
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
            } = this.value
            if (eventType === 'keynote') {
                const keynoteSpeakerId = speakers[0].en_us
                    .replaceAll(' ', '_')
                    .replaceAll('.', '')
                return `/conference/keynotes#${keynoteSpeakerId}`
            } else if (['talk', 'tutorial', 'sponsored'].includes(eventType)) {
                return `/conference/${eventType}/${eventId}/`
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
    },
}
</script>

<style lang="postcss" scoped>
.scheduleEvent__context {
    top: 75px;
}

.scheduleEvent__title {
    @apply font-bold;
}

.scheduleEvent__icon > img {
    @apply inline transition;
    filter: brightness(80%);
}
.scheduleEvent:hover >>> .scheduleEvent__icon > img {
    filter: brightness(0%);
}
</style>
