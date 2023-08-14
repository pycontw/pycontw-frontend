<template>
    <div class="py-10 md:py-24 lg:py-24">
        <banner>
            <core-h1 :title="$t('title')"></core-h1>
            <p class="leading-6">
                {{ $t('pageAbstract') }}
            </p>
        </banner>
        <i18n-page-wrapper>
            <div class="flex">
                <!--
                    A: the height of the div (contains texts) on the left side
                    B: the height of the div (contains imgs) on the right side
                    expected: A == B
                    it's almost impossible but
                    if the sum of the texts' length is too small,
                    A can be smaller than B
                -->
                <div class="flex w-full flex-col">
                    <p class="history__paragraph-title">
                        {{ $t('beforePyCon.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="beforePyCon.content"
                        >\
                        <template #pyctw2008>
                            <ext-link
                                href="http://wiki.python.org.tw/PycTW2008"
                                highlight
                                underline
                                >{{ $t('beforePyCon.pyctw2008') }}</ext-link
                            >
                        </template>
                        <template #pyctw2011>
                            <ext-link
                                href="http://wiki.python.org.tw/PycTW2011"
                                highlight
                                underline
                                >{{ $t('beforePyCon.pyctw2011') }}</ext-link
                            >
                        </template>
                    </i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2012.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2012.content"
                    >
                        <template #everybody-pays>
                            <ext-link
                                href="http://jessenoller.com/blog/2011/05/25/pycon-everybody-pays"
                                highlight
                                underline
                                >{{ $t('pycon2012.everybodypay') }}</ext-link
                            >
                        </template>
                    </i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2013.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2013.content"
                    ></i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2014.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2014.content"
                    ></i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2015.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2015.content"
                    ></i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2016.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2016.content"
                    >
                        <template #pycon-blog-2016>
                            <ext-link
                                href="https://pycontw.blogspot.com/2016/04/blog-post.html"
                                highlight
                                underline
                                >{{ $t('pycon2016.pyconBlog2016') }}</ext-link
                            >
                        </template>
                        <template #pycontw-flickr>
                            <ext-link
                                href="https://www.flickr.com/photos/pycon_tw/albums"
                                highlight
                                underline
                                >{{ $t('pycon2016.pyconTWFlickr') }}</ext-link
                            >
                        </template>
                    </i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2017.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2017.content"
                    ></i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2018.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2018.content"
                    ></i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2019.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2019.content"
                    ></i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2020.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2020.content"
                    >
                        <template #communityTrack>
                            <ext-link
                                href="https://tw.pycon.org/2020/en-us/conference/community-track/"
                                highlight
                                underline
                                >{{ $t('terms.communityTrack') }}</ext-link
                            >
                        </template>
                    </i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2021.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2021.content"
                    ></i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2022.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2022.content"
                    ></i18n>
                    <p class="history__paragraph-title">
                        {{ $t('pycon2023.title') }}
                    </p>
                    <i18n
                        tag="p"
                        class="history__paragraph-content"
                        path="pycon2023.content"
                    ></i18n>
                </div>
                <div
                    class="hidden flex-1 flex-col items-center justify-between md:flex"
                >
                    <div
                        v-for="(img, i) in imgs"
                        :key="`img_${i}`"
                        class="md:ml-12 lg:ml-20 xl:ml-28"
                    >
                        <div class="h-36 w-36" :style="getImgStyle(img)"></div>
                    </div>
                </div>
            </div>
        </i18n-page-wrapper>
    </div>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/about/history.i18n'
import AboutBanner from '@/static/img/about/Banner.svg'
import Banner from '@/components/core/layout/Banner'
import CoreH1 from '@/components/core/titles/H1'
import ExtLink from '@/components/core/links/ExtLink.vue'

export default {
    i18n,
    name: 'PageCommunity',
    components: {
        I18nPageWrapper,
        CoreH1,
        ExtLink,
        Banner,
    },
    data() {
        return {
            aboutBanner: AboutBanner,
            imgs: [
                require('~/static/img/about/history/1.svg'),
                require('~/static/img/about/history/2.svg'),
                require('~/static/img/about/history/3.svg'),
                require('~/static/img/about/history/4.svg'),
                require('~/static/img/about/history/5.svg'),
                require('~/static/img/about/history/6.svg'),
                require('~/static/img/about/history/7.svg'),
                require('~/static/img/about/history/8.svg'),
                require('~/static/img/about/history/9.svg'),
            ],
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
.history__paragraph-title {
    @apply mb-1 mt-1 text-left font-serif font-bold text-pink-700;
    font-size: 24px;
}
.history__paragraph-content {
    @apply mb-9 mt-1 leading-5 last:mb-0 md:leading-8;
    font-size: 16px;
}
@media (min-width: 768px) {
    .history__paragraph-title {
        font-size: 28px;
    }
    .history__paragraph-content {
        font-size: 18px;
    }
}
</style>
