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
    @apply flex w-full items-center justify-center;
    @apply font-serif font-semibold;
    @apply bg-banner bg-no-repeat;
    @apply bg-banner-position md:bg-banner-position-md lg:bg-banner-position-lg;
    @apply bg-banner-size md:bg-banner-size-md;
    height: calc(100vh - 320px);
    min-height: 560px;
}

.banner-texts {
    @apply mx-1.5 text-center md:mx-14;
    max-width: 930px;
}
</style>
