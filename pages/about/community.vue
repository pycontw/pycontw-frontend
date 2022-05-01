<template>
    <i18n-page-wrapper class="md:px-20 lg:px-20">
        <core-h1 :title="$t('title')" class="page-title"></core-h1>
        <div class="flex flex-col justify-between lg:flex-row">
            <div class="map-area">
                <p v-text="$t('content')[0]"></p>
                <div class="map" :style="communityMapStyle"></div>
            </div>
            <div class="communities">
                <div class="arrow-top" :class="{ hide: boxScroll }">⌃</div>
                <div class="content" ref="communities">
                    <div
                        v-for="(community, index) in $t('communities')"
                        :key="`community_${community.tag}`"
                    >
                        <div class="box" @click="popupShow(index)">
                            <div class="text">
                                <h3 class="title">
                                    {{ community.title }}
                                </h3>
                                <p
                                    v-for="(paragraph, i) in community.desc"
                                    :key="`paragraph_${i}`"
                                >
                                    {{ paragraph }}
                                </p>
                            </div>
                            <img :src="community.imgUrl" :alt="community.tag" />
                        </div>
                        <div
                            class="popup"
                            :class="{ show: popupIndex === index }"
                        >
                            <div class="content">
                                <button @click="popupClose">✕</button>
                                <img
                                    :src="community.imgUrl"
                                    :alt="community.tag"
                                    class="w-32"
                                />
                                <h4 class="font-serif text-2xl mb-10 mt-5">
                                    {{ community.title }}
                                </h4>
                                <p
                                    v-for="(paragraph, i) in community.desc"
                                    :key="`paragraph_${i}`"
                                    class="text-sm"
                                >
                                    {{ paragraph }}
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
                <div class="arrow-down" :class="{ hide: boxScroll === false }">
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
            popupIndex: null,
            boxScroll: true,
        }
    },
    mounted() {
        this.$refs.communities.addEventListener('scroll', this.handleScroll)
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
                console.log('bottom')
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
.page-title {
    @apply justify-start ml-10;
    @media (max-width: 1024px) {
        @apply justify-center ml-0;
    }
}
.map-area {
    width: 55%;
    @media (max-width: 1024px) {
        width: 100%;
    }
}
.map-area p {
    @apply text-xs text-justify font-serif leading-6 tracking-widest px-10;
    @media (max-width: 1024px) {
        @apply text-sm tracking-normal leading-4 px-0 font-sans;
    }
}
.map-area .map {
    @apply mt-20 mb-8 w-full;
    aspect-ratio: 622/653;
}
.communities {
    @apply relative w-2/5;
    min-width: 450px;
    height: 1010px;
    @media (max-width: 1024px) {
        width: 100%;
        min-width: unset;
        height: unset;
    }
}
.communities .arrow-top,
.communities .arrow-down {
    @apply absolute text-xl left-1/2 z-10;
    content: '⌃';
    transform: translateX(-50%) translateY(0%);
    transition: opacity 0.3s;
    @media (max-width: 1024px) {
        display: none;
    }
}
.communities .arrow-down {
    @apply bottom-0;
    transform: translateX(-55%) translateY(0%) scaleY(-1);
}
.communities .arrow-top.hide,
.communities .arrow-down.hide {
    opacity: 0;
}
.communities .content {
    @apply relative w-full h-full items-center;
    overflow-y: auto;
}
.communities .content .box {
    @apply flex justify-between items-center mt-6 cursor-pointer min-h-full px-7 py-6;
    background: #1f1c3b;
    border-radius: 24px;
    -webkit-tap-highlight-color: transparent;
    @media (max-width: 1024px) {
        @apply flex-col items-center mx-auto;
        max-width: 600px;
    }
}
.communities .content div:first-of-type .box {
    margin-top: 0px;
}
.communities .content .box .title {
    @apply mt-0 mb-3 font-serif font-bold text-xl;
    color: #a9a6d6;
    @media (max-width: 1024px) {
        @apply mb-4;
    }
}
.communities .content .box p {
    @apply text-xs mb-0 w-full pr-7;
    line-height: 146.9%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;

    @media (max-width: 1024px) {
        @apply mb-5 pr-0;
        -webkit-line-clamp: unset;
    }
}
.communities .content .box img {
    @apply w-32 h-32 object-cover rounded-lg;
    @media (max-width: 1024px) {
        @apply w-60;
    }
}
.communities .content .popup {
    @apply fixed hidden justify-center items-center w-screen h-screen left-0 top-0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);

    @media (max-width: 1024px) {
        padding: 0 10%;
    }
}
.communities .content .popup.show {
    display: flex;
}
.communities .content .popup .content {
    @apply relative flex justify-center items-center flex-col rounded-3xl p-10;
    border: 3px solid #e099e1;
    background-color: #121023;
    width: 724px;
    height: 575px;
    @media (max-width: 1024px) {
        height: unset;
    }
}
.communities .content .popup .content button {
    @apply absolute top-5 right-7 text-2xl font-bold;
    color: #e099e1;
}
</style>
