<template>
    <schedule-block
        :active="active"
        padding-x="px-4 sm:px-8"
        class="m-0 whitespace-nowrap font-bold lg:m-2"
        tab-header
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
        active: { type: Boolean, default: false },
    },
}
</script>

<style scoped></style>
