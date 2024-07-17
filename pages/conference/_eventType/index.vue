<template>
    <div class="py-10 md:py-24">
        <banner>
            <core-h1 :title="title"></core-h1>
            <p class="leading-6">
                {{ intro }}
            </p>
        </banner>
        <i18n-page-wrapper class="px-2 sm:px-8 md:px-16 lg:px-32" custom-x>
            <div v-if="eventType === 'talks'">
                <core-h2 :title="$t('talks.categoryFilter')"></core-h2>
                <checkbox-collection>
                    <core-checkbox
                        v-for="category in speechCategories"
                        :id="category"
                        :key="`category_${category}`"
                        v-model="checkedCategories"
                        :label="$t(`categories.${category}`)"
                        :is-checked="isCategoriesChecked(category)"
                    ></core-checkbox>
                    <core-checkbox
                        id="ALL"
                        key="category_ALL"
                        :value="isAllCategoriesSelected"
                        :is-checked="isAllCategoriesSelected"
                        :label="$t('categories.ALL')"
                        @input="selectAllCategories()"
                    ></core-checkbox>
                </checkbox-collection>
            </div>
            <speech-card-collection>
                <speech-card
                    v-for="speech in selectedSpeechesData"
                    :id="speech.id"
                    :key="`speech_${speech.id}`"
                    :level="speech.python_level"
                    :begin-time="speech.begin_time"
                    :location="speech.location"
                    :title="speech.title"
                    :speakers="speech.speakers"
                    :lang="speech.language"
                    :category="speech.category"
                    :to="`/conference/${speech.event_type}/${speech.id}/`"
                >
                </speech-card>
            </speech-card-collection>
        </i18n-page-wrapper>
    </div>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/conference/speeches.i18n'
import AboutBanner from '@/static/img/about/Banner.svg'
import Banner from '@/components/core/layout/Banner'
import CoreH1 from '@/components/core/titles/H1'
import CoreH2 from '@/components/core/titles/H2'
import CoreCheckbox from '@/components/core/checkbox/Checkbox'
import CheckboxCollection from '@/components/core/checkbox/CheckboxCollection'
import SpeechCard from '@/components/events/SpeechCard'
import SpeechCardCollection from '@/components/events/SpeechCardCollection'

export default {
    i18n,
    name: 'PageConferenceSpeeches',
    components: {
        I18nPageWrapper,
        CoreH1,
        CoreH2,
        CoreCheckbox,
        CheckboxCollection,
        SpeechCard,
        SpeechCardCollection,
        Banner,
    },
    async asyncData({ redirect, store, params, payload }) {
        const eventType = params.eventType
        if (!['talks', 'tutorials'].includes(eventType)) {
            redirect('/')
        }
        if (payload && Object.keys(payload).length !== 0)
            return { eventType, speechesData: payload }
        await store.dispatch('$getSpeechesData', eventType)
        const speechesData = store.state.speechesData.map((speech) => ({
            ...speech,
            begin_time: speech.begin_time ? new Date(speech.begin_time) : null,
        }))
        return {
            eventType,
            speechesData,
        }
    },
    data() {
        return {
            checkedCategories: [],
            aboutBanner: AboutBanner,
        }
    },
    computed: {
        bannerStyle() {
            return {
                'background-image': `url(${this.aboutBanner})`,
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }
        },
        title() {
            return this.$i18n.t(`${this.$route.params.eventType}.title`)
        },
        intro() {
            return this.$i18n.t(`${this.$route.params.eventType}.intro`)
        },
        speechCategories() {
            const speechCategories = this.speechesData.map(
                (speech) => speech.category,
            )
            const uniqueSpeechCategories = [...new Set(speechCategories)]
            return uniqueSpeechCategories
        },
        filteredSpeechesData() {
            return this.speechesData.filter((speech) =>
                this.checkedCategories.includes(speech.category),
            )
        },
        selectedSpeechesData() {
            if (
                this.eventType === 'talks' &&
                this.checkedCategories.length > 0
            ) {
                return this.filteredSpeechesData
            } else {
                return this.speechesData
            }
        },
        isAllCategoriesSelected() {
            if (this.speechCategories.length > 0)
                return (
                    this.checkedCategories.length ===
                    this.speechCategories.length
                )
            // Before receiving speech data, set isAllCategoriesSelected to false
            return false
        },
    },
    methods: {
        metaInfo() {
            return {
                title: this.title,
                meta: [
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: this.title,
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: this.intro,
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.intro,
                    },
                ],
            }
        },
        selectAllCategories() {
            if (!this.isAllCategoriesSelected) {
                this.checkedCategories = this.speechCategories
            } else {
                this.checkedCategories = []
            }
        },
        isCategoriesChecked(category) {
            return this.checkedCategories.includes(category)
        },
    },
    head() {
        return this.metaInfo()
    },
}
</script>

<style lang="postcss" scoped>
.intro {
    @apply mb-8 text-xs md:text-sm;
    line-height: 33px;
}
</style>
