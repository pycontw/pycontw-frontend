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
            class="
                core-navBarHamburgerSlideInMenu
                core-navBarHamburgerSlideInMenu__overflow
            "
        >
            <nav-bar-item-accordion
                :label="$t('about')"
                :items="aboutItems"
                :expanding="expandingItem === 'about'"
                @click.native="toggleAccordion('about')"
            ></nav-bar-item-accordion>
            <!-- <nav-bar-item-accordion
                :label="$t('speaking')"
                :items="speakingItems"
                :expanding="expandingItem === 'speaking'"
                @click.native="toggleAccordion('speaking')"
            ></nav-bar-item-accordion> -->
            <!-- <locale-link
                class="core-navBarHamburgerSlideInMenu__item"
                to="/conference/schedule"
                customized
                >{{ $t('schedule') }}</locale-link
            > -->
            <nav-bar-item-accordion
                :label="$t('conference')"
                :items="conferenceItems"
                :expanding="expandingItem === 'conference'"
                @click.native="toggleAccordion('conference')"
            ></nav-bar-item-accordion>
            <locale-link
                class="core-navBarHamburgerSlideInMenu__item"
                to="/sponsor"
                customized
                >{{ $t('sponsor') }}</locale-link
            >
            <nav-bar-item-accordion
                :label="$t('registration')"
                :items="registrationItems"
                :expanding="expandingItem === 'registration'"
                @click.native="toggleAccordion('registration')"
            ></nav-bar-item-accordion>
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
            return this.generateI18nItems(navBarItems.conference)
        },
        speakingItems() {
            return this.generateI18nItems(navBarItems.speaking)
        },
        aboutItems() {
            return this.generateI18nItems(navBarItems.about)
        },
        registrationItems() {
            return this.generateI18nItems(navBarItems.registration)
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

<style lang="postcss" scoped>
.core-navBarHamburgerSlideInMenu {
    @apply fixed right-0 flex w-full h-full flex-col font-bold pt-4 bg-black900;
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
    @apply absolute text-4xl whitespace-nowrap top-1/2 left-1/2;
    transform: translate(-50%, -50%) rotate(45deg);
}
</style>
