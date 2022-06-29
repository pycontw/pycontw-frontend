<template>
    <i18n-page-wrapper class="px-8 sm:px-10 md:px-52" custom-x>
        <div class="w-full">
            <core-h1 title="Young Inspirers" center></core-h1>
            <p class="intro">{{ intro }}</p>
            <div class="speechForm">
                <h2 title="活動形式">活動形式</h2>
                <p class="form">{{ form }}</p>
            </div>
        </div>
        <div class="speeches">
            <div ref="speeches" class="speechInfo">
                <h2 title="活動資訊"></h2>
                <div
                    v-for="(speechInfo, index) in speechInfos"
                    :key="`speech_info_${index}`"
                    class="speeches__content__box"
                >
                    <div
                        v-if="speechInfo.speechdate === prevDate"
                        class="speechdate"
                    >
                        <p class="speeches__content__date">
                            {{ speechInfo.speechdate }}
                        </p>
                    </div>
                    <div
                        v-else
                        class="speechdate"
                        this.prevDate="speechInfo.speechdate"
                    >
                        <p class="speeches__content__date">
                            {{ speechInfo.speechdate }}
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
                                {{ speechInfo.speechtime }}
                            </p>
                            <li
                                class="
                                    speeches__content__box__content__description__title
                                "
                            >
                                {{ speechInfo.title }}
                            </li>
                            <p class="speeches__content__box__content__speaker">
                                {{ speechInfo.speaker }}
                            </p>
                            <p
                                class="
                                    speeches__content__box__content__description__text
                                "
                            >
                                {{ speechInfo.full_description }}
                            </p>
                            <div class="flex flex-row">
                                <text-button
                                    href="speechInfo.live_link"
                                    small
                                    class="linkButton"
                                >
                                    觀看直播
                                </text-button>
                                <text-button
                                    href="speechInfo.live_link"
                                    secondary
                                    large
                                    class="linkButton"
                                >
                                    前往共筆
                                </text-button>
                            </div>
                        </div>
                    </div>
                    <div
                        ref="popupCover"
                        class="speeches__content__box__popup"
                        :class="{
                            'speeches__content__box__popup--show':
                                popupIndex === index,
                        }"
                        @click="popupClose(index)"
                    >
                        <div class="speeches__content__box__popup__content">
                            <button
                                ref="popupBtn"
                                class="
                                    speeches__content__box__popup__content__button
                                "
                                @click="popupClose(index)"
                            >
                                ✕
                            </button>
                            <h4
                                class="
                                    font-serif
                                    text:md
                                    lg:text-2xl
                                    mb-10
                                    mt-5
                                "
                            >
                                {{ speechInfo.title }}
                            </h4>
                            <p class="text-xs lg:text-sm text-left">
                                {{ speechInfo.full_description }}
                            </p>
                        </div>
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
import TextButton from '@/components/core/buttons/TextButton'

export default {
    i18n,
    name: 'PageConferenceTalksDetail',
    components: {
        I18nPageWrapper,
        CoreH1,
        TextButton,
    },
    data() {
        return {
            title: 'Young Inspirers',
            intro: 'Young Inspirers 是在 PyCon Taiwan 2021 首次規劃的新活動，旨在於創建一個屬於青少年的學習、交流空間。讓青少年們透過這個活動去分享自身經歷，並培養多元思考、跨族群合作、系統整合的能力，交流不同世代間的資訊。在 PyCon APAC 2022 中，我們將擴大舉辦並邀請 APAC 地區的學生講者來進行分享，期望透過學習經驗的交流與傳承，促進更多 Young Inspirers 的出現。',
            form: '今年的 Young Inspirers 形式與以往不同：整個活動皆會在 YouTube 進行直播。每位講者的分享是由長度約 30 分鐘的 PyCon APAC 主持人與講者訪談影片，加上 10 分鐘講者與觀眾互動的 Live Q&A 時段。',
            speechInfos: [
                {
                    tag: 'speech1',
                    speechdate: 'July 23',
                    speechtime: '14:00-14:40',
                    title: 'Learning Python - A Journey',
                    speaker: 'Cheung Chun Lok Amos',
                    photo: require('~/static/img/young-inspirers/Cheung.jpg'),
                    brief_description:
                        'In this talk, I wish to share my Python learning journey from the beginning, when I did not know how to code, and to inspire other young people who are starting out or wish to start. Free courses, workshops and online...',
                    full_description:
                        'In this talk, I wish to share my Python learning journey from the beginning, when I did not know how to code, and to inspire other young people who are starting out or wish to start. Free courses, workshops and online platforms, competitions all helped me out when I began my journey, and I also hope to share about what made me pursue a learning path in Python and in programming as well as my plans for my learning path, such as learning about machine learning and vision AI. Coding is an essential skill in the future as it is an important part of the digital transformation. It can possibly change the world by changing the way we live and complete tasks more efficiently. Thus, through this sharing, I wish to inspire young people like myself in the past who want to start but do not know where as well as offer tips on problem solving, advice on setting learning goals, and helpful information such as useful learning platforms for them so that they too can learn this essential skill.',
                    note_link: null,
                    live_link: null,
                },
                {
                    tag: 'speech2',
                    speechdate: 'July 23',
                    speechtime: '15:00-15:40',
                    title: 'My Quirky Adventures with Python & Tech Communities',
                    speaker: 'Carl John Viñas',
                    photo: require('~/static/img/young-inspirers/Carl.jpg'),
                    brief_description:
                        'At this event, I hope to share some of the highlights of my adventures as a "stingy" Python Developer. I will be talking about  quirky and cool social impact projects and my thought process behind them, how tech...',
                    full_description:
                        'At this event, I hope to share some of the highlights of my adventures as a "stingy" Python Developer.' +
                        'I will be talking about  quirky and cool social impact projects and my thought process behind them, how tech communities could be a huge factor to your growth, and how you can leverage Python to make the world a better place and how it can be used by almost anyone!' +
                        'If you are someone who wants to hear just funny or quirky stories involving Python, or just want to know how you can also make projects/ideas that are most of the time horrible, but every now then is a good idea, then you are very much welcome to join!',
                    note_link: null,
                    live_link: null,
                },
                {
                    tag: 'speech3',
                    speechdate: 'July 30',
                    speechtime: '14:00-14:40',
                    title: '不是萬中選一，要如何練一身Python',
                    speaker: '楊軒銘、楊承霓',
                    brief_description:
                        '前半段分享我們兩人在高中階段的公益社團、演講、比賽及學習Python的過程。後面將以黃金圈理論做收斂及整理，跟大家分享如何找到自己的人生目標(Why)，朝向目標的方向與方法(How)...',
                    full_description:
                        '前半段分享我們兩人在高中階段的公益社團、演講、比賽及學習Python的過程。後面將以黃金圈理論做收斂及整理，跟大家分享如何找到自己的人生目標(Why)，朝向目標的方向與方法(How)，在每一個階段可以做的事情(What)。如果大學生活會改變一個人的價值，如何在進大學之前先學會不虛度光陰，學會自我學習的方式，讓每一天都朝向自己的人生目標前進。',
                    note_link: null,
                    live_link: null,
                },
                {
                    tag: 'speech4',
                    speechdate: 'July 30',
                    speechtime: '15:00-15:40',
                    title: '等待此資訊中',
                    speaker: '陳怡升',
                    brief_description:
                        '等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待...',
                    full_description:
                        '等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待此欄資訊中等待...',
                    note_link: null,
                    live_link: null,
                },
            ],
            popupIndex: null,
            prevDate: 'July 23',
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
    @apply text-sm md:text-sm  mb-8;
    font-family: 'Source Sans Pro';
    line-height: 30px;
}

h2 {
    @apply pt-2 md:w-64;
    @apply font-serif font-black mx-auto text-primary-500;
    @apply text-left md:text-center;
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
    @apply relative mx-auto lg:w-full lg:w-4/5;
    height: unset;
    @media (min-width: 1194px) {
        min-width: 375px;
        height: 2100px;
        margin-top: -20px;
    }
}

.speechForm {
    @apply mx-0 md:mx-6;
    @apply text-sm md:text-sm  md:mb-12;
    font-family: 'Source Sans Pro';
    line-height: 30px;
    @apply flex flex-col justify-around md:flex-row;
    @apply text-center;
}

.speeches__content__box {
    @apply flex flex-col justify-around mx-auto md:flex-row;
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
.speeches__content__box:first-of-type .speeches__content__box__content {
    @apply mt-0;
}
.speeches__content__date {
    @apply text-left font-serif md:text-center;
    @apply mr-12;
    font-family: 'Source Sans Pro';
    font-size: 25px;
}
.speeches__content__box__content__description__title {
    @apply font-serif font-bold mt-0 mb-4 text-pink-700 lg:mb-3;
    font-size: 25px;
}
.speeches__content__box__content__description__text {
    @apply text-sm text-left w-full leading-7 overflow-hidden mb-5 lg:mb-0 pr-0 lg:pr-6;
    line-height: 146.9%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: unset;
    @media (min-width: 1194px) {
        -webkit-line-clamp: 5;
    }
}
.speeches__content__box__content__speaker {
    @apply underline;
    font-size: 22px;
}
.speeches__content__box__content__img {
    @apply object-cover rounded-lg h-32 w-60 lg:w-32;
}

.speeches__content__box__popup {
    @apply fixed hidden justify-center items-center w-screen h-screen left-0 top-0 lg:p-0;
    padding: 0 10%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
}
.speeches__content__box__popup--show {
    @apply flex;
}
.speeches__content__box__popup__content {
    @apply relative flex justify-center items-center flex-col rounded-3xl p-7 border-3 border-pink-700 bg-black-900 lg:p-10;
    width: 724px;
    min-width: 350px;
    height: unset;
    @media (min-width: 1194px) {
        height: 575px;
    }
}
.speeches__content__box__popup__content__button {
    @apply absolute font-bold top-2 text-pink-700 lg:top-5 right-4 lg:right-7 text-lg lg:text-2xl;
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
.linkButton {
    @apply mx-2 my-6;
}
</style>
