<template>
    <div>
        <i18n-page-wrapper class="pt-24 pb-4" custom-y>
            <core-h1 :title="title"></core-h1>
            <p class="intro">{{ intro }}</p>
        </i18n-page-wrapper>
        <i18n-page-wrapper
            class="px-2 sm:px-8 md:px-16 lg:px-32 pb-24"
            custom-x
            custom-y
        >
            <speech-card-collection>
                <speech-card
                    v-for="speech in speechesData"
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
import SpeechCard from '@/components/events/SpeechCard'
import SpeechCardCollection from '@/components/events/SpeechCardCollection'

export default {
    i18n,
    name: 'PageConferenceSpeeches',
    components: {
        I18nPageWrapper,
        CoreH1,
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
        }
    },
    computed: {
        title() {
            return this.$i18n.t(`${this.$route.params.eventType}.title`)
        },
        intro() {
            return this.$i18n.t(`${this.$route.params.eventType}.intro`)
        },
    },
    async mounted() {
        this.eventType = this.$route.params.eventType
        await this.$store.dispatch('$getSpeechesData', this.eventType)
        this.speechesData = this.$store.state.speechesData
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
</style>
