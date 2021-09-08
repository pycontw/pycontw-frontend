<template>
    <i18n-page-wrapper class="px-8 sm:px-10 md:px-32 lg:px-60" custom-x>
        <core-h1 title="PyCon TW x Taichung.py Meetup" center></core-h1>
        <p class="font-serif font-black">
            <ext-link
                href="https://www.facebook.com/groups/780250978715991/"
                highlight
                >Taichung.py</ext-link
            >
        </p>
        <p class="intro">{{ intro }}</p>

        <ul class="list-disc">
            <li class="listTitle">活動時間：</li>
            <li class="list-none">2021/09/18 14:00-17:00</li>
            <li class="listTitle">活動形式：</li>
            <li class="list-none">
                Youtube 線上直播：
                <ext-link
                    href="https://youtu.be/4xdXRQ9O0HM"
                    highlight
                    underline
                    >點我看直播</ext-link
                >
            </li>
            <li class="list-none">
                線上共同筆記：
                <ext-link
                    href="https://hackmd.io/ZYiFs1VDTdWN-vftfqEZzg"
                    highlight
                    underline
                    >點我看共筆</ext-link
                >
            </li>
        </ul>

        <div class="scheduleSection">
            <h2>活動流程</h2>
            <div class="table w-full mt-4">
                <div class="table-row-group w-full">
                    <div
                        v-for="(item, index) in schedules"
                        :key="`item_${index}`"
                        class="table-row font-serif"
                    >
                        <div class="table-cell w-5/12 text-right pb-4">
                            {{ item[0] }}
                        </div>
                        <div class="table-cell w-1/12"></div>
                        <div class="table-cell w-6/12">
                            {{ item[1] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h2>講者介紹</h2>
        <div
            v-for="(speechData, i) in speeches"
            :key="`taichungpy_speech_${i}`"
        >
            <div class="speakers">
                <div
                    v-for="(speaker, index) in speechData.speakers"
                    :key="`taichungpy_details_speaker_${index}`"
                    class="speakerContainer"
                >
                    <div class="speakerThumbnail">
                        <img :src="speaker.photo" :alt="speaker.name" />
                    </div>
                    <p class="speakerName">{{ speaker.name }}</p>
                </div>
            </div>
            <p class="speechTitle">{{ speechData.title }}</p>
            <tabs class="tabs">
                <tab :title="$t('terms.speech')">
                    <div class="whitespace-pre-line break-words">
                        <p class="tabParagraph">
                            {{ speechData.description }}
                        </p>
                    </div>
                </tab>
                <tab :title="$t('terms.bio')">
                    <div
                        v-for="(speaker, index) in speechData.speakers"
                        :key="`taichungpy_tab_speaker_${index}`"
                        class="mb-4 whitespace-pre-line"
                    >
                        <div class="whitespace-pre-line">
                            <p class="tabParagraphTitle">
                                {{ speaker.name }}
                            </p>
                            <p class="tabParagraph">{{ speaker.bio }}</p>
                        </div>
                    </div>
                </tab>
            </tabs>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import i18n from '@/i18n/conference/young-inspirers.i18n'

import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import Tab from '@/components/core/tabs/Tab.vue'
import Tabs from '@/components/core/tabs/Tabs.vue'
import ExtLink from '@/components/core/links/ExtLink.vue'

export default {
    i18n,
    name: 'PageConferenceWarmupsTaichungpy',
    components: {
        I18nPageWrapper,
        CoreH1,
        Tab,
        Tabs,
        ExtLink,
    },
    data() {
        return {
            title: 'PyCon TW x Taichung.py Meetup',
            intro:
                '我們是一群台中Python程式語言的愛好者，' +
                '希望在台中可以跟 Python 同好分享 Python 有關的訊息或活動，' +
                '以及相關的技術或知識。',
            schedules: [
                ['14:00 - 14:05', '活動開場'],
                ['14:05 - 14:20', '	主持人開場與社群介紹－Taichung.py'],
                ['14:20 - 15:00', '講者分享: Jimmy Chuo'],
                ['15:00 - 15:05', '休息時間'],
                ['15:05 - 15:45', '講者分享: 巫旻諺'],
                ['15:45 - 16:00', '活動結尾'],
                ['16:00 - 17:00', '自由交流 at Gather.Town'],
            ],
            speeches: [
                {
                    title: 'How to process ECG signal for Machine Learning',
                    speakers: [
                        {
                            name: 'Jimmy Chuo',
                            bio: 'Hi，我是 Jimmy，目前在 QT Medical 擔任 Data Scientist，負責開發 AI 相關產品及技術。',
                            photo: require('~/static/img/warmups/jimmy.jpg'),
                        },
                    ],
                    description:
                        '時下穿戴式手環非常流行的測量心電圖訊號功能，究竟 Apple watch 是怎麼判斷出心電圖異常與否，' +
                        '而這些日常穿戴的裝置收集到的心電訊號又跟醫療級的心電圖機有哪些不同呢？' +
                        '本次的主題會環繞在如果運用 Python 各個套件來處理心電訊號，' +
                        '並剖析一維生理訊號在訓練深度學習神經網路內會遇到的問題和如何解決。\n\n' +
                        '本主題需要的背景知識: 基礎的深度學習理論，基礎訊號處理理論，基礎 Tensorflow 概念。',
                },
                {
                    title: 'Use machine learning to generate medical report',
                    speakers: [
                        {
                            name: 'Miya',
                            bio:
                                '喜歡與人討論和分享新技術，並期許自己能持續的進步以成為一個能獨當一面的資料科學家為目標，' +
                                '今年剛前往中國醫藥大學大數據中心就職，主要負責模型演算法開發，' +
                                '對醫療資料或大數據分析有興趣，或正在尋求相關職缺的人，歡迎找我聊聊~',
                            photo: require('~/static/img/warmups/wu.png'),
                        },
                    ],
                    description:
                        '近幾年深度學習在影像處理和自然語言處理應用上的實現日趨成熟，' +
                        '如文本生成 (GAN)、語音辨識和電腦視覺的目標辨識等等，' +
                        '而在醫療相關領域上的應用也隨著深度學習的框架導入後有很大的進展。' +
                        '醫院內存放了許多類型的資料，不管是影像資料、文本資料還是結構化資料等等，' +
                        '都可以透過病人獨特的編碼串在一起，而這樣的資料可以創造出許多研究，但是，' +
                        '不管哪種資料都十分龐大且雜亂，' +
                        '此次分享將會聚焦在處理醫療資料（包含文本資料和醫學影像）常會遇到的困難，' +
                        '並且會與大家分享在醫療領域中如何成功地實現一個完整的 side project，' +
                        '希望大家聽完演講後，能對醫療資料能有初步的了解。',
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

ul.list-disc {
    @apply text-xs md:text-sm font-serif;
    padding-left: 20px !important;
}
.listTitle {
    @apply font-bold text-base;
    color: #f3cc39;
}

h2 {
    @apply font-serif font-black text-center mx-auto;
    margin-top: 0.5rem !important;
    margin-bottom: 0 !important;
    font-size: 24px;
    color: #f3cc39;
}

.scheduleSection {
    @apply inline-block text-xs md:text-sm mb-12 md:mb-24;
    @apply px-1 sm:px-2 md:px-4 py-2 sm:py-4;
    @apply rounded-2xl w-full border-2 bg-opacity-0;
    line-height: 29px;
    color: #c7c7c7;
    border-color: #c2a53a;
    box-shadow: 6px 6px 0 #c2a53a;
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
    @apply font-serif font-black text-center mb-4;
    color: #f3cc39;
}
.speechTitle {
    @apply font-serif font-black text-center mb-7;
    color: #f3cc39;
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
</style>
