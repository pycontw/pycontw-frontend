<template>
    <div class="py-10 md:pb-24 lg:pb-24">
        <banner>
            <core-h1 :title="`2022 ${$t('title')}`"></core-h1>
            <i18n path="pageAbstract" tag="p" class="pageAbstract">
                <template #br><br /></template>
            </i18n>
        </banner>

        <i18n-page-wrapper>
            <div
                v-for="(contents, i) in $t('contents')"
                :key="`privacy_policy_contents_${i}`"
            >
                <i18n
                    :path="contents.title"
                    tag="h2"
                    class="paragraphTitle"
                ></i18n>
                <i18n
                    v-for="(content, ii) in contents.description"
                    :key="`privacy_policy_description_${ii}`"
                    :path="`contents.${i}.description.${ii}`"
                    tag="p"
                >
                    <template #contact>
                        <ext-link href="mailto:organizers@python.tw" highlight
                            >{{ $t('terms.contact') }}
                        </ext-link>
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
            <div class="covidStatement">
                <i18n
                    path="covidStatement.title"
                    tag="h2"
                    class="paragraphTitle"
                ></i18n>
                <i18n path="covidStatement.description" tag="p">
                    <template #br><br /></template>
                </i18n>
            </div>
            <div class="authorization">
                <i18n
                    path="authorization.title"
                    tag="h2"
                    class="paragraphTitle"
                ></i18n>
                <i18n
                    path="authorization.description"
                    tag="p"
                    class="authorizationDescription"
                >
                    <template #br><br /></template>
                </i18n>
                <ext-link>
                    <img path="authorization.label" />
                </ext-link>
                <i18n path="authorization.content" tag="p">
                    <template #br><br /></template>
                </i18n>
            </div>
            <div class="question">
                <i18n path="question" tag="p"></i18n>
            </div>
        </i18n-page-wrapper>
    </div>
</template>

<script>
import i18n from '@/i18n/about/privacy-policy.i18n'
import CoreH1 from '@/components/core/titles/H1'
import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import ExtLink from '@/components/core/links/ExtLink.vue'
import Banner from '@/components/core/layout/Banner'

export default {
    i18n,
    name: 'PagePrivacyPolicy',
    components: {
        I18nPageWrapper,
        CoreH1,
        ExtLink,
        Banner,
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

<style scoped>
.paragraphTitle {
    @apply font-serif font-bold text-pink-700;
}
.covidStatement {
    @apply border border-solid px-6;
}
.authorization {
    @apply text-center;
}
.question {
    @apply text-center text-sm;
}
</style>
