<template>
    <div class="h-96 font-serif font-semibold w-full flex-1">
        <div class="maxpage invisible md:visible md: w-full md:h-64">
            <slot name="standard"></slot>
        </div>
        <div class="minpage w-6/6 h-64 md:invisible md:w-full md:h-0">
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
.maxpage {
    background-image: url('~/static/img/about/WebBanner.svg');
    background-repeat: no-repeat;
    background-position: 75% 75%;
    background-size: 75%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.minpage {
    background-image: url('~/static/img/about/RWDBanner.svg');
    background-repeat: no-repeat;
    background-position: 0% 65%;
    background-size: 150%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    word-wrap: break-word;
}
</style>
