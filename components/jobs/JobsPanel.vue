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
                <div class="font-bold">{{ $t('jobDescription') }}</div>
                <p>{{ job[$makeKey(locale, 'job_description')] || '-' }}</p>
            </div>
            <br />
            <div class="jobsPanelJob__requirements">
                <div class="font-bold">{{ $t('jobRequirement') }}</div>
                <p>{{ job[$makeKey(locale, 'job_requirements')] || '-' }}</p>
            </div>
            <core-text-button :href="job.job_url" class="mt-4 mb-12">
                {{ ctaLabel }}
            </core-text-button>
        </div>
        <div v-if="!jobs.length" class="jobsPanelEmpty">
            <div class="jobsPanelJob__description">{{ emptyMessage }}</div>
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/sponsor/jobs.i18n'
import CoreTextButton from '@/components/core/buttons/TextButton'

export default {
    i18n,
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

<style lang="postcss" scoped>
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
    @apply whitespace-pre-line text-sm md:text-base;
    color: #ffffff;
}
</style>
