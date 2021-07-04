<template>
    <div class="flex justify-center font-serif">
        <h1
            :class="`py-2 font-semibold leading-loose text-lg mb-3 ${langSpacing} md:text-2xl lg:text-2xl md:mb-9 lg:mb-9`"
        >
            {{ title }}
        </h1>
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
    },
    computed: {
        langSpacing() {
            return this.$i18n.locale === 'en-us'
                ? 'tracking-wider'
                : 'tracking-widest'
        },
    },
}
</script>
<style scoped>
h1 {
    color: #f3cc39;
}
</style>
