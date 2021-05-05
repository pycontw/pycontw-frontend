<template>
    <i18n-page-wrapper>
        <core-h1 :title="$t('pageTitle')"></core-h1>
        <i18n
            v-for="(item, index) in $t('latestEditedTime')"
            :key="`latestEditedTime_${index}`"
            :path="`latestEditedTime.${index}`"
            tag="p"
            class="flex justify-center"
        >
        </i18n>
        <core-hr></core-hr>
        <i18n
            path="pageSummary"
            tag="p"
            class="md:px-0 lg:px-36 xl:px-48"
        ></i18n>
        <core-hr></core-hr>
        <i18n
            path="guidelinesTitle"
            tag="p"
            class="flex justify-center section-title pt-10 pb-5"
        ></i18n>
        <div class="container">
            <i18n
                path="guidelinesSummary"
                tag="p"
                class="md:px-0 lg:px-30 xl:px-42"
            >
                <template #form>
                    <ext-link href="https://cdc.pycon.tw/#/" highlight>{{
                        $t('otherLinks.form')
                    }}</ext-link>
                </template>
            </i18n>
            <ul class="list-disc">
                <li
                    v-for="(item, index) in $t('guidelinesSummaryList')"
                    :key="`guidelinesSummaryList_${index}`"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
        <ol class="list-decimal md:px-0 lg:px-36 xl:px-48">
            <li
                v-for="(item, index) in $t('guidelinesContent')"
                :key="`guidelinesContent_${index}`"
            >
                {{ item }}
            </li>
        </ol>
        <i18n
            path="selfPreparationTitle"
            tag="p"
            class="flex justify-center section-title pt-20 pb-5"
        ></i18n>
        <ol class="list-decimal md:px-0 lg:px-36 xl:px-48">
            <li
                v-for="(item, index) in $t('selfPreparationContent')"
                :key="`selfPreparationContent_${index}`"
            >
                {{ item }}
            </li>
        </ol>
        <i18n
            path="pyConPreparednessTitle"
            tag="p"
            class="flex justify-center section-title pt-20 pb-5"
        ></i18n>
        <ol class="list-decimal md:px-0 lg:px-36 xl:px-48">
            <li
                v-for="(item, index) in $t('pyConPreparednessContent')"
                :key="`pyConPreparednessContent_${index}`"
            >
                {{ item }}
            </li>
        </ol>
        <i18n
            path="privacyPoliceTitle"
            tag="p"
            class="flex justify-center section-title pt-20 pb-5"
        ></i18n>
        <ol class="list-decimal md:px-0 lg:px-36 xl:px-48">
            <i18n path="privacyPolicyContent" tag="li">
                <template #policy>
                    <locale-link to="/about/privacy_policy/" highlight>{{
                        $t('otherLinks.policy')
                    }}</locale-link>
                </template>
            </i18n>
        </ol>
        <i18n
            path="governmentDocumentsTitle"
            tag="p"
            class="flex justify-center section-title pt-20 pb-5"
        ></i18n>
        <ol class="list-decimal md:px-0 lg:px-36 xl:px-48">
            <li
                v-for="(item, index) in $t('governmentDocumentsContent')"
                :key="`governmentDocumentsContent_${index}`"
            >
                <ext-link :href="item.link" highlight>{{
                    item.title
                }}</ext-link>
            </li>
        </ol>
        <i18n
            path="licenseTitle"
            tag="p"
            class="flex justify-center section-title pt-20 pb-5"
        ></i18n>
        <i18n
            v-for="(item, index) in $t('licenseContent')"
            :key="`licenseContent_${index}`"
            :path="`licenseContent.${index}`"
            tag="p"
            class="md:px-0 lg:px-36 xl:px-48"
        >
            <template #picSrc>
                <img :src="$t('otherLinks.picSrc')" highlight />
            </template>
        </i18n>
    </i18n-page-wrapper>
</template>

<script>
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import LocaleLink from '@/components/core/links/LocaleLink.vue'
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
        LocaleLink,
    },
}
</script>
<style scoped>
.section-title {
    color: #9387ff;
}
.container {
    min-height: 0;
    flex-direction: column;
    text-align: left;
}
</style>
