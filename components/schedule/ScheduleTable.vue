<template>
    <div class="scheduleTable hidden w-full">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ScheduleTable',
}
</script>

<style lang="postcss">
.scheduleTable {
    grid-template-columns:
        [timeline] 1fr
        [room-4-r0-start] 2fr
        [room-4-r0-end room-5-r1-start] 2fr
        [room-5-r1-end room-6-r2-start] 2fr
        [room-6-r2-end room-1-r3-start] 2fr
        [room-1-r3-end];
    grid-gap: 12px;
}

.scheduleTable .scheduleTick {
    grid-column: timeline;
    justify-self: center;
}

.scheduleTable .scheduleEvent.room-3-r012 {
    grid-column: room-4-r0-start / room-6-r2-end;
}

.scheduleTable .scheduleEvent.room-4-r0 {
    grid-column: room-4-r0-start / room-4-r0-end;
}

.scheduleTable .scheduleEvent.room-5-r1 {
    grid-column: room-5-r1-start / room-5-r1-end;
}

.scheduleTable .scheduleEvent.room-6-r2 {
    grid-column: room-6-r2-start / room-6-r2-end;
}

.scheduleTable .scheduleEvent.room-1-r3 {
    grid-column: room-1-r3-start / room-1-r3-end;
}

.scheduleTable .scheduleEvent.room-2-all {
    grid-column: room-4-r0-start / room-1-r3-end;
}
</style>
