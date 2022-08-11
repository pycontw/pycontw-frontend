<template>
    <div
        v-if="$store.state.relatedData.length > 1"
        class="relatedCardCollection"
    >
        <div class="related__title">
            <img
                src="@/static/img/background/r3.svg"
                class="related__title__logo"
            />
            <p class="related__title__text">相近的演講主題</p>
        </div>
        <div class="related__card__box">
            <div class="related__card">
                <div
                    ref="cardContent"
                    class="related__card_content"
                    style="transform: translateX(0px)"
                >
                    <slot></slot>
                </div>
            </div>
            <div class="related__arrow__box">
                <div
                    v-if="translateX < 0"
                    class="related__arrow related__arrow__left"
                    @click="rollPrev"
                >
                    <fa :icon="['fa', 'chevron-left']"></fa>
                </div>
                <div
                    v-if="translateX > -rollLength + cardContentWidth"
                    class="related__arrow related__arrow__right"
                    @click="rollNext"
                >
                    <!-- <div
                    v-if="true"
                    class="related__arrow related__arrow__right"
                    @click="rollNext"
                > -->
                    <fa :icon="['fa', 'chevron-right']"></fa>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    i18n,
    name: 'RelatedCardCollection',
    data() {
        return {
            translateX: 0,
            rollLength: null,
            cardWidth: 200,
            offsetWidth: '',
            cardContentWidth: '',
        }
    },
    watch: {
        '$store.state.relatedData'() {
            // this.setRollLength()
            this.setCardWidth()
        },
    },
    mounted() {
        const vm = this
        this.offsetWidth = document.body.offsetWidth
        window.onresize = function () {
            vm.offsetWidth = document.body.offsetWidth
            // console.log('offsetWidth: ' + vm.offsetWidth)
            // vm.$nextTick(function () {
            //     vm.cardContentWidth = vm.$refs.cardContent.clientWidth
            //     console.log('cardContentWidth: ' + vm.cardContentWidth)
            //     vm.cardWidth = vm.$refs.cardContent.children[0].clientWidth
            //     console.log('cardWidth: ' + vm.cardWidth)
            // })
        }
    },
    methods: {
        // setRollLength() {
        //     this.rollLength =
        //         (this.$store.state.relatedData.length - 1) * this.cardWidth
        // },
        setCardWidth() {
            // this.cardContentWidth = this.$refs.cardContent.clientWidth
            // this.cardWidth = this.$refs.cardContent.children[0].clientWidth
            const margin1 = 15 + 24
            let margin2 = 18
            this.cardContentWidth = this.offsetWidth - (margin1 + margin2) * 2
            if (this.offsetWidth < 600) {
                this.cardContentWidth =
                    this.offsetWidth - (margin1 + margin2) * 2
                this.cardWidth =
                    (this.offsetWidth - (margin1 + margin2) * 2) * 1
            } else if (this.offsetWidth >= 600 && this.offsetWidth < 834) {
                margin2 = 40
                this.cardContentWidth =
                    this.offsetWidth - (margin1 + margin2) * 2
                this.cardWidth = this.cardContentWidth * 0.5
            } else if (this.offsetWidth >= 834 && this.offsetWidth < 1194) {
                margin2 = 80
                this.cardContentWidth =
                    this.offsetWidth - (margin1 + margin2) * 2
                this.cardWidth = this.cardContentWidth * 0.34
            } else if (this.offsetWidth >= 1194 && this.offsetWidth < 1440) {
                margin2 = 160
                this.cardContentWidth =
                    this.offsetWidth - (margin1 + margin2) * 2
                this.cardWidth = this.cardContentWidth * 0.34
            } else if (this.offsetWidth >= 1440) {
                margin2 = 160
                this.cardContentWidth =
                    this.offsetWidth - (margin1 + margin2) * 2
                this.cardWidth = this.cardContentWidth * 0.25
            }
            this.rollLength =
                (this.$store.state.relatedData.length - 1) * this.cardWidth
        },
        rollPrev() {
            this.setCardWidth()
            this.translateX += this.cardContentWidth
            if (this.translateX > 0) {
                this.translateX = 0
            }
            this.$refs.cardContent.style.transform =
                'translateX(' + this.translateX + 'px)'
        },
        rollNext() {
            this.setCardWidth()
            // this.setRollLength()
            this.translateX -= this.cardContentWidth
            if (this.translateX < -this.rollLength + this.cardContentWidth) {
                this.translateX = -this.rollLength + this.cardContentWidth
            }
            this.$refs.cardContent.style.transform =
                'translateX(' + this.translateX + 'px)'
            // console.log(this.cardWidth)
        },
    },
}
</script>

<style lang="postcss" scoped>
.relatedCardCollection {
    @apply flex flex-col mx-3;
}
.related__title {
    @apply flex relative top-20;
}
.related__title__logo {
    @apply -rotate-45 w-14 relative -top-4;
}
.related__title__text {
    @apply font-serif font-black text-xl h-8;
    background: linear-gradient(120deg, #9e67c3, #6a67d6, #93cac6);
    background-clip: text;
    color: transparent;
}

.related__card__box {
    @apply relative my-20;
}
.related__arrow__box {
    @apply absolute flex z-10 left-0 right-0 bottom-full -top-full items-center;
}
.related__arrow {
    @apply absolute w-6 h-6 bg-pink-700 text-black-900 top-[145%] text-[12px] leading-[30px] rounded-full text-center cursor-default lg:cursor-pointer select-none hover:bg-primary-500 hover:text-white;
}
.related__arrow__left {
    @apply -left-3;
}
.related__arrow__right {
    @apply -right-3;
}

.related__card {
    @apply relative overflow-hidden pb-2.5 pr-2.5;
}
.related__card_content {
    @apply flex relative transition ease-out duration-300;
}
.relatedCardCollection .speechCard {
    @apply min-w-[98%] m-2 sm:min-w-[47%] md:min-w-[32%] md:m-[1%] xl:min-w-[23.5%] xl:m-2;
}
</style>
