<template>
    <div class="core-localeSwitch h-full">
        <nav-bar-item-dropdown sm>
            <template #label>
                <img
                    src="~/static/locale-icon.svg"
                    :alt="`Locale Icon`"
                    class="w-4 pr-1"
                />
                {{ $t($i18n.locale) }}
            </template>
            <template v-slot:items="{ hideMenu }">
                <core-menu-item
                    v-for="(lang, i) in languages"
                    :key="`language_${i}`"
                    @click="onClickLang(hideMenu, lang)"
                >
                    {{ $t(lang) }}
                </core-menu-item>
            </template>
        </nav-bar-item-dropdown>
    </div>
</template>

<script>
import NavBarItemDropdown from '../nav-bar/NavBarItemDropdown'
import i18n from './LocaleSwitch.i18n'
import CoreMenuItem from '~/components/core/menu/MenuItem'

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
        onClickLang(hideMenu, lang) {
            this.$i18n.locale = lang
            this.$router.push(this.switchLocalePath(lang))
            hideMenu()
        },
    },
}
</script>

<style lang="postcss" scoped>
.core-localeSwitch {
    @apply font-bold;
    flex-shrink: 0;
}
.core-localeSwitch:hover {
    @apply text-pink-700;
}
</style>
