<template>
    <div v-show="!!title" :class="classObject" @click="onClick">
        <div class="bulletin--card__dummy"></div>
        <img
            class="bulletin--card__icon"
            :src="require(`~/static/img/bulletins/${icon}.svg`)"
        />
        <div class="bulletin--card__content">
            <h2 class="bulletin--card__header">{{ title }}</h2>
            <p class="bulletin--card__description">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BulletinCard',
    components: {},
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
                'bulletin--card': true,
            }
        },
    },
    methods: {
        onClick() {
            const { linkTo, linkHref } = this.$props
            if (linkTo) {
                this.$router.push(linkTo)
            } else if (linkHref) {
                window.open(linkHref, '_blank')
            }
        },
    },
}
</script>

<style lang="postcss" scoped>
.bulletin--card {
    @apply relative flex flex-col justify-center items-center rounded-xl w-48 h-64;
    border: 1px solid transparent;
    background: #1f1c3b;
    color: #a9a6d9;
}

.bulletin--card:hover {
    border: 1px solid #746bb8;
    background: #352d66;
    color: #f0ebf5;
    box-shadow: 0px 0px 10px 10px #352d66;
    cursor: pointer;
}

/* A trick to set height to be equal to width. */
/* Checkout: https://stackoverflow.com/a/6615994/7969188 */
.bulletin--card__dummy {
    margin-top: 230%;
    @media (min-width: 375px) {
        margin-top: 170%;
    }
}

.bulletin--card__icon {
    @apply absolute transform scale-90 md:scale-100;
    top: 12.5%;
}

.bulletin--card__content {
    @apply absolute;
    top: 30%;
}

.bulletin--card__header {
    @apply font-serif text-base text-center mt-6 mb-5 font-bold;
    @media (min-width: 375px) {
        @apply text-xl mt-8 mb-5;
    }
}

.bulletin--card__description {
    @apply px-5 pb-6;
    font-size: 0.6rem;
    @media (min-width: 375px) {
        font-size: 0.8rem;
    }
}
</style>
