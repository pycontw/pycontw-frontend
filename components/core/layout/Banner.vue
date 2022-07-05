<template>
    <div class="banner">
        <div class="banner-texts">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
}
</script>

<style lang="postcss" scoped>
.banner {
    @apply w-full flex items-center justify-center;
    @apply font-serif font-semibold;
    @apply bg-no-repeat bg-banner;
    @apply bg-banner-position md:bg-banner-position-md lg:bg-banner-position-lg;
    @apply bg-banner-size md:bg-banner-size-md;
    height: calc(100vh - 320px);
    min-height: 560px;
}

.banner-texts {
    @apply mx-1.5 md:mx-14 text-center;
    max-width: 920px;
}
</style>
