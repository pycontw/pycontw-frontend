<template>
    <div v-show="shouldShowModal" class="sponsorModal">
        <div class="closingArea" @click="close"></div>
        <div class="lightBox">
            <div class="lightBox__header">
                <sponsor-card :logo-url="context.logo_url" small></sponsor-card>
                <h1 class="lightBox__title">
                    {{ getAttributeByLocale('name') }}
                </h1>
                <div class="lightBox__closeButton" @click="close">✕</div>
            </div>
            <h2 class="lightBox__subtitle">{{ $t('about') }}</h2>
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
    data() {
        return {
            shouldShowModal: this.value,
        }
    },
    watch: {
        value(newVal) {
            this.shouldShowModal = newVal
        },
    },
    methods: {
        close() {
            this.shouldShowModal = false
            this.$emit('input', false)
            document.body.classList.remove('modal-open')
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
}

.closingArea {
    @apply w-full h-full absolute;
    z-index: 9999;
}

.lightBox {
    @apply flex flex-col px-8 py-4 rounded-2xl border-4;
    width: 95%;
    padding: 32px 28px 28px 32px;
    @media (min-width: 768px) {
        width: 66%;
        padding: 60px 48px 48px 60px;
    }
    height: 80%;
    background-color: #121023;
    border-color: #c386ae;
    z-index: 10000;
}

.lightBox__closeButton {
    @apply relative flex ml-auto mr-3 md:mr-6 cursor-pointer;
    top: -24px;
    right: -12px;
    color: #c386ae;

    @media (min-width: 768px) {
        top: -40px;
        right: -20px;
    }
}

.lightBox__header {
    @apply flex items-center;
}

.lightBox__title {
    @apply text-xl ml-1 sm:ml-4 md:ml-8;
}

.lightBox__subtitle {
    @apply text-xl mt-7;
    color: #c386ae;
}

.lightBox__intro {
    @apply flex mt-3.5 mb-4 overflow-y-auto;
    white-space: pre-line;
}

.lightBox__buttons {
    @apply relative bottom-0;
}
</style>
