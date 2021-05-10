<template>
    <div class="swiperCollectnRoot">
        <div><landing-img-swiper /></div>
    </div>
</template>

<script>
import { LandingImgSwiper } from '.'
export default {
    name: 'LandingImgSwiperCollection',
    components: {
        LandingImgSwiper,
    },
}
</script>

<style scoped>
.swiperCollectnRoot {
    background-color: #121023;
    padding-bottom: 5px;
}
</style>
