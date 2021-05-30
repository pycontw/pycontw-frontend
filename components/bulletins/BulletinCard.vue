<template>
    <div v-show="!!title" :class="classObject">
        <h2 class="text-gray-700">{{ $t(title) }}</h2>
        <p class="text-gray-400">{{ $t(description) }}</p>
        <div class="text-center">
            <text-button :to="linkUrl">{{ linkStr }}</text-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BulletinCard',
    props: {
        title: { type: String, default: '' },
        description: {
            type: String,
            default: '',
        },
        linkStr: { type: String, default: '' },
        linkUrl: { type: String, default: '' },
    },
    computed: {
        classObject() {
            return {
                bulletinCard: true,
            }
        },
    },
}
</script>

<style lang="postcss" scoped>
.bulletinCard {
    @apply w-56 h-64 relative flex flex-col justify-center items-center rounded-2xl;
}
</style>
