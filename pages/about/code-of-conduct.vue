<template>
    <div class="py-10 md:pb-24 lg:pb-24">
        <banner>
            <core-h1 :title="$t('title')"></core-h1>
            <p class="leading-6">
                {{ $t('pageAbstract') }}
            </p>
        </banner>
        <div class="flex flex-wrap justify-center mx-2 my-3">
            <div v-for="(img, i) in introImgs" :key="`intro_img_${i}`">
                <div
                    class="
                        w-32
                        md:w-56
                        h-24
                        md:h-40
                        bg-contain bg-no-repeat
                        mx-2
                        md:mx-5
                        my-3
                    "
                    :style="getImgStyle(img)"
                ></div>
            </div>
        </div>
        <I18nPageWrapper class="pt-0 md:pt-20">
            <div class="flex flex-col w-full m-auto">
                <div v-for="(rule, i) in $t('contents')" :key="`coc-rule-${i}`">
                    <p class="paragraph-title text-base md:text-lg lg:text-lg">
                        {{ rule.title }}
                    </p>
                    <p
                        v-for="(
                            description, descriptionsIndex
                        ) in rule.descriptions"
                        :key="`coc-description-${descriptionsIndex}`"
                        class="text-xs md:text-base leading-5 md:leading-8"
                    >
                        {{ description }}
                    </p>
                    <!-- 第一張圖片 -->
                    <div
                        v-if="i == 0"
                        class="flex flex-wrap justify-center mx-2 my-1"
                    >
                        <div v-for="(img, j) in sub1" :key="`sub_img_${j}`">
                            <div
                                class="
                                    w-10
                                    md:w-20
                                    h-10
                                    md:h-40
                                    bg-contain bg-no-repeat
                                    mx-2
                                    md:mx-5
                                    my-10
                                "
                                :style="getImgStyle(img)"
                            >
                                <div
                                    class="
                                        flex
                                        justify-center
                                        text-xs
                                        pt-20
                                        h-30
                                    "
                                >
                                    {{ rule.list[j] }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 第二張圖片 -->
                    <div v-else class="flex flex-wrap justify-center mx-2 my-1">
                        <div
                            class="
                                w-40
                                md:w-40
                                h-60
                                md:h-40
                                bg-contain bg-no-repeat
                                mx-2
                                md:mx-5
                                my-10
                            "
                            :style="getImgStyle(sub2)"
                        ></div>
                    </div>
                    <div
                        v-for="(subtitle, subtitleIndex) in rule.subtitle"
                        :key="`coc-description-${subtitleIndex}`"
                        class="text-xs md:text-base leading-5 md:leading-8"
                    >
                        <div class="flex align-middle">
                            <two-col-wrapper>
                                <template #default>
                                    <h2>{{ subtitle.title }}</h2>
                                </template>
                                <template #right-col>
                                    <p>{{ subtitle.descriptions[0] }}</p>
                                    <ol>
                                        <li
                                            v-for="(
                                                li, liIndex
                                            ) in subtitle.list"
                                            :key="`coc-list-${liIndex}`"
                                        >
                                            {{ li }}
                                        </li>
                                    </ol>
                                </template>
                            </two-col-wrapper>
                        </div>
                    </div>
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
import Icon1 from '@/static/img/about/code-of-conduct/Icon-1.png'
import Icon2 from '@/static/img/about/code-of-conduct/Icon-2.png'
import Icon3 from '@/static/img/about/code-of-conduct/Icon-3.png'
import Icon4 from '@/static/img/about/code-of-conduct/Icon-4.png'
import TwoColWrapper from '@/components/core/layout/TwoColWrapper'

export default {
    i18n,
    name: 'PageCodeOfConduct',
    components: {
        I18nPageWrapper,
        CoreH1,
        Banner,
        TwoColWrapper,
    },
    data() {
        return {
            aboutBanner: AboutBanner,
            introImgs: [IntroImg1, IntroImg2, IntroImg3],
            sub1: [Icon1, Icon2, Icon3],
            sub2: Icon4,
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
                'border-radius': '5%',
            }
        },
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('pageAbstract'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('pageAbstract'),
                },
            ],
        }
    },
}
</script>

<style scoped>
.paragraph-title {
    @apply font-serif font-bold text-pink-700;
    text-align: center;
}
</style>
