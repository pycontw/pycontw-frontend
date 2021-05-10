<template>
    <div>
        <div class="imgGroup">
            <swiper ref="mySwiper1" :options="swiperOptions">
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/1-1.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/1-2.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/1-3.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/1-4.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/1-5.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/1-6.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/1-7.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/1-8.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/1-9.jpg"
                /></swiper-slide>
            </swiper>
        </div>
        <div class="imgGroup">
            <swiper ref="mySwiper2" :options="swiperOptions">
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/2-1.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/2-2.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/2-3.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/2-4.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/2-5.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/2-6.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/2-7.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/2-8.jpg"
                /></swiper-slide>
            </swiper>
        </div>
        <div class="imgGroup">
            <swiper ref="mySwiper3" :options="swiperOptions">
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/3-1.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/3-2.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/3-3.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/3-4.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/3-5.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/3-6.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/3-7.jpg"
                /></swiper-slide>
                <swiper-slide
                    ><img src="@/assets/landing-past-img/thumbnail/3-8.jpg"
                /></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
    name: 'LandingImgSwiper',
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 4,
                spaceBetween: 30,
                freeMode: true,
            },
        }
    },
    computed: {
        swiper2() {
            return this.$refs.mySwiper2.$swiper
        },
    },
    mounted() {
        this.swiper2.slideTo(3, 0, false)
    },
}
</script>

<style scoped>
.imgGroup {
    margin-bottom: 40px;
}
</style>
