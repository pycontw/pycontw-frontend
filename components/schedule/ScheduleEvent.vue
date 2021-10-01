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
            <div class="font-bold">{{ getValueByLocale(value.title) }}</div>
            <br v-if="!isCustomEvent" />
            <div v-if="byLine" class="font-medium text-sm">by {{ byLine }}</div>
            <div>
                <img
                    v-if="metaLang"
                    :src="metaLang"
                    class="icon"
                    alt="icon-location"
                />
                <img
                    v-if="metaLevel"
                    :src="metaLevel"
                    class="icon"
                    alt="icon-location"
                />
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
        const format = 'HH:mm'
        return {
            format,
            options: { outputFormat: format },
            startPoint: this.$parseDate(this.$padTimezone(this.timelineBegin)),
            icons: {
                enen: require('~/static/img/schedule/icon-language-enen.svg'),
                zhen: require('~/static/img/schedule/icon-language-zhen.svg'),
                zhzh: require('~/static/img/schedule/icon-language-zhzh.svg'),
                level1: require('~/static/img/schedule/icon-level-1.svg'),
                level2: require('~/static/img/schedule/icon-level-2.svg'),
                level3: require('~/static/img/schedule/icon-level-3.svg'),
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
        metaLang() {
            switch (this.value.language) {
                case 'ENEN':
                    return this.icons.enen
                case 'ZHEN':
                    return this.icons.zhen
                case 'ZHZH':
                    return this.icons.zhzh
                default:
                    return ''
            }
        },
        metaLevel() {
            switch (this.value.python_level) {
                case 'NOVICE':
                    return this.icons.level1
                case 'INTERMEDIATE':
                    return this.icons.level2
                case 'EXPERIENCED':
                    return this.icons.level3
                default:
                    return ''
            }
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
            const {
                event_type: eventType,
                event_id: eventId,
                speakers,
            } = this.value
            if (eventType === 'keynote') {
                const keynoteSpeakerId = speakers[0].en_us.split(' ').join('_')
                return `/conference/keynotes#${keynoteSpeakerId}`
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
    top: 132px;
}
.icon {
    display: inline;
}
</style>
