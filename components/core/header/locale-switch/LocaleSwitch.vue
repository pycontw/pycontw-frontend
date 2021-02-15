<template>
    <nav-bar-item-dropdown sm>
        <template #label>
            {{ $t($i18n.locale) }}
            <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </template>
        <template v-slot:items="{ hideMenu }">
            <core-menu-item
                v-for="(lang, i) in languages"
                :key="`language_${i}`"
                @click="onClickLang(hideMenu, switchLocalePath, lang)"
            >
                {{ $t(lang) }}
            </core-menu-item>
        </template>
    </nav-bar-item-dropdown>
</template>

<script>
import NavBarItemDropdown from '../nav-bar/NavBarItemDropdown'
import i18n from './LocaleSwitch.i18n'
import { CoreMenuItem } from '~/components/core/menu'

export default {
    i18n,
    name: 'CoreHeaderLocaleSwitch',
    components: {
        CoreMenuItem,
        NavBarItemDropdown,
    },
    data() {
        return {
            languages: ['en-us', 'zh-hant'],
        }
    },
    methods: {
        onClickLang(hideMenu, switchLocalePath, lang) {
            this.$i18n.locale = lang
            this.$router.push(switchLocalePath(lang))
            hideMenu()
        },
    },
}
</script>

<style scoped></style>
