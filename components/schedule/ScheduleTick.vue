<template>
    <div class="scheduleTick font-semibold">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ScheduleTick',
}
</script>

<style lang="postcss" scoped>
.scheduleTick {
    @apply text-pink-700;
}
</style>
