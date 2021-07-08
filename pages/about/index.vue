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
                <p
                    v-for="(content, i) in $t('pageAbstract')"
                    :key="`abstract_${i}`"
                    class="w-full font-serif md:w-3/4 lg:w-3/4 leading-6"
                >
                    {{ content }}
                </p>
            </template>
        </banner>
        <div class="flex flex-wrap justify-center mx-2 my-7">
            <div v-for="(img, i) in introImgs" :key="`intro_img_${i}`">
                <div
                    class="w-32 md:w-56 lg:w-56 h-24 md:h-40 lg:h-40 bg-contain bg-no-repeat mx-2 my-3"
                    :style="getImgStyle(img)"
                ></div>
            </div>
        </div>
        <i18n-page-wrapper class="pt-4 px-8 md:px-57 lg:px-56">
            <i18n
                path="reasonTitle"
                tag="p"
                class="h3 my-2 text-base md:text-lg lg:text-lg"
            >
                <template #number>
                    <span class="highlight">{{ $t('reasonNumber') }}</span>
                </template>
            </i18n>
            <p class="w-full text-xs md:text-base lg:text-base">
                {{ $t('reason') }}
            </p>
            <div
                class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mx-2 my-10"
            >
                <div
                    v-for="img in reasonImgs"
                    :key="img.text"
                    class="flex flex-col items-center"
                >
                    <div
                        class="w-24 md:w-24 lg:w-24 h-24 md:h-24 lg:h-24 bg-contain bg-no-repeat mx-0 md:mx-10 lg:mx-10 my-5"
                        :style="getImgStyle(img.src)"
                    ></div>
                    <span class="text-xs md:text-base lg:text-base">{{
                        img.text
                    }}</span>
                </div>
            </div>
            <p class="h3 my-2 text-base md:text-lg lg:text-lg">
                {{ $t('activityTitle') }}
            </p>
            <div class="flex items-center justify-evenly my-10">
                <i18n
                    path="kindsOFTalk"
                    tag="span"
                    class="text-xs md:text-base lg:text-base"
                >
                    <template #talkNumber>
                        <span
                            class="paragraph-highlight text-5xl md:text-6xl lg:text-6xl"
                            >3</span
                        >
                    </template>
                </i18n>
                <span
                    class="paragraph-highlight text-5xl md:text-6xl lg:text-6xl"
                    >+</span
                >
                <i18n
                    path="kindsOfActivity"
                    tag="span"
                    class="text-xs md:text-base lg:text-base"
                >
                    <template #activityNumber>
                        <span
                            class="paragraph-highlight text-5xl md:text-6xl lg:text-6xl"
                            >7</span
                        >
                    </template>
                </i18n>
            </div>
            <p class="w-full text-xs md:text-base lg:text-base leading-6">
                {{ $t('activityDesc') }}
            </p>
            <ul class="m-0 md:m-12 lg:m-12 text-xs md:text-base lg:text-base">
                <li
                    v-for="(content, i) in $t('activityDetails')"
                    :key="`activity_detail${i}`"
                >
                    <p class="activity-detail">{{ content }}</p>
                </li>
            </ul>
            <p class="w-full text-xs md:text-base lg:text-base">
                {{ $t('moreInfo') }}
            </p>
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
import Cooperation from '@/static/img/about/Cooperation.svg'
import Share from '@/static/img/about/Share.svg'
import Skill from '@/static/img/about/Skill.svg'
import Speech from '@/static/img/about/Speech.svg'

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
            reasonImgs: {
                cooperationImg: {
                    src: Cooperation,
                    text: this.$t('cooperation'),
                },
                shareImg: {
                    src: Share,
                    text: this.$t('share'),
                },
                skillImg: {
                    src: Skill,
                    text: this.$t('skill'),
                },
                speechImg: {
                    src: Speech,
                    text: this.$t('speech'),
                },
            },
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
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>

<style scoped>
.h3 {
    @apply font-serif;
    color: #d1d1d1;
}
.highlight {
    color: #c2a53a;
}
.paragraph-highlight {
    @apply font-serif;
    color: #7568f6;
    text-shadow: 4px 6px 0px #4f4f4f;
    font-weight: bold;
    margin: auto 0.5rem;
}

.activity-detail {
    color: #9387ff;
}
</style>
