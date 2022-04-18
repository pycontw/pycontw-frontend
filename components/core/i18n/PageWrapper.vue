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
        }
    },
    computed: {
        backgroundStyle() {
            return {
                'background-image': `url(${this.bgImgs[0]}),url(${this.bgImgs[1]}),url(${this.bgImgs[2]}),url(${this.bgImgs[3]}),url(${this.bgImgs[4]}),url(${this.bgImgs[5]}),url(${this.bgImgs[0]}),url(${this.bgImgs[1]}),url(${this.bgImgs[2]}),url(${this.bgImgs[3]}),url(${this.bgImgs[4]}),url(${this.bgImgs[5]})`,
                'background-repeat': 'no-repeat',
                'background-position': `4% 100px, 4% 958px, 4% 1816px, 96% 200px, 96% 1058px, 96% 1916px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2774px, 96% 3632px, 96% 4490px`,
            }
        },
        classObject() {
            return {
                // grid: true,
                'py-8': true,
                'md:py-20': true,
                'min-w-[272px]': true,
                'mx-[24px]': true,
                'w-auto': true,
                // 'gap-2': true,
                // 'grid-cols-4': true, // col-4
                'sm:mx-[32px]': !this.customX,
                'sm:w-auto': !this.customX,
                // 'sm:gap-2': true,
                // 'sm:grid-cols-8': true, // col-8
                'md:mx-auto': !this.customX,
                'md:w-[706px]': !this.customX,
                // 'md:gap-3': true,
                // 'md:grid-cols-12': true, // col-12
                'lg:mx-[168px]': !this.customX,
                'lg:w-auto': !this.customX,
                // 'lg:gap-5': true,
                'xl:mx-auto': !this.customX,
                'xl:w-[1040px]': !this.customX,
                // 'xl:gap-6': true,
            }
        },
    },
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
