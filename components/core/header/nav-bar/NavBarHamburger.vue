<template>
    <div class="relative">
        <icon-hamburger-menu-icon
            v-show="!isMenuSlidedIn"
            class="cursor-pointer"
            @click.native="toggleMenu"
        />
        <div
            v-show="isMenuSlidedIn"
            class="close-icon-button"
            @click="toggleMenu"
        >
            +
        </div>
        <div v-if="isMenuSlidedIn" class="core-navBarHamburgerSlideInMenu">
            <nav-bar-item-accordion
                :label="$t('about')"
                :items="aboutItems"
                :expanding="expandingItem === 'about'"
                @click.native="toggleAccordion('about')"
            ></nav-bar-item-accordion>
            <locale-link
                class="core-navBarHamburgerSlideInMenu__item"
                to="/conference/schedule"
                customized
                >{{ $t('schedule') }}</locale-link
            >
            <nav-bar-item-accordion
                :label="$t('conference')"
                :items="conferenceItems"
                :expanding="expandingItem === 'conference'"
                @click.native="toggleAccordion('conference')"
            ></nav-bar-item-accordion>
            <!-- <locale-link
                class="core-navBarHamburgerSlideInMenu__item"
                to="/sponsor"
                customized
                >{{ $t('sponsor') }}</locale-link
            > -->
            <!-- <nav-bar-item-accordion
                :label="$t('speaking')"
                :items="speakingItems"
                :expanding="expandingItem === 'speaking'"
                @click.native="toggleAccordion('speaking')"
            ></nav-bar-item-accordion> -->
            <locale-link
                class="core-navBarHamburgerSlideInMenu__item"
                to="/registration/tickets"
                customized
                >{{ $t('registration') }}</locale-link
            >
            <ext-link
                class="core-navBarHamburgerSlideInMenu__item"
                :href="signInUrl"
                >{{ $t('signIn') }}</ext-link
            >
        </div>
    </div>
</template>

<script>
import IconHamburgerMenuIcon from '@/components/core/icons/IconHamburgerMenuIcon'
import NavBarItemAccordion from '@/components/core/header/nav-bar/NavBarItemAccordion'
import i18n from './NavBar.i18n'
import navBarItems from './nav-bar-items'
import { ExtLink, LocaleLink } from '~/components/core/links'

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
            return this.generateI18nItems(navBarItems.conference)
        },
        speakingItems() {
            return this.generateI18nItems(navBarItems.speaking)
        },
        aboutItems() {
            return this.generateI18nItems(navBarItems.about)
        },
        signInUrl() {
            return `https://tw.pycon.org/prs/${this.$i18n.locale}/dashboard/`
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
        generateI18nItems(items) {
            return items.map(({ i18nKey, value }) => ({
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

<style scoped>
.core-navBarHamburgerSlideInMenu {
    @apply fixed top-0 right-0 flex w-2/3 h-full pt-10 flex-col text-black font-bold;
    background-color: #191731;
    z-index: 1000;
}

.core-navBarHamburgerSlideInMenu__item {
    @apply flex w-full p-4 justify-center items-center;
    color: #c386ae;
}

.core-navBarHamburgerSlideInMenu__item:hover {
    color: #7568f6;
}

.close-icon-button {
    @apply relative transform rotate-45 text-4xl cursor-pointer;
    z-index: 1001;
    color: #c386ae;
}
</style>
