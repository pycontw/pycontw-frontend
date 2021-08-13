<template>
    <div class="default-layout">
        <div class="default-layout__body">
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
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

.default-layout__body {
    display: grid;
    grid-template-columns: 100%;
}

body.modal-open {
    overflow: hidden;
}
</style>
