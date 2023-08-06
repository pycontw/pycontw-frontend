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
            <div class="tableRow">
                <span class="tableRow__header">{{
                    $t('participantHeaderTitle')
                }}</span>
                <div class="participantGroup">
                    <div
                        v-for="(participant, j) in participants"
                        :key="`participant-${j}`"
                        class="participant"
                        @click="showModal(participant)"
                    >
                        <img
                            class="participant__avatar"
                            :src="participant.avatar"
                        />
                        <span class="participant__name">{{
                            participant.name
                        }}</span>
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
import i18n from '@/i18n/conference/panel-discussion.i18n'
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
            tagToLangIcon: {
                speech1: require('~/static/img/icons/lang/ZHZH.svg'),
            },
            hosts: [
                {
                    name: 'Yung-Yu Chen',
                    avatar: require('~/static/img/panel-discussion/YungYuChen.jpeg'),
                },
            ],
            participants: [
                {
                    avatar: require('~/static/img/panel-discussion/蔡炎龍.jpeg'),
                    name: '蔡炎龍',
                    description: [
                        '蔡炎龍教授為美國爾灣加州大學的數學博士，現任國立政治大學應用數學系副教授兼任學務處學務長。' +
                            '蔡教授長期致力於Python的推廣教育，並於2020年與2022年分別出版《少年Py的大冒險：成為Python數據分析達人的第一門課》' +
                            '與《少年Py的大冒險－成為Python AI深度學習達人的第一門課》兩本書，在推廣Python教育方面取得了卓越成果。' +
                            '此外，蔡教授亦擔任擔任政治大學數理資訊學程的召集人和政大 PyDay 的創辦人。',
                    ],
                },
                {
                    avatar: require('~/static/img/panel-discussion/柯維然.jpeg'),
                    name: '柯維然',
                    description: [
                        '努力在政府部門中點燃數位與技術的火苗；' +
                            '曾是熱愛用數據與程式解決問題的資料戰警，目前服務於數位發展部部長室，' +
                            '負責協助各單位專案與部內資訊架構服務建置，導入與改善政府數位服務流程，' +
                            '同時於交通大學資訊工程研究所攻讀博士班，主要研究方向為深度生成模型、電腦視覺。',
                        '',
                    ],
                },
                {
                    avatar: require('~/static/img/panel-discussion/PeterWolf.jpeg'),
                    name: 'Peter Wolf',
                    description: [
                        '語言科學專家、卓騰語言科技創辦人及核心開發工程師。探究人類語言與認知之間的關係，' +
                            '主張自然語言處理需考慮語言的本質，而非直接套用現成的工具處理表面現象。' +
                            '正在執行的任務是透過打造自然語言理解的基礎建設，促成「具人類思維方式」的機器心智。',
                    ],
                },
            ],
            speechInfos: [
                {
                    date: '3',
                    month: 'Sep',
                    speeches: [
                        {
                            tag: 'speech1',
                            speechtime: '15:40-16:40 (GMT+8)',
                            title: this.$t('speechTitle'),
                            full_description: [this.$t('speechDescription')],
                            note_link: '',
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
        getSpeakerPhoto(participant) {
            return participant.avatar
        },
        getSpeakerName(participant) {
            return participant.name
        },
        getSpeakerDescription(participant) {
            return [participant.description]
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
    @apply md:mb-8;
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
    @apply mb-2 mt-1 text-pink-700;
}

.speechBox__speaker {
    @apply underline;
    @apply font-sans text-sm font-normal;
    @apply my-0;
    @apply inline-block;
}
.speechBox__description {
    @apply font-sans text-sm font-normal text-black-200;
    @apply mb-0 mt-2 overflow-hidden;
}

.linkButton {
    @apply my-6;
}
.speechModal__closingArea {
    @apply absolute h-full w-full;
    z-index: 9999;
}

.participantGroup,
.hostGroup {
    @apply flex w-full flex-wrap pt-4 md:p-0;
}

.participant,
.host {
    @apply mr-5 flex flex-col md:mr-14;
}
.participant:hover {
    @apply cursor-pointer text-primary-500;
}

.participant__avatar,
.host__avatar {
    @apply h-16 w-16 rounded-full object-cover md:h-20 md:w-20;
}

.participant__name,
.host__name {
    @apply font-serif text-xs text-white md:text-sm;
    @apply max-w-[4.5rem] p-1 text-center;
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
