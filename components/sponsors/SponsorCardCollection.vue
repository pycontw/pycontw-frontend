<template>
    <div class="lg:px-16">
        <h3 class="sponsorCardCollection__title">
            {{ $t(levelName) }}
        </h3>
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
.sponsorCardCollection__title {
    @apply mb-7 mt-8 font-serif text-xl font-semibold md:mx-1 md:mb-8 md:mt-12 md:text-2xl md:font-bold;
    color: hsla(226, 27%, 85%, 1);
}

.sponsorCardCollection__cardContainer {
    @apply grid grid-cols-2 gap-4 md:mb-6 md:grid-cols-5 md:gap-8;
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
