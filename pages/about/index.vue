<template>
    <div class="py-10 md:py-24 lg:py24">
        <Banner>
            <template #default>
                <div
                    class="hidden md:block lg:block md:w-full lg:w-full md:h-full lg:h-full"
                    :style="getBanner"
                ></div>
            </template>
            <template #text>
                <core-h1 :title="$t('pageTitle')"></core-h1>
                <p
                    v-for="(content, i) in $t('pageAbstract')"
                    :key="`abstract_${i}`"
                    class="w-full md:w-3/4 lg:w-3/4"
                >
                    {{ content }}
                </p>
            </template>
        </Banner>
        <div class="flex flex-wrap justify-center mx-2 my-3">
            <div v-for="(img, i) in introImgs" :key="`intro_img_${i}`">
                <div
                    class="w-32 md:w-56 lg:w-56 h-24 md:h-40 lg:h-40 bg-contain bg-no-repeat mx-2 my-3"
                    :style="{
                        'background-image': 'url(' + img + ')',
                    }"
                ></div>
            </div>
        </div>
        <i18n-page-wrapper>
            <p></p>
        </i18n-page-wrapper>
    </div>
</template>

<script>
import i18n from '@/i18n/about/index.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import Banner from '@/components/core/layout/Banner'
import CoreH1 from '@/components/core/titles/H1'
import AboutBanner from '@/static/img/about/Banner.svg'
import IntroImg1 from '@/static/img/about/Intro-1.png'
import IntroImg2 from '@/static/img/about/Intro-2.png'
import IntroImg3 from '@/static/img/about/Intro-3.png'
import IntroImg4 from '@/static/img/about/Intro-4.png'

export default {
    i18n,
    name: 'PageAbout',
    components: {
        I18nPageWrapper,
        Banner,
        CoreH1,
    },
    data() {
        return {
            aboutBanner: AboutBanner,
            introImgs: [IntroImg1, IntroImg2, IntroImg3, IntroImg4],
        }
    },
    computed: {
        getBanner() {
            return {
                'background-image': `url(${this.aboutBanner})`,
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }
        },
    },
}
</script>

<style scoped></style>
