<template>
    <div v-show="shouldShowModal" class="sponsorModal">
        <div class="closingArea" @click="close"></div>
        <div class="lightBox">
            <div class="lightBox__closeButtonContainer" @click="close">
                <fa icon="times" class="lightBox__closeButton" />
            </div>
            <div class="lightBox__header">
                <sponsor-card :logo-url="context.logo_url" small></sponsor-card>
                <h1 class="lightBox__title">
                    {{ getAttributeByLocale('name') }}
                </h1>
            </div>
            <div class="lightBox__intro">
                <p class="text-sm">{{ getAttributeByLocale('intro') }}</p>
            </div>
            <div class="lightBox__buttons">
                <text-button
                    :href="context.website_url"
                    :secondary="true"
                    :primary="false"
                    >{{ $t('website') }}</text-button
                >
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
    z-index: 9998;
}

.closingArea {
    @apply w-full h-full absolute;
    z-index: 9999;
}

.lightBox {
    @apply flex flex-col px-4 py-5 rounded-2xl border-4 w-11/12 relative;
    @apply md:w-2/5 md:max-w-3xl md:pt-14 md:pb-6 md:px-12 md:border-2;
    background-color: #121023;
    border-color: #c386ae;
    z-index: 10000;
}

.lightBox__closeButtonContainer {
    @apply absolute flex ml-auto cursor-pointer;
    top: 17px;
    right: 17px;
    color: #c386ae;

    @media (min-width: 768px) {
        top: 39.25px;
        right: 38.5px;
    }
}

.lightBox__closeButton {
    @apply w-5 h-5;
}

.lightBox__header {
    @apply flex flex-col items-center;
}

.lightBox__title {
    @apply text-lg mt-3 font-semibold font-serif;
    @apply md:text-xl md:mt-6;
}

.lightBox__intro {
    @apply font-sans text-base font-normal overflow-y-auto mt-3.5;
    @apply md:text-lg md:mt-4 max-h-40;
    white-space: pre-line;
}

.lightBox__buttons {
    @apply mx-auto mt-6;
    @apply md:my-6;
}
</style>
