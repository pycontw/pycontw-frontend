<template>
    <div class="py-10 md:pb-24 lg:pb-24">
        <banner>
            <core-h1 :title="$t('title')"></core-h1>
            <p class="leading-6">
                {{ $t('pageAbstract') }}
            </p>
        </banner>
        <div class="mx-2 my-3 flex flex-wrap justify-center">
            <div v-for="(img, i) in introImgs" :key="`intro_img_${i}`">
                <div
                    class="mx-2 my-3 h-24 w-32 bg-contain bg-no-repeat md:mx-5 md:h-40 md:w-56"
                    :style="getImgStyle(img)"
                ></div>
            </div>
        </div>
        <I18nPageWrapper class="pt-0 md:pt-20">
            <div class="m-auto flex w-full flex-col">
                <div v-for="(rule, i) in $t('contents')" :key="`coc-rule-${i}`">
                    <p class="paragraph-title text-base md:text-lg lg:text-lg">
                        {{ rule.title }}
                    </p>
                    <p
                        v-for="(
                            description, descriptionsIndex
                        ) in rule.descriptions"
                        :key="
                            'coc-description-' +
                            descriptionsIndex +
                            '-' +
                            description
                        "
                        class="text-xs leading-5 md:text-base md:leading-8"
                    >
                        {{ description }}
                    </p>
                    <!-- 三大準則圖片 -->
                    <!-- i == 0 是抓取三大準則的圖片 -->
                    <div
                        v-if="i == 0"
                        class="relative mx-2 my-1 flex justify-between sm:justify-around"
                    >
                        <div v-for="(img, j) in sub1" :key="`sub_img_${j}`">
                            <div
                                class="mx-2 my-10 flex h-36 w-16 justify-center bg-contain bg-no-repeat sm:my-5 sm:h-40 sm:w-20 md:mx-5"
                                :style="getSub1Style(img)"
                            >
                                <span class="img_text">
                                    {{ rule.list[j] }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        v-for="(subtitle, subtitleIndex) in rule.subtitle"
                        :key="`coc-description-${subtitleIndex}`"
                    >
                        <div>
                            <two-col-wrapper>
                                <template #default>
                                    <h2>{{ subtitle.title }}</h2>
                                </template>
                                <template #right-col>
                                    <div
                                        v-for="(
                                            description, index
                                        ) in subtitle.descriptions"
                                        :key="'description-' + index"
                                    >
                                        <p>{{ description }}</p>
                                        <br
                                            v-if="
                                                index !==
                                                subtitle.descriptions.length - 1
                                            "
                                        />
                                    </div>
                                    <ol class="ml-4 list-decimal">
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
                            <!-- 處理流程圖片 -->
                            <!-- 如果是`處理流程`或是`Procedure`，才會引入圖片，避免重複引入圖片 -->
                            <div
                                v-if="
                                    [`處理流程`, `Procedure`].includes(
                                        subtitle.title,
                                    )
                                "
                                class="mx-2 my-2 flex flex-wrap justify-center"
                            >
                                <div
                                    class="sub1_img"
                                    :style="getSub2Style(sub2Imgs[0])"
                                ></div>
                                <div
                                    class="sub2_img"
                                    :style="getSub2Style(sub2Imgs[1])"
                                ></div>
                            </div>
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
import ProcedureZh from '@/static/img/about/code-of-conduct/procedure-zh.png'
import ProcedureZhRwd from '@/static/img/about/code-of-conduct/procedure-zh-rwd.png'
import ProcedureEn from '@/static/img/about/code-of-conduct/procedure-en.png'
import ProcedureEnRwd from '@/static/img/about/code-of-conduct/procedure-en-rwd.png'
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
            sub2_zh: [ProcedureZh, ProcedureZhRwd],
            sub2_en: [ProcedureEn, ProcedureEnRwd],
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
        sub2Imgs() {
            if (this.$i18n.locale === 'zh-hant') {
                return this.sub2_zh
            } else {
                return this.sub2_en
            }
        },
    },
    methods: {
        getImgStyle(img) {
            return {
                'background-image': `url(${img})`,
                'border-radius': '5%',
                'background-size': 'cover',
            }
        },
        getSub1Style(img) {
            return {
                'background-image': `url(${img})`,
            }
        },
        getSub2Style(img) {
            return {
                'background-image': `url(${img})`,
                'background-position': 'center',
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
    @apply mt-8 mb-8 font-serif font-bold text-center text-left text-pink-700 text-2xl;
}
@media (min-width: 768px) {
    .paragraph-title {
        @apply text-3xl;
    }
}
.img_text {
    @apply absolute mt-24 whitespace-nowrap text-center text-sm;
}
@media (max-width: 640px) {
    .img_text {
        @apply sm:mt-20;
    }
}
@media (max-width: 768px) {
    .img_text {
        @apply text-xs whitespace-normal;
    }
}
.sub1_img {
    @apply mx-2 my-3 h-96 w-full bg-contain bg-no-repeat md:mx-5 md:h-96;
}
.sub2_img {
    @apply mx-2 my-2 hidden bg-no-repeat md:mx-5;
    width: 30rem;
    height: 40rem;
}
@media (max-width: 640px) {
    .sub1_img {
        @apply hidden;
    }
    .sub2_img {
        @apply flex -ml-6 -mr-6;
    }
}
</style>
