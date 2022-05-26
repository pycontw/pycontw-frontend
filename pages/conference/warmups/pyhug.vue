<template>
    <i18n-page-wrapper class="px-8 sm:px-10 md:px-32 lg:px-60" custom-x>
        <core-h1 title="PyCon TW x PyHug Meetup" center></core-h1>
        <p class="font-serif font-black">
            <ext-link href="https://www.meetup.com/pythonhug/" highlight
                >PyHUG</ext-link
            >
        </p>
        <p class="intro">
            歡迎來到
            <ext-link
                href="https://www.meetup.com/pythonhug/"
                highlight
                underline
                >PyHUG</ext-link
            >。我們是一群活動於新竹周邊的 Python 程式員。
            我們會定期舉辦技術討論與程式設計的聚會。非常歡迎你加入我們！
        </p>

        <ul class="list-disc">
            <li class="listTitle">活動時間：</li>
            <li class="list-none">2021/09/25 13:30-17:45</li>
            <li class="listTitle">活動形式：</li>
            <li class="list-none">
                於 Gather Town 中進行活動：
                <ext-link
                    href="https://gather.town/app/pp5WuaEQ2CChMMxy/PyCon%20TW%20x%20Local%20Meetup"
                    highlight
                    underline
                    >點我進入空間</ext-link
                >
            </li>
            <li class="list-none">
                線上共同筆記：
                <ext-link
                    href="https://hackmd.io/7TY3-Z-VRGi50C5sC7ONqg"
                    highlight
                    underline
                    >點我看共筆</ext-link
                >
            </li>
            <li class="list-none">YouTube 活動錄影： 將於活動後釋出</li>
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
        <div v-for="(speechData, i) in speeches" :key="`pyhug_speech_${i}`">
            <div class="speakers">
                <div
                    v-for="(speaker, index) in speechData.speakers"
                    :key="`pyhug_details_speaker_${index}`"
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
                        <ext-link
                            v-if="!!speechData.link"
                            :href="speechData.link"
                            highlight
                            >文章連結</ext-link
                        >
                    </div>
                </tab>
                <tab :title="$t('terms.bio')">
                    <div
                        v-for="(speaker, index) in speechData.speakers"
                        :key="`pyhug_tab_speaker_${index}`"
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
    name: 'PageConferenceWarmupsPyhug',
    components: {
        I18nPageWrapper,
        CoreH1,
        Tab,
        Tabs,
        ExtLink,
    },
    data() {
        return {
            title: 'PyCon TW x PyHug Meetup',
            schedules: [
                ['13:30 - 13:35', '活動開場'],
                ['13:35 - 13:50', '主持人開場與社群介紹－PyHUG'],
                ['13:50 - 14:30', '講者分享: Inès'],
                ['14:30 - 14:35', '休息時間'],
                ['14:35 - 15:05', '講者分享: Tina Hsu'],
                ['15:05 - 15:10', '休息時間'],
                ['15:10 - 15:40', '講者分享: 林明憲'],
                ['15:40 - 15:45', '休息時間'],
                ['15:45 - 16:30', '講者分享: Chin-Yun Yu'],
                ['16:30 - 16:35', '活動結尾'],
                ['16:35 - 17:45', '自由交流 at Gather.Town'],
            ],
            speeches: [
                {
                    title:
                        'How deep learning helps astronomers on observation data - \n' +
                        'CNN for classifying galaxy spectra',
                    speakers: [
                        {
                            name: 'Inès',
                            bio:
                                'Ciao, I am a PhD student in the University of ' +
                                'Rome La Sapienza and I will get my PhD degree soon.',
                            photo: require('~/static/img/warmups/dummy.svg'),
                        },
                    ],
                    description:
                        '了解不同類型的西佛星系的可以幫助我們更了解星系的演化與形成，' +
                        '然而這類星系光譜型態很複雜，造成天文學家花費很多時間在光譜的分類上，' +
                        '我們利用 pytorch 建立一個一維 Convolution Neural Network (CNN) 模型作為光譜分類器，' +
                        '使用西佛 1.9 與 2.0 星系的光譜給模型學習辨認兩者光譜的差異，' +
                        '訓練後的模型可以分辨出西佛 1.9 星系的精確率高達八成，' +
                        '也能從西佛 2.0 星系的樣本裡挑出額外的西佛 1.9 星系，' +
                        '這額外的西佛 1.9 星系可以增加訓練模型的樣本數，' +
                        '再次訓練後的模型分辨出西佛1.9星系的精確率提高至九成。\n\n' +
                        '使用CNN模型可以比傳統的方法更快更準確地區分出這兩種類型的西佛星系，' +
                        '也能收集到比以前多的西佛 1.9 星系的光譜，' +
                        '這些西佛 1.9 星系可以提供天文學家關於宿主星系型態、黑洞吸積 (accretion) 的環境以及黑洞質量，' +
                        '進而了解星系形成演化與其黑洞的關係。',
                },
                {
                    title: 'Machine Learning Applied to Stock Index Performance Enhancement',
                    speakers: [
                        {
                            name: 'Tina Hsu',
                            bio: 'Tina， 喜愛使用 Python 來解決金融問題，目前經營 blog 以及 YouTube 頻道 pyinvest。',
                            photo: require('~/static/img/warmups/tina.png'),
                        },
                    ],
                    description:
                        '近年來，指數化投資愈來愈盛行，策略型投資如 Smart Beta 更是受到市場青睞。' +
                        '國內外機構法人不再安於傳統 Top down 的投資方式。' +
                        '將部分資產從以往重視區域曝險、國家曝險或產業別曝險，' +
                        '推進為因子曝險!為 Smart Beta 投資燃起一股旋風!\n\n' +
                        '然而，從回測數據中清楚顯示，這些聰明因子雖然長期而言能夠帶來風險溢酬，' +
                        '但在不同的市場環境表現卻有相當大的差異。比方說動能因子在牛市表現很好，' +
                        '在熊市中表現卻非常差。 究竟什麼時候該採用什麼因子，一直是一個深受重視的議題。' +
                        '另外，在量化投資領域中，除了基本面外，技術面與籌碼面也都相當受到投資人的重視，' +
                        '然而不同的訊號時常會帶來矛盾。股價的複雜度及非線性造成股價難以預測，' +
                        '讓我們不禁想到，既然AI這麼聰明，是否能夠幫我們解決投資上的難題?\n\n' +
                        '很榮幸本篇文章今年初被刊登在 Journal of Banking and Financial Technology，' +
                        '本次演講將與大家詳細分享裡頭的內容，包含特徵建構、模型建構、回測以及績效評估等等。' +
                        '希望本次的演講能夠摒除大家對"機器學習好複雜"的刻板印象，' +
                        '並且激發各位動手打造屬於自己的 AI 選股系統。',
                    link: 'https://link.springer.com/article/10.1007%2Fs42786-021-00025-6',
                },
                {
                    title: 'The 2020 CVPR Workshop of Low-Power Computer Vision Challenge 參加經驗分享',
                    speakers: [
                        {
                            name: '林明憲',
                            bio:
                                'wiki: 林明憲，前台灣棒球選手…(誤).正確:專長為軟硬體共同設計，' +
                                '目前專注於Deep Learning和Machine Learning於影像加速的應用並用FPGA實現',
                            photo: require('~/static/img/warmups/dummy.svg'),
                        },
                    ],
                    description:
                        'CVPR 被認為是計算機視覺領域最重要的會議之一的年度會議。' +
                        '與這些會議對應的還有很多計算機視覺演算法比賽，' +
                        '這些比賽代表著新興、或實用、或有趣的、或被忽略的研究方向。' +
                        '當中 Low Power Computer Vision (LPCV) Challenge 是一項年度競賽，' +
                        '旨在提高計算機視覺的能效，以便在資源緊張的系統上運行。' +
                        '將分享如何這些比賽過程的策略及技巧，甚至失敗經驗過程中，提升個人能力',
                },
                {
                    title: 'Implementing NMF in PyTorch Framework: An Autograd Approach',
                    speakers: [
                        {
                            name: 'Chin-Yun Yu',
                            bio:
                                'I’m a Software/Algorithm Engineer, and an independent Researcher. ' +
                                'I’m interesting in Deep Learnin/Machine Learning/DSP/MIR.',
                            photo: require('~/static/img/warmups/chun-yun-yu.png'),
                        },
                    ],
                    description:
                        'NMF (Non-negative Matrix Factorization, 又稱非負矩陣分解)，' +
                        '是在機器學習中，對資料做降維相當有用的一種方式，' +
                        '也常用在資料分析、聲源分離等應用。隨著近年來深度學習的興起，' +
                        '開始有研究試圖將類似的概念應用到 NMF，做出類似的多層深度模型。' +
                        '但因為 NMF 參數非負的特性，將 NMF 的參數更新方式推廣到多層且結構複雜的模型並非易事。' +
                        '本演講將會分享，如何運用深度學習套件 PyTorch 的自動微分機制，' +
                        '重新解析 NMF 的目標函數，將NMF的乘法參數更新方式，推廣應用到任意的 NMF 模型。',
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
    @apply font-bold text-base text-pink-500;
}

h2 {
    @apply font-serif font-black text-center mx-auto text-pink-500;
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
</style>
