<template>
    <div
        class="scheduleRooms hidden sticky top-12 lg:grid"
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
    name: 'ScheduleRooms',
    props: {
        dateIndex: { type: Number, default: null },
    },
}
</script>

<style lang="postcss" scoped>
.scheduleRooms {
    z-index: 900;
    grid-gap: 12px;
    background-color: rgba(18, 16, 35, 0.6);
}
.scheduleRooms.day1 {
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
    width: 140%;
}
.scheduleRooms.day2 {
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
    width: 110.5%;
}
</style>
