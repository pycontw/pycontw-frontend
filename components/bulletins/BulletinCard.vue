<template>
    <div v-show="!!title" :class="classObject">
        <h2>
            {{ title }}
        </h2>
        <p>{{ description }}</p>
        <div class="bulletinCard__button">
            <text-button :href="linkHref" :to="linkTo" secondary>{{
                linkTitle
            }}</text-button>
        </div>
    </div>
</template>

<script>
import TextButton from '@/components/core/buttons/TextButton'

export default {
    name: 'BulletinCard',
    components: {
        TextButton,
    },
    props: {
        title: { type: String, default: '' },
        description: {
            type: String,
            default: '',
        },
        linkTitle: { type: String, default: '' },
        linkHref: { type: String, default: '' },
        linkTo: { type: String, default: '' },
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
    @apply h-64 relative flex flex-col items-center font-serif rounded-3xl border-4;
    width: 11rem;
    border-color: #4b4b4b;
    color: #4b4b4b;
}

.bulletinCard:hover {
    @apply cursor-pointer;
    border-color: #413f5a;
}

.bulletinCard > h2 {
    @apply text-xl text-center mt-4 mb-6;
    color: #808080;
}

.bulletinCard:hover > h2 {
    color: #7568f6;
}

.bulletinCard > p {
    @apply mx-2;
    font-size: 0.8rem;
    color: #c7c7c7;
}

.bulletinCard__button {
    @apply absolute mt-6 mb-2 bottom-3;
}
</style>
