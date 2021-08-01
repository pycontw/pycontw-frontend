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
    margin: 0 6px 10px 6px;
    @media (min-width: 415px) {
        margin: 0 10px 44px 10px;
    }
}
</style>
