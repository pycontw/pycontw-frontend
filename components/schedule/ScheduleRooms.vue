<template>
    <div
        class="scheduleRooms hidden sticky top-0"
        :class="{
            date1: date === 0,
            date2: date === 1,
        }"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ScheduleRooms',
    props: ['date'],
}
</script>

<style lang="postcss" scoped>
.scheduleRooms {
    z-index: 900;
    grid-gap: 12px;
    background-color: rgba(18, 16, 35, 0.6);
}
.scheduleRooms.date1 {
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
    width: 140%;
}
.scheduleRooms.date2 {
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
    width: 110.5%;
}
</style>
