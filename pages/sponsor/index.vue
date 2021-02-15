<template>
    <div class="px-64 py-24">
        <h1 class="text-3xl my-8 text-center">{{ $t('title') }}</h1>
        <i18n path="intro.0" tag="p" class="my-6"></i18n>
        <i18n path="intro.1" tag="p" class="my-6"></i18n>
        <i18n path="intro.2" tag="p" class="mt-6 mb-3"></i18n>
        <ul class="list-disc">
            <li
                v-for="(service, i) in $t('services')"
                :key="`sponsor_services_${i}`"
                class="my-1 ml-12"
            >
                {{ service }}
            </li>
        </ul>
        <i18n path="summary" tag="p" class="my-6">
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
    </div>
</template>

<script>
import LocaleLink from '@/components/core/links/LocaleLink.vue'
import ExtLink from '@/components/core/links/ExtLink.vue'
import i18n from './index.i18n'

export default {
    i18n,
    name: 'PageSponsor',
    components: {
        ExtLink,
        LocaleLink,
    },
}
</script>

<style scoped></style>
