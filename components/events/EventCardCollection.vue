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
    @apply mx-0 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:mx-4 lg:grid-cols-3;
    column-gap: 24px;
    row-gap: 32px;
    @media (min-width: 415px) {
        column-gap: 36px;
        row-gap: 42px;
    }
}
</style>
