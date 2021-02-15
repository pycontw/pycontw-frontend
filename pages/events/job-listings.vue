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
export default {
    name: 'PageEventsJobListings',
    async asyncData({ $axios }) {
        const { data: jobsData } = await $axios.$get('/api/jobs')
        return { jobsData }
    },
}
</script>

<style scoped></style>
