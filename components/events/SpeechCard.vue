<template>
    <locale-link v-show="shouldShow" :to="to" class="speechCard">
        <div class="speechCard__speakerThumbnails">
            <div
                v-for="(speaker, i) in speakers"
                :key="`speech_card_speaker_thumbnail_${i}`"
                class="speechCard__speakerThumbnail"
            >
                <img :src="speaker.thumbnail_url" :alt="speaker.name" />
            </div>
        </div>
        <p class="speechCard__speakerNames">
            {{ speakers.map((speaker) => speaker.name).join(' • ') }}
        </p>
        <div class="speechCard__title">{{ title }}</div>
        <div class="speechCard__category">{{ $t(`category.${category}`) }}</div>
    </locale-link>
</template>

<script>
import i18n from './SpeechCard.i18n'
import { LocaleLink } from '~/components/core/links'

export default {
    i18n,
    name: 'SpeechCard',
    components: {
        LocaleLink,
    },
    props: {
        id: { type: Number, default: null },
        title: { type: String, default: '' },
        category: { type: String, default: '' },
        speakers: { type: Array, default: () => [] },
        shouldShow: { type: Boolean, default: true },
        to: { type: String, default: '/' },
    },
}
</script>

<style lang="postcss" scoped>
.speechCard {
    @apply relative flex flex-col;
    width: 45%;
    min-height: 180px;
    border-radius: 24px;
    border: 2px solid #c2a53a;
    box-shadow: 6px 6px 0 #c2a53a;
    padding: 15px;

    @media (min-width: 415px) {
        width: 270px;
        min-height: 362px;
        padding: 34px 30px 38px;
    }
}
.speechCard:hover {
    background-color: #e6ba17;
}

.speechCard__speakerThumbnails {
    @apply flex;
}
.speechCard__speakerThumbnail {
    @apply h-6 w-6 sm:h-11 sm:w-11;
    @apply my-0.5 sm:my-2 mr-1;
}
.speechCard__speakerThumbnail img {
    @apply object-cover rounded-full;
    height: 100%;
}

.speechCard__speakerNames {
    @apply font-serif font-bold my-0.5 sm:my-2;
    @apply origin-top-left scale-75;
    font-size: 12px;
    color: #c2a53a;
    @media (min-width: 415px) {
        @apply scale-100;
        font-size: 14px;
    }
}
.speechCard:hover > .speechCard__speakerNames {
    color: #000;
}

.speechCard__title {
    @apply font-serif font-bold mt-2 mb-8;
    font-size: 14px;
    line-height: 30px;
    color: #c2a53a;
    @media (min-width: 415px) {
        @apply break-normal;
        font-size: 24px;
        line-height: 36px;
    }
}
.speechCard:hover > .speechCard__title {
    color: #000;
}

.speechCard__category {
    @apply font-serif absolute text-center;
    @apply origin-bottom-left scale-75;
    color: #c2a53a;
    border: 2px solid #c2a53a;
    border-radius: 8px;
    font-weight: 600;
    font-size: 12px;
    padding: 4px 8px;
    min-width: 60px;
    bottom: 10px;
    @media (min-width: 415px) {
        @apply scale-100;
        font-size: 12px;
        padding: 7px 14px;
        min-width: 100px;
        bottom: 30px;
    }
}
.speechCard:hover > .speechCard__category {
    color: #000;
    border: 2px solid #000;
}
</style>
