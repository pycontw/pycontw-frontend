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
                        @click="showModal(host)"
                    >
                        <img
                            class="host__avatar"
                            :src="host.avatar"
                            :alt="host.name"
                        />
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
                                    <i18n path="speechDescription" tag="p">
                                        <template #br><br /></template>
                                    </i18n>
                                </div>
                                <text-button
                                    :href="speech.note_link"
                                    :secondary="true"
                                    class="linkButton"
                                >
                                    {{ $t('terms.note') }}
                                </text-button>
                                <text-button
                                    :href="speech.slido_link"
                                    :secondary="true"
                                    class="linkButton"
                                >
                                    {{ $t('terms.slido') }}
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
import Modal from '@/components/core/modal/Modal'

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
                speech1: require('~/static/img/icons/lang/ENEN.svg'),
            },
            speechInfos: [
                {
                    date: '6',
                    month: 'Sep',
                    speeches: [
                        {
                            tag: 'speech1',
                            speechtime: '16:00 ~ 17:00 (GMT+8)',
                            title: this.$t('speechTitle'),
                            full_description: [this.$t('speechDescription')],
                            note_link: 'https://hackmd.io/@pycontw/H1PtLsmph',
                            slido_link:
                                'https://app.sli.do/event/eXMeazdzUYv1pv2LePFnfc',
                        },
                    ],
                },
            ],
        }
    },
    computed: {
        hosts() {
            return [
                {
                    name: this.$i18n.t('hosts.Kir.name'),
                    avatar: require('~/static/img/panel-discussion/Kir.jpg'),
                    description: this.$i18n.t('hosts.Kir.description', {
                        returnObjects: true,
                    }),
                },
            ]
        },
        participants() {
            return [
                {
                    name: this.$i18n.t('participants.DongheeNa.name'),
                    avatar: require('~/static/img/panel-discussion/DongheeNa.jpeg'),
                    description: this.$i18n.t(
                        'participants.DongheeNa.description',
                        {
                            returnObjects: true,
                        },
                    ),
                },
                {
                    name: this.$i18n.t('participants.SebastiánRamírez.name'),
                    avatar: require('~/static/img/panel-discussion/SebastiánRamírez.jpg'),
                    description: this.$i18n.t(
                        'participants.SebastiánRamírez.description',
                        {
                            returnObjects: true,
                        },
                    ),
                },
                {
                    name: this.$i18n.t('participants.TicaLin.name'),
                    avatar: require('~/static/img/panel-discussion/TicaLin.png'),
                    description: this.$i18n.t(
                        'participants.TicaLin.description',
                        {
                            returnObjects: true,
                        },
                    ),
                },
                {
                    name: this.$i18n.t('participants.YCChen.name'),
                    avatar: require('~/static/img/panel-discussion/YCChen.jpg'),
                    description: this.$i18n.t(
                        'participants.YCChen.description',
                        {
                            returnObjects: true,
                        },
                    ),
                },
            ]
        },
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
.participant:hover,
.host:hover {
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
