<template>
    <div v-show="!!title" :class="classObject">
        <h2>
            {{ $t(title) }}
        </h2>
        <p>{{ $t(description) }}</p>
        <a :href="linkUrl" :title="linkStr">{{ linkStr }}</a>
        <!-- <div class="text-center">
            <text-button :to="linkUrl">{{ linkStr }}</text-button>
        </div> -->
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
    @apply w-48 h-64 relative flex flex-col justify-center items-center rounded-3xl border-4 border-gray-700;
    border-color: rgba(75, 75, 75);
    color: rgba(75, 75, 75);
}

.bulletinCard > h2 {
    @apply text-xl;
    color: rgba(128, 128, 128);
}

.bulletinCard > p {
    @apply text-sm m-5;
    color: rgba(199, 199, 199);
}

.bulletinCard > a {
    @apply text-sm rounded-full px-8 py-2;
    border-color: rgba(199, 199, 199);
    border-width: inherit;
    color: rgba(199, 199, 199);
}

.bulletinCard > a:hover {
    background: rgba(199, 199, 199);
    color: #121023;
}
</style>
