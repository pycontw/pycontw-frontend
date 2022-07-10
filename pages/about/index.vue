<template>
    <div class="py-10 md:py-24 lg:py-24">
        <banner>
            <core-h1 :title="$t('title')"></core-h1>
            <p
                v-for="(content, i) in $t('pageAbstract')"
                :key="`abstract_${i}`"
            >
                {{ content }}
            </p>
        </banner>
        <i18n-page-wrapper :use-bg-decoration="false">
            <i18n path="reasonTitle" tag="p" class="title">
                <template #number>
                    <span class="highlight">{{ $t('reasonNumber') }}</span>
                </template>
            </i18n>
            <p class="description">
                {{ $t('reason') }}
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 mx-2 my-7 md:my-16">
                <div v-for="(img, i) in introImgs" :key="`intro_img_${i}`">
                    <div
                        class="
                            w-32
                            md:w-44
                            h-24
                            md:h-40
                            bg-contain bg-no-repeat
                            md:mx-2
                            my-3
                            flex
                            items-center
                            justify-center
                        "
                        :style="getImgStyle(img.src)"
                    >
                        <span
                            class="font-serif font-bold text-xs md:text-base"
                            >{{ img.text }}</span
                        >
                    </div>
                </div>
            </div>
            <p class="title">
                {{ $t('activityTitle') }}
            </p>
            <p class="description">
                {{ $t('activityDesc') }}
            </p>
            <div class="flex items-center justify-evenly my-10">
                <i18n
                    path="kindsOFTalk"
                    tag="span"
                    class="text-xs md:text-base lg:text-base"
                >
                    <template #talkNumber>
                        <span class="paragraph-highlight text-5xl md:text-6xl"
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
                        <span class="paragraph-highlight text-5xl md:text-6xl"
                            >7</span
                        >
                    </template>
                </i18n>
            </div>
            <ul
                class="
                    m-0
                    md:m-12
                    lg:m-12
                    text-xs
                    md:text-base
                    lg:text-base
                    md:list-disc
                "
            >
                <li
                    v-for="(content, i) in $t('activityDetails')"
                    :key="`activity_detail${i}`"
                >
                    <p class="activity-detail">{{ content }}</p>
                </li>
            </ul>
            <p class="description">
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
            introImgs: [
                {
                    src: IntroImg1,
                    text: this.$i18n.t('skill'),
                },
                {
                    src: IntroImg2,
                    text: this.$i18n.t('speech'),
                },
                {
                    src: IntroImg3,
                    text: this.$i18n.t('share'),
                },
                {
                    src: IntroImg4,
                    text: this.$i18n.t('cooperation'),
                },
            ],
        }
    },
    methods: {
        getImgStyle(img) {
            return {
                'background-image': `url(${img})`,
                'background-repeat': 'no-repeat',
                'background-position': 'center center',
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
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>

<style scoped>
.title {
    @apply font-serif text-primary-100 my-3 text-base md:text-lg lg:text-lg font-bold;
}

.description {
    @apply w-full text-xs md:text-base lg:text-base;
}

.highlight {
    @apply text-primary-500;
}
.paragraph-highlight {
    @apply font-serif;
    color: #7568f6;
    text-shadow: 4px 6px 0px #4f4f4f;
    font-weight: bold;
    margin: auto 0.5rem;
}

.activity-detail {
    @apply text-primary-500;
}
</style>
