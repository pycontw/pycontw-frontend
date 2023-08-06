<template>
    <div class="default-layout">
        <div class="default-layout__body">
            <Nuxt keep-alive :keep-alive-props="{ include: includeArr }" />
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {}
    },
    head() {
        return {}
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
