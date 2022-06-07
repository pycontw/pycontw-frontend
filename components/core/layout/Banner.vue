<template>
    <div class="container">
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
.container {
    @apply h-96 w-full flex-1;
    @apply font-serif font-semibold;
    background-image: url('~/static/img/banner/BannerBody.svg');
}
.mainstyle {
    @apply flex flex-col justify-center bg-center bg-no-repeat;
    @apply text-center;
}
.horizstyle {
    @apply flex invisible md:visible md:mt-20 md:h-full;
    @apply bg-contain;
    background-image: url('~/static/img/banner/WEB2.png');
}
.vertstyle {
    @apply w-full h-64 mt-16 md:invisible md:w-full md:h-0;
    background-image: url('~/static/img/banner/RWD2.png');
}
</style>
