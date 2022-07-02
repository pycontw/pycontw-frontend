<template>
    <i18n-page-wrapper>
        <div class="w-full">
            <core-h1 :title="$t('title')" center></core-h1>
            <i18n path="intro" tag="p" class="intro">
                <template #br><br /></template>
            </i18n>
            <div class="speechForm">
                <h2>{{ $t('formTitle') }}</h2>
                <p class="speechForm__content">{{ $t('form') }}</p>
            </div>
        </div>
        <div class="speechesList__wrapper">
            <div
                v-for="(speechInfo, speechDayIdx) in $t('speechInfos')"
                :key="`speech_info_${speechDayIdx}`"
                class="speechList__dayBlock"
            >
                <div class="day">
                    <p class="day__date">
                        {{ speechInfo.date }}
                    </p>
                    <p class="day__month">
                        {{ speechInfo.month }}
                    </p>
                </div>

                <div class="speeches__wrapper">
                    <div
                        v-for="(speech, speechIdx) in speechInfo.speeches"
                        :key="`speech_${speechIdx}`"
                        class="speech__box__wrapper"
                    >
                        <div class="speechBox">
                            <div>
                                <div class="speechBox__avatar__wrapper">
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
                                    @click="
                                        popupShow(
                                            `${speechDayIdx}-${speechIdx}`,
                                        )
                                    "
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
                                <p class="speechBox__description">
                                    {{ speech.full_description }}
                                </p>
                                <div class="flex flex-row">
                                    <text-button
                                        href="speech.live_link"
                                        small
                                        class="linkButton"
                                    >
                                        觀看直播
                                    </text-button>
                                    <text-button
                                        href="speech.note_link"
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
                            class="speechBox__popup__wrapper"
                            :class="{
                                'speechBox__popup__wrapper--show':
                                    popupIndex ===
                                    `${speechDayIdx}-${speechIdx}`,
                            }"
                        >
                            <div class="closingArea" @click="popupClose"></div>
                            <div class="speechBox__popup">
                                <button
                                    ref="popupBtn"
                                    class="speechBox__popup__button"
                                    @click="popupClose"
                                >
                                    ✕
                                </button>
                                <div class="flex flex-row">
                                    <img
                                        v-for="(speakerAvatar, i) in tagToPhoto[
                                            speech.tag
                                        ]"
                                        :key="`speech_info_${speechIdx}_photo_${i}`"
                                        :src="speakerAvatar"
                                        :alt="tagToSpeaker[speech.tag][i]"
                                        class="speechBox__popup__img"
                                    />
                                </div>
                                <div
                                    class="speechBox__popup__speaker"
                                    @click="
                                        popupShow(
                                            `${speechDayIdx}-${speechIdx}`,
                                        )
                                    "
                                >
                                    <div class="flex justify-center">
                                        <span
                                            v-for="(
                                                speaker, i
                                            ) in speech.speaker"
                                            :key="`speech_info_${speechDayIdx}_${speechIdx}_speaker_${i}`"
                                            class="speechBox__popup__speaker"
                                        >
                                            {{ speaker.name }}
                                        </span>
                                    </div>
                                    <div
                                        class="
                                            speechBox__popup__speaker__description
                                        "
                                    >
                                        <p
                                            v-for="(
                                                speaker, i
                                            ) in speech.speaker"
                                            :key="`speech_info_${speechDayIdx}_${speechIdx}_speaker_desc${i}`"
                                        >
                                            {{ speaker.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                speech1: this.$i18n.t('speech1Speaker'),
                speech2: this.$i18n.t('speech2Speaker'),
                speech3: this.$i18n.t('speech3Speaker'),
                speech4: this.$i18n.t('speech4Speaker'),
            },
            tagToLangIcon: {
                speech1: require('~/static/img/icons/lang/ENTalk.svg'),
                speech2: require('~/static/img/icons/lang/ENTalk.svg'),
                speech3: require('~/static/img/icons/lang/ZHZH.svg'),
                speech4: require('~/static/img/icons/lang/ZHZH.svg'),
            },
            popupIndex: null,
        }
    },
    methods: {
        popupShow(index) {
            this.popupIndex = index
        },
        popupClose() {
            this.popupIndex = null
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

.speechForm {
    @apply mx-0;
    @apply md:mx-6 md:mb-12;
    @apply flex flex-col justify-around md:flex-row;
    @apply text-center;
}

h2 {
    @apply my-0 md:w-64 mx-auto;
    @apply font-sans font-normal text-primary-500;
    @apply text-base md:text-lg;
    @apply text-left md:text-center;
}

.speechForm__content {
    @apply font-sans font-normal;
    @apply text-sm;
}

.speechesList__wrapper {
    @apply mx-auto;
    @apply w-full;
}

.speechList__dayBlock {
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

.speeches__wrapper {
    @apply flex flex-col;
    @apply mx-0 md:ml-20;
}
.speech__box__wrapper {
    @apply flex flex-col;
}

.speechBox {
    @apply py-1 px-5 md:px-10 mt-5;
    @apply flex flex-col md:flex-row;
    @apply bg-primary-900 border border-primary-900;
    @apply relative;
    border-radius: 24px;
}
.speech__box__wrapper:first-of-type .speechBox {
    @apply mt-0;
}

.speechBox__time {
    @apply my-0;
}

.speechBox__langIcon {
    @apply inline-block;
    fill: #fff;
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

.speechBox__avatar__wrapper {
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

.speechBox__popup__img {
    @apply object-cover rounded-lg h-16 w-16 md:h-32 md:w-32;
    transform: translateX(-20px);
}

.speechBox__popup__img:first-of-type {
    transform: translateX(0px);
}

.speechBox__popup__wrapper {
    @apply fixed hidden justify-center items-center w-full h-screen left-0 top-0 lg:p-0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
}
.speechBox__popup__wrapper--show {
    @apply flex;
}
.speechBox__popup {
    @apply relative flex justify-center items-center flex-col rounded-3xl p-7 border-3 border-pink-700 bg-black-900 lg:p-10;
    @apply w-11/12 md:w-4/5 md:max-w-3xl;
    z-index: 10000;
}

.speechBox__popup__button {
    @apply absolute font-bold top-2 text-pink-700 lg:top-5 right-4 lg:right-7 text-lg lg:text-2xl;
}

.speechBox__popup__speaker {
    @apply font-serif font-semibold md:font-bold text-sm md:text-lg text-black-200;
    @apply my-2 mr-3;
}
.speechBox__popup__speaker__description {
    @apply font-sans font-normal text-xs md:text-sm text-primary-100 overflow-y-auto;
    @apply max-h-60;
    @apply mb-4;
}
.linkButton {
    @apply mx-2 my-6;
}
.closingArea {
    @apply w-full h-full absolute;
    z-index: 9999;
}
</style>
