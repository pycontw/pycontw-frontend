<template>
    <div v-show="!!logoUrl" :class="classObject">
        <div class="dummy"></div>
        <img :src="logoUrl" alt="" />
        <div v-if="!!tag" class="sponsorCard__tag">
            {{ tag }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'SponsorCard',
    props: {
        logoUrl: { type: String, default: '' },
        tag: { type: String, default: '' },
        small: { type: Boolean, default: false },
    },
    computed: {
        classObject() {
            return {
                sponsorCard: true,
                '-small': this.small,
            }
        },
    },
}
</script>

<style lang="postcss" scoped>
.sponsorCard {
    @apply relative flex flex-col justify-center items-center bg-white rounded-2xl;
    width: 40%;
    @media (min-width: 767px) {
        @apply w-40;
    }
}

/* A trick to set height to be equal to width. */
/* Checkout: https://stackoverflow.com/a/6615994/7969188 */
.sponsorCard > .dummy {
    margin-top: 100%;
}

.sponsorCard > img {
    @apply absolute object-contain;
    width: calc(100% - 10px);
    border-radius: inherit;
}

.sponsorCard.-small {
    @apply w-20 h-20;
    min-width: 100px;
}

.sponsorCard__tag {
    @apply h-6 w-full absolute flex justify-center items-center text-xs bg-indigo-700;
    bottom: 20px;
}
</style>
