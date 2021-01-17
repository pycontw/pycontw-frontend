<template>
    <nav class="flex justify-evenly items-center">
        <LocaleLink to="/about" class="mx-4">{{ $t('about') }}</LocaleLink>
        <nav-bar-item-dropdown :title="$t('conference')" class="mx-4">
            <LocaleLink to="/conference/schedule">
                {{ $t('schedule') }}
            </LocaleLink>
            <LocaleLink to="/conference/keynotes">
                {{ $t('keynotes') }}
            </LocaleLink>
            <LocaleLink to="/conference/talks">
                {{ $t('talks') }}
            </LocaleLink>
            <LocaleLink to="/conference/tutorials">
                {{ $t('tutorials') }}
            </LocaleLink>
            <LocaleLink to="/conference/community-tracks">
                {{ $t('communityTracks') }}
            </LocaleLink>
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown :title="$t('events')" class="mx-4">
            <LocaleLink to="/events/overview">
                {{ $t('overview') }}
            </LocaleLink>
            <LocaleLink to="/events/warm-up-sessions">
                {{ $t('warmUpSessions') }}
            </LocaleLink>
            <LocaleLink to="/events/open-spaces">
                {{ $t('openSpaces') }}
            </LocaleLink>
            <LocaleLink to="/events/sprints">
                {{ $t('sprints') }}
            </LocaleLink>
            <LocaleLink to="/events/job-listings">
                {{ $t('jobListings') }}
            </LocaleLink>
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown :title="$t('registration')" class="mx-4">
            <LocaleLink to="/registration/tickets">
                {{ $t('conferenceTickets') }}
            </LocaleLink>
            <LocaleLink to="/registration/financial-aid">
                {{ $t('financialAid') }}
            </LocaleLink>
        </nav-bar-item-dropdown>
        <LocaleLink to="/venue" class="mx-4">
            {{ $t('venue') }}
        </LocaleLink>
        <LocaleLink to="/covid-19/guidelines" class="mx-4">
            {{ $t('covid19Guidelines') }}
        </LocaleLink>
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
