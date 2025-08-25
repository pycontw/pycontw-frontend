<template>
    <div v-show="shouldShowModal" class="modal">
        <div class="closingArea" @click="close"></div>
        <div class="lightBox">
            <div class="lightBox__closeButtonContainer" @click="close">
                <fa icon="times" class="lightBox__closeButton" />
            </div>
            <div class="lightBox__photo__box">
                <div
                    v-for="ImgUrl in getImgUrlArr()"
                    :key="ImgUrl"
                    class="lightBox__photo"
                    :class="{ img__bg: imgBg }"
                >
                    <img :src="ImgUrl" alt="photo" />
                </div>
            </div>
            <div class="lightBox__header">
                <h1 class="lightBox__title">
                    {{ name }}
                </h1>
            </div>
            <div class="lightBox__intro">
                <p class="text-sm">{{ intro }}</p>
                <div
                    v-if="descriptionIsHtml"
                    class="text-sm"
                    v-html="description[0]"
                ></div>
                <div v-else>
                    <div
                        v-for="(item, i) in description"
                        :key="i"
                        class="text-sm"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
            <div v-if="websiteUrl" class="lightBox__buttons">
                <text-button
                    :href="websiteUrl"
                    :secondary="true"
                    :primary="false"
                >
                    {{ $t('website') }}
                </text-button>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '../../core/modal/Modal.i18n'
import TextButton from '~/components/core/buttons/TextButton'

export default {
    i18n,
    name: 'Modal',
    components: {
        TextButton,
    },
    props: {
        value: { type: Boolean, default: false },
        imgUrls: { type: [Array, String], default: '' },
        imgBg: { type: Boolean, default: false },
        name: { type: String, default: '' },
        intro: { type: String, default: '' },
        websiteUrl: { type: String, default: '' },
        description: { type: Array, default: () => [] },
        descriptionIsHtml: { type: Boolean, default: false },
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
        },
        getImgUrlArr() {
            let arr = []
            if (Array.isArray(this.imgUrls) === true) {
                arr = this.imgUrls
            } else {
                arr.push(this.imgUrls)
            }
            return arr
        },
    },
}
</script>

<style lang="postcss" scoped>
.modal {
    @apply fixed left-0 top-0 z-[9998] flex h-screen w-full items-center justify-center;
    background-color: rgba(18, 16, 35, 0.6);
    backdrop-filter: blur(5px);
}

.closingArea {
    @apply absolute z-[9999] h-full w-full;
}

.lightBox {
    @apply relative flex w-11/12 flex-col rounded-3xl border-3 border-pink-500 bg-black-900 px-4 py-5;
    @apply z-[10000] md:w-4/5 md:max-w-2xl md:border-2 md:px-12 md:pb-6 md:pt-14;
}

.lightBox__closeButtonContainer {
    @apply absolute right-[17px] top-[17px] ml-auto flex cursor-pointer text-pink-500;
    @media (min-width: 768px) {
        @apply right-[38.5px] top-[39.25px];
    }
}

.lightBox__closeButton {
    @apply h-5 w-5;
}

.lightBox__photo__box {
    @apply relative mx-auto my-0 flex;
}
.lightBox__photo {
    @apply h-16 w-16 md:h-24 md:w-24;
    @apply relative mx-auto my-0 flex flex-col items-center justify-center rounded-2xl;
    transform: translateX(-20px);
}
.lightBox__photo:first-of-type {
    transform: translateX(0px);
}
.lightBox__photo > img {
    @apply absolute rounded-full object-contain;
    width: calc(100% - 10px);
}
.img__bg {
    @apply bg-[#f7f6fe];
}

.lightBox__header {
    @apply flex flex-col items-center;
}

.lightBox__title {
    @apply mt-3 font-serif text-lg font-semibold;
    @apply md:mt-6 md:text-xl;
}

.lightBox__intro {
    @apply mt-3.5 flex flex-col overflow-y-auto font-sans text-base font-normal;
    @apply whitespace-pre-line md:mt-4 md:text-lg;
}

.lightBox__buttons {
    @apply mx-auto mt-6;
    @apply md:my-6;
}
</style>
