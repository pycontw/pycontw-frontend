<template>
    <div class="px-48 py-24">
        <h1 class="text-3xl my-6 text-center">
            2021 {{ $t('codeOfConduct') }}
        </h1>
        <p class="my-6" v-html="$t('paragraph.intro')"></p>
        <h2 class="text-2xl my-6 text-center">{{ $t('codeOfConduct') }}</h2>
        <ul>
            <li
                v-for="(content, idx) in $t('paragraph.contents')"
                :key="idx"
                class="my-4"
            >
                <b>{{ content.title }}</b>
                {{ content.description }}
            </li>
        </ul>
        <p class="my-6" v-html="$t('paragraph.summary')"></p>
    </div>
</template>

<script>
import i18n from './code-of-conduct.i18n'

export default {
    i18n,
    name: 'PageCodeOfConduct',
}
</script>

<style scoped></style>
