<template>
    <nav class="flex justify-evenly items-center">
        <locale-link to="/about" class="mx-4">{{ $t('about') }}</locale-link>
        <nav-bar-item-dropdown :title="$t('conference')" class="mx-4">
            <locale-link to="/conference/schedule">
                {{ $t('schedule') }}
            </locale-link>
            <locale-link to="/conference/keynotes">
                {{ $t('keynotes') }}
            </locale-link>
            <locale-link to="/conference/talks">
                {{ $t('talks') }}
            </locale-link>
            <locale-link to="/conference/tutorials">
                {{ $t('tutorials') }}
            </locale-link>
            <locale-link to="/conference/community-tracks">
                {{ $t('communityTracks') }}
            </locale-link>
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown :title="$t('events')" class="mx-4">
            <locale-link to="/events/overview">
                {{ $t('overview') }}
            </locale-link>
            <locale-link to="/events/warm-up-sessions">
                {{ $t('warmUpSessions') }}
            </locale-link>
            <locale-link to="/events/open-spaces">
                {{ $t('openSpaces') }}
            </locale-link>
            <locale-link to="/events/sprints">
                {{ $t('sprints') }}
            </locale-link>
            <locale-link to="/events/job-listings">
                {{ $t('jobListings') }}
            </locale-link>
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown :title="$t('registration')" class="mx-4">
            <locale-link to="/registration/tickets">
                {{ $t('conferenceTickets') }}
            </locale-link>
            <locale-link to="/registration/financial-aid">
                {{ $t('financialAid') }}
            </locale-link>
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
}
</script>

<style scoped></style>
