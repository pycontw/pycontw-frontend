<template>
    <div class="scheduleListGroup flex flex-col">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ScheduleListGroup',
}
</script>

<style lang="postcss">
.scheduleListGroup {
    margin-bottom: 12px;
}

.scheduleListGroup .scheduleEvent {
    margin-bottom: 12px;
}

.scheduleListGroup .scheduleEvent.room-2-all {
    order: 1;
}

.scheduleListGroup .scheduleEvent.room-3-r012 {
    order: 2;
}

.scheduleListGroup .scheduleEvent.room-4-r0 {
    order: 3;
}

.scheduleListGroup .scheduleEvent.room-5-r1 {
    order: 4;
}

.scheduleListGroup .scheduleEvent.room-6-r2 {
    order: 5;
}

.scheduleListGroup .scheduleEvent.room-1-r3 {
    order: 6;
}
</style>
