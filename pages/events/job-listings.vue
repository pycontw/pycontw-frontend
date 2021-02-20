<template>
    <div>
        <p>Events job listings</p>
        <div
            v-for="(jobListing, i) in jobsData"
            :key="`job_listings_sponsor_${i}`"
        >
            <h2 class="text-2xl">{{ jobListing.sponsor_name || '' }}</h2>
            <div
                v-for="(job, j) in jobListing.jobs"
                :key="`job_listings_sponsor_${i}_job_${j}`"
            >
                <div>
                    <p>Job Name: {{ job.job_name }}</p>
                    <div>JD: {{ job.job_description }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'PageEventsJobListings',
    fetchOnServer: false,
    computed: {
        ...mapState(['jobsData']),
    },
    created() {
        this.$store.dispatch('$getJobsData')
    },
}
</script>

<style scoped></style>
