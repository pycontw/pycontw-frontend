<template>
    <div class="scheduleRooms sticky hidden w-full justify-center">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ScheduleRooms',
}
</script>

<style scoped>
.scheduleRooms {
    top: 48px;
    z-index: 900;
    grid-template-columns: 1fr 2fr 2fr 2fr 2fr;
    grid-gap: 12px;
    background-color: rgba(18, 16, 35, 0.6);
}
</style>
