<template>
    <i18n-page-wrapper :use-bg-decoration="false">
        <div class="w-full">
            <core-h1 :title="$t('title')" center></core-h1>
            <i18n path="intro" tag="p" class="intro">
                <template #br><br /></template>
            </i18n>
            <div class="tableRow">
                <span class="tableRow__header">{{ $t('formTitle') }}</span>
                <p class="tableRow__content">{{ $t('form') }}</p>
            </div>
            <div class="tableRow">
                <span class="tableRow__header">{{
                    $t('hostHeaderTitle')
                }}</span>
                <div class="hostGroup">
                    <div
                        v-for="(host, j) in hosts"
                        :key="`host-${j}`"
                        class="host"
                    >
                        <img class="host__avatar" :src="host.avatar" />
                        <span class="host__name">{{ host.name }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="agenda">
            <div
                v-for="(speechInfo, speechDayIdx) in speechInfos"
                :key="`speech_info_${speechDayIdx}`"
                class="speechDayList"
            >
                <div class="day">
                    <p class="day__date">
                        {{ speechInfo.date }}
                    </p>
                    <p class="day__month">
                        {{ speechInfo.month }}
                    </p>
                </div>

                <div class="speechListWrapper">
                    <div
                        v-for="(speech, speechIdx) in speechInfo.speeches"
                        :key="`speech_${speechIdx}`"
                        class="speechBoxWrapper"
                    >
                        <div class="speechBox">
                            <div>
                                <div
                                    class="flex items-center justify-between gap-4"
                                >
                                    <div>
                                        <div class="my-0">
                                            {{ speech.speechtime }}
                                            <img
                                                class="inline-block"
                                                :src="langIcons[speech.lang]"
                                            />
                                        </div>
                                        <div class="speechBox__title">
                                            <span class="text-lg text-pink-700">
                                                {{ speech.title }}
                                            </span>
                                            <span
                                                class="flex inline-flex flex-nowrap gap-1"
                                            >
                                                <span
                                                    v-for="tag in speech.tags"
                                                    :key="`speech_tag_${tag}`"
                                                    class="speechBox__tag"
                                                >
                                                    {{ tag }}
                                                </span>
                                            </span>
                                        </div>
                                        <div class="flex gap-4">
                                            <span
                                                v-for="(
                                                    speaker, i
                                                ) in speech.speakers"
                                                :key="`speech_info_${speechIdx}_speaker_${i}`"
                                                class="speechBox__speaker"
                                                @click="showModal(speaker)"
                                            >
                                                {{ speaker.name }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="hidden h-[50px] md:flex">
                                        <div
                                            v-for="(
                                                speakerAvatar, i
                                            ) in getSpeakerPhoto(speech)"
                                            :key="`speech_info_${speechIdx}_photo_${i}`"
                                            class="speechBox__avatar"
                                        >
                                            <img
                                                :src="speakerAvatar"
                                                :alt="getSpeakerName(speech)"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="speechBox__description">
                                    <p
                                        v-for="(
                                            desc, desc_idx
                                        ) in speech.full_description"
                                        :key="`speech_info_${speechIdx}_desc_${desc_idx}`"
                                    >
                                        {{ desc }}
                                    </p>
                                </div>
                                <div class="flex flex-row">
                                    <text-button
                                        :href="speech.live_link"
                                        :primary="true"
                                        small
                                        class="linkButton"
                                    >
                                        {{ $t('terms.youtube') }}
                                    </text-button>
                                    <text-button
                                        :href="speech.note_link"
                                        :secondary="true"
                                        class="linkButton"
                                    >
                                        {{ $t('terms.note') }}
                                    </text-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <transition name="fade">
                        <modal
                            v-if="isOpened"
                            v-model="isOpened"
                            :img-urls="selectedSpeaker.photo"
                            :name="selectedSpeaker.name"
                            :description="selectedSpeaker.description"
                        />
                    </transition>
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
import Modal from '~/components/core/modal/Modal'
import { langIcons } from '~/utils/icons.utils.js'

export default {
    i18n,
    name: 'PageConferenceTalksDetail',
    components: {
        I18nPageWrapper,
        CoreH1,
        TextButton,
        Modal,
    },
    data() {
        return {
            isOpened: false,
            selectedItem: {},
            hosts: [
                {
                    name: 'Lee Wei',
                    avatar: require('~/static/img/young-inspirers/host1.jpg'),
                },
                {
                    name: 'Benson',
                    avatar: require('~/static/img/young-inspirers/host2.jpg'),
                },
            ],
            speechInfos: [
                {
                    date: '6',
                    month: 'Sep',
                    speeches: [
                        {
                            speechdate: 'Sep 6',
                            speechtime: '12:00-12:30 (GMT+8)',
                            title: '當科技女力遇上教育缺口 — 高雄女中生自辦 Python 營隊的故事',
                            tags: ['程式教育'],
                            lang: 'ZHZH',
                            speakers: [
                                {
                                    photo: require('~/static/img/young-inspirers/speaker1-1.png'),
                                    name: '周芊蓁',
                                    description: [
                                        '周芊蓁，高雄女中電資班高二學生，從去年十一月開始籌備「斑碼小學堂—程式探' +
                                            '險家」暑期營隊，同時擔任總召及講師。透過輕鬆幽默的方式介紹入門 ' +
                                            'Python，也幫助學員從零開始寫出文字冒險遊戲。營隊超過 50' +
                                            '0 人報名，兩梯次共有 78 名升高一的學員，在營隊結束後給出了' +
                                            '平均 4.5 分的高分評價。在營隊中掌握 Python 教學的能' +
                                            '力，並累積團隊溝通、協作的能力，也持續精進自己的 Python ' +
                                            '能力與教學能力，持續進行 Python 相關的教學。',
                                    ],
                                },
                                {
                                    photo: require('~/static/img/young-inspirers/speaker1-2.png'),
                                    name: '郭昱',
                                    description: [
                                        '郭昱，高雄女中電資班學生。2025 年擔任「斑碼小學堂」Python 夏' +
                                            '令營副總召，負責活動籌劃、報名與錄取流程管理、文件與通知撰寫，以' +
                                            '及營隊當日流程支援。',
                                        '透過營隊成功帶領即將升高一的學員從零基礎入門 Python，累積活動籌辦' +
                                            '與團隊協作經驗，並持續在校內外參與程式設計相關活動與學習。',
                                    ],
                                },
                            ],
                            full_description: [
                                '本次訪談邀請高雄女中電資實驗班「斑碼小學堂─程式探險家」營隊核心成員，分享她們如何在軟體' +
                                    '產業發展相對薄弱的高雄，主動發起面向國中生的 Python 公益課程。內容將涵蓋' +
                                    '活動起源、課程設計理念、籌辦過程的挑戰與轉折，以及她們對公益教育與資訊普及的看法' +
                                    '，期望啟發更多年輕人將專業轉化為社會影響力。',
                            ],
                            note_link: 'https://hackmd.io/@pycontw/r1WJA3uKex',
                            live_link: '',
                        },
                        {
                            speechdate: 'Sep 6',
                            speechtime: '12:40-13:10 (GMT+8)',
                            title: '20 歲登上 AI 頂尖會議 ACL 第一作者的秘訣 — 年輕研究員的成長之路',
                            tags: ['學術研究'],
                            lang: 'ZHZH',
                            speakers: [
                                {
                                    photo: require('~/static/img/young-inspirers/speaker2.jpg'),
                                    name: '許新翎 Justin Hsu',
                                    description: [
                                        '我是許新翎，目前就讀政治大學三年級，雙主修資訊管理(MIS)與資訊科學(' +
                                            'CS)，專注於醫療 AI、語言模型與資訊檢索等領域。',
                                        '在大學前兩年，我以第一作者身份發表多篇研究論文，並將我們開發的智能診療系' +
                                            '統 MedPlan 發表於自然語言處理頂會 ACL，目前正與亞東' +
                                            '醫院合作，推動技術在臨床場域的實際應用。',
                                        '除了研究，我也有豐富的實務經驗。曾於 GoFreight、ChainSe' +
                                            'a 等新創擔任 AI 工程師實習生，也在亞東醫院與中研院的強化學' +
                                            '習實驗室擔任研究助理。在多項全國 AI 黑客松中獲獎，驗證了技術' +
                                            '能快速落地、解決真實問題。',
                                        '我熱衷於跨領域創新，目標是打造真正對現場有幫助的 AI 系統。如果對醫療' +
                                            '、AI 或產品落地也有興趣，很歡迎交流合作！',
                                        '🔗 https://linkedin.com/in/justinhsu101999',
                                    ],
                                },
                            ],
                            full_description: [
                                '本次訪談邀請到年僅 20 歲便以第一作者身分在 ACL 發表論文的許新翎（Justin ' +
                                    'Hsu），分享他如何在自然語言處理與資訊檢索領域快速累積研究實力，並將學術成果落' +
                                    '實到實務應用。內容聚焦於研究起點、方法選擇、研究設計與實驗驗證、論文發表經驗，以' +
                                    '及面對挑戰的心路歷程，啟發更多青年勇於追求研究與創新的目標。',
                            ],
                            note_link: 'https://hackmd.io/@pycontw/SyX1Cn_Keg',
                            live_link: '',
                        },
                    ],
                },
                {
                    date: '7',
                    month: 'Sep',
                    speeches: [
                        {
                            speechdate: 'Sep 7',
                            speechtime: '12:00-13:00 (GMT+8)',
                            title: '開源之路與年輕開發者的力量 — Apache Airflow 貢獻與產業經驗分享',
                            tags: ['開源貢獻', '業界經驗'],
                            lang: 'ZHZH',
                            speakers: [
                                {
                                    photo: require('~/static/img/young-inspirers/speaker3-1.jpg'),
                                    name: '劉哲佑 Jason',
                                    description: [
                                        "Apache Airflow Committer, LFX'25 CNC" +
                                            'F - Krkn Mentee, Appier Backend ' +
                                            'Intern, 目前就讀成大資工大四，對大型開源軟體和後端分散式' +
                                            '系統有興趣。',
                                    ],
                                },
                                {
                                    photo: require('~/static/img/young-inspirers/speaker3-2.png'),
                                    name: '邱冠銘',
                                    description: [
                                        '邱冠銘，剛從台大資管畢業，對前後端開發很有興趣。目前在 Apache A' +
                                            'irflow 主要參與 UI 和 API 的開發，累計提交超過 ' +
                                            '90 筆 PR；同時也是 NumPy Organization ' +
                                            'Member，曾參與開發 NumType 專案。過去在 Micr' +
                                            'osoft、工研院、Shopback 擔任過軟體開發實習生，也有' +
                                            '一些接案經驗。現在一邊讀研、一邊打工賺錢、一邊做開源。忙碌但快樂' +
                                            '的（？）在持續前進中～',
                                    ],
                                },
                            ],
                            full_description: [
                                '本次訪談邀請兩位活躍於 Apache Airflow 社群的年輕開發者劉哲祐與邱冠銘，分' +
                                    '享他們從初學者到成為開源專案核心貢獻者的歷程。內容涵蓋開源起點、技術挑戰、代表性' +
                                    '貢獻與業界實習經驗，並探討如何將開源精神帶入產業，啟發更多年輕人投入國際開源社群。',
                            ],
                            note_link: 'https://hackmd.io/@pycontw/HJkQC3dFxe',
                            live_link: '',
                        },
                    ],
                },
            ],
            langIcons,
        }
    },
    methods: {
        showModal(speaker) {
            this.isOpened = true
            this.selectedSpeaker = speaker
        },
        getSpeakerPhoto(speech) {
            return speech.speakers.map((speaker) => speaker.photo)
        },
        getSpeakerName(speech) {
            return speech.speakers.map((speaker) => speaker.name)
        },
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('intro'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('intro'),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
.intro {
    @apply mb-8 font-sans text-sm leading-5 md:text-sm md:leading-8;
    line-height: 30px;
}

.tableRow {
    @apply mx-0;
    @apply md:mb-12;
    @apply flex flex-col justify-around md:flex-row;
    @apply text-center;
}

.tableRow__header {
    @apply my-0;
    @apply w-full md:w-1/5;
    @apply font-sans font-normal text-primary-500;
    @apply text-base md:text-lg;
    @apply text-left;
}

.tableRow__content {
    @apply font-sans font-normal;
    @apply text-sm;
}

.agenda {
    @apply mx-auto;
    @apply w-full;
}

.speechDayList {
    @apply flex flex-col md:flex-row;
    @apply mb-0 md:mb-10;
}

.day {
    @apply flex flex-col;
    @apply mb-5 mt-9 md:mb-0 md:mt-0;
}

.day__date {
    @apply font-sans text-4xl font-normal md:text-5xl;
    @apply my-0;
}

.day__month {
    @apply font-sans text-base font-normal;
    @apply my-0;
    @apply leading-normal;
}

.speechListWrapper {
    @apply flex flex-col;
    @apply mx-0 md:ml-20;
}
.speechBoxWrapper {
    @apply flex flex-col;
}

.speechBox {
    @apply mt-5 px-5 pt-4 md:px-10;
    @apply flex flex-col md:flex-row;
    @apply border border-primary-900 bg-primary-900;
    @apply relative;
    border-radius: 24px;
}

.speechBoxWrapper:first-of-type .speechBox {
    @apply mt-0;
}

.speechBox__title {
    @apply font-sans font-normal;
    @apply mb-1;
}
.speechBox__tag {
    @apply rounded-md bg-white/10 px-2 py-1 text-xs;
    color: #e0a8e7;
}

.speechBox__speaker {
    @apply underline;
    @apply font-sans text-sm font-normal;
    @apply my-0;
    @apply inline-block;
}
.speechBox__speaker:hover {
    @apply cursor-pointer text-primary-500;
}
.speechBox__description {
    @apply font-sans text-sm font-normal text-black-200;
    @apply mb-0 mt-2 overflow-hidden;
}

.speechBox__avatar {
    @apply w-[50px] rounded-full object-cover;
    overflow: hidden;

    img {
        @apply object-cover;
        width: 100%;
        height: 100%;
    }

    transform: translateX(-10px);

    &:first-of-type {
        transform: translateX(0px);
    }
}

.linkButton {
    @apply mx-2 my-6;
}
.hostGroup {
    @apply flex w-full flex-wrap pt-4 md:p-0;
}

.host {
    @apply mr-5 flex flex-col md:mr-14;
}

.host__avatar {
    @apply h-16 w-16 rounded-full object-cover md:h-20 md:w-20;
}

.host__name {
    @apply font-serif text-xs text-white md:text-sm;
    @apply p-1 text-center;
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
