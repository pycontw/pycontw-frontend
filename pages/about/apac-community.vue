<template>
    <div class="px-8 lg:px-20 xl:px-28 py-10 md:py-20">
        <core-h1
            :title="$t('title')"
            class="font-bold justify-center ml-0 lg:ml-2"
        ></core-h1>
        <div class="flex flex-col justify-between">
            <div class="intro">
                <p class="intro__text" v-text="$t('content')"></p>
            </div>
            <div class="communities">
                <div class="communities__content">
                    <div
                        v-for="(community, index) in $t('communities')"
                        :key="`community_${community.tag}`"
                        class="communities__content__box"
                    >
                        <div
                            class="communities__content__box__content"
                            @click="popupShow(index)"
                        >
                            <div
                                class="
                                    communities__content__box__content__description
                                "
                            >
                                <h3
                                    class="
                                        communities__content__box__content__description__title
                                    "
                                >
                                    {{ community.title }}
                                </h3>
                                <p
                                    class="
                                        communities__content__box__content__description__text
                                    "
                                >
                                    {{ community.description }}
                                </p>
                            </div>
                            <img
                                v-show="communityImgUrl[community.tag]"
                                class="communities__content__box__content__img"
                                :src="communityImgUrl[community.tag]"
                                :alt="community.tag"
                            />
                        </div>
                        <div
                            ref="popupCover"
                            class="communities__content__box__popup"
                            :class="{
                                'communities__content__box__popup--show':
                                    popupIndex === index,
                            }"
                            @click="popupClose(index)"
                        >
                            <div
                                class="
                                    communities__content__box__popup__content
                                "
                            >
                                <button
                                    ref="popupBtn"
                                    class="
                                        communities__content__box__popup__content__button
                                    "
                                    @click="popupClose(index)"
                                >
                                    ✕
                                </button>
                                <img
                                    v-show="communityImgUrl[community.tag]"
                                    :src="communityImgUrl[community.tag]"
                                    :alt="community.tag"
                                    class="
                                        object-cover
                                        rounded-lg
                                        w-20
                                        lg:w-32
                                        h-20
                                        lg:h-32
                                    "
                                />
                                <h4
                                    class="
                                        font-bold font-serif
                                        text:md
                                        lg:text-2xl
                                        mb-10
                                        mt-5
                                    "
                                >
                                    {{ community.title }}
                                </h4>
                                <p
                                    class="
                                        text-xs
                                        lg:text-sm
                                        text-left
                                        leading-normal
                                    "
                                >
                                    {{ community.description }}
                                </p>
                                <core-text-button
                                    :href="communityLink[community.tag]"
                                    class="mt-7 lg:mt-10"
                                    secondary
                                    large
                                >
                                    官方網站
                                </core-text-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/about/apac-community.i18n'
import CoreH1 from '@/components/core/titles/H1'
import CoreTextButton from '@/components/core/buttons/TextButton'

export default {
    i18n,
    name: 'PageCommunity',
    components: {
        CoreH1,
        CoreTextButton,
    },
    data() {
        return {
            communityLink: {
                Japan: 'https://2022.pycon.jp/',
                Korea: 'https://2021.pycon.kr',
                HongKong: 'https://pycon.hk',
                Philippines: 'https://www.facebook.com/pyconph',
                NewZealand: 'https://python.nz',
                Australia: 'https://2021.pycon.org.au',
                Indonesia: 'https://pycon.id',
                Singapore: 'https://pycon.sg',
                Malaysia: 'https://www.facebook.com/PyConMYofficial',
                Thailand: 'https://th.pycon.org',
                India: 'http://pycon.in',
                Russia: 'https://pycon.ru',
            },
            communityImgUrl: {
                Japan: require('~/static/img/about/community/taipeiPy.png'),
                Korea: require('~/static/img/about/community/pyhug.png'),
                HongKong: require('~/static/img/about/community/tainanPy.png'),
                Philippines: require('~/static/img/about/community/pyLadies.png'),
                NewZealand: require('~/static/img/about/community/kaohsiungPy.png'),
                Australia: require('~/static/img/about/community/hualienPy.png'),
                Indonesia: require('~/static/img/about/community/djangoGirls.png'),
                Singapore: require('~/static/img/about/community/nantouPy.png'),
                Malaysia: require('~/static/img/about/community/taichungPy.png'),
                Thailand: require('~/static/img/about/community/taichungPy.png'),
                India: require('~/static/img/about/community/taichungPy.png'),
                Russia: require('~/static/img/about/community/taichungPy.png'),
            },
            popupIndex: null,
            boxScroll: true,
        }
    },
    methods: {
        popupShow(index) {
            this.popupIndex = index
        },
        popupClose(index) {
            const target = event.target
            if (target === this.$refs.popupBtn[index]) {
                this.popupIndex = null
            } else if (target === this.$refs.popupCover[index]) {
                this.popupIndex = null
            }
        },
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('og.description'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
.intro {
    @apply w-full;
}
.intro__text {
    @apply text-xs text-justify lg:text-sm leading-normal lg:leading-normal;
    @apply font-semibold font-serif px-0 mb-10 lg:px-2;
}
.communities {
    @apply relative mx-auto w-[95%];
    height: unset;
}
.communities__content {
    @apply relative w-full h-full items-center flex flex-wrap justify-center;
}
.communities__content__box {
    @apply lg:mx-4 lg:w-[45%];
}
.communities__content__box__content {
    @apply mx-auto mt-6 min-h-full px-6 py-6 cursor-default lg:cursor-pointer transition;
    @apply flex justify-between items-center flex-col bg-primary-900 border border-primary-900 lg:flex-row;
    border-radius: 24px;
    -webkit-tap-highlight-color: transparent;
}
.communities__content__box__content:hover {
    @media (min-width: 1194px) {
        @apply bg-primary-800;
        border-color: #764bb8;
        box-shadow: 0 0 20px #352d66;
    }
}
.communities__content__box__content__description__title {
    @apply font-serif font-bold mt-0 mb-4 text-secondary-300 lg:mb-3;
    font-size: 25px;
}
.communities__content__box__content__description__text {
    @apply text-xs text-left w-full leading-7 overflow-hidden mb-5 lg:mb-0 pr-0 lg:pr-6;
    line-height: 146.9%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: unset;
    @media (min-width: 1194px) {
        -webkit-line-clamp: 5;
    }
}
.communities__content__box__content__img {
    @apply object-cover rounded-lg h-32 w-60 lg:w-32;
}
.communities__content__box__popup {
    @apply fixed hidden justify-center items-center w-screen h-screen left-0 top-0 lg:p-0;
    padding: 0 10%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
}
.communities__content__box__popup--show {
    @apply flex;
}
.communities__content__box__popup__content {
    @apply relative flex justify-center items-center flex-col rounded-3xl p-7 border-3 border-pink-700 bg-black-900 lg:p-10;
    width: 724px;
    min-width: 350px;
    height: unset;
    @media (min-width: 1194px) {
        height: 575px;
    }
}
.communities__content__box__popup__content__button {
    @apply absolute font-bold top-2 text-pink-700 lg:top-5 right-4 lg:right-7 text-lg lg:text-2xl;
}
</style>
