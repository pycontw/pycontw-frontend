<template>
    <div class="update1 h-96 font-serif font-semibold w-full flex-1">
        <div class="image md:block w-full md:w-6/6 md:h-64">
            <slot name="standard"></slot>
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
.update1 {
    background-image: url('~/static/img/about/WebBanner.svg');
    background-repeat: no-repeat;
    background-position: 75% 75%;
    background-size: 75%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.update2 {
    background-image: url('~/static/img/about/RWDBanner.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
</style>
