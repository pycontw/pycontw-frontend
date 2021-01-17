<template>
    <div>
        <select
            id="core-locale-switch"
            v-model="$i18n.locale"
            name="locale-switch"
        >
            <option
                v-for="(lang, i) in languages"
                :key="i"
                :value="lang"
                @click="$router.push(switchLocalePath(lang))"
            >
                {{ $t(lang) }}
            </option>
        </select>
    </div>
</template>

<script>
import i18n from './LocaleSwitch.i18n'
export default {
    i18n,
    name: 'CoreHeaderLocaleSwitch',
    data() {
        return {
            languages: ['en-us', 'zh-hant'],
        }
    },
}
</script>

<style scoped></style>
