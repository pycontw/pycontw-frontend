<template>
    <schedule-block
        v-if="name"
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
                '2-all': '',
                '3-r0-all': 'All Rooms',
                '4-r0': 'R0',
                '5-r1': 'R1',
                '6-r2': 'R2',
                '1-r3': 'R3',
                '7-r4': 'R4',
                '81-spt-os': 'Sprint / OST',
                '82-tutorial': 'Tutorial',
                '83-yi-ps': 'Young / Poster',
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
