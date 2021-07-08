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
                const title = 'PyCon Taiwan 2021'
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
                { hid: 'description', name: 'description', content: '' },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: 'PyCon Taiwan 2021',
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: 'PyCon Taiwan 2021',
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: require('@/static/og-img.jpg'),
                },
                { hid: 'og:type', property: 'og:type', content: 'website' },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/2021/favicon.ico',
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
                    href:
                        'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;600;700&display=swap',
                },

                {
                    rel: 'canonical',
                    href: 'https://tw.pycon.org' + this.$route.path,
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
    color: #c7c7c7;
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
    height: 48px;
}

.default-layout__body {
    display: grid;
    grid-template-columns: 100%;
}
</style>
