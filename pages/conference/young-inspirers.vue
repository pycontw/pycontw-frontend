<template>
    <i18n-page-wrapper class="px-8 sm:px-10 md:px-32 lg:px-60" custom-x>
        <core-h1 title="2021 Young Inspirers TW" center></core-h1>
        <div
            class="h-40 sm:h-52 md:h-64 w-full mb-8"
            :style="bannerStyle"
        ></div>
        <p class="intro">{{ intro }}</p>

        <ul class="list-disc">
            <li class="listTitle">活動時間：</li>
            <li class="list-none">2021/08/14 13:30-17:00</li>
            <li class="listTitle">活動形式：</li>
            <li class="list-none">
                Youtube 線上直播：
                <ext-link
                    href="https://www.youtube.com/watch?v=FAB5C7V7h-o"
                    highlight
                    underline
                    >點我看直播</ext-link
                >
            </li>
            <li class="list-none">
                線上共同筆記：
                <ext-link
                    href="https://hackmd.io/OXhLGazIRs6v4a_U_Zwq0g"
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
            :key="`young_inspirers_speech_${i}`"
        >
            <div class="speakers">
                <div
                    v-for="(speaker, index) in speechData.speakers"
                    :key="`young_inspirers_details_speaker_${index}`"
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
                        :key="`young_inspirers_tab_speaker_${index}`"
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
        <h2>特別感謝</h2>
        <div>
            <div
                v-for="(logo, index) in sponsorLogos"
                :key="`young_inspirers_sponsors_${index}`"
                class="sponsors"
            >
                <img :src="logo.img" :alt="logo.alt" />
            </div>
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
    name: 'PageConferenceTalksDetail',
    components: {
        I18nPageWrapper,
        CoreH1,
        Tab,
        Tabs,
        ExtLink,
    },
    data() {
        return {
            bannerUrl: require('~/static/img/young-inspirers/banner.png'),
            title: 'Young Inspirers',
            intro:
                'Young Inspirers 是今年第一個由 PyCon Taiwan 所籌備的小型線上會議，' +
                '我們將邀請具有獨特經歷的學生講者進行分享，期望透過學習經驗的交流與傳承，' +
                '促進更多 Young Inspirers 的出現。',
            schedules: [
                ['13:30 - 13:35', '活動開場'],
                ['13:35 - 14:15', '講者分享: 廖偉涵'],
                ['14:15 - 14:20', '休息時間'],
                ['14:20 - 15:00', '講者分享: 蔡佳恩'],
                ['15:00 - 15:10', '休息時間 & 贊助商時間'],
                ['15:10 - 15:50', '講者分享: 李米蕙、蔡仲淇'],
                ['15:50 - 16:00', '活動結尾'],
                ['16:00 - 17:00', '自由交流 at Gather.Town'],
            ],
            speeches: [
                {
                    title: '那些在家自學的日子',
                    speakers: [
                        {
                            name: 'Wey-Han Liaw',
                            bio:
                                '廖偉涵，目前在美國西雅圖的小公司 Intentionet 擔任軟體工程師，' +
                                '打滾了大概一年半左右。目前是大三的年紀，高中時是非學校型態實驗教育學生，' +
                                '該段期間也在 PyCon Taiwan 當過志工以及講者。',
                            photo: require('~/static/img/young-inspirers/Adrian.jpg'),
                        },
                    ],
                    description:
                        '我在高中時並沒有去學校，我當時是一個非學校型態實驗教育學生' +
                        '（以下簡稱自學），並且花了很多時間在學習寫程式。而我後來完成了高中學業，' +
                        '現在在小型新創公司上班當軟體工程師。也許你會好奇自學生的生活，' +
                        '也許你會好奇自學生在高中以後的發展，也許你自己就是自學生，' +
                        '也許你有興趣申請在家自學⋯⋯。在這場演講中，' +
                        '我想以一個完成自學（不能講畢業 QQ）以後、大學生的年紀，' +
                        '剛出社會打滾的身份，和大家聊聊我當時自學的故事，以及我現在的反思。',
                },
                {
                    title: 'HighSchooler in Technological Startup–高中生科技新創實習經驗談',
                    speakers: [
                        {
                            name: 'Chia-En Tsai',
                            bio:
                                '蔡佳恩，即將就讀於美國長春藤哥倫比亞大學的大一新生，預期主修資工（CS）。' +
                                '高中為北一女 AI 研究社社長，在高二高三一年半期間也在' +
                                '資安新創奧義智慧科技（CyCraft）實習，為第一位高中實習生。' +
                                '在實習期間致力於建立 NLP 資安威脅情資分析系統（簡稱 CTI ANT），' +
                                '幫助資安團隊自動化分析大量資安資料以快速應對資安威脅，' +
                                '於 PyCon TW 2020 以及 IEEE International CyberHunt 2020 發表 ' +
                                'CTI ANT 研究成果。',
                            photo: require('~/static/img/young-inspirers/Chia-En.jpg'),
                        },
                    ],
                    description:
                        '在這次的演講中，希望和大家分享我在高二到高三約一年半的期間，' +
                        '在奧義智慧資安科技公司實習的故事。' +
                        '在過程中我也會以現在即將升上大一的身分回顧高中時的實習歷程，' +
                        '提供我自己的一些心得、反思，以及給現代高中生的一些鼓勵和建議，' +
                        '希望能鼓勵更多台灣的學生更加有興趣挑戰實習～' +
                        '或許你會好奇高中生在較少專業領域的訓練下，如何爭取科技公司的實習機會？' +
                        '或許你也會好奇高中生在實習中可以做些甚麼，以及會有什麼蛻變和優勢呢？' +
                        '無論是對上述問題感到好奇、充滿疑問的你、或是正打算踏出實習的第一步的你，' +
                        '希望我的故事能夠帶給你一些啟發，讓你也能成功打造出自己獨特的實習體驗～',
                },
                {
                    title: '透過社團與科技的近距離接觸',
                    speakers: [
                        {
                            name: '李米蕙',
                            bio:
                                '台灣師範大學大一新生，高中為北一女 AI 研究社第二屆副社長，' +
                                '參訪過 Pinkoi、AWS、資安新創奧義智慧科技三家公司，' +
                                '於 2021 年參加過第一屆 GiCS 尋找資安女婕思，' +
                                '與隊友奪得高中職組創意發想賽第一名的佳績。',
                            photo: require('~/static/img/young-inspirers/Li-Mi-Hui.png'),
                        },
                        {
                            name: '蔡仲淇',
                            bio:
                                '目前為高三生，曾任北一 AI 研究社第三屆社長，' +
                                '同為第一屆 GiCS 創意發想賽 高中職組第一名團隊的成員。',
                            photo: require('~/static/img/young-inspirers/Tsai-Chung-Chi.jpg'),
                        },
                    ],
                    description:
                        '在這次的演講中，希望和大家分享我們在AI研究社的經驗與收穫，' +
                        '其中包含選社的動機、學到的課程、公司的參訪體驗、' +
                        '舉辦的社會服務活動與衍生的競賽過程。' +
                        '提供我們透過社團與科技的接觸、學習到的知識及獲得的機會與經驗，' +
                        '讓大家更了解有哪些方法可以藉由社團更進一步的增進自我。' +
                        '許多學校應該都有資訊類的社團，' +
                        '但是將焦點放在「人工智慧」的社團似乎還是比較少，' +
                        '高中生能如何接觸這類資訊？又能從社團中學到什麼？' +
                        '我們希望藉由今天的 30 分鐘和各位一起探討這些問題。',
                },
            ],
            sponsorLogos: [
                {
                    img: require('~/static/img/young-inspirers/WQTW.png'),
                    alt: 'WORLDQUANT',
                },
            ],
        }
    },
    computed: {
        bannerStyle() {
            return {
                'background-image': `url(${this.bannerUrl})`,
                'background-repeat': 'no-repeat',
                'background-size': 'contain',
                'background-position': 'center',
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

.sponsors {
    @apply w-3/4 sm:w-1/2 mx-auto mt-4;
}
</style>
