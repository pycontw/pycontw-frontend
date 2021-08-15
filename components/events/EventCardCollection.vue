<template>
    <div class="eventCardCollection">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'EventCardCollection',
}
</script>

<style lang="postcss" scoped>
.eventCardCollection {
    @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center;
    margin: 0 12px;
    column-gap: 24px;
    row-gap: 32px;
    @media (min-width: 415px) {
        column-gap: 46px;
        row-gap: 44px;
    }
}
</style>
