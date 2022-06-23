<template>
    <locale-link v-show="shouldShow" :to="to" class="speechCard flex flex-col">
        <div>
            <figure
                class="speechCard__levelTriangle"
                :style="getLevelTriangleStyle(level)"
            ></figure>
            <div class="speechCard__level">
                {{ $t(`levels.${level}`) }}
            </div>
            <div class="text-right">
                <div class="speechCard__date">
                    {{ getDateTag(beginTime) + ' ' + getTime(beginTime) }}
                </div>
                <div class="speechCard__location">
                    {{ locationMapping[location] }}
                </div>
            </div>
        </div>
        <div class="speechCard__title speechCard__title-overflow">
            {{ title }}
        </div>
        <div class="flex justify-between items-center">
            <div class="speechCard__speakerThumbnails">
                <div
                    v-for="(speaker, i) in speakers"
                    :key="`speech_card_speaker_thumbnail_${i}`"
                    class="speechCard__speakerThumbnail"
                >
                    <img :src="speaker.thumbnail_url" :alt="speaker.name" />
                </div>
            </div>
            <div
                class="speechCard__lang"
                :style="getMaskImgStyle(icon.lang[lang])"
            ></div>
        </div>
        <div class="speechCard__speakerNames flex-1">
            {{ speakers.map((speaker) => speaker.name).join('、') }}
        </div>
        <div class="speechCard__category self-start">
            {{ $t(`category.${category}`) }}
        </div>
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
        level: { type: String, default: null },
        beginTime: { type: Date, default: null },
        location: { type: String, default: null },
        title: { type: String, default: '' },
        speakers: { type: Array, default: () => [] },
        lang: { type: String, default: null },
        category: { type: String, default: '' },
        to: { type: String, default: '/' },
        shouldShow: { type: Boolean, default: true },
        dayOneMidnight: {
            type: Date,
            default: () => new Date('2021-10-02T16:00:00Z'),
        },
    },
    data() {
        return {
            icon: {
                lang: {
                    ENEN: require('~/static/img/icons/lang/ENEN.svg'),
                    ZHEN: require('~/static/img/icons/lang/ZHEN.svg'),
                    ZHZH: require('~/static/img/icons/lang/ZHZH.svg'),
                },
            },
            locationMapping: {
                '4-r0': 'R0',
                '5-r1': 'R1',
                '6-r2': 'R2',
                '1-r3': 'R3',
            },
            levelBgColorMapping: {
                EXPERIENCED: '#ca7795',
                INTERMEDIATE: '#6580dc',
                NOVICE: '#65b1b7',
            },
        }
    },
    methods: {
        getDateTag(beginTime) {
            if (beginTime < this.dayOneMidnight) {
                return 'Day 1'
            } else {
                return 'Day 2'
            }
        },
        getTime: (datetime) => {
            const hour = ('0' + datetime.getHours()).slice(-2)
            const minute = ('0' + datetime.getMinutes()).slice(-2)
            return `${hour}:${minute}`
        },
        getLevelTriangleStyle(level) {
            return {
                'background-color': this.levelBgColorMapping[level],
            }
        },
        getMaskImgStyle(img) {
            return {
                '-webkit-mask-image': `url(${img})`,
                'mask-image': `url(${img})`,
            }
        },
    },
}
</script>

<style lang="postcss" scoped>
.speechCard {
    @apply relative px-4 pb-4 pt-[12px] rounded-[12px] bg-primary-900 transition;
    @apply border border-solid border-transparent; /*keep position of the card*/
}

.speechCard:hover {
    @apply bg-primary-800;
    border-color: #746bb8;
    box-shadow: 0px 0px 10px 7px #403778;
}

.speechCard:hover .speechCard__title {
    @apply text-primary-100;
}

.speechCard__levelTriangle {
    @apply absolute left-0 top-0 h-14 w-14;
    content: '';
    -webkit-clip-path: polygon(0 0, 0% 100%, 100% 0);
    clip-path: polygon(0 0, 0% 100%, 100% 0);
    border-top-left-radius: 12px;
}

.speechCard__level {
    @apply absolute left-2 text-[16px] text-primary-900 font-black;
    font-family: 'Noto Serif TC', serif;
}

.speechCard__date,
.speechCard__location {
    @apply text-[16px] text-black-200 font-semibold;
}

.speechCard__location {
    @apply text-right;
}

.speechCard__title {
    @apply mb-4 text-[27px] font-bold;
    --lh: 46px;
    font-family: 'Noto Serif TC', serif;
    line-height: var(--lh);
    letter-spacing: 1px;
    color: #cecbff;
}

.speechCard__title-overflow {
    @apply overflow-hidden;
    --max-lines: 3;
    display: -webkit-box;
    -webkit-line-clamp: var(--max-lines);
    -webkit-box-orient: vertical;
    height: calc(var(--lh) * var(--max-lines)); /*fallback*/
}

.speechCard__speakerThumbnails {
    /*WARNING: too many speakers may affect the layout*/
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, 32px);
}

.speechCard__speakerThumbnail {
    @apply w-8 h-8 rounded-full overflow-hidden;
}

.speechCard__speakerThumbnail img {
    @apply object-cover min-h-full;
}

.speechCard__lang {
    @apply w-12 h-5 bg-black-200;
    -webkit-mask-position: right;
    mask-position: right;
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
}

.speechCard__speakerNames {
    @apply mt-[7px] mb-[36px] text-[18px];
    color: #bb75bc;
    line-height: 24px;
    letter-spacing: 0.1px;
}

.speechCard__category {
    @apply inline-block px-4 py-[7px] text-[12px] text-primary-900 font-semibold;
    @apply border border-solid rounded-[8px];
    border-color: #000000;
    background-color: #bb75bc;
}
</style>
