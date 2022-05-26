<template>
    <div class="container">
        <div v-if="isBulleted">
            <img
                class="bullet"
                src="@/static/heading-bullet.svg"
                alt="heading-bullet"
            />
        </div>
        <h2 :class="classObject">{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'CoreH2',
    props: {
        title: {
            type: String,
            required: true,
        },
        bulletinColor: {
            type: Boolean,
            default: false,
        },
        isBulleted: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        classObject() {
            return {
                'tracking-wider': this.$i18n.locale !== 'en-us',
                'bulletin-color': this.bulletinColor,
            }
        },
    },
}
</script>

<style lang="postcss" scoped>
.container {
    @apply flex items-center md:mb-7;
}
h2 {
    @apply text-2xl md:text-3xl;
    @apply font-serif font-bold;
    background: linear-gradient(
        302.44deg,
        #8be1c2 0.18%,
        #5b69e2 43.9%,
        #a764c9 53.21%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.bulletin-color {
    @apply text-pink500;
}
.bullet {
    @apply w-10 md:w-16;
}
</style>
