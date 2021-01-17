<template>
    <header class="w-full h-16 px-4 flex justify-between items-center">
        <home-icon />
        <locale-switch />
        <nav-bar />
        <text-button
            href="https://tw.pycon.org/2020/en-us/dashboard/"
            secondary
        >
            my pycontw
        </text-button>
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
}
</script>

<style scoped></style>
