<template>
    <div v-show="value" class="sponsorModal">
        <div class="lightBox">
            <div class="lightBox__closeButton" @click="close">✕</div>
            <div class="lightBox__title">
                <sponsor-card :logo-url="context.logo_url" small></sponsor-card>
                <h1 class="text-xl mx-8 border-b-8 border-solid">
                    {{ context.name }}
                </h1>
            </div>
            <h2 class="text-xl text-yellow-500 mt-4">{{ $t('about') }}</h2>
            <div class="lightBox__intro">
                <p class="text-sm">{{ getAttributeByLocale('intro') }}</p>
            </div>
            <div class="lightBox__buttons">
                <text-button :href="context.website_url">{{
                    $t('website')
                }}</text-button>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from './SponsorModal.i18n'
import SponsorCard from './SponsorCard'
import TextButton from '~/components/core/buttons/TextButton'

export default {
    i18n,
    name: 'SponsorModal',
    components: {
        SponsorCard,
        TextButton,
    },
    props: {
        value: { type: Boolean, default: false },
        context: { type: Object, default: () => ({}) },
    },
    methods: {
        close() {
            this.value = false
            this.$emit('input', false)
        },
        getAttributeByLocale(attr) {
            const localeMap = { 'en-us': 'en_us', 'zh-hant': 'zh_hant' }
            const attributeName = `${attr}_${localeMap[this.$i18n.locale]}`
            return this.context[attributeName]
        },
    },
}
</script>

<style lang="postcss" scoped>
.sponsorModal {
    @apply flex justify-center items-center fixed top-0 left-0 w-full h-screen;
    background-color: rgba(18, 16, 35, 0.6);
    backdrop-filter: blur(5px);
    z-index: 10000;
}

.lightBox {
    @apply flex flex-col px-8 py-4 rounded-2xl border-4 border-yellow-500;
    width: 95%;
    padding: 32px 28px 28px 32px;
    @media (min-width: 415px) {
        width: 66%;
        padding: 60px 48px 48px 60px;
    }
    height: 80%;
    background-color: #121023;
}

.lightBox__closeButton {
    @apply relative flex justify-end text-yellow-500 cursor-pointer;
    top: -40px;
    right: -20px;
}

.lightBox__title {
    @apply flex items-center;
}

.lightBox__intro {
    @apply flex mb-4 overflow-y-scroll;
    white-space: pre-line;
}

.lightBox__buttons {
    @apply flex;
}
</style>
