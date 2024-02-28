<template>
    <div>
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
            <i18n path="reasonTitle" tag="p" class="section-header">
                <template #number>
                    <span class="section-header section-header--highlight">{{
                        $t('reasonNumber')
                    }}</span>
                </template>
            </i18n>
            <p class="section-description">
                {{ $t('reason') }}
            </p>
            <div class="img-group">
                <div v-for="(img, i) in introImgs" :key="`intro_img_${i}`">
                    <div class="img" :style="getImgStyle(img.src)">
                        <span class="img__text">{{ img.text }}</span>
                    </div>
                </div>
            </div>
            <p class="section-header">
                {{ $t('activityTitle') }}
            </p>
            <p class="section-description">
                {{ $t('activityDesc') }}
            </p>
            <div class="section-wrapper">
                <i18n path="kindsOFTalk" tag="span" class="section-description">
                    <template #talkNumber>
                        <span
                            class="section-description section-description--highlight"
                            >3</span
                        >
                    </template>
                </i18n>
                <span class="section-description section-description--highlight"
                    >+</span
                >
                <i18n
                    path="kindsOfActivity"
                    tag="span"
                    class="section-description"
                >
                    <template #activityNumber>
                        <span
                            class="section-description section-description--highlight"
                            >6</span
                        >
                    </template>
                </i18n>
            </div>
            <ul class="unordered-list">
                <li
                    v-for="(content, i) in $t('activityDetails')"
                    :key="`activity_detail${i}`"
                >
                    <p class="unordered-list__item">{{ content }}</p>
                </li>
            </ul>
            <p class="section-description">
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
.section-header {
    @apply my-3 font-serif text-base font-bold text-primary-100 md:text-lg;
}
.section-header--highlight {
    @apply text-primary-500;
}

.section-description {
    @apply text-xs md:text-base;
}

.section-wrapper {
    @apply my-10 flex items-center justify-evenly;
}

.section-description--highlight {
    @apply font-serif text-5xl md:text-6xl;
    color: #7568f6;
    text-shadow: 4px 6px 0px #4f4f4f;
    font-weight: bold;
    margin: auto 0.5rem;
}

.img-group {
    @apply mx-2 my-7 grid grid-cols-2 md:my-16 md:grid-cols-4;
}

.img {
    @apply my-3 h-24 w-32 md:mx-2 md:h-40 md:w-44;
    @apply bg-contain bg-no-repeat;
    @apply flex items-center justify-center;
}

.img__text {
    @apply font-serif text-xs font-bold md:text-base;
}

.unordered-list {
    @apply m-0 text-xs md:m-12 md:list-disc md:text-base;
}

.unordered-list__item {
    @apply text-primary-500;
}
</style>
