<template>
    <div class="default-layout">
        <div class="default-layout__header">
            <core-header />
            <announce-bar />
        </div>
        <div class="default-layout__body">
            <Nuxt />
            <core-footer />
        </div>
    </div>
</template>

<script>
import CoreFooter from '~/components/core/footer/Footer'
import CoreHeader from '~/components/core/header/Header'
import AnnounceBar from '~/components/core/announce-bar/AnnounceBar'

export default {
    components: {
        CoreHeader,
        CoreFooter,
        AnnounceBar,
    },
    head() {
        return {
            titleTemplate: (titleChunk) => {
                const title = 'PyCon APAC 2022'
                return titleChunk && titleChunk !== title
                    ? `${titleChunk} | ${title}`
                    : title
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'PyCon APAC 2022',
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'PyCon APAC 2022',
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: 'PyCon APAC 2022',
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: 'https://tw.pycon.org/2021/og-img.jpg',
                },
                {
                    hid: 'og:url',
                    property: 'og:url',
                    content: 'https://tw.pycon.org' + this.$route.path,
                },
                { hid: 'og:type', property: 'og:type', content: 'website' },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/2022/favicon.ico',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;600;700&display=swap',
                },
                {
                    rel: 'canonical',
                    href: 'https://tw.pycon.org' + this.$route.path,
                },
                {
                    rel: 'alternate',
                    hreflang: 'x-default',
                    href: 'https://tw.pycon.org/2021/en-us',
                },
                {
                    rel: 'alternate',
                    hreflang: 'en-us',
                    href: 'https://tw.pycon.org/2021/en-us',
                },
                {
                    rel: 'alternate',
                    hreflang: 'zh-hant-tw',
                    href: 'https://tw.pycon.org/2021/zh-hant',
                },
            ],
            script: [
                {
                    type: 'application/ld+json',
                    json: {
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'PyCon Taiwan',
                        url: 'https://tw.pycon.org',
                        logo: 'https://tw.pycon.org/2021/og-img.jpg',
                        sameAs: [
                            'https://www.facebook.com/pycontw/',
                            'https://twitter.com/PyConTW/',
                            'https://www.linkedin.com/company/pycontw',
                            'https://www.youtube.com/channel/UCHLnNgRnfGYDzPCCH8qGbQw',
                            'https://instagram.com/pycontw/',
                            'https://github.com/pycontw/',
                            'https://pycontw.blogspot.com/',
                        ],
                    },
                },
            ],
        }
    },
}
</script>

<style>
html {
    @apply font-sans;
    font-size: 20px;
    color: #f0ebf5;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background: #121023;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.default-layout__header {
    @apply fixed w-full;
    z-index: 1000;
    height: 52px;
}

.default-layout__body {
    display: grid;
    grid-template-columns: 100%;
}

body.modal-open {
    overflow: hidden;
}
</style>
