<template>
    <div class="scheduleList flex w-full flex-col">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ScheduleList',
}
</script>

<style lang="postcss">
.scheduleList .scheduleTick {
    @apply sticky;
    top: 48px;
    z-index: 100;
    background-color: rgba(18, 16, 35, 0.8);
    padding: 12px 0;
}
</style>
