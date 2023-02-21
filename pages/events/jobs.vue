<template>
    <div>
        <core-h1 :title="$t('title')" class="mt-24"></core-h1>
        <jobs-card-collection ref="jobsCardCollection" site>
            <jobs-card
                v-for="sponsor in jobsData"
                :key="sponsor.id"
                :sponsor-name="sponsor.sponsor_name"
                :logo-url="sponsor.sponsor_logo_url"
                :active="selectedSponsor.id === sponsor.id"
                @click="setSelectedSponsor(sponsor)"
            ></jobs-card>
        </jobs-card-collection>
        <i18n-page-wrapper class="py-6" custom-y>
            <jobs-panel
                ref="jobsPanel"
                :jobs="selectedSponsor.jobs"
                :cta-label="$t('applyNow')"
                :empty-message="$t('noJobs')"
            ></jobs-panel>
        </i18n-page-wrapper>
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
    async asyncData({ store, app, payload }) {
        if (payload) return { jobsData: payload }
        await store.dispatch('$getJobsData')
        const jobsData = store.state.jobsData.map((sponsor) => ({
            ...sponsor,
            id: app.$makeId(),
        }))
        return { jobsData }
    },
    data() {
        return {
            selectedSponsor: {},
            pivot: 0,
        }
    },
    mounted() {
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
