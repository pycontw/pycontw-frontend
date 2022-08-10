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
    @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mx-0 md:mx-4;
    column-gap: 24px;
    row-gap: 32px;
    @media (min-width: 415px) {
        column-gap: 36px;
        row-gap: 42px;
    }
}
</style>
