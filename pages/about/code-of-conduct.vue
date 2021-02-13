<template>
    <div class="px-64 py-24">
        <h1 class="text-3xl my-8 text-center">2021 {{ $t('title') }}</h1>
        <i18n path="intro" tag="p" class="my-6"> </i18n>
        <h2 class="text-2xl mt-12 mb-6">{{ $t('title') }}</h2>
        <ul>
            <li
                v-for="(content, idx) in $t('contents')"
                :key="idx"
                class="my-4"
            >
                <b>{{ content.title }}</b>
                {{ content.description }}
            </li>
        </ul>
        <i18n path="summary.0" tag="p" class="my-6"> </i18n>
        <i18n path="summary.1" tag="p" class="my-6"> </i18n>
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
