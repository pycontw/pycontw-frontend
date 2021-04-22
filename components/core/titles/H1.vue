<template>
    <div class="flex justify-center">
        <h1
            :class="`py-2 font-medium leading-loose text-lg mb-3 ${langSpacing} md:text-2xl lg:text-2xl md:mb-9 lg:mb-9`"
        >
            {{ title }}
        </h1>
    </div>
</template>

<script>
import i18n from '@/i18n/about/index.i18n'

export default {
    i18n,
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
    font-family: 'Noto Serif TC';
    color: #f3cc39;
}
</style>
