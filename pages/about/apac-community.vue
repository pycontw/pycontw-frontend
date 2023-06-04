<template>
    <div class="px-8 py-10 md:py-20 lg:px-20 xl:px-28">
        <core-h1
            :title="$t('title')"
            class="ml-0 justify-center font-bold lg:ml-2"
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
    @apply text-justify text-xs leading-normal lg:text-sm lg:leading-normal;
    @apply mb-10 px-0 font-serif font-semibold lg:px-2;
}
.communities {
    @apply relative mx-auto w-[95%];
    height: unset;
}
.communities__content {
    @apply relative flex h-full w-full flex-wrap items-center justify-center;
}
.box {
    @apply lg:mx-4 lg:w-[45%];
}
.box__content {
    @apply mx-auto mt-6 min-h-full cursor-default px-6 py-6 transition lg:cursor-pointer;
    @apply flex flex-col items-center justify-between border border-primary-900 bg-primary-900 lg:flex-row;
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
    @apply mb-4 mt-0 font-serif font-bold text-secondary-300 lg:mb-3;
    font-size: 25px;
}
.description__text {
    @apply mb-5 w-full overflow-hidden pr-0 text-left text-xs leading-7 lg:mb-0 lg:pr-6;
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
    @apply h-32 w-60 rounded-lg object-cover lg:w-32;
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
