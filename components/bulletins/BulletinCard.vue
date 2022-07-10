<template>
    <div v-show="!!title" :class="classObject">
        <div class="dummy"></div>
        <img
            class="bulletinCard_icon"
            :src="require(`~/static/img/bulletins/${icon}.svg`)"
        />
        <div class="bulletinCard__content">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
        <div v-if="showButton" class="bulletinCard__button">
            <text-button
                :href="linkHref"
                :to="linkTo"
                secondary
                bulletin
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
        icon: { type: String, default: '' },
    },
    computed: {
        classObject() {
            return {
                bulletinCard: true,
            }
        },
        showButton() {
            return false
        },
    },
}
</script>

<style lang="postcss" scoped>
.bulletinCard {
    @apply relative flex flex-col justify-center items-center rounded-xl w-48 h-64;
    border: 1px solid transparent;
    background: #1f1c3b;
    color: #a9a6d9;
}

.bulletinCard:hover {
    border: 1px solid #746bb8;
    background: #352d66;
    color: #f0ebf5;
    box-shadow: 0px 0px 10px 10px #352d66;
    cursor: pointer;
}

/* A trick to set height to be equal to width. */
/* Checkout: https://stackoverflow.com/a/6615994/7969188 */
.bulletinCard > .dummy {
    margin-top: 230%;
    @media (min-width: 375px) {
        margin-top: 170%;
    }
}

.bulletinCard_icon {
    @apply absolute transform scale-90 md:scale-100;
    top: 12.5%;
}

.bulletinCard__content {
    @apply absolute;
    top: 30%;
    padding: inherit;
}

.bulletinCard__content > h2 {
    @apply text-base text-center mt-6 mb-5 font-bold;
    font-family: 'Noto Serif TC';
    @media (min-width: 375px) {
        @apply text-xl mt-8 mb-5;
    }
}

.bulletinCard__content > p {
    @apply px-5 pb-6;
    font-size: 0.6rem;
    @media (min-width: 375px) {
        font-size: 0.8rem;
    }
}

.bulletinCard__button {
    @apply absolute bottom-5 cursor-pointer;
    @media (min-width: 375px) {
        @apply bottom-7;
    }
}
</style>
