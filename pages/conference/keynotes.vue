<template>
    <i18n-page-wrapper class="px-8 sm:px-10 md:px-32 lg:px-60" custom-x>
        <core-h1 :title="$t('title')"></core-h1>
        <i18n path="intro" tag="p" class="intro"></i18n>
        <div v-for="keynote in keynotesData" :key="keynote.id">
            <div class="keynote__photo">
                <img
                    :src="keynote.speaker.photo"
                    :alt="keynote.speaker[$makeKey(locale, 'name')]"
                />
            </div>
            <div class="keynote__name">
                {{ keynote.speaker[$makeKey(locale, 'name')] }}
            </div>
            <div class="keynote__title">
                {{ keynote.session[$makeKey(locale, 'title')] }}
            </div>

            <tabs class="keynote__tabs">
                <tab :title="$t('bio')">
                    <div class="pb-4 whitespace-pre-line">
                        {{ keynote.speaker[$makeKey(locale, 'bio')] }}
                        <div class="flex pt-4">
                            <div class="keynote__extLink">
                                <ext-link
                                    v-if="!!keynote.social_item.github.length"
                                    :href="keynote.social_item.github"
                                >
                                    <fa
                                        :icon="['fab', 'github-square']"
                                        aria-hidden="true"
                                        class="mr-2"
                                    ></fa>
                                </ext-link>
                            </div>
                            <div class="keynote__extLink">
                                <ext-link
                                    v-if="!!keynote.social_item.linkedin.length"
                                    :href="keynote.social_item.linkedin"
                                >
                                    <fa
                                        :icon="['fab', 'linkedin']"
                                        aria-hidden="true"
                                        class="mr-2"
                                    ></fa>
                                </ext-link>
                            </div>
                            <div class="keynote__extLink">
                                <ext-link
                                    v-if="!!keynote.social_item.twitter.length"
                                    :href="keynote.social_item.twitter"
                                >
                                    <fa
                                        :icon="['fab', 'twitter-square']"
                                        aria-hidden="true"
                                        class="mr-2"
                                    ></fa>
                                </ext-link>
                            </div>
                        </div>
                    </div>
                </tab>
                <tab :title="$t('speech')">
                    <div class="pb-4 whitespace-pre-line">
                        {{ keynote.session[$makeKey(locale, 'description')] }}
                        <div
                            v-if="!!keynote.session.slides.length"
                            class="keynote__extLink pt-4"
                        >
                            <ext-link :href="keynote.session.slides">
                                <fa
                                    :icon="['fa', 'link']"
                                    aria-hidden="true"
                                    class="mr-2"
                                ></fa
                                >Slides
                            </ext-link>
                        </div>
                    </div>
                    <youtube
                        v-if="!!keynote.youtube_id.length"
                        :video-id="keynote.youtube_id"
                    >
                    </youtube>
                </tab>
                <tab v-if="!!keynote.slido.length" title="Slido">
                    <iframe
                        class="keynote__slido"
                        :src="keynote.slido"
                    ></iframe>
                </tab>
            </tabs>
        </div>
    </i18n-page-wrapper>
</template>

<script>
import i18n from '@/i18n/conference/keynotes.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import Tab from '@/components/core/tabs/Tab.vue'
import Tabs from '@/components/core/tabs/Tabs.vue'
import ExtLink from '@/components/core/links/ExtLink.vue'
import Youtube from '@/components/core/embed/Youtube.vue'

export default {
    i18n,
    name: 'PageConferenceKeynotes',
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
            keynotesData: [],
        }
    },
    computed: {
        locale() {
            return { 'en-us': 'en_us', 'zh-hant': 'zh_hant' }[this.$i18n.locale]
        },
    },
    async mounted() {
        await this.$store.dispatch('$getKeynotesData')
        this.keynotesData = this.$store.state.keynotesData.map((keynote) => ({
            ...keynote,
            id: this.$makeId(),
        }))
    },
    methods: {
        getAttributeByLocale(data, attr) {
            const localeMap = { 'en-us': 'en_us', 'zh-hant': 'zh_hant' }
            const attributeName = `${attr}_${localeMap[this.$i18n.locale]}`
            return data[attributeName]
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
    @apply text-xs md:text-sm;
    line-height: 33px;
}

.keynote__photo {
    @apply h-32 w-32 mx-auto my-6;
}

.keynote__photo img {
    @apply object-cover rounded-full;
    height: 100%;
}

.keynote__name {
    @apply font-serif font-black text-base text-center py-2;
    color: #c2a53a;
}

.keynote__title {
    @apply font-serif font-black text-base text-center py-2;
    color: #c2a53a;
}

.keynote__tabs {
    @apply my-10;
}

.keynote__slido {
    @apply w-full h-96;
}

.keynote__extLink {
    @apply font-bold;
    color: #e6ba17;
}

.keynote__extLink:hover {
    color: #9387ff;
}
</style>
