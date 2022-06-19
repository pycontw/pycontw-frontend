<template>
    <i18n-page-wrapper class="px-8 sm:px-10 md:px-52" custom-x>
        <div class="w-full">
            <core-h1 title="Young Inspirers" center></core-h1>
            <p class="intro">{{ intro }}</p>
        </div>
        <div class="speeches">
            <div class="speechForm">
                <h2 title="活動形式"></h2>
                <p class="form">{{ form }}</p>
            </div>
            <div class="speechInfo">
                <h2 title="活動資訊"></h2>
                <div
                    v-for="(speechInfo, index) in speechInfos"
                    :key="`speech_info_${index}`"
                    class="speechContainer"
                >
                    <div class="speechdate">
                        <p class="speeches__content__date">
                            {{ speechInfo.speechtime }}
                        </p>
                    </div>
                    <div
                        class="speeches__content__box__content"
                        @click="popupShow(index)"
                    >
                        <div
                            class="speeches__content__box__content__description"
                        >
                            <p class="speeches__content__box__content__time">
                                {{ speech.time }}
                            </p>
                            <h3
                                class="
                                    speeches__content__box__content__description__title
                                "
                            >
                                {{ speech.title }}
                            </h3>
                            <p class="speeches__content__box__content__speaker">
                                {{ speech.speaker }}
                            </p>
                            <p
                                class="
                                    speeches__content__box__content__description__text
                                "
                            >
                                {{ speech.description }}
                            </p>
                        </div>
                        <img
                            v-show="speakerImgUrl[speech.tag]"
                            class="speeches__content__box__content__img"
                            :src="speakerImgUrl[speech.tag]"
                            :alt="speech.tag"
                        />
                    </div>
                </div>
            </div>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import i18n from '@/i18n/conference/young-inspirers.i18n'

import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'

export default {
    i18n,
    name: 'PageConferenceTalksDetail',
    components: {
        I18nPageWrapper,
        CoreH1,
    },
    data() {
        return {
            title: 'Young Inspirers',
            intro: 'Young Inspirers 是在 PyCon Taiwan 2021 首次規劃的新活動，旨在於創建一個屬於青少年的學習、交流空間。讓青少年們透過這個活動去分享自身經歷，並培養多元思考、跨族群合作、系統整合的能力，交流不同世代間的資訊。在 PyCon APAC 2022 中，我們將擴大舉辦並邀請 APAC 地區的學生講者來進行分享，期望透過學習經驗的交流與傳承，促進更多 Young Inspirers 的出現。',
            form: '今年的 Young Inspirers 形式與以往不同：整個活動皆會在 YouTube 進行直播。每位講者的分享是由長度約 30 分鐘的 PyCon APAC 主持人與講者訪談影片，加上 10 分鐘講者與觀眾互動的 Live Q&A 時段。',
            speechInfo: [
                {
                    tag: 'speech1',
                    speechdate: '0723',
                    speechtime: '14:00-14:40',
                    speaker: [
                        {
                            name: 'Cheung Chun Lok Amos',
                            photo: require('~/static/img/young-inspirers/Adrian.jpg'),
                        },
                    ],
                    description:
                        'In this talk, I wish to share my Python learning journey from the beginning, when I did not know how to code, and to inspire other young people who are starting out or wish to start. Free courses, workshops and online...',
                },
            ],
        }
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.title,
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.intro,
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.intro,
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
.intro {
    @apply text-xs md:text-sm font-serif mb-8;
    line-height: 33px;
}

h2 {
    @apply font-serif font-black text-center mx-auto text-primary-500;
    margin-top: 0.5rem !important;
    margin-bottom: 0 !important;
    font-size: 24px;
}

.scheduleSection {
    @apply inline-block text-xs md:text-sm mb-12 md:mb-24;
    @apply px-1 sm:px-2 md:px-4 py-2 sm:py-4;
    @apply rounded-2xl w-full border-2 bg-opacity-0 border-pink-500 shadow-pink-500;
    line-height: 29px;
    color: #c7c7c7;
}
.speeches {
    @apply w-full;
}

.speechForm {
    @apply flex-row;
    @apply text-center;
}

.speeches__content__box__content {
    @apply mx-auto mt-6 min-h-full px-6 py-6 cursor-default lg:cursor-pointer;
    @apply flex justify-between items-center flex-col bg-primary-900 border border-primary-900 lg:flex-row;
    border-radius: 24px;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.5s, box-shadow 0.5s, border-color 0.5s;
}
.speeches__content__box__content:hover {
    @media (min-width: 1194px) {
        @apply bg-primary-800;
        border-color: #764bb8;
        box-shadow: 0 0 20px #352d66;
    }
}
.speeches__content__box:first-of-type .communities__content__box__content {
    @apply mt-0;
}
.speeches__content__box__content__description__title {
    @apply font-serif font-bold mt-0 mb-4 text-secondary-300 lg:mb-3;
    font-size: 25px;
}
.speeches__content__box__content__description__text {
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
.speeches__content__box__content__img {
    @apply object-cover rounded-lg h-32 w-60 lg:w-32;
}

.speakers {
    @apply flex justify-center mt-16;
}
.speakerContainer {
    @apply flex flex-col;
}
.speakerThumbnail {
    @apply h-24 w-24 sm:h-32 sm:w-32 mx-3 mb-4;
}
.speakerThumbnail img {
    @apply object-cover rounded-full;
    height: 100%;
}
.speakerName {
    @apply font-serif font-black text-center mb-4 text-pink-500;
}
.speechTitle {
    @apply font-serif font-black text-center mb-7 text-pink-500;
}

.tabs {
    @apply mb-4 md:mb-16 w-full;
}
.tabParagraphTitle {
    @apply font-serif font-bold mb-2;
    color: #e6ba17;
}
.tabParagraph {
    @apply font-serif mb-2;
}

.sponsors {
    @apply w-3/4 sm:w-1/2 mx-auto mt-4;
}
</style>
