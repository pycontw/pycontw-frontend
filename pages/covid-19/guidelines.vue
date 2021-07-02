<template>
    <i18n-page-wrapper class="covid19 px-10 md:px-20 lg:px-36 xl:px-60">
        <core-h1 :title="$t('pageTitle')" class="covid19__pageTitle"></core-h1>
        <div class="covid19__summary">
            <p
                v-for="(item, index) in $t('latestEditedTime')"
                :key="`latestEditedTime_${index}`"
            >
                {{ item }}
            </p>
            <core-hr></core-hr>
            <p path="pageSummary">
                {{ $t('pageSummary') }}
            </p>
            <core-hr></core-hr>
        </div>
        <div class="covid19__guidelines">
            <h3 path="guidelinesTitle">
                {{ $t('guidelinesTitle') }}
            </h3>
            <ol>
                <li
                    v-for="(item, index) in $t('guidelinesContent')"
                    :key="`guidelinesContent_${index}`"
                >
                    {{ item }}
                </li>
            </ol>
        </div>
        <div class="covid19__governmentDocuments">
            <h3 path="governmentDocumentsTitle">
                {{ $t('governmentDocumentsTitle') }}
            </h3>
            <ol>
                <ul
                    v-for="(item, index) in $t('governmentDocumentsContent')"
                    :key="`governmentDocumentsContent_${index}`"
                >
                    <ext-link :href="item.link" highlight>{{
                        item.title
                    }}</ext-link>
                </ul>
            </ol>
        </div>
        <div class="covid19__license">
            <h3 path="licenseTitle">
                {{ $t('licenseTitle') }}
            </h3>
            <i18n tag="p" path="licenseContent">
                <template #license>
                    <ext-link
                        href="https://creativecommons.org/licenses/by-sa/3.0/tw/deed.zh_TW"
                        highlight
                        >&nbsp;{{ $t('otherLinks.license') }}&nbsp;</ext-link
                    >
                </template>
            </i18n>
            <img :src="$t('licensePic')" alt="License Link" />
        </div>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import ExtLink from '@/components/core/links/ExtLink.vue'
import i18n from '@/i18n/covid-19/index.i18n'
import CoreH1 from '@/components/core/titles/H1'
import CoreHr from '@/components/core/layout/Hr.vue'

export default {
    i18n,
    name: 'PageCovid19Guidelines',
    components: {
        I18nPageWrapper,
        CoreH1,
        CoreHr,
        ExtLink,
    },
}
</script>
<style lang="postcss" scoped>
.covid19 h3 {
    @apply text-center pt-5 pb-5;
    color: #9387ff;
}

.covid19__summary p {
    @apply flex justify-center;
}

.covid19__guidelines ol {
    @apply list-decimal;
}
</style>
