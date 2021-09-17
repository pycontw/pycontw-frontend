<template>
    <div>
        <core-h1 :title="$t('title')" class="mt-24"></core-h1>
        <div class="flex flex-row">
            <jobs-card-collection ref="jobsCardCollection" gather>
                <jobs-card
                    v-for="sponsor in jobsData"
                    :key="sponsor.id"
                    :sponsor-name="sponsor.sponsor_name"
                    :logo-url="sponsor.sponsor_logo_url"
                    :active="selectedSponsor.id === sponsor.id"
                    @click="setSelectedSponsor(sponsor)"
                ></jobs-card>
            </jobs-card-collection>
            <i18n-page-wrapper
                class="pt-8 pb-12 px-0 sm:px-4 md:pr-8 md:pl-4"
                custom-y
                custom-x
            >
                <jobs-panel
                    ref="jobsPanel"
                    :jobs="selectedSponsor.jobs"
                    :cta-label="$t('applyNow')"
                    :empty-message="$t('noJobs')"
                ></jobs-panel>
            </i18n-page-wrapper>
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/sponsor/jobs.i18n'
import CoreH1 from '@/components/core/titles/H1'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import { JobsCard, JobsCardCollection, JobsPanel } from '@/components/jobs'

export default {
    i18n,
    fetchOnServer: false,
    name: 'PageEventsJobs',
    components: {
        CoreH1,
        I18nPageWrapper,
        JobsCard,
        JobsCardCollection,
        JobsPanel,
    },
    data() {
        return {
            selectedSponsor: {},
            jobsData: [],
            pivot: 0,
        }
    },
    async mounted() {
        await this.$store.dispatch('$getJobsData')
        this.jobsData = this.$store.state.jobsData.map((sponsor) => ({
            ...sponsor,
            id: this.$makeId(),
        }))
        this.setSelectedSponsor(this.jobsData[0])
        this.setPivot()
    },
    methods: {
        setSelectedSponsor(sponsor) {
            this.selectedSponsor = sponsor
            window.scrollTo({ top: this.pivot, behavior: 'smooth' })
        },
        setPivot() {
            this.pivot = this.$refs.jobsCardCollection.$el.offsetTop
        },
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('og.description'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>

<style scoped></style>
