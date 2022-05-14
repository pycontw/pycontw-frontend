<template>
    <div class="flex font-serif font-semibold w-full flex-1">
        <div class="image hidden md:block w-full md:w-6/6 md:h-64">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        backgroundImagePath: {
            type: String,
            default: ' ~/static/img/about/WebBanner.svg',
        },
    },
}
</script>

<style lang="postcss" scoped>
.image {
    margin: auto;
}
.flex {
    background-image: url('~/static/img/about/WebBanner.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
</style>
