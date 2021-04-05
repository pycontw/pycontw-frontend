<template>
    <header class="w-full h-full">
        <div class="header-container hidden md:flex">
            <home-icon />
            <nav-bar />
            <locale-switch />
        </div>
        <div class="header-container flex md:hidden">
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
import NavBar from './nav-bar'
import NavBarHamburger from './nav-bar/NavBarHamburger'
import LocaleSwitch from './locale-switch'

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

<style scoped>
.header-container {
    @apply w-full h-full px-4 justify-between items-center;
}
</style>
