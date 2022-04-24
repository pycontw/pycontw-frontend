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
// import TextButton from '@/components/core/buttons/TextButton'

export default {
    name: 'BulletinCard',
    components: {
        // TextButton,
    },
    props: {
        title: { type: String, default: '' },
        description: {
            type: String,
            default: '',
        },
        // linkTitle: { type: String, default: '' },
        // linkHref: { type: String, default: '' },
        // linkTo: { type: String, default: '' },
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
    @apply relative flex flex-col justify-center items-center rounded-xl;
    padding: 25px 3px;
    width: 236px;
    height: 310px;
    left: 284px;
    top: 0px;
    margin: 48px;
    color: #a9a6d9;
    background: #1f1c3b;
}

.bulletinCard:hover {
    border-color: #746bb8;
    background: #352d66;
    color: #f0ebf5;
}

/* A trick to set height to be equal to width. */
/* Checkout: https://stackoverflow.com/a/6615994/7969188 */
.bulletinCard > .dummy {
    margin-top: 230%;
    @media (min-width: 375px) {
        margin-top: 170%;
    }
}

.bulletinCard__content {
    @apply absolute;
}

.bulletinCard__content > h2 {
    @apply text-base text-center mt-6 mb-5 font-bold;
    font-family: 'Noto Serif TC';
    @media (min-width: 375px) {
        @apply text-xl mt-8 mb-5;
    }
}

.bulletinCard__content > p {
    @apply mx-2;
    font-size: 0.6rem;
    font-family: 'Source Sans Pro';
    @media (min-width: 375px) {
        font-size: 0.8rem;
    }
}

/* .bulletinCard__button {
    @apply absolute bottom-5 cursor-pointer;
    @media (min-width: 415px) {
        @apply bottom-7;
    }
} */
</style>
