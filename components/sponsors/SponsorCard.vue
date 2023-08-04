<template>
    <div v-show="!!logoUrl" :class="classObject">
        <div class="dummy"></div>
        <img :src="logoUrl" :alt="sponsorName" />
        <div v-if="!!tag" class="sponsorCard__tag">
            <img
                class="diamond"
                src="~@/static/sponsor-logo-diamond.svg"
                alt="sponsor-logo-diamond"
            />
            {{ tag }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'SponsorCard',
    props: {
        sponsorName: { type: String, default: '' },
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
    @apply relative flex flex-col items-center justify-center rounded-2xl;
    background-color: #f7f6fe;
}

/* A trick to set height to be equal to width. */
/* Checkout: https://stackoverflow.com/a/6615994/7969188 */
.sponsorCard > .dummy {
    margin-top: 100%;
}

.sponsorCard > img {
    @apply absolute object-contain;
    width: calc(100% - 10px);
}

.sponsorCard.-small {
    @apply h-16 w-16;
    @apply md:h-24 md:w-24;
}

.sponsorCard__tag {
    @apply absolute flex h-5 w-full items-center justify-center text-[12px] font-semibold;
    bottom: 13px;
    background-color: hsla(321, 32%, 62%, 1);
    color: #ffffff;

    /* simply use hidden does not overwrite flex */
    @media (max-width: 768px) {
        display: none !important;
    }
}

img.diamond {
    @apply mr-1;
}
</style>
