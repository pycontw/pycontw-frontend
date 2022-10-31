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
                        v-for="community in $t('communities')"
                        :key="`community_${community.tag}`"
                        class="box"
                    >
                        <div class="box__content" @click="showModal(community)">
                            <div class="description">
                                <h3 class="description__title">
                                    {{ community.title }}
                                </h3>
                                <p class="description__text">
                                    {{ community.description }}
                                </p>
                            </div>
                            <img
                                v-show="communityImgUrl[community.tag]"
                                class="content__img"
                                :src="communityImgUrl[community.tag]"
                                :alt="community.tag"
                            />
                        </div>
                    </div>
                    <transition name="fade">
                        <modal
                            v-if="isOpened"
                            v-model="isOpened"
                            :img-urls="communityImgUrl[selectedItem.tag]"
                            :name="selectedItem.title"
                            :intro="selectedItem.description"
                            :website-url="communityLink[selectedItem.tag]"
                        />
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/about/apac-community.i18n'
import CoreH1 from '@/components/core/titles/H1'
import Modal from '~/components/core/modal/Modal'

export default {
    i18n,
    name: 'PageCommunity',
    components: {
        CoreH1,
        Modal,
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
                Japan: require('~/static/img/about/apac-community/jp.png'),
                Korea: require('~/static/img/about/apac-community/kr.png'),
                HongKong: require('~/static/img/about/apac-community/hk.png'),
                Philippines: require('~/static/img/about/apac-community/ph.png'),
                NewZealand: require('~/static/img/about/apac-community/nz.png'),
                Australia: require('~/static/img/about/apac-community/au.png'),
                Indonesia: require('~/static/img/about/apac-community/id.png'),
                Singapore: require('~/static/img/about/apac-community/sg.png'),
                Malaysia: require('~/static/img/about/apac-community/my.png'),
                Thailand: require('~/static/img/about/apac-community/th.png'),
                India: require('~/static/img/about/apac-community/in.png'),
                Russia: require('~/static/img/about/apac-community/ru.png'),
            },
            isOpened: false,
            selectedItem: {},
        }
    },
    methods: {
        showModal(item) {
            this.isOpened = true
            this.selectedItem = item
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
.box {
    @apply lg:mx-4 lg:w-[45%];
}
.box__content {
    @apply mx-auto mt-6 min-h-full px-6 py-6 cursor-default lg:cursor-pointer transition;
    @apply flex justify-between items-center flex-col bg-primary-900 border border-primary-900 lg:flex-row;
    border-radius: 24px;
    -webkit-tap-highlight-color: transparent;
}
.box__content:hover {
    @media (min-width: 1194px) {
        @apply bg-primary-800;
        border-color: #764bb8;
        box-shadow: 0 0 20px #352d66;
    }
}
.description__title {
    @apply font-serif font-bold mt-0 mb-4 text-secondary-300 lg:mb-3;
    font-size: 25px;
}
.description__text {
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
.content__img {
    @apply object-cover rounded-lg h-32 w-60 lg:w-32;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    @apply opacity-0;
}
</style>
