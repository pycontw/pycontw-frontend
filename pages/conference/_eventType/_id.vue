<template>
    <i18n-page-wrapper class="px-8 sm:px-10 md:px-32 lg:px-60" custom-x>
        <core-h1 :title="speechData.title" center></core-h1>
        <div class="speech__speakers">
            <div
                v-for="(speaker, index) in speechData.speakers"
                :key="`speech_details_speaker_${index}`"
                class="speech_speakerContainer"
            >
                <div class="speech__speakerThumbnail">
                    <img :src="speaker.thumbnail_url" :alt="speaker.name" />
                </div>
                <p class="speech__speakerName">{{ speaker.name }}</p>
            </div>
        </div>

        <div class="speech__infoSection">
            <div class="speech__infos">
                <div class="speech__info">
                    <img :src="icons.location" class="mx-2" />
                    {{ locationMapping[speechData.location] }}
                </div>
                <div class="speech__info">
                    <img :src="icons.language" class="mx-2" />
                    {{ $t(`languages.${speechData.language}`) }}
                </div>
                <div class="speech__info">
                    <img :src="icons.datetime" class="mx-2" />
                    {{ $t(`terms.${getDateTag(speechData.begin_time)}`) }} •
                    {{ getTime(speechData.begin_time) }}-{{
                        getTime(speechData.end_time)
                    }}
                </div>
                <div class="speech__info">
                    <img :src="icons.level" class="mx-2" />
                    {{ $t(`levels.${speechData.python_level}`) }}
                </div>
                <div class="speech__info">
                    <img :src="icons.category" class="mx-2" />
                    {{ $t(`categories.${speechData.category}`) }}
                </div>
            </div>
        </div>

        <tabs class="speech__tabs">
            <tab :title="$t('terms.speech')">
                <span class="whitespace-pre-line break-words">
                    <p class="speech__tabParagraphTitle">
                        {{ $t('terms.abstract') }}
                    </p>
                    <p class="speech__tabParagraph">
                        {{ speechData.abstract }}
                    </p>
                </span>
                <span class="whitespace-pre-line break-words">
                    <p class="speech__tabParagraphTitle">
                        {{ $t('terms.description') }}
                    </p>
                    <p class="speech__tabParagraph">
                        {{ speechData.detailed_description }}
                    </p>
                </span>
                <div
                    v-show="!!speechData.slide_link"
                    class="speech__extLink mt-4"
                >
                    <ext-link :href="speechData.slide_link">
                        <fa
                            :icon="['fa', 'link']"
                            aria-hidden="true"
                            class="mr-2"
                        ></fa
                        >Slides
                    </ext-link>
                </div>
                <youtube
                    v-show="!!speechData.youtube_id"
                    :video-id="speechData.youtube_id"
                    class="mt-4"
                >
                </youtube>
            </tab>
            <tab :title="$t('terms.bio')">
                <div
                    v-for="(speaker, index) in speechData.speakers"
                    :key="`speech_details_tab_speaker_${index}`"
                    class="mb-4 whitespace-pre-line"
                >
                    <span class="whitespace-pre-line">
                        <p class="speech__tabParagraphTitle">
                            {{ speaker.name }}
                        </p>
                        <p class="speech__tabParagraph">{{ speaker.bio }}</p>
                    </span>

                    <div class="flex">
                        <div class="speech__extLink">
                            <ext-link
                                v-if="!!speaker.github_profile_url"
                                :href="speaker.github_profile_url"
                            >
                                <fa
                                    :icon="['fab', 'github-square']"
                                    aria-hidden="true"
                                    class="mr-2"
                                ></fa>
                            </ext-link>
                        </div>
                        <div class="speech__extLink">
                            <ext-link
                                v-if="!!speaker.twitter_profile_url"
                                :href="speaker.twitter_profile_url"
                            >
                                <fa
                                    :icon="['fab', 'twitter-square']"
                                    aria-hidden="true"
                                    class="mr-2"
                                ></fa>
                            </ext-link>
                        </div>
                        <div class="speech__extLink">
                            <ext-link
                                v-if="!!speaker.facebook_profile_url"
                                :href="speaker.facebook_profile_url"
                            >
                                <fa
                                    :icon="['fab', 'linkedin']"
                                    aria-hidden="true"
                                    class="mr-2"
                                ></fa>
                            </ext-link>
                        </div>
                    </div>
                </div>
            </tab>
            <tab v-if="!!speechData.slido_embed_link" title="Slido">
                <iframe
                    class="speech__slido"
                    :src="speechData.slido_embed_link"
                ></iframe>
            </tab>
        </tabs>
    </i18n-page-wrapper>
</template>

<script>
import i18n from '@/i18n/conference/speeches.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import Tab from '@/components/core/tabs/Tab.vue'
import Tabs from '@/components/core/tabs/Tabs.vue'
import ExtLink from '@/components/core/links/ExtLink.vue'
import Youtube from '@/components/core/embed/Youtube.vue'

export default {
    i18n,
    name: 'PageConferenceTalksDetail',
    components: {
        I18nPageWrapper,
        CoreH1,
        Tab,
        Tabs,
        ExtLink,
        Youtube,
    },
    data() {
        return {
            eventId: 0,
            eventType: '',
            speechData: {
                title: '',
                slido_embed_link: '',
                youtube_id: '',
                begin_time: new Date(),
                end_time: new Date(),
            },
            icons: {
                location: require('~/static/img/speech/icons/location.svg'),
                language: require('~/static/img/speech/icons/language.svg'),
                datetime: require('~/static/img/speech/icons/datetime.svg'),
                level: require('~/static/img/speech/icons/level.svg'),
                category: require('~/static/img/speech/icons/category.svg'),
            },
            locationMapping: {
                '4-r0': 'R0',
                '5-r1': 'R1',
                '6-r2': 'R2',
                '1-r3': 'R3',
            },
        }
    },
    async mounted() {
        this.eventId = this.$route.params.id
        this.eventType = this.$route.params.eventType
        await this.$store.dispatch('$getSpeechDetailData', {
            eventType: this.eventType,
            eventId: this.eventId,
        })
        const speechData = this.$store.state.speechData
        this.speechData = {
            ...speechData,
            begin_time: this.getDatetimeFromString(speechData.begin_time),
            end_time: this.getDatetimeFromString(speechData.end_time),
        }
    },
    methods: {
        getDatetimeFromString: (datetimeString) => {
            const datetimeUtc = new Date(datetimeString)
            const offset = new Date().getTimezoneOffset()
            const datetime = new Date(datetimeUtc - offset)
            return datetime
        },
        getDateTag: (datetime) => {
            const month = datetime.getMonth() + 1
            const date = datetime.getDate()
            if (month === 10 && date === 2) {
                return 'day1'
            }
            if (month === 10 && date === 3) {
                return 'day2'
            }
            return ''
        },
        getTime: (datetime) => {
            const hour = ('0' + datetime.getHours()).slice(-2)
            const minute = ('0' + datetime.getMinutes()).slice(-2)
            return `${hour}:${minute}`
        },
    },
}
</script>

<style lang="postcss" scoped>
.speech__speakers {
    @apply flex justify-center mt-6 mb-8 md:mb-16;
}
.speech_speakerContainer {
    @apply flex flex-col;
}
.speech__speakerThumbnail {
    @apply h-32 w-32 mx-12;
}
.speech__speakerThumbnail img {
    @apply object-cover rounded-full;
    height: 100%;
}
.speech__speakerName {
    @apply font-serif text-center;
    color: #f3cc39;
}

.speech__infoSection {
    @apply inline-block text-xs md:text-sm mb-12 md:mb-24;
    @apply rounded-2xl w-full border-2 bg-opacity-0;
    line-height: 29px;
    color: #c7c7c7;
    border-color: #c2a53a;
    box-shadow: 6px 6px 0 #c2a53a;
    padding: 30px;
}
.speech__infos {
    @apply grid grid-cols-1 sm:grid-cols-2;
    @apply gap-y-4 md:gap-y-8 gap-x-2 md:gap-x-4;
}
.speech__info {
    @apply flex items-center font-serif;
    @apply ml-1 md:ml-2 lg:ml-4 mr-auto;
    color: #e6ba17;
}

.speech__tabs {
    @apply mb-4 md:mb-8 my-10 w-full;
}
.speech__tabParagraphTitle {
    @apply font-serif font-bold mb-2;
    color: #e6ba17;
}
.speech__tabParagraph {
    @apply font-serif mb-2;
}

.speech__extLink {
    @apply font-bold;
    color: #e6ba17;
}
.speech__extLink:hover {
    color: #9387ff;
}

.speech__slido {
    @apply w-full h-96;
}
</style>
