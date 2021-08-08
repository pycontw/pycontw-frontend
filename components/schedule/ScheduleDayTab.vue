<template>
    <schedule-block
        :active="active"
        padding-x="px-4 sm:px-8"
        class="m-0 font-bold whitespace-nowrap lg:m-2"
        primary
        @click="onClick"
    >
        <slot></slot>
    </schedule-block>
</template>

<script>
import ScheduleBlock from '@/components/schedule/ScheduleBlock'

export default {
    name: 'ScheduleDayTab',
    components: {
        ScheduleBlock,
    },
    props: {
        date: { type: String, default: '' },
        index: { type: Number, default: -1 },
    },
    data() {
        return {
            day: this.$parseDate(this.date, 'YYYY-MM-DD').get('date'),
            active: false,
        }
    },
    methods: {
        onClick() {
            this.$parent.selectTab(this.index)
        },
    },
}
</script>

<style scoped></style>
