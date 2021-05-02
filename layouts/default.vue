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
    font-size: 20px;
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
