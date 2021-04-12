<template>
    <div class="default-layout">
        <core-header />
        <announce-bar />
        <Nuxt />
        <core-footer />
    </div>
</template>

<script>
import CoreFooter from '~/components/core/footer'
import CoreHeader from '~/components/core/header'
import AnnounceBar from '~/components/core/announce-bar'

export default {
    components: {
        CoreHeader,
        CoreFooter,
        AnnounceBar,
    },
    head() {
        return {
            link: [
                // add url without year prefix as canonical url
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
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    color: #c7c7c7;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background: #212121;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.default-layout {
    display: grid;
    height: 100vh;
    grid-template-rows: 48px auto auto auto;
    grid-template-columns: 100%;
}
</style>
