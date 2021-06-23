<template>
    <header class="w-full h-full">
        <div class="header-container --desktop hidden md:flex">
            <home-icon />
            <nav-bar />
            <locale-switch />
        </div>
        <div class="header-container --mobile flex md:hidden">
            <home-icon />
            <div class="h-full flex items-center">
                <locale-switch />
                <nav-bar-hamburger />
            </div>
        </div>
    </header>
</template>

<script>
import HomeIcon from './HomeIcon'
import NavBar from './nav-bar/NavBar'
import NavBarHamburger from './nav-bar/NavBarHamburger'
import LocaleSwitch from './locale-switch/LocaleSwitch'

export default {
    name: 'CoreHeader',
    components: {
        HomeIcon,
        LocaleSwitch,
        NavBar,
        NavBarHamburger,
    },
    computed: {
        myPyConUrl() {
            return `https://tw.pycon.org/prs/${this.$i18n.locale}/dashboard/`
        },
    },
}
</script>

<style lang="postcss" scoped>
.header-container {
    @apply w-full h-full px-4 justify-between items-center text-sm;
}

.header-container.--desktop {
    color: #c2a53a;
    background-color: #121023;
}

.header-container.--desktop .core-localeSwitch:hover {
    color: #c2a53a;
}

.header-container.--mobile {
    color: #c2a53a;
    background-color: #1c1a38;
}

.header-container.--mobile .core-localeSwitch {
    color: #c2a53a;
}

.header-container.--mobile .core-localeSwitch:hover {
    background-color: unset;
}
</style>
