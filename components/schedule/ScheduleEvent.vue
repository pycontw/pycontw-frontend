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
            <div class="scheduleEvent__icon">
                <svg
                    v-if="value.language == 'ENEN'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="26"
                    viewBox="0 0 56 26"
                >
                    <g fill-rule="nonzero">
                        <path
                            d="M33.41 18.316c0 .79.64 1.431 1.43 1.431h6.683v1.022a1.909 1.909 0 1 0 .954 0v-1.022h6.682c.79 0 1.432-.64 1.432-1.43V6.386H33.409v11.93zm9.545 4.294a.954.954 0 1 1-1.91 0 .954.954 0 0 1 1.91 0zm8.59-19.085a.954.954 0 1 1 0 1.909h-19.09a.954.954 0 1 1 0-1.909h19.09zm-12.687 7.688v1.478h1.588c.235 0 .428.19.428.422a.427.427 0 0 1-.428.42h-1.588v1.52h2.226a.43.43 0 1 1 0 .86h-2.713a.483.483 0 0 1-.487-.48v-4.6c0-.264.218-.479.487-.479h2.621a.43.43 0 1 1 0 .86h-2.134zm7.208-.925a.48.48 0 0 1 .478.471v4.748a.48.48 0 0 1-.873.265l-2.478-3.518v3.253a.48.48 0 0 1-.958 0V10.76a.48.48 0 0 1 .479-.47.45.45 0 0 1 .386.198l2.487 3.542v-3.27a.48.48 0 0 1 .479-.47zM13.537 3.325c5.494 0 9.963 4.486 9.963 10s-4.47 10-9.963 10a9.857 9.857 0 0 1-5.696-1.798L3.89 23.3a.275.275 0 0 1-.304-.052.28.28 0 0 1-.069-.302l1.614-4.256a9.982 9.982 0 0 1-1.557-5.366c0-5.514 4.469-10 9.962-10zm-3.763 8.877h2.134a.435.435 0 0 0 .437-.439.435.435 0 0 0-.437-.438h-2.62a.488.488 0 0 0-.488.489v4.696c0 .27.218.49.487.49H12a.435.435 0 0 0 .437-.44.435.435 0 0 0-.437-.438H9.774v-1.55h1.588a.431.431 0 0 0 0-.86H9.774v-1.51zm7.856-.877c-.26 0-.478.22-.478.48v3.34l-2.487-3.618a.448.448 0 0 0-.386-.202c-.26 0-.479.22-.479.48v4.849c0 .261.218.48.479.48.26 0 .479-.219.479-.48v-3.322l2.478 3.591c.084.127.235.211.394.211.26 0 .48-.219.48-.48v-4.848a.485.485 0 0 0-.48-.481z"
                        />
                    </g>
                </svg>
                <svg
                    v-if="value.language == 'ZHEN'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="26"
                    viewBox="0 0 56 26"
                >
                    <g fill-rule="nonzero">
                        <path
                            d="M33.41 18.966c0 .79.64 1.431 1.43 1.431h6.683v1.022a1.909 1.909 0 1 0 .954 0v-1.022h6.682c.79 0 1.432-.64 1.432-1.43V7.036H33.409v11.93zm9.545 4.294a.954.954 0 1 1-1.91 0 .954.954 0 0 1 1.91 0zm8.59-19.085a.954.954 0 1 1 0 1.909h-19.09a.954.954 0 1 1 0-1.909h19.09zm-12.687 7.688v1.478h1.588c.235 0 .428.19.428.422a.427.427 0 0 1-.428.42h-1.588v1.52h2.226a.43.43 0 1 1 0 .86h-2.713a.483.483 0 0 1-.487-.48v-4.6c0-.264.218-.479.487-.479h2.621a.43.43 0 1 1 0 .86h-2.134zm7.208-.925a.48.48 0 0 1 .478.471v4.748a.48.48 0 0 1-.873.265l-2.478-3.518v3.253a.48.48 0 0 1-.958 0V11.41a.48.48 0 0 1 .479-.47.45.45 0 0 1 .386.198l2.487 3.542v-3.27a.48.48 0 0 1 .479-.47zM13.537 3.975c5.494 0 9.963 4.486 9.963 10s-4.47 10-9.963 10a9.857 9.857 0 0 1-5.696-1.798L3.89 23.95a.275.275 0 0 1-.304-.052.28.28 0 0 1-.069-.302l1.614-4.256a9.982 9.982 0 0 1-1.557-5.366c0-5.514 4.469-10 9.962-10zm-.746 13.694a.435.435 0 0 0 .436-.438.435.435 0 0 0-.436-.439h-2.562l2.814-4.123a.431.431 0 0 0-.353-.675H9.515a.431.431 0 0 0 0 .86h2.31L9.002 16.97a.461.461 0 0 0-.084.262c0 .244.193.438.437.438h3.436zm5.4-5.253a.488.488 0 0 0-.486-.489.488.488 0 0 0-.488.49v1.905h-2.402v-1.906a.488.488 0 0 0-.487-.489.488.488 0 0 0-.487.49v4.83c0 .27.218.49.487.49s.487-.22.487-.49v-2.031h2.402v2.032a.488.488 0 0 0 .974 0v-4.832z"
                        />
                    </g>
                </svg>
                <svg
                    v-if="value.language == 'ZHZH'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="26"
                    viewBox="0 0 56 26"
                >
                    <g fill-rule="nonzero">
                        <path
                            d="M33.41 18.966c0 .79.64 1.431 1.43 1.431h6.683v1.022a1.909 1.909 0 1 0 .954 0v-1.022h6.682c.79 0 1.432-.64 1.432-1.43V7.036H33.409v11.93zm9.545 4.294a.954.954 0 1 1-1.91 0 .954.954 0 0 1 1.91 0zm8.59-19.085a.954.954 0 1 1 0 1.909h-19.09a.954.954 0 1 1 0-1.909h19.09zM41.378 16.562h-3.435a.43.43 0 0 1-.353-.685l2.822-4.03h-2.31a.427.427 0 0 1-.428-.421c0-.232.193-.422.428-.422h3.176c.235 0 .428.19.428.422a.4.4 0 0 1-.076.24l-2.814 4.037h2.562a.43.43 0 1 1 0 .86zm5.402-5.145v4.732a.483.483 0 0 1-.488.48.483.483 0 0 1-.487-.48v-1.99h-2.402v1.99a.483.483 0 0 1-.487.48.483.483 0 0 1-.488-.48v-4.732c0-.264.219-.479.488-.479.268 0 .487.215.487.48v1.866h2.402v-1.867c0-.264.219-.479.487-.479.27 0 .488.215.488.48zM13.537 3.975c5.494 0 9.963 4.486 9.963 10s-4.47 10-9.963 10a9.857 9.857 0 0 1-5.696-1.798L3.89 23.95a.275.275 0 0 1-.304-.052.28.28 0 0 1-.069-.302l1.614-4.256a9.982 9.982 0 0 1-1.557-5.366c0-5.514 4.469-10 9.962-10zm-.746 13.694a.435.435 0 0 0 .436-.438.435.435 0 0 0-.436-.439h-2.562l2.814-4.123a.431.431 0 0 0-.353-.675H9.515a.431.431 0 0 0 0 .86h2.31L9.002 16.97a.461.461 0 0 0-.084.262c0 .244.193.438.437.438h3.436zm5.4-5.253a.488.488 0 0 0-.486-.489.488.488 0 0 0-.488.49v1.905h-2.402v-1.906a.488.488 0 0 0-.487-.489.488.488 0 0 0-.487.49v4.83c0 .27.218.49.487.49s.487-.22.487-.49v-2.031h2.402v2.032a.488.488 0 0 0 .974 0v-4.832z"
                        />
                    </g>
                </svg>
                <svg
                    v-if="value.python_level == 'NOVICE'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill-rule="nonzero"
                        d="M17.117 10.58l2.862 4.73H3.917l2.862-4.73h10.338zm1.088 3.73l-1.651-2.73H7.343L5.69 14.31h12.514zM10.503 3.267l.013-.02c.659-.997 2.205-.997 2.877.02l3.773 6.338H6.73l3.773-6.338zm2.043.531c-.262-.396-.923-.399-1.19-.008L8.488 8.606h6.918L12.547 3.8zm8.264 12.906l1.764 2.37a1 1 0 0 1-.802 1.597H2.18a1 1 0 0 1-.81-1.585l1.718-2.382H20.81z"
                    />
                </svg>
                <svg
                    v-if="value.python_level == 'INTERMEDIATE'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill-rule="nonzero"
                        d="M17.117 10.58l2.862 4.73H3.917l2.862-4.73h10.338zm-6.184-7.057c.461-.697 1.569-.697 2.03 0l3.324 5.583H7.61l3.323-5.583zm1.196.552c-.064-.097-.281-.1-.355-.01L9.369 8.107h5.159l-2.399-4.031zm8.68 12.63l1.765 2.37a1 1 0 0 1-.802 1.597H2.18a1 1 0 0 1-.81-1.585l1.718-2.382H20.81z"
                    />
                </svg>
                <svg
                    v-if="value.python_level == 'EXPERIENCED'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill-rule="nonzero"
                        d="M17.117 10.58l2.862 4.73H3.917l2.862-4.73h10.338zm-6.184-7.057c.461-.697 1.569-.697 2.03 0l3.324 5.583H7.61l3.323-5.583zm9.877 13.182l1.764 2.37a1 1 0 0 1-.802 1.597H2.18a1 1 0 0 1-.81-1.585l1.718-2.382H20.81z"
                    />
                </svg>
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

.scheduleEvent__context:hover > .scheduleEvent__icon > svg {
    fill: #000;
}
.scheduleEvent__icon > svg {
    display: inline;
    fill: #fff;
}
</style>
