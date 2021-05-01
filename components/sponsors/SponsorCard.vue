<template>
    <div v-show="!!logoUrl" :class="classObject">
        <img :src="logoUrl" class="object-contain w-full" />
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
    @apply w-40 h-40 relative flex flex-col justify-center items-center bg-white rounded-2xl;
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
