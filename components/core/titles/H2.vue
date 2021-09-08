<template>
    <div class="flex justify-center">
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
h2 {
    @apply mt-2 md:mt-10 mb-8 md:mb-16 text-2xl md:text-3xl;
    @apply font-serif text-center font-bold;
    color: #e6ba17;
}
.bulletin-color {
    color: #f3cc39;
}
</style>
