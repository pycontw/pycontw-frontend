<template>
    <div class="relative">
        <div class="core-navBarHamburger__icon-button">
            <button>
                <icon-hamburger-menu-icon
                    v-show="!isMenuSlidedIn"
                    @click.native="toggleMenu"
                />
            </button>
            <button
                v-show="isMenuSlidedIn"
                class="core-navBarHamburger__close"
                @click="toggleMenu"
            >
                +
            </button>
        </div>
        <div
            v-if="isMenuSlidedIn"
            class="core-navBarHamburgerSlideInMenu core-navBarHamburgerSlideInMenu__overflow"
        >
            <nav-bar-item-accordion
                :label="$t('about')"
                :items="aboutItems"
                :expanding="expandingItem === 'about'"
                @click.native="toggleAccordion('about')"
            ></nav-bar-item-accordion>
            <nav-bar-item-accordion
                v-if="showSpeakingPage"
                :label="$t('speaking')"
                :items="speakingItems"
                :expanding="expandingItem === 'speaking'"
                @click.native="toggleAccordion('speaking')"
            ></nav-bar-item-accordion>
            <locale-link
                v-if="showSchedulePage"
                class="core-navBarHamburgerSlideInMenu__item"
                to="/conference/schedule"
                customized
                >{{ $t('schedule') }}</locale-link
            >
            <locale-link
                v-if="showEventOverviewPage"
                class="core-navBarHamburgerSlideInMenu__item"
                to="/events/overview"
                customized
                >{{ $t('overview') }}</locale-link
            >
            <nav-bar-item-accordion
                v-if="showConferencePage"
                :label="$t('conference')"
                :items="conferenceItems"
                :expanding="expandingItem === 'conference'"
                @click.native="toggleAccordion('conference')"
            ></nav-bar-item-accordion>
            <nav-bar-item-accordion
                v-if="showEventsPage"
                :label="$t('events')"
                :items="eventsItems"
                :expanding="expandingItem === 'events'"
                @click.native="toggleAccordion('events')"
            ></nav-bar-item-accordion>
            <locale-link
                v-if="showSponsorPage"
                class="core-navBarHamburgerSlideInMenu__item"
                to="/sponsor"
                customized
                >{{ $t('sponsor') }}</locale-link
            >
            <nav-bar-item-accordion
                v-if="showRegistrationPage"
                :label="$t('registration')"
                :items="registrationItems"
                :expanding="expandingItem === 'registration'"
                @click.native="toggleAccordion('registration')"
            ></nav-bar-item-accordion>
            <locale-link
                v-if="showVenuePage"
                class="core-navBarHamburgerSlideInMenu__item"
                to="/venue"
                customized
                >{{ $t('venue') }}</locale-link
            >
            <ext-link
                class="core-navBarHamburgerSlideInMenu__item"
                :href="proposalSystemUrl"
                >{{ $t('proposalSystemUrl') }}</ext-link
            >
        </div>
    </div>
</template>

<script>
import IconHamburgerMenuIcon from '@/components/core/icons/IconHamburgerMenuIcon'
import NavBarItemAccordion from '@/components/core/header/nav-bar/NavBarItemAccordion'
import { ExtLink, LocaleLink } from '@/components/core/links'
import i18n from './NavBar.i18n'
import navBarItems from './nav-bar-items'

export default {
    i18n,
    name: 'CoreHeaderNavBarHamburger',
    components: {
        IconHamburgerMenuIcon,
        NavBarItemAccordion,
        ExtLink,
        LocaleLink,
    },
    data() {
        return {
            isMenuSlidedIn: false,
            expandingItem: undefined,
        }
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
        showEventsPage() {
            return this.$store.state.configs.showEventsPage
        },
        showEventOverviewPage() {
            return this.$store.state.configs.showEventOverviewPage
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
    watch: {
        $route() {
            if (!this.isMenuSlidedIn) {
                return
            }
            this.toggleMenu()
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
        toggleMenu() {
            this.isMenuSlidedIn = !this.isMenuSlidedIn
        },
        toggleAccordion(itemName) {
            if (this.expandingItem === itemName) {
                this.expandingItem = undefined
            } else {
                this.expandingItem = itemName
            }
        },
    },
}
</script>

<style lang="postcss" scoped>
.core-navBarHamburgerSlideInMenu {
    @apply fixed right-0 flex h-full w-full flex-col bg-black-900 pt-4 font-bold;
    top: 64px;
    z-index: 1000;
}
.core-navBarHamburgerSlideInMenu__overflow {
    /*if the height is too small*/
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    overflow-y: scroll;
    overflow-x: hidden;
}
.core-navBarHamburgerSlideInMenu__overflow::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
}
.core-navBarHamburgerSlideInMenu__item {
    @apply flex w-full items-center;
    padding: 17px 72px;
}

.core-navBarHamburgerSlideInMenu__item:hover {
    color: #7568f6;
}
.core-navBarHamburger__icon-button {
    @apply relative w-4	 text-center;
    z-index: 1001;
}

.core-navBarHamburger__close {
    @apply absolute left-1/2 top-1/2 whitespace-nowrap text-4xl;
    transform: translate(-50%, -50%) rotate(45deg);
}
</style>
