<template>
    <schedule-block
        class="scheduleRoom whitespace-nowrap font-semibold"
        :mini="inline"
        :padding-x="paddingX"
        :padding-y="paddingY"
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
        inline: { type: Boolean, default: false },
    },
    computed: {
        name() {
            return {
                '4-r0': 'PSF Hall',
                '4-r0-1': 'r0-1',
                '4-r0-2': 'r0-2',
                '5-r1': 'R1',
                '5-r1-1': 'R1-1',
                '5-r1-2': 'R1-2',
                '6-r2': 'R2',
                '6-r2-1': 'R2-1',
                '1-r3': 'R3',
                '2-all': 'All',
                '3-r012': 'R0, R1, R2',
            }[this.value]
        },
        paddingX() {
            return this.inline ? 'px-2' : undefined
        },
        paddingY() {
            return this.inline ? 'py-2' : undefined
        },
    },
}
</script>

<style lang="postcss" scoped>
.scheduleRoom {
    margin-bottom: 12px;
}
</style>
