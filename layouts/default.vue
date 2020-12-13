<template>
    <div class="default-layout">
        <core-header />
        <Nuxt />
        <core-footer />
    </div>
</template>

<script>
import CoreFooter from '~/components/core/footer'
import CoreHeader from '~/components/core/header'

export default {
    components: {
        CoreHeader,
        CoreFooter,
    },
}
</script>

<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
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

.default-layout {
    display: grid;
    height: 100vh;
    grid-template-rows: 60px auto 280px;
    grid-template-columns: auto;
}
</style>
