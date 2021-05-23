<template>
    <div class="jobsPanel">
        <div
            v-for="(job, i) in jobs"
            :key="$makeKey(i, 'jobs_panel_job')"
            class="jobsPanelJob"
        >
            <div class="jobsPanelJob__title">
                {{ job[$makeKey(locale, 'job_name')] || '-' }}
            </div>
            <div class="jobsPanelJob__description">
                {{ job[$makeKey(locale, 'job_description')] || '-' }}
            </div>
            <div class="jobsPanelJob__requirements">
                {{ job[$makeKey(locale, 'job_requirements')] || '-' }}
            </div>
            <core-text-button :href="job.job_url" class="mt-4 mb-8">
                {{ ctaLabel }}
            </core-text-button>
        </div>
        <div v-if="!jobs.length" class="jobsPanelEmpty">
            <div class="jobsPanelJob__description">{{ emptyMessage }}</div>
        </div>
    </div>
</template>

<script>
import CoreTextButton from '@/components/core/buttons/TextButton'

export default {
    name: 'JobsPanel',
    components: {
        CoreTextButton,
    },
    props: {
        jobs: { type: Array, default: () => [] },
        ctaLabel: { type: String, default: '' },
        emptyMessage: { type: String, default: '' },
    },
    computed: {
        locale() {
            return { 'en-us': 'en_us', 'zh-hant': 'zh_hant' }[this.$i18n.locale]
        },
    },
}
</script>

<style scoped>
.jobsPanel {
    @apply relative p-8 mb-12 rounded-2xl;
    background-color: #1d1a37;
}

.jobsPanelJob__title {
    @apply mb-4 font-bold text-2xl;
    color: #c2a53a;
}

.jobsPanelJob__description,
.jobsPanelJob__requirements {
    @apply whitespace-pre-line;
    color: #ffffff;
}
</style>
