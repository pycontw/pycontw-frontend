<template>
    <div :class="jobsCardCollection">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'JobsCardCollection',
    props: {
        site: {
            type: Boolean,
            default: false,
        },
        gather: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        jobsCardCollection() {
            return {
                'core-jobsCardCollection': true,
                '--site': this.site,
                '--gather': this.gather,
            }
        },
    },
}
</script>

<style scoped>
.core-jobsCardCollection {
    @apply flex px-0 bg-black-900;
}

.core-jobsCardCollection.--site {
    @apply z-50 py-4 sticky w-full;
    @apply flex-wrap items-center justify-center;
    top: 48px;
}

.core-jobsCardCollection.--gather {
    @apply sm:px-4 md:pr-4 md:pl-16;
    @apply flex-col justify-start pt-8 md:pt-7;
}
</style>
