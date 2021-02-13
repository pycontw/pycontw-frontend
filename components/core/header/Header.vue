<template>
    <header class="w-full h-16 px-4 flex justify-between items-center">
        <div class="w-56 h-full flex justify-between items-center">
            <home-icon />
            <locale-switch />
        </div>
        <nav-bar />
        <text-button :href="myPyConUrl" secondary> my pycontw </text-button>
    </header>
</template>

<script>
import HomeIcon from './HomeIcon'
import NavBar from './nav-bar'
import LocaleSwitch from './locale-switch'
import TextButton from '~/components/core/buttons/TextButton'

export default {
    name: 'CoreHeader',
    components: {
        HomeIcon,
        LocaleSwitch,
        NavBar,
        TextButton,
    },
    computed: {
        myPyConUrl() {
            return `https://tw.pycon.org/2021/${this.$i18n.locale}/dashboard/`
        },
    },
}
</script>

<style scoped></style>
