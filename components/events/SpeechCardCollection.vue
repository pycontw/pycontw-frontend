<template>
    <div class="speechCardCollection">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SpeechCardCollection',
}
</script>

<style lang="postcss" scoped>
.speechCardCollection {
    @apply grid grid-cols-2 sm:grid-cols-3 justify-items-center;
    margin: 0 12px;
    column-gap: 24px;
    row-gap: 32px;
    @media (min-width: 415px) {
        column-gap: 20px;
        row-gap: 44px;
    }
}
</style>
