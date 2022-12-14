<template>
    <div class="default-layout">
        <div class="default-layout__header">
            <core-header />
        </div>
        <div class="default-layout__body">
            <Nuxt keep-alive :keep-alive-props="{ include: includeArr }" />
            <core-footer />
        </div>
    </div>
</template>

<script>
import CoreFooter from '~/components/core/footer/Footer'
import CoreHeader from '~/components/core/header/Header'

export default {
    components: {
        CoreHeader,
        CoreFooter,
    },
    data() {
        return {
            includeArr: ['PageConferenceSchedule'],
        }
    },
    head() {
        const conferenceName = this.$store.state.configs.conferenceName
        const conferenceYear = this.$store.state.configs.conferenceYear
        return {
            titleTemplate: (titleChunk) => {
                const title = `${conferenceName} ${conferenceYear}`
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
                    content: `${conferenceName} ${conferenceYear}`,
                },
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: `${conferenceName} ${conferenceYear}`,
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: `${conferenceName} ${conferenceYear}`,
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: 'https://tw.pycon.org/2022/og-img.jpg',
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
                    href: `/${conferenceYear}/favicon.ico`,
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
                    href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;600;700;900&family=Source+Sans+Pro:wght@400;600;700;900&display=swap',
                },
                {
                    rel: 'canonical',
                    href: 'https://tw.pycon.org' + this.$route.path,
                },
                {
                    rel: 'alternate',
                    hreflang: 'x-default',
                    href: `https://tw.pycon.org/${conferenceYear}/en-us`,
                },
                {
                    rel: 'alternate',
                    hreflang: 'en-us',
                    href: `https://tw.pycon.org/${conferenceYear}/en-us`,
                },
                {
                    rel: 'alternate',
                    hreflang: 'zh-hant-tw',
                    href: `https://tw.pycon.org/${conferenceYear}/zh-hant`,
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
                        logo: `https://tw.pycon.org/${conferenceYear}/og-img.jpg`,
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
    @apply font-sans bg-black-900 text-primary-100;
    font-size: 20px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
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
