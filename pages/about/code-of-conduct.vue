<template>
    <i18n-page-wrapper>
        <h1>2021 {{ $t('title') }}</h1>
        <i18n path="intro" tag="p"> </i18n>
        <h2>{{ $t('title') }}</h2>
        <p v-for="(content, i) in $t('contents')" :key="`about_content_${i}`">
            <b>{{ content.title }}</b>
            {{ content.description }}
        </p>
        <i18n path="summary.0" tag="p"> </i18n>
        <i18n path="summary.1" tag="p"> </i18n>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/about/code-of-conduct.i18n'

export default {
    i18n,
    name: 'PageCodeOfConduct',
    components: {
        I18nPageWrapper,
    },
}
</script>

<style scoped></style>
