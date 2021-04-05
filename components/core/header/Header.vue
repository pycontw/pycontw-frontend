<template>
    <header class="w-full h-full px-4 flex justify-between items-center">
        <home-icon />
        <nav-bar />
        <locale-switch />
    </header>
</template>

<script>
import HomeIcon from './HomeIcon'
import NavBar from './nav-bar'
import LocaleSwitch from './locale-switch'

export default {
    name: 'CoreHeader',
    components: {
        HomeIcon,
        LocaleSwitch,
        NavBar,
    },
    computed: {
        myPyConUrl() {
            return `https://tw.pycon.org/prs/${this.$i18n.locale}/dashboard/`
        },
    },
}
</script>

<style scoped></style>
