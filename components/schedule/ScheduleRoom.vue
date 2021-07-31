<template>
    <schedule-block
        class="scheduleRoom font-semibold whitespace-nowrap"
        tertiary
    >
        {{ name }}
    </schedule-block>
</template>

<script>
import ScheduleBlock from '@/components/schedule/ScheduleBlock'

export default {
    name: 'ScheduleRoom',
    components: {
        ScheduleBlock,
    },
    props: {
        value: { type: String, default: 'Room' },
    },
    computed: {
        name() {
            return {
                '4-r0': 'R1',
                '5-r1': 'R2',
                '6-r2': 'R3',
                '1-r3': 'R4',
                '2-all': 'All',
                '3-r012': 'R1, R2, R3',
            }[this.value]
        },
    },
}
</script>

<style lang="postcss" scoped>
.scheduleRoom {
    margin-bottom: 12px;
}
</style>
