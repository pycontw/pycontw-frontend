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
            ],
            link: [
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
            ],
        }
    },
}
</script>

<style>
html {
    @apply bg-black-900 font-sans text-primary-100;
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

.default-layout__body {
    display: grid;
    grid-template-columns: 100%;
}

body.modal-open {
    overflow: hidden;
}

.page-enter-active,
.page-leave-active {
    transition: 0.3s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}
</style>
