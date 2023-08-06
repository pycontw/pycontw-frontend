<template>
    <div
        class="scheduleRooms sticky top-12 hidden lg:grid"
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
    top: 64px;
    z-index: 900;
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr;
    grid-gap: 12px;
    background-color: rgba(18, 16, 35, 0.6);
}
</style>
