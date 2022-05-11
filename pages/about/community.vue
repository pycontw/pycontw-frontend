<template>
    <i18n-page-wrapper class="md:px-20 lg:px-20">
        <core-h1
            :title="$t('title')"
            class="justify-center lg:justify-start ml-0 lg:ml-10"
        ></core-h1>
        <div class="flex flex-col justify-between lg:flex-row">
            <div class="map-area">
                <p class="map-area__text" v-text="$t('content')"></p>
                <div class="map-area__img" :style="communityMapStyle"></div>
            </div>
            <div class="communities">
                <div
                    class="communities__arrow-top"
                    :class="{ 'communities__arrow-top--hide': boxScroll }"
                >
                    ⌃
                </div>
                <div ref="communities" class="communities__content">
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
                            class="communities__content__box__popup"
                            :class="{
                                'communities__content__box__popup--show':
                                    popupIndex === index,
                            }"
                        >
                            <div
                                class="
                                    communities__content__box__popup__content
                                "
                            >
                                <button
                                    class="
                                        communities__content__box__popup__content__button
                                    "
                                    @click="popupClose"
                                >
                                    ✕
                                </button>
                                <img
                                    v-show="communityImgUrl[community.tag]"
                                    :src="communityImgUrl[community.tag]"
                                    :alt="community.tag"
                                    class="object-cover rounded-lg h-32 w-32"
                                />
                                <h4 class="font-serif text-2xl mb-10 mt-5">
                                    {{ community.title }}
                                </h4>
                                <p class="text-sm">
                                    {{ community.description }}
                                </p>
                                <core-text-button
                                    :href="communityLink[community.tag]"
                                    class="my-4"
                                    secondary
                                    large
                                >
                                    官方網站
                                </core-text-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="communities__arrow-down"
                    :class="{
                        'communities__arrow-down--hide': boxScroll === false,
                    }"
                >
                    ⌃
                </div>
            </div>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/about/community.i18n'
import CoreH1 from '@/components/core/titles/H1'
import CommunityMap from '@/static/img/about/CommunityInTW.png'
import CoreTextButton from '@/components/core/buttons/TextButton'

export default {
    i18n,
    name: 'PageCommunity',
    components: {
        I18nPageWrapper,
        CoreH1,
        CoreTextButton,
    },
    data() {
        return {
            communityMap: CommunityMap,
            communityLink: {
                taipei: 'http://www.meetup.com/Taipei-py/',
                pyhug: 'http://www.meetup.com/pythonhug/',
                tainan: 'http://www.meetup.com/Tainan-py-Python-Tainan-User-Group/',
                pyladiestw: 'https://tw.pyladies.com/',
                kaohsiung: 'http://www.meetup.com/Kaohsiung-Python-Meetup/',
                hualien: 'http://www.meetup.com/Hualien-Py/',
                djangogirlstaipei: 'https://djangogirls.org/taipei/',
                nantou: 'https://www.facebook.com/%E5%8D%97%E6%8A%95python-113209870215893/',
                taichung: 'https://www.facebook.com/groups/780250978715991/',
            },
            communityImgUrl: {
                taipei: require('~/static/img/about/community/taipeiPy.png'),
                pyhug: require('~/static/img/about/community/pyhug.png'),
                nantou: require('~/static/img/about/community/nantouPy.png'),
                taichung: require('~/static/img/about/community/taichungPy.png'),
            },
            popupIndex: null,
            boxScroll: true,
        }
    },
    computed: {
        communityMapStyle() {
            return {
                'background-image': `url(${this.communityMap})`,
                'background-repeat': 'no-repeat',
                'background-size': 'contain',
                'background-position': 'center',
            }
        },
    },
    mounted() {
        this.$refs.communities.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        popupShow(index) {
            this.popupIndex = index
        },
        popupClose() {
            this.popupIndex = null
        },
        handleScroll() {
            const scrollTop = this.$refs.communities.scrollTop
            const offsetHeight = this.$refs.communities.offsetHeight
            if (scrollTop > 0 && scrollTop < offsetHeight) {
                this.boxScroll = null
            } else if (scrollTop === 0) {
                this.boxScroll = true
            } else if (scrollTop > offsetHeight) {
                this.boxScroll = false
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
.map-area {
    @apply w-full;
    @media (min-width: 1024px) {
        width: 55%;
    }
}
.map-area__text {
    @apply text-xs lg:text-sm leading-4 lg:leading-6 tracking-normal lg:tracking-widest;
    @apply font-serif px-0 lg:px-10;
}
.map-area__img {
    @apply mt-20 mb-8 w-full;
    aspect-ratio: 622/653;
}
.communities {
    @apply relative mx-auto w-full lg:w-2/5;
    max-width: 450px;
    height: unset;
    @media (min-width: 1024px) {
        min-width: 450px;
        height: 1010px;
    }
}
.communities__arrow-top,
.communities__arrow-down {
    @apply absolute text-xl left-1/2 z-10 hidden lg:block;
    content: '⌃';
    transform: translateX(-50%) translateY(0%);
    transition: opacity 0.3s;
}
.communities__arrow-down {
    @apply bottom-0;
    transform: translateX(-55%) translateY(0%) scaleY(-1);
}
.communities__arrow-top--hide,
.communities__arrow-down--hide {
    @apply opacity-0;
}
.communities__content {
    @apply relative w-full h-full items-center overflow-y-auto;
}
.communities__content__box__content {
    @apply mx-auto mt-6 min-h-full px-7 py-6 cursor-default lg:cursor-pointer;
    @apply flex justify-between items-center flex-col lg:flex-row;
    background: #1f1c3b;
    border-radius: 24px;
    -webkit-tap-highlight-color: transparent;
}
.communities__content__box:first-of-type .communities__content__box__content {
    @apply mt-0;
}
.communities__content__box__content__description__title {
    @apply font-serif font-bold text-xl mt-0 mb-4 lg:mb-3;
    color: #a9a6d6;
}
.communities__content__box__content__description__text {
    @apply text-xs w-full leading-7 overflow-hidden mb-5 lg:mb-0 pr-0 lg:pr-7;
    line-height: 146.9%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: unset;
    @media (min-width: 1024px) {
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
    @apply hidden lg:flex;
}
.communities__content__box__popup__content {
    @apply relative flex justify-center items-center flex-col rounded-3xl p-10;
    border: 3px solid #e099e1;
    background-color: #121023;
    width: 724px;
    height: unset;
    @media (min-width: 1024px) {
        height: 575px;
    }
}
.communities__content__box__popup__content__button {
    @apply absolute top-5 right-7 text-2xl font-bold;
    color: #e099e1;
}
</style>
