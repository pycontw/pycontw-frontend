<template>
    <i18n-page-wrapper class="px-8 sm:px-10 md:px-32 lg:px-60" custom-x>
        <core-h1 :title="data.title" center class="font-black"></core-h1>
        <div class="speech__speakers">
            <div
                v-for="(speaker, index) in data.speakers"
                :key="`speech_details_speaker_${index}`"
                class="speech__speakerContainer"
            >
                <div class="speech__speaker">
                    <div class="speech__speakerThumbnail">
                        <img :src="speaker.thumbnail_url" :alt="speaker.name" />
                    </div>
                    <p class="speech__speakerName">{{ speaker.name }}</p>
                    <div class="speech__profile">
                        <div
                            v-if="!!speaker.facebook_profile_url"
                            class="speech__extLink"
                        >
                            <ext-link :href="speaker.facebook_profile_url">
                                <facebook-icon />
                            </ext-link>
                        </div>
                        <div
                            v-if="!!speaker.github_profile_url"
                            class="speech__extLink"
                        >
                            <ext-link :href="speaker.github_profile_url">
                                <github-icon />
                            </ext-link>
                        </div>
                        <div
                            v-if="!!speaker.twitter_profile_url"
                            class="speech__extLink"
                        >
                            <ext-link :href="speaker.twitter_profile_url">
                                <twitter-icon />
                            </ext-link>
                        </div>
                    </div>
                </div>
                <p class="speech__intro">
                    {{ speaker.bio }}
                </p>
            </div>
        </div>

        <tabs class="speech__tabs">
            <tab :title="$t('terms.intro')">
                <div class="speech__tabBox">
                    <p class="speech__tabParagraphTitle">
                        {{ $t('terms.abstract') }}
                    </p>
                    <p class="speech__tabParagraph">
                        {{ data.abstract }}
                    </p>
                </div>
                <div class="speech__tabBox">
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
            <tab :title="$t('terms.else')">
                <div class="speech__info">
                    <p class="speech__tabParagraphTitle">
                        {{ $t('terms.location') }}
                    </p>
                    <p
                        v-if="isValidLocation(data.location)"
                        class="speech__tabParagraph"
                    >
                        {{ locationMapping[data.location] }}
                    </p>
                    <p v-else>{{ $t(`terms.TBA`) }}</p>
                </div>
                <div class="speech__info">
                    <p class="speech__tabParagraphTitle">
                        {{ $t('terms.date') }}
                    </p>
                    <p v-if="data.eventTimeString" class="speech__tabParagraph">
                        {{ data.eventTimeString }}
                    </p>
                    <p v-else>{{ $t(`terms.TBA`) }}</p>
                </div>
                <div class="speech__info">
                    <p class="speech__tabParagraphTitle">
                        {{ $t('terms.language') }}
                    </p>
                    <p class="speech__tabParagraph">
                        {{ $t(`languages.${data.language}`) }}
                    </p>
                </div>
                <div class="speech__info">
                    <p class="speech__tabParagraphTitle">
                        {{ $t('terms.level') }}
                    </p>
                    <p class="speech__tabParagraph">
                        {{ $t(`levels.${data.python_level}`) }}
                    </p>
                </div>
                <div class="speech__info">
                    <p class="speech__tabParagraphTitle">
                        {{ $t('terms.category') }}
                    </p>
                    <p class="speech__tabParagraph">
                        {{ $t(`categories.${data.category}`) }}
                    </p>
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
import FacebookIcon from '@/components/core/icons/FacebookIcon'
import GithubIcon from '@/components/core/icons/GithubIcon'
import TwitterIcon from '@/components/core/icons/TwitterIcon'

export default {
    i18n,
    name: 'PageConferenceTalksDetail',
    components: {
        I18nPageWrapper,
        CoreH1,
        Tab,
        Tabs,
        ExtLink,
        FacebookIcon,
        GithubIcon,
        TwitterIcon,
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
                eventTimeString: '',
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
                eventTimeString: this.getEventTimeString(beginTime, endTime),
            }
        },
        getDateTag(beginTime) {
            const dayOneMidnight = new Date('2022-09-03 16:00:00')
            if (beginTime < dayOneMidnight) {
                return 'day1'
            } else {
                return 'day2'
            }
        },
        getTime: (datetime) => {
            if (!datetime.getHours() || !datetime.getMinutes()) {
                return null
            }
            const hour = ('0' + datetime.getHours()).slice(-2)
            const minute = ('0' + datetime.getMinutes()).slice(-2)
            return `${hour}:${minute}`
        },
        getEventTimeString(beginTime, endTime) {
            const dateTag = this.getDateTag(beginTime)
            const formattedBeginTime = this.getTime(beginTime)
            const formattedEndTime = this.getTime(endTime)
            if (!formattedBeginTime || !formattedEndTime) {
                return null
            }
            return (
                `${this.$i18n.t(`terms.${dateTag}`)} • ` +
                `${formattedBeginTime}-${formattedEndTime}`
            )
        },
        isValidLocation(loc) {
            return Object.keys(this.locationMapping).includes(loc)
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
.speech__title {
    @apply md:mb-20;
}
.speech__speakers {
    @apply flex flex-col mt-6 mb-4 md:mb-8;
}
.speech__speakerContainer {
    @apply flex flex-col w-full md:flex-row mb-12;
}
.speech__speaker {
    @apply flex flex-col mx-10;
}
.speech__speakerThumbnail {
    @apply h-24 w-24 md:h-28 md:w-28 mx-auto;
}
.speech__speakerThumbnail img {
    @apply h-full object-cover rounded-full;
}
.speech__speakerName {
    @apply font-serif font-black text-center my-3;
}
.speech__profile {
    @apply flex justify-center;
}
.speech__extLink {
    @apply mx-2;
}
.speech__extLink svg {
    @apply fill-primary-300;
}
.speech__intro {
    @apply flex justify-center my-10 text-black-200 md:my-2;
}

.speech__tabs {
    @apply mb-4 md:mb-8 my-10 w-full;
}
.speech__tabBox {
    @apply mb-6 break-words;
}
.speech__tabParagraphTitle {
    @apply font-serif font-bold mb-2 mr-8 text-pink-700;
    min-width: 85px;
}
.speech__tabParagraph {
    @apply font-sans mb-2;
}
.speech__info {
    @apply flex mr-2 mb-2;
}

.speech__extLink {
    @apply font-bold text-pink-700;
}
.speech__extLink:hover {
    @apply text-primary-500;
}

.speech__slido,
.speech__hackmd {
    @apply w-full;
    height: 800px;
}
</style>
