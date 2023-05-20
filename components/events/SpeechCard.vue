<template>
    <locale-link v-show="shouldShow" :to="to" class="speechCard flex flex-col">
        <div>
            <figure
                class="speechCard__levelTriangle"
                :style="getLevelTriangleStyle(level)"
            ></figure>
            <div class="speechCard__level" :style="getLevelStyle()">
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
        <div class="flex items-center justify-between">
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
            {{ speakers.map((speaker) => speaker.name).join(', ') }}
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
            default: () => new Date('2022-09-03T16:00:00Z'),
        },
    },
    data() {
        return {
            icon: {
                lang: {
                    ENEN: require('~/static/img/icons/lang/ENEN.svg'),
                    ZHEN: require('~/static/img/icons/lang/ZHEN.svg'),
                    JPEN: require('~/static/img/icons/lang/JPEN.svg'), // added for PyCon APAC 2022
                    ZHZH: require('~/static/img/icons/lang/ZHZH.svg'), // not used in PyCon APAC 2022
                },
            },
            locationMapping: {
                '4-r0': 'R0',
                '4-r0-1': 'R0',
                '4-r0-2': 'R0',
                '5-r1': 'R1',
                '5-r1-1': 'R1',
                '5-r1-2': 'R1',
                '6-r2': 'R2',
                '6-r2-1': 'R2',
                '6-r2-2': 'R2',
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
            if (!beginTime) {
                return ''
            }
            if (beginTime < this.dayOneMidnight) {
                return 'Day 1'
            } else {
                return 'Day 2'
            }
        },
        getTime: (datetime) => {
            if (!datetime) {
                return ''
            }
            const hour = ('0' + datetime.getHours()).slice(-2)
            const minute = ('0' + datetime.getMinutes()).slice(-2)
            return `${hour}:${minute}`
        },
        getLevelTriangleStyle(level) {
            return {
                'background-color': this.levelBgColorMapping[level],
            }
        },
        getLevelStyle() {
            return {
                'font-size': this.$t('levelStyle.fontSize'),
                left: this.$t('levelStyle.left'),
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
    @apply relative rounded-[12px] bg-primary-900 px-4 pb-4 pt-[12px] transition;
    @apply border border-solid border-transparent; /*keep position of the card*/
    @apply overflow-hidden; /*handle too many speakers*/
    overflow-wrap: anywhere;
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
    @apply absolute left-0 top-0 h-14 w-16;
    content: '';
    -webkit-clip-path: polygon(0 0, 0% 100%, 100% 0);
    clip-path: polygon(0 0, 0% 100%, 100% 0);
    border-top-left-radius: 12px;
}

.speechCard__level {
    @apply absolute font-serif font-black text-primary-900;
}

.speechCard__date,
.speechCard__location {
    @apply h-5 text-[16px] font-semibold text-black-200;
}

.speechCard__location {
    @apply text-right;
}

.speechCard__title {
    @apply mb-4 text-[27px] font-bold;
    font-family: 'Noto Serif TC', serif;
    line-height: 46px;
    letter-spacing: 1px;
    color: #cecbff;
}

.speechCard__title-overflow {
    @apply overflow-hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: calc(46px * 3); /*fallback: height = line * line-height */
}

.speechCard__speakerThumbnails {
    @apply overflow-hidden;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, 32px);
    width: 70%;
    mask-image: linear-gradient(to right, black 90%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, black 90%, transparent 100%);
}

.speechCard__speakerThumbnail {
    @apply h-8 w-8 overflow-hidden rounded-full;
}

.speechCard__speakerThumbnail img {
    @apply min-h-full object-cover;
}

.speechCard__lang {
    @apply h-5 w-12 bg-black-200;
    -webkit-mask-position: right;
    mask-position: right;
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
}

.speechCard__speakerNames {
    @apply mb-[36px] mt-[7px] text-[18px];
    color: #bb75bc;
    line-height: 24px;
    letter-spacing: 0.1px;
}

.speechCard__category {
    @apply inline-block px-4 py-[7px] text-[12px] font-semibold text-primary-900;
    @apply rounded-[8px] border border-solid;
    border-color: #000000;
    background-color: #bb75bc;
}
</style>
