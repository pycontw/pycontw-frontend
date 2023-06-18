<template>
    <nav class="flex h-full items-center justify-evenly">
        <nav-bar-item-dropdown
            :label="$t('about')"
            :items="aboutItems"
            :class="getPageClassesByPath('about')"
        >
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown
            v-if="showSpeakingPage"
            :label="$t('speaking')"
            :items="speakingItems"
            :class="getPageClassesByPath('speaking')"
        >
        </nav-bar-item-dropdown>
        <locale-link
            v-if="showSchedulePage"
            to="/conference/schedule"
            :class="getPageClassesByPath(null, true, '/conference/schedule')"
            customized
            >{{ $t('schedule') }}</locale-link
        >
        <locale-link
            v-if="showEventOverviewPage"
            to="/events/overview"
            :class="getPageClassesByPath(null, true, '/events/overview')"
            customized
            >{{ $t('overview') }}</locale-link
        >
        <nav-bar-item-dropdown
            v-if="showConferencePage"
            :label="$t('conference')"
            :items="conferenceItems"
            :class="getPageClassesByPath('conference')"
        >
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown
            v-if="showEventsPage"
            :label="$t('events')"
            :items="eventsItems"
            :class="getPageClassesByPath('events')"
        >
        </nav-bar-item-dropdown>
        <locale-link
            v-if="showSponsorPage"
            to="/sponsor"
            :class="getPageClassesByPath('sponsor', true)"
            customized
        >
            {{ $t('sponsor') }}
        </locale-link>
        <nav-bar-item-dropdown
            v-if="showRegistrationPage"
            :label="$t('registration')"
            :items="registrationItems"
            :class="getPageClassesByPath('registration')"
        >
        </nav-bar-item-dropdown>
        <locale-link
            v-if="showVenuePage"
            to="/venue"
            :class="getPageClassesByPath('venue', true)"
            customized
        >
            {{ $t('venue') }}
        </locale-link>
        <ext-link
            :href="proposalSystemUrl"
            :class="getPageClassesByPath('proposalSystemUrl', true)"
        >
            {{ $t('proposalSystemUrl') }}
        </ext-link>
    </nav>
</template>

<script>
import navBarItems from '@/components/core/header/nav-bar/nav-bar-items'
import { ExtLink, LocaleLink } from '@/components/core/links'
import NavBarItemDropdown from './NavBarItemDropdown'
import i18n from './NavBar.i18n'

export default {
    i18n,
    name: 'CoreHeaderNavBar',
    components: {
        NavBarItemDropdown,
        ExtLink,
        LocaleLink,
    },
    computed: {
        conferenceItems() {
            return this.generateI18nItems(
                navBarItems.conference,
                this.$store.state.configs.conferenceHideItems,
            )
        },
        eventsItems() {
            return this.generateI18nItems(
                navBarItems.events,
                this.$store.state.configs.eventsHideItems,
            )
        },
        speakingItems() {
            return this.generateI18nItems(navBarItems.speaking)
        },
        aboutItems() {
            return this.generateI18nItems(
                navBarItems.about,
                this.$store.state.configs.aboutHideItems,
            )
        },
        registrationItems() {
            return this.generateI18nItems(
                navBarItems.registration,
                this.$store.state.configs.registrationHideItems,
            )
        },
        proposalSystemUrl() {
            return `https://tw.pycon.org/prs/${this.$i18n.locale}/dashboard/`
        },
        showSponsorPage() {
            return this.$store.state.configs.showSponsorPage
        },
        showRegistrationPage() {
            return this.$store.state.configs.showRegistrationPage
        },
        showEventOverviewPage() {
            return this.$store.state.configs.showEventOverviewPage
        },
        showEventsPage() {
            return this.$store.state.configs.showEventsPage
        },
        showConferencePage() {
            return this.$store.state.configs.showConferencePage
        },
        showSpeakingPage() {
            return this.$store.state.configs.showSpeakingPage
        },
        showSchedulePage() {
            return this.$store.state.configs.showSchedulePage
        },
        showVenuePage() {
            return this.$store.state.configs.showVenuePage
        },
    },
    methods: {
        generateI18nItems(items, hideItems = []) {
            return items
                .filter((item) => !hideItems.includes(item.i18nKey))
                .map(({ i18nKey, value }) => ({
                    label: this.$i18n.t(i18nKey),
                    value,
                }))
        },
        getPageClassesByPath(
            category = null,
            isLink = false,
            matchRoute = null,
        ) {
            let isOnCurrentPath
            if (isLink) {
                isOnCurrentPath =
                    this.$route.path === `/${this.$i18n.locale}${matchRoute}`
            } else {
                const items = navBarItems[category]
                if (items) {
                    // use for the case, e.g. category is "conference", but have subpath like "events/...."
                    const paths = items.map(
                        (item) => `/${this.$i18n.locale}${item.value}`,
                    )
                    isOnCurrentPath = paths.includes(this.$route.path)
                }
            }
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

<style lang="postcss" scoped>
.core-navBarItem {
    @apply whitespace-nowrap font-bold;
}

.core-navBarItem:hover {
    @apply text-pink-700;
}

.core-navBarItem.--active,
.core-navBarItem.--active .options-menu {
    @apply text-pink-700;
}
</style>
