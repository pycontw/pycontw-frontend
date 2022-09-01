<template>
    <div
        v-if="$store.state.relatedData.length > 1"
        class="relatedCardCollection"
    >
        <div class="related__title">
            <img src="@/static/img/background/r3.svg" class="related__logo" />
            <p class="related__text">{{ $t('related.title') }}</p>
        </div>
        <swiper class="swiper related__card" :options="swiperOption">
            <swiper-slide v-for="speech in related" :key="speech.id">
                <speech-card
                    :id="speech.id"
                    :key="`speech_${speech.id}`"
                    :title="speech.title"
                    :category="speech.category"
                    :speakers="speech.speakers"
                    :lang="speech.language"
                    :level="speech.python_level"
                    :to="`/conference/${speech.event_type}/${speech.id}/`"
                >
                </speech-card>
            </swiper-slide>
            <div
                v-show="false"
                slot="pagination"
                class="swiper-pagination"
            ></div>
            <div slot="button-prev" class="swiper-button-prev related__arrow">
                <fa :icon="['fa', 'chevron-left']"></fa>
            </div>
            <div slot="button-next" class="swiper-button-next related__arrow">
                <fa :icon="['fa', 'chevron-right']"></fa>
            </div>
        </swiper>
    </div>
</template>

<script>
import i18n from '@/i18n/conference/speeches.i18n'
import SpeechCard from '@/components/events/SpeechCard'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
    i18n,
    name: 'RelatedCardCollection',
    components: {
        Swiper,
        SwiperSlide,
        SpeechCard,
    },
    props: {
        related: { type: Array, default: () => [] },
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerGroup: 1,
                // loop: true,
                // loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    1194: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                    834: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 28,
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                },
            },
        }
    },
}
</script>

<style lang="postcss" scoped>
.related__title {
    @apply flex relative top-12;
}
.related__logo {
    @apply -rotate-45 w-14 relative -top-4;
}
.related__text {
    @apply font-serif font-black text-xl h-8 text-transparent bg-clip-text;
    background: linear-gradient(120deg, #9e67c3, #6a67d6, #93cac6);
}
.related__card {
    @apply relative top-16 pr-5 pl-4 pb-4;
}
.related__arrow {
    @apply w-6 h-6 bg-pink-700 hover:bg-primary-500 text-black-900 hover:text-white;
    @apply text-center text-[12px] leading-[30px];
    @apply rounded-full cursor-pointer select-none after:hidden;
}
</style>
