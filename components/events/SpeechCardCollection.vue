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
    @apply flex flex-wrap justify-start;
}
.speechCardCollection > .speechCard {
    margin: 0 22px 44px 0;
}
</style>
