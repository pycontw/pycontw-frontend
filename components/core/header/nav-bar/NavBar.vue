<template>
    <nav class="h-full flex justify-evenly items-center">
        <nav-bar-item-dropdown
            :label="$t('about')"
            :items="aboutItems"
            :class="getPageClassesByPath('about')"
        >
        </nav-bar-item-dropdown>
        <!-- <nav-bar-item-dropdown
            :label="$t('speaking')"
            :items="speakingItems"
            :class="getPageClassesByPath('speaking')"
        >
        </nav-bar-item-dropdown> -->
        <!-- <locale-link
            to="/conference/schedule"
            :class="getPageClassesByPath('schedule', true)"
            customized
            >{{ $t('schedule') }}</locale-link
        > -->
        <nav-bar-item-dropdown
            :label="$t('conference')"
            :items="conferenceItems"
            :class="getPageClassesByPath('conference')"
        >
        </nav-bar-item-dropdown>
        <!-- <locale-link
            to="/sponsor"
            :class="getPageClassesByPath('sponsor', true)"
            customized
        >
            {{ $t('sponsor') }}
        </locale-link> -->
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
import { ExtLink } from '@/components/core/links'
import NavBarItemDropdown from './NavBarItemDropdown'
import i18n from './NavBar.i18n'

export default {
    i18n,
    name: 'CoreHeaderNavBar',
    components: {
        NavBarItemDropdown,
        ExtLink,
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
    methods: {
        generateI18nItems(items) {
            return items.map(({ i18nKey, value }) => ({
                label: this.$i18n.t(i18nKey),
                value,
            }))
        },
        getPageClassesByPath(category, isLink = false) {
            const items = navBarItems[category]
            const nameRegex = RegExp(
                String.raw`${category}-[\w-]+___${this.$i18n.locale}`,
                'g',
            )
            let isOnCurrentPath = !!this.$route.name.match(nameRegex)
            if (items && !isLink) {
                // use for the case, e.g. category is "conference", but have subpath like "events/...."
                const paths = items.map(
                    (item) => `/${this.$i18n.locale}${item.value}`,
                )
                isOnCurrentPath =
                    isOnCurrentPath || paths.includes(this.$route.path)
            }
            if (isLink) {
                isOnCurrentPath =
                    isOnCurrentPath ||
                    this.$route.name === `${category}___${this.$i18n.locale}`
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
    @apply font-bold;
}

.core-navBarItem:hover {
    @apply text-pink-700;
}

.core-navBarItem.--active,
.core-navBarItem.--active .options-menu {
    @apply text-pink-700;
}
</style>
