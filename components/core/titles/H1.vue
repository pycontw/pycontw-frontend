<template>
    <div class="flex justify-center font-serif">
        <h1 :class="classObject">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'CoreH1',
    props: {
        title: {
            type: String,
            required: true,
        },
        center: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classObject() {
            return {
                'tracking-wider': this.$i18n.locale === 'en-us',
                'tracking-widest': this.$i18n.locale !== 'en-us',
                'text-center': this.center,
            }
        },
    },
}
</script>

<style lang="postcss" scoped>
h1 {
    @apply py-2 font-bold leading-loose text-xl;
    @apply mb-0 md:text-2xl md:mb-9;
    color: #d69ddd;
    text-shadow: #3841ae 2px 1px 0px;
}
</style>
