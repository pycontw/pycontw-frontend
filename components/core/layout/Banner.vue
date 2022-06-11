<template>
    <div class="bannercontainer">
        <div class="mainstyle horizstyle">
            <slot name="standard"></slot>
        </div>
        <div class="mainstyle vertstyle">
            <slot name="standard"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
}
</script>

<style lang="postcss" scoped>
.bannercontainer {
    @apply w-full mx-auto flex-1;
    @apply font-serif font-semibold;
    background-image: url('~/static/img/banner/BannerBody.svg');
}
.mainstyle {
    @apply flex-col bg-center bg-no-repeat bg-contain;
    @apply text-center;
}
.horizstyle {
    @apply invisible h-0;
    @apply md:visible md:mt-20 md:h-96 md:w-full md:pt-20;
    background-image: url('~/static/img/banner/WEB2.png');
}
.vertstyle {
    @apply w-full mt-16 pt-24 h-96;
    @apply md:mt-0 md:pt-0 md:h-0 md:invisible md:w-full;
    background-image: url('~/static/img/banner/RWD2.png');
}
</style>
