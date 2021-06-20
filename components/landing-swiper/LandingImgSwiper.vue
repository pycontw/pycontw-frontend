<template>
    <div class="swiper-collection">
        <CoolLightBox
            :items="lightBoxSettings.imgs"
            :index="lightBoxSettings.index"
            :slideshow="false"
            @close="lightBoxSettings.index = null"
        >
        </CoolLightBox>
        <div class="img-group">
            <div
                v-for="(imgGroup, groupIndex) in imgGroups"
                :key="$makeKey(groupIndex, 'light_box')"
                ref="container"
                class="swiper-container"
                :style="getShiftPosition(groupIndex)"
            >
                <div
                    v-for="(imgName, index) in imgGroup"
                    :key="$makeKey(index, 'light_box_container')"
                    class="swiper-wrapper"
                >
                    <div
                        ref="slide"
                        class="swiper-slide"
                        :data-src="getThumbnailPath(imgName)"
                        @mousedown="imgMouseDown($event, groupIndex, imgName)"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
    name: 'LandingImgSwiper',
    components: {
        CoolLightBox,
    },
    data() {
        return {
            lightBoxSettings: {
                imgs: [],
                index: null,
            },
            imgGroups: [
                ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9'],
                ['2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8'],
                ['3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7', '3-8'],
            ],
            imgPath: '/2021/img/landing-past-img/', // in dev mode, replace to /img/landing-past-img/
            oriImgPath: 'origin/',
            thumbnailPath: 'thumbnail/',
            relXCoords: [0, -105, 0], // init position
            limitXCoords: [0, 0, 0], // init
            shiftSetting: {
                moved: false,
                shift: 0,
                targetGroup: 0,
                targetImg: null,
            },
        }
    },
    mounted() {
        // Image lazy-loading
        for (const slideElement of this.$refs.slide) {
            if (slideElement.dataset && slideElement.dataset.src) {
                const img = new Image()
                img.src = slideElement.dataset.src
                img.onload = function () {
                    slideElement.style.backgroundImage = `url('${img.src}')`
                }
            }
        }

        // Image swiper shift limit
        for (const index in this.imgGroups) {
            this.limitXCoords[index] =
                window.innerWidth - 300 * this.imgGroups[index].length + 30
        }
    },
    methods: {
        getOriImgPath(imgName) {
            return `${this.imgPath + this.oriImgPath + imgName}.jpg`
        },
        getThumbnailPath(imgName) {
            return `${this.imgPath + this.thumbnailPath + imgName}.jpg`
        },
        openLightBox(imgName) {
            const imageDir = this.getOriImgPath(imgName)
            this.lightBoxSettings.imgs = [imageDir]
            this.lightBoxSettings.index = 0
        },

        // Swipper part
        getShiftPosition(index) {
            return { transform: 'translateX(' + this.relXCoords[index] + 'px)' }
        },
        imgMouseDown(event, groupIndex, imgName) {
            this.shiftSetting.moved = false
            this.shiftSetting.targetGroup = groupIndex
            this.shiftSetting.shiftX = event.clientX
            this.shiftSetting.targetImg = imgName
            document.addEventListener('mousemove', this.imgMouseMove)
            document.addEventListener('mouseup', this.imgMouseUp)
        },
        imgMouseMove(event) {
            this.shiftSetting.moved = true
            this.imgMoveAt(event.pageX)
        },
        imgMoveAt(pageX) {
            let newX =
                this.relXCoords[this.shiftSetting.targetGroup] +
                pageX -
                this.shiftSetting.shiftX

            // Check limit
            if (newX < this.limitXCoords[this.shiftSetting.targetGroup]) {
                newX = this.limitXCoords[this.shiftSetting.targetGroup]
            }
            if (newX > 0) {
                newX = 0
            }

            // Update for array
            this.$set(this.relXCoords, this.shiftSetting.targetGroup, newX)
            this.shiftSetting.shiftX = pageX
        },
        imgMouseUp(event) {
            if (!this.shiftSetting.moved) {
                this.openLightBox(this.shiftSetting.targetImg)
            }
            document.removeEventListener('mousemove', this.imgMouseMove)
            document.removeEventListener('mouseup', this.imgMouseUp)
        },
    },
}
</script>

<style scoped>
.swiper-collection {
    background-color: #121023;
    width: 100%;
    overflow-x: hidden;
}
.swiper-container {
    white-space: nowrap;
    line-height: 0;
    margin: 37px 0;
}
.swiper-container:first-of-type {
    margin: 0 0 37px 0;
}
.swiper-container:last-of-type {
    margin: 37px 0 0 0;
}
.swiper-wrapper {
    display: inline-block;
    margin: 0 15px;
}
.swiper-slide {
    width: 270px;
    height: 210px;
    background-color: gray;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.swiper-container > .swiper-wrapper:first-of-type {
    margin: 0 15px 0 0;
}
.swiper-container > .swiper-wrapper:last-of-type {
    margin: 0 0 0 15px;
}
</style>
