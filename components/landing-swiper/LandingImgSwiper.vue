<template>
    <div class="swiperCollection">
        <CoolLightBox
            :items="lightBoxSettings.imgs"
            :index="lightBoxSettings.index"
            :slideshow="false"
            @close="lightBoxSettings.index = null"
        >
        </CoolLightBox>
        <div
            v-for="(imgGroup, groupIndex) in imgGroups"
            :key="'imgGroup' + groupIndex"
            class="imgGroup"
        >
            <swiper :ref="'mySwiper' + groupIndex" :options="swiperOptions">
                <swiper-slide v-for="(imgName, index) in imgGroup" :key="index"
                    ><img
                        :src="`${require(`@/static/img/landing-past-img/thumbnail/${imgName}.jpg`)}`"
                        @click="openLightBox(imgName)"
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
            lightBoxSettings: {
                imgs: [],
                index: null,
            },
            imgGroups: [
                ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9'],
                ['2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8'],
                ['3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7', '3-8'],
            ],
        }
    },
    computed: {
        swiper1() {
            return this.$refs.mySwiper0[0].$swiper
        },
        swiper2() {
            return this.$refs.mySwiper1[0].$swiper
        },
        swiper3() {
            return this.$refs.mySwiper2[0].$swiper
        },
    },
    mounted() {
        this.swiper1.slideTo(1, 0, false)
        this.swiper2.slideTo(5, 0, false)
        this.swiper3.slideTo(3, 0, false)
    },
    methods: {
        openLightBox(imgName) {
            const imageDir = `${require(`@/static/img/landing-past-img/origin/${imgName}.jpg`)}`
            this.lightBoxSettings.imgs = [imageDir]
            this.lightBoxSettings.index = 0
        },
    },
}
</script>

<style scoped>
.swiperCollection {
    background-color: #121023;
    padding-bottom: 5px;
}
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
