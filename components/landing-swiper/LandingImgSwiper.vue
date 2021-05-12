<template>
    <div>
        <CoolLightBox
            :items="images"
            :index="index"
            :slideshow="false"
            @close="index = null"
        >
        </CoolLightBox>
        <div class="imgGroup">
            <swiper ref="mySwiper1" :options="swiperOptions">
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/1-1.jpg"
                        @click="openLightBox('1-1')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/1-2.jpg"
                        @click="openLightBox('1-2')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/1-3.jpg"
                        @click="openLightBox('1-3')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/1-4.jpg"
                        @click="openLightBox('1-4')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/1-5.jpg"
                        @click="openLightBox('1-5')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/1-6.jpg"
                        @click="openLightBox('1-6')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/1-7.jpg"
                        @click="openLightBox('1-7')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/1-8.jpg"
                        @click="openLightBox('1-8')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/1-9.jpg"
                        @click="openLightBox('1-9')"
                /></swiper-slide>
            </swiper>
        </div>
        <div class="imgGroup">
            <swiper ref="mySwiper2" :options="swiperOptions">
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/2-1.jpg"
                        @click="openLightBox('2-1')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/2-2.jpg"
                        @click="openLightBox('2-2')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/2-3.jpg"
                        @click="openLightBox('2-3')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/2-4.jpg"
                        @click="openLightBox('2-4')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/2-5.jpg"
                        @click="openLightBox('2-5')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/2-6.jpg"
                        @click="openLightBox('2-6')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/2-7.jpg"
                        @click="openLightBox('2-7')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/2-8.jpg"
                        @click="openLightBox('2-8')"
                /></swiper-slide>
            </swiper>
        </div>
        <div class="imgGroup">
            <swiper ref="mySwiper3" :options="swiperOptions">
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/3-1.jpg"
                        @click="openLightBox('3-1')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/3-2.jpg"
                        @click="openLightBox('3-2')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/3-3.jpg"
                        @click="openLightBox('3-3')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/3-4.jpg"
                        @click="openLightBox('3-4')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/3-5.jpg"
                        @click="openLightBox('3-5')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/3-6.jpg"
                        @click="openLightBox('3-6')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/3-7.jpg"
                        @click="openLightBox('3-7')"
                /></swiper-slide>
                <swiper-slide
                    ><img
                        src="@/assets/landing-past-img/thumbnail/3-8.jpg"
                        @click="openLightBox('3-8')"
                /></swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
    name: 'LandingImgSwiper',
    components: {
        Swiper,
        SwiperSlide,
        CoolLightBox,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 'auto',
                spaceBetween: 30,
                freeMode: true,
                preloadImages: true,
                initialSlide: 0,
            },
            images: [],
            index: null,
        }
    },
    computed: {
        swiper1() {
            return this.$refs.mySwiper1.$swiper
        },
        swiper2() {
            return this.$refs.mySwiper2.$swiper
        },
        swiper3() {
            return this.$refs.mySwiper3.$swiper
        },
    },
    mounted() {
        this.swiper1.slideTo(1, 0, false)
        this.swiper2.slideTo(5, 0, false)
        this.swiper3.slideTo(3, 0, false)
    },
    methods: {
        openLightBox(imgName) {
            const imageDir = `/pycontw-2021/_nuxt/assets/landing-past-img/thumbnail/${imgName}.jpg`
            // const imageDir = `/pycontw-2021/_nuxt/assets/landing-past-img/origin/${imgName}.jpg`
            this.images = [imageDir]
            this.index = 0
        },
    },
}
</script>

<style scoped>
.imgGroup {
    margin-bottom: 40px;
}
.swiper-wrapper {
    box-sizing: border-box;
}
.swiper-slide {
    display: inline-flex;
    width: auto;
}
</style>
