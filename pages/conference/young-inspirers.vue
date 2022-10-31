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
                                <div class="speechBox__avatarWrapper">
                                    <img
                                        v-for="(speakerAvatar, i) in tagToPhoto[
                                            speech.tag
                                        ]"
                                        :key="`speech_info_${speechIdx}_photo_${i}`"
                                        :src="speakerAvatar"
                                        :alt="tagToSpeaker[speech.tag][i]"
                                        class="speechBox__avatar"
                                    />
                                </div>
                                <p class="speechBox__time">
                                    {{ speech.speechtime }}
                                    <img
                                        class="speechBox__langIcon"
                                        :src="tagToLangIcon[speech.tag]"
                                    />
                                </p>
                                <p class="speechBox__title">
                                    {{ speech.title }}
                                </p>
                                <div
                                    class="speechBox__speaker"
                                    @click="showModal(speech)"
                                >
                                    <span
                                        v-for="(speaker, i) in tagToSpeaker[
                                            speech.tag
                                        ]"
                                        :key="`speech_info_${speechIdx}_speaker_${i}`"
                                    >
                                        {{ speaker }}
                                    </span>
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
                                <div class="buttonsWrapper">
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
                            :img-urls="getSpeakerPhoto(selectedItem)"
                            :name="getSpeakerName(selectedItem)"
                            :description="getSpeakerDescription(selectedItem)"
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
            tagToPhoto: {
                speech1: [require('~/static/img/young-inspirers/speaker1.svg')],
                speech2: [require('~/static/img/young-inspirers/speaker2.svg')],
                speech3: [
                    require('~/static/img/young-inspirers/speaker3-1.svg'),
                    require('~/static/img/young-inspirers/speaker3-2.svg'),
                ],
                speech4: [require('~/static/img/young-inspirers/speaker4.svg')],
            },
            tagToSpeaker: {
                speech1: ['Cheung Chun Lok Amos'],
                speech2: ['Carl John Viñas'],
                speech3: ['楊軒銘', '楊承霓'],
                speech4: ['陳怡升'],
            },
            tagToLangIcon: {
                speech1: require('~/static/img/icons/lang/ENEN.svg'),
                speech2: require('~/static/img/icons/lang/ENEN.svg'),
                speech3: require('~/static/img/icons/lang/ZHZH.svg'),
                speech4: require('~/static/img/icons/lang/ZHZH.svg'),
            },
            popupIndex: null,
            hosts: [
                {
                    name: 'DJ',
                    avatar: require('~/static/img/young-inspirers/host1.png'),
                },
                {
                    name: 'Wey-Han',
                    avatar: require('~/static/img/young-inspirers/host2.png'),
                },
                {
                    name: '李佳穎',
                    avatar: require('~/static/img/young-inspirers/host3.png'),
                },
                {
                    name: 'Justin',
                    avatar: require('~/static/img/young-inspirers/host4.png'),
                },
            ],
            speechInfos: [
                {
                    date: '23',
                    month: 'July',
                    speeches: [
                        {
                            tag: 'speech1',
                            speechdate: 'July 23',
                            speechtime: '14:00-14:40 (GMT+8)',
                            title: 'Learning Python - A Journey',
                            speakers: [
                                {
                                    photo: require('~/static/img/young-inspirers/speaker1.svg'),
                                    name: 'Cheung Chun Lok Amos',
                                    description: [
                                        'I started my Python journey in Primary 4 when I joined Hour of Code Hong Kong.' +
                                            'I was first introduced to programming and Python through the free Hour of Code ' +
                                            'lectures and workshops. The Hour of Code community provided me with the first ' +
                                            'resources I had to learn Python and STEM knowledge with, such as book recommendations ' +
                                            'and learning sites. Through the Internet, books, online documentations, learning sites, ' +
                                            'and especially talks from peers and experts with experience in Python, I started to learn ' +
                                            'to make small projects and games with packages such as Tkinter and Turtle, which I’d share ' +
                                            'with others and get feedback from. Slowly, I began to develop a deep interest and passion for ' +
                                            'learning programming and for coding Python, a passion that I still have today. The more I learn ' +
                                            'about Python, the more I discover the infinite possibilities and projects I can create with it. ' +
                                            'Python is a popular language with a lot of potential for usage in machine learning and data science, ' +
                                            'and I hope to continue learning more and experimenting more on using Python in those fields and packages' +
                                            'designed for those purposes, such as Tensorflow and Pandas, in the future.',
                                    ],
                                },
                            ],
                            full_description: [
                                'In this talk, I wish to share my Python learning journey from the beginning, when I did not know how to code, ' +
                                    'and to inspire other young people who are starting out or wish to start. Free courses, workshops, online platforms, ' +
                                    'and competitions all helped me out when I began my journey, and I also hope to share what made me pursue a learning ' +
                                    'path in Python and in programming as well as my plans for my learning path, such as learning about machine learning ' +
                                    'and vision AI. Coding is an essential skill in the future as it is an important part of the digital transformation. ' +
                                    'It can possibly change the world by changing the way we live and complete tasks more efficiently. Thus, through this ' +
                                    'sharing, I wish to inspire young people like myself in the past who want to start but do not know where as well as ' +
                                    'offer tips on problem- solving, advice on setting learning goals, and helpful information such as useful learning ' +
                                    'platforms for them so that they too can learn this essential skill.',
                            ],
                            note_link: 'https://hackmd.io/@pycontw/SkXlXpKoc',
                            live_link: 'https://youtu.be/Le8OFKAWsW4',
                        },
                        {
                            tag: 'speech2',
                            speechdate: 'July 23',
                            speechtime: '15:00-15:40 (GMT+8)',
                            title: 'My Quirky Adventures with Python & Tech Communities',
                            speakers: [
                                {
                                    photo: require('~/static/img/young-inspirers/speaker2.svg'),
                                    name: 'Carl John Viñas',
                                    description: [
                                        'Hi, I am Carl, the usual “stingy developer” (a developer who likes doing optimal solutions using only' +
                                            'open - source or free tools). You will usually catch me studying computer science- related stuff, ' +
                                            "working on geospatial - based applications for work, volunteering in tech organizations like The Programmers' Guild  " +
                                            'or Python Philippines, or just working on "quirky" or social impact projects.',
                                        'For this event, I hope to share with you some of my projects, how Python brings impact to all of us, ' +
                                            'how cool tech communities are, and how Python is really for almost anyone!',
                                    ],
                                },
                            ],
                            full_description: [
                                'At this event, I hope to share some of the highlights of my adventures as a "stingy" Python Developer.',
                                'I will be talking about quirky and cool social impact projects and my thought process behind them, ' +
                                    'how tech communities could be a huge factor to your growth, how you can leverage Python to make the world ' +
                                    'a better place, and how it can be used by almost anyone!',
                                'If you are someone who wants to hear just funny or quirky stories involving Python, or just want to know how ' +
                                    'you can also make projects/ideas that are most of the time horrible, but every now then is a good idea, then you ' +
                                    'are very much welcome to join!',
                            ],
                            note_link: 'https://hackmd.io/@pycontw/SkXlXpKoc',
                            live_link: 'https://youtu.be/Le8OFKAWsW4',
                        },
                    ],
                },
                {
                    date: '30',
                    month: 'July',
                    speeches: [
                        {
                            tag: 'speech3',
                            speechdate: 'July 30',
                            speechtime: '14:00-14:40 (GMT+8)',
                            title: '不是萬中選一，要如何練一身 Python',
                            speakers: [
                                {
                                    photo: require('~/static/img/young-inspirers/speaker3-1.svg'),
                                    name: '楊軒銘',
                                    description: [
                                        '楊軒銘，高中生做點事社團創辦人，致力於 Python 推廣，曾輔導超過 300 位孩童利用遊戲的方式學習 Python，' +
                                            '並且培訓超過 10 位種子教師，將 Python 教育帶往各地。曾兩度帶領團隊至 PyCon 分享教學經驗及推廣成果。' +
                                            '在高中時曾利用 Python 設計出一個 Line 聊天機器人，並結合共計 20 部的 Python 教學影片，成為學校程式課的指定教材。',
                                    ],
                                },
                                {
                                    photo: require('~/static/img/young-inspirers/speaker3-2.svg'),
                                    name: '楊承霓',
                                    description: [
                                        '楊承霓，高一高二的暑假在五所國小舉辦過十一梯次的「玩遊戲學程式」夏令營，曾因此獲選第一屆桃園市青年行動家殊榮。' +
                                            '高中畢業後的暑假開始自學 Python，將學習過程製作成影片並放在自己的 Youtube 頻道，受邀開設 Python 超級入門直播講座' +
                                            '（八場活動觸及 50,000 人，累計超過 22,000 人觀看），2021 IThome 鐵人賽以「大學生必學的 30 個 Python 技巧」完賽，' +
                                            '累積瀏覽量超過 23,000 次。',
                                    ],
                                },
                            ],
                            full_description: [
                                '前半段分享我們兩人在高中階段的公益社團、演講、比賽及學習 Python 的過程。後面將以黃金圈理論做收斂及整理，' +
                                    '跟大家分享如何找到自己的人生目標 (Why)，朝向目標的方向與方法 (How)，在每一個階段可以做的事情 (What)。' +
                                    '如果大學生活會改變一個人的價值，如何在進大學之前先學會不虛度光陰，學會自我學習的方式，讓每一天都朝向自己的人生目標前進。',
                            ],
                            note_link: 'https://hackmd.io/@pycontw/SkXlXpKoc',
                            live_link: 'https://youtu.be/SAbYVx_7okE',
                        },
                        {
                            tag: 'speech4',
                            speechdate: 'July 30',
                            speechtime: '15:00-15:40 (GMT+8)',
                            title: '如何用駭客思維提升自己',
                            speakers: [
                                {
                                    photo: require('~/static/img/young-inspirers/speaker4.svg'),
                                    name: '陳怡升',
                                    description: [
                                        '嗨，我是怡升！我的名字含義是「怡」然自得的提「升」自己，期許自己能帶著快樂的心持續成長向上。',
                                        '我現在就讀臺師大學習科學學士班大四，同時在國外新創 Cohart 擔任研發工程師。因為過去討厭學習並網路成癮的經驗，' +
                                            '我對如何幫助人更好的學習有很大的熱情，並積極投入教育、AI、人機互動與區塊鏈的研究。' +
                                            '除此之外，我熱愛使用程式解決生活的問題，至今已開發過許多有趣的小應用，大部分都是用 Python 寫的。',
                                        '對於這個活動，我希望分享我的生命故事，與從中體會到的重要價值，期待聽完這場分享的你，能像我一樣持續成長向上，活出更好的自己！',
                                        '更多關於我，請見我的個人網站 https://eason.best 。',
                                        'P.S. 我在今年（2022）的 PyCon APAC 將分享一場專業課程（Tutorial）：「90 分鐘帶你用 Brownie 上架 NFT」，' +
                                            '如果你對如何用 Python 部署並操作區塊鏈智能合約並發行自己的 NFT 有興趣，請一定要來聽喔！',
                                    ],
                                },
                            ],
                            full_description: [
                                '陳怡升（EasonC13）現在大四，不僅在學校成績名列前茅，積極做研究並已發表過七篇論文，也有兩年產業經驗，' +
                                    '現在國外新創 Cohart 擔任研發工程師。但怡升以前並不是如此，他高中時網路成癮，一天玩電腦八小時以上，在校成績也是全校倒數第一，' +
                                    '更非常內向害羞不善交際。',
                                '在此訪談中我們將聽怡升分享他是如何克服生命的低谷，在大學找到自己的一片天。以及在這過程中領悟的「關鍵駭客思維」，究竟如何幫助他翻轉生命，持續成長向上。',
                            ],
                            note_link: 'https://hackmd.io/@pycontw/SkXlXpKoc',
                            live_link: 'https://youtu.be/SAbYVx_7okE',
                        },
                    ],
                },
            ],
        }
    },
    methods: {
        showModal(item) {
            this.isOpened = true
            this.selectedItem = item
        },
        getSpeakerPhoto(speech) {
            const photo = []
            speech.speakers.forEach((element) => {
                photo.push(element.photo)
            })
            return photo
        },
        getSpeakerName(speech) {
            let name = ''
            speech.speakers.forEach((element) => {
                name += element.name + ' '
            })
            return name
        },
        getSpeakerDescription(speech) {
            const description = []
            speech.speakers.forEach((element) => {
                description.push(element.description)
            })
            return description
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
    @apply font-sans text-sm leading-5 md:leading-8 md:text-sm mb-8;
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
    @apply mt-9 md:mt-0 mb-5 md:mb-0;
}

.day__date {
    @apply font-sans font-normal text-4xl md:text-5xl;
    @apply my-0;
}

.day__month {
    @apply font-sans font-normal text-base;
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
    @apply pt-4 px-5 md:px-10 mt-5;
    @apply flex flex-col md:flex-row;
    @apply bg-primary-900 border border-primary-900;
    @apply relative;
    border-radius: 24px;
}
.speechBoxWrapper:first-of-type .speechBox {
    @apply mt-0;
}

.speechBox__time {
    @apply my-0;
}

.speechBox__langIcon {
    @apply inline-block;
}
.speechBox__title {
    @apply flex flex-row;
    @apply font-sans font-normal;
    @apply text-lg;
    @apply mt-1 mb-2 text-pink-700;
}

.speechBox__speaker {
    @apply underline;
    @apply font-sans font-normal text-sm;
    @apply my-0;
    @apply inline-block;
}
.speechBox__speaker:hover {
    @apply text-primary-500 cursor-pointer;
}
.speechBox__description {
    @apply font-sans font-normal text-sm text-black-200;
    @apply mt-2 mb-0 overflow-hidden;
}

.speechBox__avatarWrapper {
    @apply absolute;
    @apply hidden md:flex;
    right: 30px;
    top: 30px;
}
.speechBox__avatar {
    transform: translateX(-10px);
}
.speechBox__avatar:first-of-type {
    transform: translateX(0px);
}

.speechModal__img {
    @apply object-cover rounded-lg h-16 w-16 md:h-32 md:w-32;
    transform: translateX(-20px);
}

.speechModal__img:first-of-type {
    transform: translateX(0px);
}

.speechModal__wrapper {
    @apply fixed hidden justify-center items-center w-full h-screen left-0 top-0 lg:p-0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
}
.speechModal__wrapper--show {
    @apply flex;
}
.speechModal {
    @apply relative flex justify-center items-center flex-col rounded-3xl p-7 border-3 border-pink-700 bg-black-900 lg:p-10;
    @apply w-11/12 md:w-4/5 md:max-w-3xl;
    z-index: 10000;
}

.speechModal__button {
    @apply absolute font-bold top-2 text-pink-700 lg:top-5 right-4 lg:right-7 text-lg lg:text-2xl;
}

.speechModal__speaker {
    @apply font-serif font-semibold md:font-bold text-sm md:text-lg text-black-200;
    @apply my-2 mr-3;
}
.speechModal__speakerDescription {
    @apply font-sans font-normal text-xs md:text-sm text-primary-100 overflow-y-auto;
    @apply max-h-60;
    @apply mb-4;
}

.buttonsWrapper {
    @apply flex flex-row;
}
.linkButton {
    @apply mx-2 my-6;
}
.speechModal__closingArea {
    @apply w-full h-full absolute;
    z-index: 9999;
}
.hostGroup {
    @apply flex w-full flex-wrap pt-4 md:p-0;
}

.host {
    @apply flex flex-col mr-5 md:mr-14;
}

.host__avatar {
    @apply w-16 h-16 md:w-20 md:h-20;
}

.host__name {
    @apply font-serif text-white text-xs md:text-sm;
    @apply text-center p-1;
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
