<template>
    <i18n-page-wrapper>
        <core-h1 :title="`2021 ${$t('title')}`"></core-h1>
        <div
            v-for="(contents, i) in $t('contents')"
            :key="`privacy_policy_contents_${i}`"
        >
            <i18n :path="contents.title" tag="h2"></i18n>
            <i18n
                v-for="(content, ii) in contents.description"
                :key="`privacy_policy_description_${ii}`"
                :path="`contents.${i}.description.${ii}`"
                tag="p"
            >
                <template #contact>
                    <ext-link href="mailto:organizers@python.tw" highlight>{{
                        $t('terms.contact')
                    }}</ext-link>
                </template>
                <template #MeetingManagement>
                    <b>{{ $t('terms.MeetingManagement') }}</b>
                </template>
            </i18n>

            <ol class="m-2 list-decimal">
                <i18n
                    v-for="(content, ii) in contents.items"
                    :key="`privacy_policy_items_${ii}`"
                    :path="`contents.${i}.items.${ii}`"
                    tag="li"
                ></i18n>
            </ol>
            <i18n
                v-for="(content, ii) in contents.summary"
                :key="`privacy_policy_summary_${ii}`"
                :path="`contents.${i}.summary.${ii}`"
                tag="p"
            />
        </div>
    </i18n-page-wrapper>
</template>

<script>
import i18n from '@/i18n/about/privacy-policy.i18n'
import CoreH1 from '@/components/core/titles/H1'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import ExtLink from '@/components/core/links/ExtLink.vue'

export default {
    i18n,
    name: 'PagePrivacyPolicy',
    components: {
        I18nPageWrapper,
        CoreH1,
        ExtLink,
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
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('og.description'),
                },
            ],
        }
    },
}
</script>

<style scoped></style>
