<template>
    <nav class="h-full flex justify-evenly items-center">
        <nav-bar-item-dropdown
            :label="$t('about')"
            :items="aboutItems"
            :class="getPageClassesByPath('about')"
        >
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown
            :label="$t('conference')"
            :items="conferenceItems"
            :class="getPageClassesByPath('conference')"
        >
        </nav-bar-item-dropdown>
        <locale-link
            to="/sponsor"
            :class="getPageClassesByPath('sponsor', true)"
            customized
        >
            {{ $t('sponsor') }}
        </locale-link>
        <!-- <nav-bar-item-dropdown
            :label="$t('speaking')"
            :items="speakingItems"
            :class="getPageClassesByPath('speaking')"
        >
        </nav-bar-item-dropdown> -->
        <!-- <nav-bar-item-dropdown
            :label="$t('events')"
            :items="eventsItems"
            :class="getPageClassesByPath('events')"
        >
        </nav-bar-item-dropdown> -->
        <nav-bar-item-dropdown
            :label="$t('registration')"
            :items="registrationItems"
            :class="getPageClassesByPath('registration')"
        >
        </nav-bar-item-dropdown>
        <!-- 
        <locale-link to="/venue" :class="getPageClassesByPath('venue', true)">
            {{ $t('venue') }}
        </locale-link> -->
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
        aboutItems() {
            return this.generateI18nItems(navBarItems.aboutItems)
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
    color: #c2a53a;
}

.core-navBarItem.--active,
.core-navBarItem.--active .options-menu {
    color: #c2a53a;
}
</style>
