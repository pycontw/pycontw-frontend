<template>
    <div class="flex flex-col w-full">
        <h3 class="sponsorCardCollection__title">{{ $t(levelName) }}</h3>
        <div class="sponsorCardCollection__cardContainer justify-start">
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
    @apply mt-12 mb-8 mx-1 text-xl;
    font-family: 'Noto Serif TC', serif;
}

.sponsorCardCollection__cardContainer {
    @apply flex flex-wrap;
}

.sponsorCardCollection__cardContainer > .sponsorCard {
    margin: 5px 10px 55px 10px;
    padding: 5px;
}

.sponsorCardCollection__cardContainer > .sponsorCard:hover {
    @apply cursor-pointer box-content;
    margin: 0 5px 50px 5px;
}
</style>
