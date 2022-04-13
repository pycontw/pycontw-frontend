<template>
    <div id="page-wrapper" :style="backgroundStyle">
        <div :class="classObject">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import bgImg1 from '@/static/img/background/l1.svg'
import bgImg2 from '@/static/img/background/l2.svg'
import bgImg3 from '@/static/img/background/l3.svg'
import bgImg4 from '@/static/img/background/r1.svg'
import bgImg5 from '@/static/img/background/r2.svg'
import bgImg6 from '@/static/img/background/r3.svg'
export default {
    name: 'I18nPageWrapper',
    props: {
        customX: { type: Boolean, default: false },
        customY: { type: Boolean, default: false },
    },
    data() {
        return {
            bgImgs: [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5, bgImg6],
            // clientW: null,
        }
    },
    computed: {
        backgroundStyle() {
            // let bgStyle
            // if (this.clientW > 1009) {
            //     bgStyle = {
            //         'background-image': `url(${this.bgImgs[0]}),url(${this.bgImgs[1]}),url(${this.bgImgs[2]}),url(${this.bgImgs[3]}),url(${this.bgImgs[4]}),url(${this.bgImgs[5]}),url(${this.bgImgs[0]}),url(${this.bgImgs[1]}),url(${this.bgImgs[2]}),url(${this.bgImgs[3]}),url(${this.bgImgs[4]}),url(${this.bgImgs[5]})`,
            //         'background-repeat': 'no-repeat',
            //         'background-position': `4% 100px, 4% 958px, 4% 1816px, 96% 200px, 96% 1058px, 96% 1916px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2774px, 96% 3632px, 96% 4490px`,
            //     }
            // }
            // return bgStyle
            return {
                'background-image': `url(${this.bgImgs[0]}),url(${this.bgImgs[1]}),url(${this.bgImgs[2]}),url(${this.bgImgs[3]}),url(${this.bgImgs[4]}),url(${this.bgImgs[5]}),url(${this.bgImgs[0]}),url(${this.bgImgs[1]}),url(${this.bgImgs[2]}),url(${this.bgImgs[3]}),url(${this.bgImgs[4]}),url(${this.bgImgs[5]})`,
                'background-repeat': 'no-repeat',
                'background-position': `4% 100px, 4% 958px, 4% 1816px, 96% 200px, 96% 1058px, 96% 1916px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2774px, 96% 3632px, 96% 4490px`,
            }
        },
        classObject() {
            return {
                'py-8': !this.customY,
                'md:py-20': !this.customY,
                'w-auto': true,
                'min-w-[272px]': true,
                'mx-[24px]': !this.customX,
                'gap-8': !this.customX,
                'columns-4': !this.customX,
                'sm:mx-[32px]': !this.customX,
                'sm:w-auto': !this.customX,
                'sm:gap-8': !this.customX,
                'sm:columns-8': !this.customX,
                'md:mx-auto': !this.customX,
                'md:w-[706px]': !this.customX,
                'md:gap-12': !this.customX,
                'md:columns-12': !this.customX,
                'lg:mx-[168px]': !this.customX,
                'lg:w-auto': !this.customX,
                'lg:gap-20': !this.customX,
                'lg:columns-12': !this.customX,
                'xl:mx-auto': !this.customX,
                'xl:w-[1112px]': !this.customX,
                'xl:gap-24': !this.customX,
                'xl:columns-12': !this.customX,
            }
        },
    },
    // mounted() {
    //     const vm = this
    //     vm.clientW = document.documentElement.clientWidth
    //     window.onresize = function () {
    //         vm.clientW = document.documentElement.clientWidth
    //     }
    // },
}
</script>

<style lang="postcss" scoped>
h1 {
    @apply w-full text-3xl my-8 text-center;
}

h2 {
    @apply w-full text-2xl mt-20 mb-6;
}

h3 {
    @apply w-full text-xl mt-10 mb-4;
}

p,
.paragraph {
    @apply w-full mt-1 mb-4 text-justify;
}

span.text-2s {
    font-size: 0.625rem;
}

ul {
    @apply mb-6;
}

ul.list-disc {
    @apply pl-12;
}

li {
    @apply my-1;
}

@media (max-width: 1009px) {
    #page-wrapper {
        background-image: none !important;
    }
}
</style>
