<template>
    <div class="py-10 md:py-24 lg:py24">
        <banner>
            <template #default>
                <div
                    class="hidden md:block md:w-full md:h-full"
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
        <i18n-page-wrapper class="pt-8 px-8 md:px-57 lg:px-56">
            <div class="flex flex-col w-full m-auto">
                <p class="paragraph-title font-bold text-base md:text-lg">
                    {{ $t('beforePyCon.title') }}
                </p>
                <i18n
                    tag="p"
                    class="text-xs md:text-base leading-5 md:leading-8"
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
                <p class="paragraph-title font-bold text-base md:text-lg">
                    {{ $t('pycon2012.title') }}
                </p>
                <i18n
                    tag="p"
                    class="text-xs md:text-base leading-5 md:leading-8"
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
                    <template #pycon-review-2012>
                        <ext-link
                            href="https://yyc.solvcon.net/writing/2012/pycontw2012_finale.html"
                            highlight
                            underline
                            >{{ $t('pycon2012.pyconReview2012') }}</ext-link
                        >
                    </template>
                    <template #pycon-review-2013>
                        <ext-link
                            href="https://yyc.solvcon.net/writing/2013/after_pycontw_2013/index.html"
                            highlight
                            underline
                            >{{ $t('pycon2012.pyconReview2013') }}</ext-link
                        >
                    </template>
                </i18n>
                <p class="paragraph-title font-bold text-base md:text-lg">
                    {{ $t('pycon2014.title') }}
                </p>
                <i18n
                    tag="p"
                    class="text-xs md:text-base leading-5 md:leading-8"
                    path="pycon2014.content"
                >
                    <template #check-io>
                        <ext-link
                            href="https://checkio.org/"
                            highlight
                            underline
                            >{{ $t('pycon2014.checkIO') }}</ext-link
                        >
                    </template>
                </i18n>
                <p class="paragraph-title font-bold text-base md:text-lg">
                    {{ $t('pycon2015.title') }}
                </p>
                <i18n
                    tag="p"
                    class="text-xs md:text-base leading-5 md:leading-8"
                    path="pycon2015.content"
                ></i18n>
                <p class="paragraph-title font-bold text-base md:text-lg">
                    {{ $t('pycon2016.title') }}
                </p>
                <i18n
                    tag="p"
                    class="text-xs md:text-base leading-5 md:leading-8"
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
                <p class="paragraph-title font-bold text-base md:text-lg">
                    {{ $t('pycon2017.title') }}
                </p>
                <i18n
                    tag="p"
                    class="text-xs md:text-base leading-5 md:leading-8"
                    path="pycon2017.content"
                ></i18n>
                <p class="paragraph-title font-bold text-base md:text-lg">
                    {{ $t('pycon2018.title') }}
                </p>
                <i18n
                    tag="p"
                    class="text-xs md:text-base leading-5 md:leading-8"
                    path="pycon2018.content"
                ></i18n>
                <p class="paragraph-title font-bold text-base md:text-lg">
                    {{ $t('pycon2019.title') }}
                </p>
                <i18n
                    tag="p"
                    class="text-xs md:text-base leading-5 md:leading-8"
                    path="pycon2019.content"
                ></i18n>
                <p class="paragraph-title font-bold text-base md:text-lg">
                    {{ $t('pycon2020.title') }}
                </p>
                <i18n
                    tag="p"
                    class="text-xs md:text-base leading-5 md:leading-8"
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
                <p class="paragraph-title font-bold text-base md:text-lg">
                    {{ $t('pycon2021.title') }}
                </p>
                <i18n
                    tag="p"
                    class="text-xs md:text-base leading-5 md:leading-8"
                    path="pycon2021.content"
                ></i18n>
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
    @apply font-serif;
    color: #c2a53a;
}
</style>
