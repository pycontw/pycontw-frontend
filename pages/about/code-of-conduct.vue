<template>
    <div class="py-10 md:py-24 lg:py24">
        <banner>
            <template #default>
                <div
                    class="hidden md:block lg:block md:w-full lg:w-full md:h-full lg:h-full"
                    :style="bannerStyle"
                ></div>
            </template>
            <template #text>
                <core-h1 :title="$t('title')"></core-h1>
                <p class="w-full md:w-3/4 lg:w-3/4 leading-6">
                    {{ $t('pageAbstract') }}
                </p>
            </template>
        </banner>
        <div class="flex flex-wrap justify-center mx-2 my-3">
            <div v-for="(img, i) in introImgs" :key="`intro_img_${i}`">
                <div
                    class="w-32 md:w-56 lg:w-56 h-24 md:h-40 lg:h-40 bg-contain bg-no-repeat mx-2 md:mx-5 lg:mx-5 my-3"
                    :style="getImgStyle(img)"
                ></div>
            </div>
        </div>
        <I18nPageWrapper class="pt-8 px-8 md:px-57 lg:px-56">
            <div class="flex flex-col w-full m-auto">
                <div v-for="(rule, i) in $t('contents')" :key="`coc-rule-${i}`">
                    <p class="paragraph-title text-base md:text-lg lg:text-lg">
                        {{ rule.title }}
                    </p>
                    <p
                        class="text-xs md:text-base lg:text-base leading-5 md:leading-8 lg:leading-8"
                    >
                        {{ rule.description }}
                    </p>
                </div>
            </div>
        </I18nPageWrapper>
    </div>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/about/code-of-conduct.i18n'
import AboutBanner from '@/static/img/about/Banner.svg'
import Banner from '@/components/core/layout/Banner'
import CoreH1 from '@/components/core/titles/H1'
import IntroImg1 from '@/static/img/about/code-of-conduct/Intro-1.png'
import IntroImg2 from '@/static/img/about/code-of-conduct/Intro-2.png'
import IntroImg3 from '@/static/img/about/code-of-conduct/Intro-3.png'

export default {
    i18n,
    name: 'PageCodeOfConduct',
    components: {
        I18nPageWrapper,
        CoreH1,
        Banner,
    },
    data() {
        return {
            aboutBanner: AboutBanner,
            introImgs: [IntroImg1, IntroImg2, IntroImg3],
        }
    },
    computed: {
        bannerStyle() {
            return {
                'background-image': `url(${this.aboutBanner})`,
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }
        },
    },
    methods: {
        getImgStyle(img) {
            return {
                'background-image': `url(${img})`,
            }
        },
    },
}
</script>

<style scoped>
.paragraph-title {
    @apply font-serif font-bold;
    color: #c2a53a;
}
</style>
