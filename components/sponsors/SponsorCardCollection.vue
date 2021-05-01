<template>
    <div class="flex flex-col w-full">
        <h3 class="mt-12 mb-8 mx-1 text-xl">{{ $t(levelName) }}</h3>
        <div
            class="sponsorCardCollection__cardContainer justify-center md:justify-start"
        >
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

<style scoped>
.sponsorCardCollection__cardContainer {
    @apply flex flex-wrap;
}

.sponsorCardCollection__cardContainer > .sponsorCard {
    margin: 0 0 60px 0;
    @media (min-width: 415px) {
        margin: 0 30px 60px 0;
    }
}
</style>
