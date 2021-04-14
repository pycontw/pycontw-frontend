<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('title')"></core-h1>
        <p>Registration financial aid</p>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import i18n from '@/i18n/registration/financial-aid.i18n'
import CoreH1 from '@/components/core/titles/H1'

export default {
    i18n,
    name: 'PageRegistrationFinancialAid',
    components: {
        CoreH1,
        I18nPageWrapper,
    },
}
</script>

<style scoped></style>
