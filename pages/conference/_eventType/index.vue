<template>
    <div>
        <i18n-page-wrapper class="pt-24 pb-4" custom-y>
            <core-h1 :title="title"></core-h1>
            <p class="intro">{{ intro }}</p>
        </i18n-page-wrapper>
        <i18n-page-wrapper
            v-if="eventType === 'talks'"
            class="px-4 sm:px-8 md:px-16 lg:px-32 pb-6 lg:pb-12"
            custom-x
            custom-y
        >
            <p class="filter ml-2">Filter</p>
            <core-hr :margin-vertical="10" color="#c2a53a"></core-hr>
            <checkbox-collection>
                <core-checkbox
                    id="ALL"
                    key="category_ALL"
                    :value="isAllCategoriesSelected"
                    :label="$t('categories.ALL')"
                    @input="selectAllCategories()"
                ></core-checkbox>
                <core-checkbox
                    v-for="category in speechCategories"
                    :id="category"
                    :key="`category_${category}`"
                    v-model="checkedCategories"
                    :label="$t(`categories.${category}`)"
                ></core-checkbox>
            </checkbox-collection>
        </i18n-page-wrapper>
        <i18n-page-wrapper
            class="px-2 sm:px-8 md:px-16 lg:px-32 pb-24"
            custom-x
            custom-y
        >
            <speech-card-collection>
                <speech-card
                    v-for="speech in computedSpeechesData"
                    :id="speech.id"
                    :key="`speech_${speech.id}`"
                    :title="speech.title"
                    :category="speech.category"
                    :speakers="speech.speakers"
                    :to="`/conference/${speech.event_type}/${speech.id}/`"
                >
                </speech-card>
            </speech-card-collection>
        </i18n-page-wrapper>
    </div>
</template>

<script>
import i18n from '@/i18n/conference/speeches.i18n'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import CoreHr from '@/components/core/layout/Hr.vue'
import CoreCheckbox from '@/components/core/checkbox/checkbox'
import CheckboxCollection from '@/components/core/checkbox/checkboxCollection'
import SpeechCard from '@/components/events/SpeechCard'
import SpeechCardCollection from '@/components/events/SpeechCardCollection'

export default {
    i18n,
    name: 'PageConferenceSpeeches',
    components: {
        I18nPageWrapper,
        CoreH1,
        CoreHr,
        CoreCheckbox,
        CheckboxCollection,
        SpeechCard,
        SpeechCardCollection,
    },
    asyncData({ redirect, params }) {
        const eventType = params.eventType
        if (!['talks', 'tutorials'].includes(eventType)) {
            redirect('/')
        }
    },
    data() {
        return {
            eventType: '',
            speechesData: [],
            checkedCategories: [],
            checkedAllCategories: true,
        }
    },
    computed: {
        title() {
            return this.$i18n.t(`${this.$route.params.eventType}.title`)
        },
        intro() {
            return this.$i18n.t(`${this.$route.params.eventType}.intro`)
        },
        speechCategories() {
            const speechCategories = []
            this.speechesData.map((speech) => {
                if (!speechCategories.includes(speech.category))
                    speechCategories.push(speech.category)
            })
            return speechCategories
        },
        filteredSpeechesData() {
            return this.speechesData.filter((speech) =>
                this.checkedCategories.includes(speech.category),
            )
        },
        computedSpeechesData() {
            if (this.eventType === 'talks') {
                return this.filteredSpeechesData
            } else {
                return this.speechesData
            }
        },
        isAllCategoriesSelected() {
            return (
                this.checkedCategories.length === this.speechCategories.length
            )
        },
    },
    async mounted() {
        this.eventType = this.$route.params.eventType
        await this.$store.dispatch('$getSpeechesData', this.eventType)
        this.speechesData = this.$store.state.speechesData
        if (this.eventType === 'talks') {
            this.selectAllCategories()
        }
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
    },
    head() {
        return this.metaInfo()
    },
}
</script>

<style lang="postcss" scoped>
.intro {
    @apply text-xs md:text-sm mb-8;
    line-height: 33px;
}
.filter {
    @apply text-sm md:text-base;
    color: #f3cc39;
}
</style>
