<template>
    <div class="container">
        <h3 class="sponsorCardCollection__title">{{ $t(levelName) }}</h3>
        <div class="sponsorCardCollection__cardContainer">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import i18n from './SponsorCardCollection.i18n'
export default {
    i18n,
    name: 'SponsorCardCollection',
    props: {
        levelName: { type: String, default: '' },
    },
}
</script>

<style lang="postcss" scoped>
.container {
    @apply lg:px-16;
}

.sponsorCardCollection__title {
    @apply mt-8 mb-7 font-semibold text-xl font-serif md:font-bold md:text-2xl md:mt-12 md:mb-8 md:mx-1;
    color: hsla(226, 27%, 85%, 1);
}

.sponsorCardCollection__cardContainer {
    @apply grid gap-4 grid-cols-2 md:grid-cols-5 md:gap-8 md:mb-6;
}

.sponsorCardCollection__cardContainer > .sponsorCard {
    @apply w-full opacity-90;
}

.sponsorCardCollection__cardContainer > .sponsorCard:hover {
    @apply cursor-pointer opacity-100;
    transform: scale(1.1);
    transition: all 0.2s;
}
</style>
