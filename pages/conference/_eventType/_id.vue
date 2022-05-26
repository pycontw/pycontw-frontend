<template>
    <i18n-page-wrapper class="px-8 sm:px-10 md:px-32 lg:px-60" custom-x>
        <core-h1 :title="data.title" center class="font-black"></core-h1>
        <div class="speech__speakers">
            <div
                v-for="(speaker, index) in data.speakers"
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
                    <img
                        :src="icons.location"
                        class="icon"
                        alt="icon-location"
                    />
                    {{ locationMapping[data.location] }}
                </div>
                <div class="speech__info">
                    <img
                        :src="icons.language"
                        class="icon"
                        alt="icon-language"
                    />
                    {{ $t(`languages.${data.language}`) }}
                </div>
                <div class="speech__info">
                    <img
                        :src="icons.datetime"
                        class="icon"
                        alt="icon-datetime"
                    />
                    {{ $t(`terms.${data.dateTag}`) }} •
                    {{ getTime(data.begin_time) }}-{{ getTime(data.end_time) }}
                </div>
                <div class="speech__info">
                    <img :src="icons.level" class="icon" alt="icon-level" />
                    {{ $t(`levels.${data.python_level}`) }}
                </div>
                <div class="speech__info">
                    <img
                        :src="icons.category"
                        class="icon"
                        alt="icon-category"
                    />
                    {{ $t(`categories.${data.category}`) }}
                </div>
            </div>
        </div>

        <tabs class="speech__tabs">
            <tab :title="$t('terms.intro')">
                <div class="break-words">
                    <p class="speech__tabParagraphTitle">
                        {{ $t('terms.abstract') }}
                    </p>
                    <p class="speech__tabParagraph">
                        {{ data.abstract }}
                    </p>
                </div>
                <div class="break-words">
                    <p class="speech__tabParagraphTitle">
                        {{ $t('terms.description') }}
                    </p>
                    <markdown-renderer :markdown="data.detailed_description">
                    </markdown-renderer>
                </div>
                <div v-show="!!data.slide_link" class="speech__extLink mt-4">
                    <ext-link :href="data.slide_link">
                        <fa
                            :icon="['fa', 'link']"
                            aria-hidden="true"
                            class="mr-2"
                        ></fa
                        >Slides
                    </ext-link>
                </div>

                <div v-if="!!data.youtube_id" class="mt-4">
                    <p class="speech__tabParagraphTitle">
                        {{ $t('terms.video') }}
                    </p>
                    <youtube :video-id="data.youtube_id"></youtube>
                </div>
            </tab>
            <tab :title="$t('terms.bio')">
                <div
                    v-for="(speaker, index) in data.speakers"
                    :key="`speech_details_tab_speaker_${index}`"
                    class="mb-4"
                >
                    <div>
                        <p class="speech__tabParagraphTitle">
                            {{ speaker.name }}
                        </p>
                        <p class="speech__tabParagraph">{{ speaker.bio }}</p>
                    </div>

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
                                    :icon="['fab', 'facebook']"
                                    aria-hidden="true"
                                    class="mr-2"
                                ></fa>
                            </ext-link>
                        </div>
                    </div>
                </div>
            </tab>
            <tab v-if="!!data.slido_embed_link" title="Slido">
                <iframe
                    class="speech__slido"
                    :src="data.slido_embed_link"
                ></iframe>
            </tab>
            <tab v-if="!!data.hackmd_embed_link" :title="$t('terms.note')">
                <iframe
                    class="speech__hackmd"
                    :src="data.hackmd_embed_link"
                ></iframe>
            </tab>
        </tabs>
    </i18n-page-wrapper>
</template>

<script>
import { mapState } from 'vuex'

import i18n from '@/i18n/conference/speeches.i18n'

import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import MarkdownRenderer from '@/components/core/markdown/MarkdownRenderer'
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
        MarkdownRenderer,
    },
    data() {
        return {
            data: {
                title: '',
                detailed_description: '',
                language: 'ENEN',
                python_level: 'NOVICE',
                category: 'WEB',
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
    computed: {
        ...mapState(['speechData']),
    },
    async created() {
        await this.$store.dispatch('$getSpeechData', {
            eventType: this.$route.params.eventType,
            eventId: this.$route.params.id,
        })
        await this.processData()
        this.$root.$emit('initTabs')
    },
    methods: {
        processData() {
            const beginTime = new Date(this.speechData.begin_time)
            const endTime = new Date(this.speechData.end_time)

            this.data = {
                ...this.speechData,
                begin_time: beginTime,
                end_time: endTime,
                dateTag: this.getDateTag(beginTime),
            }
        },
        getDateTag(beginTime) {
            const dayOneMidnight = new Date('2021-10-02 16:00:00')
            if (beginTime < dayOneMidnight) {
                return 'day1'
            } else {
                return 'day2'
            }
        },
        getTime: (datetime) => {
            const hour = ('0' + datetime.getHours()).slice(-2)
            const minute = ('0' + datetime.getMinutes()).slice(-2)
            return `${hour}:${minute}`
        },
        // FIXME: cannot successfully insert the correct value into head()
        metaInfo() {
            return {
                title: this.data.title,
                meta: [
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: this.data.title,
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: this.data.abstract,
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.data.abstract,
                    },
                ],
            }
        },
    },
    // head() {
    //     return this.metaInfo()
    // },
}
</script>

<style lang="postcss" scoped>
.icon {
    @apply ml-2 mr-8;
}

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
    @apply h-full object-cover rounded-full;
}
.speech__speakerName {
    @apply font-serif font-black text-center mt-7 text-pink-500;
}

.speech__infoSection {
    @apply inline-block text-xs md:text-sm mb-12 md:mb-24;
    @apply px-2 py-4 md:p-6;
    @apply rounded-2xl w-full border-2 bg-opacity-0 border-pink-500 shadow-pink-500;
    line-height: 29px;
    color: #c7c7c7;
}
.speech__infos {
    @apply grid grid-cols-1 sm:grid-cols-2 gap-y-6;
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
    @apply font-sans mb-2;
}

.speech__extLink {
    @apply font-bold;
    color: #e6ba17;
}
.speech__extLink:hover {
    @apply text-prim-500;
}

.speech__slido,
.speech__hackmd {
    @apply w-full;
    height: 800px;
}
</style>
