<template>
    <div class="flex font-serif font-semibold w-full flex-1">
        <div class="grid col-start-1 row-start-1">
            <img src=backgroundImagePath1 alt="" class="w-full h-64 object-cover sm:hidden md:block"></img>
            <img src=backgroundImagePath2 alt="" class="w-full h-64 object-cover sm:block md:hidden"></img>
        </div>
        <div class="grid col-start-1 row-start-1 items-start mx-8 w-full text-xs md:w-3/6 md:text-base">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        backgroundImagePath1: {
            type: String,
            default: ' ~/static/img/about/WebBanner.svg',
        },
        backgroundImagePath2: {
            type: String,
            default: ' ~/static/img/about/RWDBanner.svg',
        },
    },
}
</script>

<style lang="postcss" scoped>
.default {
    background-image: backgroundImagePath;
    display: flex;
    text-align: center;
}
</style>
