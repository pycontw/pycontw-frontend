<template>
    <locale-link
        to="/"
        class="core-homeIcon md:px-8 py-2 flex justify-center items-center"
        customized
    >
        <img
            src="~/static/icon.svg"
            :alt="`Home icon of ${conferenceName} ${conferenceYear}`"
            class="w-6"
        />
        <span class="font-bold ml-2"> {{ conferenceName }} </span>
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
}
</style>
