<template>
    <div v-show="!!title" :class="classObject">
        <div class="dummy"></div>
        <div class="bulletinCard__content">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
        <div class="bulletinCard__button">
            <text-button
                :href="linkHref"
                :to="linkTo"
                secondary
                class="hidden md:block"
                >{{ linkTitle }}</text-button
            >
            <text-button
                :href="linkHref"
                :to="linkTo"
                secondary
                small
                class="md:hidden"
                >{{ linkTitle }}</text-button
            >
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
    @apply relative flex flex-col items-center font-serif rounded-3xl border-4;
    width: 47%;
    @media (min-width: 415px) {
        width: 11rem;
    }
    border-color: #4b4b4b;
    color: #4b4b4b;
}

.bulletinCard:hover {
    @apply cursor-pointer;
    border-color: #413f5a;
}

/* A trick to set height to be equal to width. */
/* Checkout: https://stackoverflow.com/a/6615994/7969188 */
.bulletinCard > .dummy {
    margin-top: 200%;
    @media (min-width: 370px) {
        margin-top: 150%;
    }
}

.bulletinCard__content {
    @apply absolute;
}

.bulletinCard__content > h2 {
    @apply text-base text-center mt-2 mb-3;
    @media (min-width: 415px) {
        @apply text-xl mt-4 mb-6;
    }
    color: #808080;
}

.bulletinCard__content:hover > h2 {
    color: #7568f6;
}

.bulletinCard__content > p {
    @apply mx-2;
    font-size: 0.6rem;
    color: #c7c7c7;
    @media (min-width: 415px) {
        font-size: 0.8rem;
    }
}

.bulletinCard__button {
    @apply absolute bottom-2;
    @media (min-width: 415px) {
        @apply bottom-3;
    }
}
</style>
