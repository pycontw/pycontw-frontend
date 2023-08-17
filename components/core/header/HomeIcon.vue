<template>
    <locale-link
        to="/"
        class="core-homeIcon flex items-center justify-center py-2 md:px-4"
        customized
    >
        <img
            src="~/static/icon.svg"
            :alt="`Home icon of ${conferenceName} ${conferenceYear}`"
            class="w-6"
        />
        <span class="ml-2 font-bold"> {{ conferenceName }} </span>
    </locale-link>
</template>

<script>
import LocaleLink from '@/components/core/links/LocaleLink'

export default {
    name: 'HomeIcon',
    components: {
        LocaleLink,
    },
    computed: {
        conferenceName() {
            return this.$store.state.configs.conferenceName
        },
        conferenceYear() {
            return this.$store.state.configs.conferenceYear
        },
    },
}
</script>

<style scoped>
.core-homeIcon {
    @apply text-pink-700;
    flex-shrink: 0;
}
</style>
