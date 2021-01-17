<template>
    <nav class="flex justify-evenly items-center">
        <locale-link to="/about" class="mx-4">{{ $t('about') }}</locale-link>
        <nav-bar-item-dropdown
            :label="$t('conference')"
            :items="conferenceItems"
            class="mx-4"
        >
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown
            :label="$t('events')"
            :items="eventsItems"
            class="mx-4"
        >
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown
            :label="$t('registration')"
            :items="registrationItems"
            class="mx-4"
        >
        </nav-bar-item-dropdown>
        <locale-link to="/venue" class="mx-4">
            {{ $t('venue') }}
        </locale-link>
        <locale-link to="/covid-19/guidelines" class="mx-4">
            {{ $t('covid19Guidelines') }}
        </locale-link>
    </nav>
</template>

<script>
import NavBarItemDropdown from './NavBarItemDropdown'
import i18n from './NavBar.i18n'
import { LocaleLink } from '~/components/core/links'

export default {
    i18n,
    name: 'CoreHeaderNavBar',
    components: {
        NavBarItemDropdown,
        LocaleLink,
    },
    computed: {
        conferenceItems() {
            return [
                {
                    label: this.$i18n.t('schedule'),
                    value: '/conference/schedule',
                },
                {
                    label: this.$i18n.t('keynotes'),
                    value: '/conference/keynotes',
                },
                { label: this.$i18n.t('talks'), value: '/conference/talks' },
                {
                    label: this.$i18n.t('tutorials'),
                    value: '/conference/tutorials',
                },
                {
                    label: this.$i18n.t('communityTracks'),
                    value: '/conference/community-tracks',
                },
            ]
        },
        eventsItems() {
            return [
                {
                    label: this.$i18n.t('overview'),
                    value: '/events/warmUpSessions',
                },
                {
                    label: this.$i18n.t('warmUpSessions'),
                    value: '/events/warm-up-session',
                },
                {
                    label: this.$i18n.t('openSpaces'),
                    value: '/events/open-spaces',
                },
                { label: this.$i18n.t('sprints'), value: '/events/sprints' },
                {
                    label: this.$i18n.t('jobListings'),
                    value: '/events/job-listings',
                },
            ]
        },
        registrationItems() {
            return [
                {
                    label: this.$i18n.t('conferenceTickets'),
                    value: '/registration/tickets',
                },
                {
                    label: this.$i18n.t('financialAid'),
                    value: '/registration/financial-aid',
                },
            ]
        },
    },
}
</script>

<style scoped></style>
