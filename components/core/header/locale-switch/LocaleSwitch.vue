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
                :value="lang.code"
                @click="$router.push(switchLocalePath(lang.code))"
            >
                {{ lang.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'CoreHeaderLocaleSwitch',
    data() {
        return {
            languages: [
                {
                    code: 'en',
                    name: 'EN',
                },
                {
                    code: 'zh',
                    name: 'ZH',
                },
            ],
        }
    },
}
</script>

<style scoped></style>
