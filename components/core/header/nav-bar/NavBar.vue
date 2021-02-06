<template>
    <nav class="flex justify-evenly items-center">
        <locale-link to="/about" :class="getPageClassesByPath('about', true)">
            {{ $t('about') }}
        </locale-link>
        <nav-bar-item-dropdown
            :label="$t('speaking')"
            :items="speakingItems"
            :class="getPageClassesByPath('speaking')"
        >
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown
            :label="$t('conference')"
            :items="conferenceItems"
            :class="getPageClassesByPath('conference')"
        >
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown
            :label="$t('events')"
            :items="eventsItems"
            :class="getPageClassesByPath('events')"
        >
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown
            :label="$t('registration')"
            :items="registrationItems"
            :class="getPageClassesByPath('registration')"
        >
        </nav-bar-item-dropdown>
        <locale-link to="/venue" :class="getPageClassesByPath('venue', true)">
            {{ $t('venue') }}
        </locale-link>
        <locale-link
            to="/covid-19/guidelines"
            :class="getPageClassesByPath('covid-19', true)"
        >
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
        speakingItems() {
            return [
                {
                    label: this.$i18n.t('cfp'),
                    value: '/speaking/cfp',
                },
                {
                    label: this.$i18n.t('talk'),
                    value: '/speaking/talk',
                },
                {
                    label: this.$i18n.t('tutorial'),
                    value: '/speaking/tutorial',
                },
                {
                    label: this.$i18n.t('recording'),
                    value: '/speaking/recording',
                },
            ]
        },
        eventsItems() {
            return [
                {
                    label: this.$i18n.t('overview'),
                    value: '/events/overview',
                },
                {
                    label: this.$i18n.t('warmUpSessions'),
                    value: '/events/warm-up-sessions',
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
    methods: {
        getPageClassesByPath(pathPrefix = '', isLink = false) {
            const isOnCurrentPath = this.$route.name.startsWith(pathPrefix)
            return {
                'mx-4': true,
                'px-4': isLink,
                'py-2': isLink,
                'border-b-2': true,
                'border-gray-800': isOnCurrentPath,
                'border-transparent': !isOnCurrentPath,
            }
        },
    },
}
</script>

<style scoped></style>
