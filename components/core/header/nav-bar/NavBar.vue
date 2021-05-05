<template>
    <nav class="h-full flex justify-evenly items-center">
        <locale-link
            to="/about"
            :class="getPageClassesByPath('about', true)"
            customized
        >
            {{ $t('about') }}
        </locale-link>
        <locale-link
            to="/sponsor"
            :class="getPageClassesByPath('sponsor', true)"
            customized
        >
            {{ $t('sponsor') }}
        </locale-link>
        <nav-bar-item-dropdown
            :label="$t('speaking')"
            :items="speakingItems"
            :class="getPageClassesByPath('speaking')"
        >
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown
            :label="$t('registration')"
            :items="registrationItems"
            :class="getPageClassesByPath('registration')"
        >
        </nav-bar-item-dropdown>
        <!--
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
        <locale-link to="/venue" :class="getPageClassesByPath('venue', true)">
            {{ $t('venue') }}
        </locale-link>
        <locale-link
            to="/covid-19/guidelines"
            :class="getPageClassesByPath('covid-19', true)"
        >
            {{ $t('covid19Guidelines') }}
        </locale-link>
        -->
        <ext-link
            href="https://forms.gle/wuG2w42cbhamyGdv9"
            :class="getPageClassesByPath('volunteer', true)"
        >
            {{ $t('volunteer') }}
        </ext-link>
        <locale-link
            to="/covid-19/guidelines"
            :class="getPageClassesByPath('covid-19', true)"
            customized
        >
            {{ $t('covid19Guidelines') }}
        </locale-link>
        <ext-link
            :href="signInUrl"
            :class="getPageClassesByPath('signIn', true)"
        >
            {{ $t('signIn') }}
        </ext-link>
    </nav>
</template>

<script>
import navBarItems from '@/components/core/header/nav-bar/nav-bar-items'
import NavBarItemDropdown from './NavBarItemDropdown'
import i18n from './NavBar.i18n'
import { LocaleLink, ExtLink } from '~/components/core/links'

export default {
    i18n,
    name: 'CoreHeaderNavBar',
    components: {
        NavBarItemDropdown,
        LocaleLink,
        ExtLink,
    },
    computed: {
        conferenceItems() {
            return this.generateI18nItems(navBarItems.conferenceItems)
        },
        speakingItems() {
            return this.generateI18nItems(navBarItems.speakingItems)
        },
        eventsItems() {
            return this.generateI18nItems(navBarItems.eventsItems)
        },
        registrationItems() {
            return this.generateI18nItems(navBarItems.registrationItems)
        },
        signInUrl() {
            return `https://tw.pycon.org/prs/${this.$i18n.locale}/dashboard/`
        },
    },
    methods: {
        generateI18nItems(items) {
            return items.map(({ i18nKey, value }) => ({
                label: this.$i18n.t(i18nKey),
                value,
            }))
        },
        getPageClassesByPath(pathPrefix = '', isLink = false) {
            const isOnCurrentPath = this.$route.name.startsWith(pathPrefix)
            return {
                'core-navBarItem': true,
                flex: isLink,
                'h-full': isLink,
                'justify-center': isLink,
                'items-center': isLink,
                'px-8': isLink,
                'py-2': isLink,
                'bg-transparent': !isOnCurrentPath,
                'bg-golden-primary': isOnCurrentPath,
                '--active': isOnCurrentPath,
            }
        },
    },
}
</script>

<style scoped>
.core-navBarItem {
    color: #c7c7c7;
    font-weight: 700;
}

.core-navBarItem:hover {
    color: #000000;
    background-color: #c2a53a;
}

.core-navBarItem.--active,
.core-navBarItem.--active .options-menu {
    color: #000000;
}
</style>
