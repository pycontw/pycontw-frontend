<template>
    <div
        class="scheduleTable hidden w-full"
        :class="{
            day1: dateIndex === 0,
            day2: dateIndex === 1,
        }"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ScheduleTable',
    props: {
        dateIndex: { type: Number, default: null },
    },
}
</script>

<style lang="postcss" scoped>
.scheduleTable {
    grid-gap: 12px;
}
.scheduleTable.day1 {
    grid-template-columns:
        [timeline] 1fr
        [room-4-r0-start] 2fr
        [room-4-r0-end room-4-r0-1-start] 2fr
        [room-4-r0-1-end room-4-r0-2-start] 2fr
        [room-4-r0-2-end room-5-r1-start] 2fr
        [room-5-r1-end room-5-r1-1-start] 2fr
        [room-5-r1-1-end room-5-r1-2-start] 2fr
        [room-5-r1-2-end room-6-r2-start] 2fr
        [room-6-r2-end room-6-r2-1-start] 2fr
        [room-6-r2-1-end room-1-r3-start] 2fr
        [room-1-r3-end];
    width: 140%;
}
.scheduleTable.day2 {
    grid-template-columns:
        [timeline] 1fr
        [room-4-r0-start] 2fr
        [room-4-r0-end room-4-r0-1-start] 2fr
        [room-4-r0-1-end room-5-r1-start] 2fr
        [room-5-r1-end room-5-r1-1-start] 2fr
        [room-5-r1-1-end room-6-r2-start] 2fr
        [room-6-r2-end room-6-r2-1-start] 2fr
        [room-6-r2-1-end room-1-r3-start] 2fr
        [room-1-r3-end];
    width: 110.5%;
}

.scheduleTable .scheduleTick {
    grid-column: timeline;
    justify-self: center;
}

.scheduleTable .scheduleEvent.room-3-r012 {
    grid-column: room-4-r0-start / room-6-r2-1-end;
}

.scheduleTable .scheduleEvent.room-4-r0 {
    grid-column: room-4-r0-start / room-4-r0-end;
}

.scheduleTable .scheduleEvent.room-4-r0-1 {
    grid-column: room-4-r0-1-start / room-4-r0-1-end;
}

.scheduleTable .scheduleEvent.room-4-r0-2 {
    grid-column: room-4-r0-2-start / room-4-r0-2-end;
}

.scheduleTable .scheduleEvent.room-5-r1 {
    grid-column: room-5-r1-start / room-5-r1-end;
}

.scheduleTable .scheduleEvent.room-5-r1-1 {
    grid-column: room-5-r1-1-start / room-5-r1-1-end;
}

.scheduleTable .scheduleEvent.room-5-r1-2 {
    grid-column: room-5-r1-2-start / room-5-r1-2-end;
}

.scheduleTable .scheduleEvent.room-6-r2 {
    grid-column: room-6-r2-start / room-6-r2-end;
}

.scheduleTable .scheduleEvent.room-6-r2-1 {
    grid-column: room-6-r2-1-start / room-6-r2-1-end;
}

.scheduleTable .scheduleEvent.room-6-r2-2 {
    grid-column: room-6-r2-2-start / room-6-r2-2-end;
}

.scheduleTable .scheduleEvent.room-1-r3 {
    grid-column: room-1-r3-start / room-1-r3-end;
}

.scheduleTable .scheduleEvent.room-2-all {
    grid-column: room-4-r0-start / room-1-r3-end;
}
</style>
