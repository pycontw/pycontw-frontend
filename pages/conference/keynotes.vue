<template>
    <div class="py-10 md:py-24 lg:py24">
        <banner>
            <template #default>
                <div
                    class="hidden md:block md:w-full md:h-full"
                    :style="bannerStyle"
                ></div>
            </template>
            <template #text>
                <core-h1 :title="$t('title')"></core-h1>
                <p class="w-full md:w-3/4 lg:w-3/4 leading-6">
                    {{ $t('intro') }}
                </p>
            </template>
        </banner>
        <i18n-page-wrapper>
            <article
                v-for="keynote in keynotesData"
                :id="getKeynoteId(keynote)"
                :key="keynote.id"
                class="keynote"
            >
                <div class="keynote__photo">
                    <img
                        :src="keynote.speaker.photo"
                        :alt="keynote.speaker[$makeKey(locale, 'name')]"
                    />
                </div>
                <div class="keynote__name">
                    {{ keynote.speaker[$makeKey(locale, 'name')] }}
                </div>
                <div class="keynote__links">
                    <div class="keynote__extLink">
                        <ext-link
                            v-if="!!keynote.social_item.facebook.length"
                            :href="keynote.social_item.facebook"
                        >
                            <facebook-icon />
                        </ext-link>
                    </div>
                    <div class="keynote__extLink">
                        <ext-link
                            v-if="!!keynote.social_item.github.length"
                            :href="keynote.social_item.github"
                        >
                            <github-icon />
                        </ext-link>
                    </div>
                    <!--
                    <div class="keynote__extLink">
                        <ext-link
                            v-if="!!keynote.social_item.linkedin.length"
                            :href="keynote.social_item.linkedin"
                        >
                            <fa
                                :icon="['fab', 'linkedin']"
                                aria-hidden="true"
                            ></fa>
                        </ext-link>
                    </div>
                    -->
                    <div class="keynote__extLink">
                        <ext-link
                            v-if="!!keynote.social_item.twitter.length"
                            :href="keynote.social_item.twitter"
                        >
                            <twitter-icon />
                        </ext-link>
                    </div>
                </div>
                <h2 class="keynote__title">
                    {{ keynote.session[$makeKey(locale, 'title')] }}
                </h2>
                <tabs class="keynote__tabs">
                    <tab :title="$t('terms.bio')">
                        <div class="pb-4 whitespace-pre-line">
                            {{ keynote.speaker[$makeKey(locale, 'bio')] }}
                        </div>
                    </tab>
                    <tab :title="$t('terms.talk')">
                        <div class="pb-4 whitespace-pre-line">
                            {{
                                keynote.session[$makeKey(locale, 'description')]
                            }}
                            <div
                                v-if="!!keynote.session.slides.length"
                                class="pt-4"
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
            </article>
        </i18n-page-wrapper>
    </div>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/conference/keynotes.i18n'
import AboutBanner from '@/static/img/about/Banner.svg'
import Banner from '@/components/core/layout/Banner'
import CoreH1 from '@/components/core/titles/H1'
import Tab from '@/components/core/tabs/Tab.vue'
import Tabs from '@/components/core/tabs/Tabs.vue'
import ExtLink from '@/components/core/links/ExtLink.vue'
import Youtube from '@/components/core/embed/Youtube.vue'
import FacebookIcon from '@/components/core/icons/FacebookIcon.vue'
import GithubIcon from '@/components/core/icons/GithubIcon.vue'
import TwitterIcon from '@/components/core/icons/TwitterIcon.vue'

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
        Banner,
        FacebookIcon,
        GithubIcon,
        TwitterIcon,
    },
    data() {
        return {
            keynotesData: [],
            aboutBanner: AboutBanner,
        }
    },
    computed: {
        locale() {
            return { 'en-us': 'en_us', 'zh-hant': 'zh_hant' }[this.$i18n.locale]
        },
        bannerStyle() {
            return {
                'background-image': `url(${this.aboutBanner})`,
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }
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
        getKeynoteId(keynote) {
            return keynote.speaker.name_en_us.split(' ').join('_')
        },
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
.keynote {
    @apply mb-20 md:mb-28;
}
.keynote__photo {
    @apply h-24 w-24 md:h-28 md:w-28 mx-auto my-3;
}

.keynote__photo img {
    @apply object-cover rounded-full;
    height: 100%;
}

.keynote__name,
.keynote__title {
    @apply font-serif font-black text-center;
}

.keynote__name {
    @apply py-2 text-primary-100;
    font-size: 18px;
}

.keynote__title {
    @apply py-5 my-0;
    line-height: inherit;
    font-size: 20px;
    background: linear-gradient(
        302.44deg,
        #8be1c2 0.18%,
        #5b69e2 43.9%,
        #a764c9 53.21%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.keynote__tabs {
    @apply my-3;
}

.keynote__slido {
    @apply w-full;
    height: 800px;
}

.keynote__links {
    @apply flex justify-center py-2;
}

.keynote__extLink {
    @apply mx-2;
}

.keynote__extLink svg {
    fill: #e099e1;
}

@media (min-width: 768px) {
    .keynote__title {
        font-size: 22px;
    }
}
</style>
