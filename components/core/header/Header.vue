<template>
    <header class="w-full">
        <div class="header-container --desktop hidden md:block">
            <scrollable-nav-bar>
                <div class="header__nav-bar">
                    <home-icon />
                    <nav-bar />
                    <locale-switch />
                </div>
            </scrollable-nav-bar>
        </div>
        <div class="header-container --mobile md:hidden">
            <div class="header__nav-bar">
                <home-icon />
                <div class="h-full flex items-center">
                    <locale-switch />
                    <nav-bar-hamburger />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import HomeIcon from './HomeIcon'
import NavBar from './nav-bar/NavBar'
import NavBarHamburger from './nav-bar/NavBarHamburger'
import ScrollableNavBar from './nav-bar/ScrollableNavBar'
import LocaleSwitch from './locale-switch/LocaleSwitch'
export default {
    name: 'CoreHeader',
    components: {
        HomeIcon,
        LocaleSwitch,
        NavBar,
        NavBarHamburger,
        ScrollableNavBar,
    },
}
</script>

<style lang="postcss" scoped>
.header-container {
    @apply w-full bg-black-900 text-primary-100;
    font-size: 20px;
    height: 64px;
}

.header__nav-bar {
    @apply w-full flex justify-between items-center px-4;
    pointer-events: auto; /*enable click-through ScrollableNavBar*/
}
.header-container,
.header__nav-bar {
    height: 64px;
}
</style>
