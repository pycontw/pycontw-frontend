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
    @apply grid sm:grid-cols-2 md:grid-cols-3;
    @apply gap-x-4 gap-y-4 md:gap-y-6;
    @apply my-6 md:my-16;
}
</style>
