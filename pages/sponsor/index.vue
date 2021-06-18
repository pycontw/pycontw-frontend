<template>
    <i18n-page-wrapper>
        <h1>{{ $t('title') }}</h1>
        <i18n path="intro.0" tag="p"></i18n>
        <i18n path="intro.1" tag="p"></i18n>
        <i18n path="intro.2" tag="p"></i18n>
        <ul class="list-disc">
            <li
                v-for="(service, i) in $t('services')"
                :key="`sponsor_services_${i}`"
            >
                {{ service }}
            </li>
        </ul>
        <i18n path="summary" tag="p">
            <template #prospectus>
                <locale-link to="/sponsor/prospectus" highlight>{{
                    $t('terms.prospectus')
                }}</locale-link>
            </template>
            <template #contact>
                <ext-link href="mailto:sponsorship@pycon.tw" highlight>{{
                    $t('terms.contact')
                }}</ext-link>
            </template>
        </i18n>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import ExtLink from '@/components/core/links/ExtLink.vue'
import i18n from '@/i18n/sponsor/index.i18n'

export default {
    i18n,
    name: 'PageSponsor',
    components: {
        I18nPageWrapper,
        ExtLink,
        LocaleLink,
    },
    head() {
        return {
            title: this.$i18n.t('title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>

<style scoped></style>
