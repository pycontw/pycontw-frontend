<template>
    <i18n-page-wrapper class="covid19 px-10 md:px-20 lg:px-36 xl:px-60">
        <core-h1 :title="$t('pageTitle')" class="covid19__pageTitle"></core-h1>
        <div class="covid19__summary">
            <p>(CC BY-SA 3.0 TW) {{ $t('latestEdited') }}: 2021-06-15</p>
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
            <p path="guidelinesSummary">
                {{ $t('guidelinesSummary') }}
            </p>
            <ol class="px-5 md:px-10">
                <li
                    v-for="(item, index) in $t('guidelinesContent')"
                    :key="`guidelinesContent_${index}`"
                >
                    {{ item }}
                </li>
            </ol>
        </div>
        <!-- <div class="covid19__governmentDocuments">
            <h3 path="governmentDocumentsTitle">
                {{ $t('governmentDocumentsTitle') }}
            </h3>
            <ol>
                <ul>
                    <ext-link
                        :href="governmentDocumentsContent.link"
                        highlight
                        >{{ governmentDocumentsContent.title }}</ext-link
                    >
                </ul>
            </ol>
        </div> -->
        <div class="covid19__license">
            <h3 path="licenseTitle">
                {{ $t('licenseTitle') }}
            </h3>
            <i18n tag="p" path="licenseContent">
                <template #license>
                    <ext-link :href="$t('license.href')" highlight
                        >&nbsp;{{ $t('license.name') }}&nbsp;</ext-link
                    >
                </template>
            </i18n>
            <img :src="licensePic" alt="License Link" />
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
    data() {
        return {
            // governmentDocumentsContent: {
            //     title: '衛生福利部疾病管制署-嚴重急性呼吸道症候群防治工作手冊',
            //     link: 'https://www.cdc.gov.tw/File/Get/s8bfTZsDHo4V2CE2-ozrDg',
            // },
            licensePic: 'https://i.imgur.com/cVjN760.jpg=200x',
        }
    },
}
</script>
<style lang="postcss" scoped>
.covid19 h3 {
    @apply text-center pt-5 pb-5 text-base md:text-xl;
    color: #9387ff;
}

.covid19 p,
.covid19 ol,
.covid19 a {
    @apply text-sm md:text-base;
}

.covid19__guidelines ol {
    @apply list-decimal;
}

.covid19__guidelines ol li {
    @apply text-xs md:text-base;
}
</style>
