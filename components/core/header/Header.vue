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

.header-container.--desktop {
    color: #c2a53a;
    background-color: #000000;
}

.header-container.--mobile {
    background-color: #c2a53a;
}

.header-container.--mobile .core-homeIcon {
    filter: brightness(0) invert(0); /* turn the color into black */
}

.header-container.--mobile .core-localeSwitch {
    color: #000000;
}
</style>
