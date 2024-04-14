<template>
    <div>
        <banner>
            <core-h1 :title="`${conferenceYear} ${$t('title')}`"></core-h1>
            <i18n path="pageAbstract" tag="p" class="text-xs md:text-base">
                <template #br><br /></template>
            </i18n>
        </banner>

        <i18n-page-wrapper class="sm:px-10 md:px-32 lg:px-60" custom-x custom-y>
            <div
                v-for="(contents, i) in $t('contents')"
                :key="`privacy_policy_contents_${i}`"
            >
                <i18n
                    :path="contents.title"
                    tag="h2"
                    class="mt-9 text-center font-serif text-base font-bold text-pink-700 md:mt-20 md:text-left md:text-xl"
                ></i18n>
                <i18n
                    v-for="(_, j) in contents.description"
                    :key="`privacy_policy_description_${j}`"
                    :path="`contents.${i}.description.${j}`"
                    class="paragraphDescription"
                    tag="p"
                >
                    <template #MeetingManagement>
                        <b>{{ $t('terms.MeetingManagement') }}</b>
                    </template>
                </i18n>

                <ol class="list-decimal pl-8">
                    <i18n
                        v-for="(_, j) in contents.items"
                        :key="`privacy_policy_items_${j}`"
                        :path="`contents.${i}.items.${j}`"
                        class="paragraphDescription"
                        tag="li"
                    ></i18n>
                </ol>
                <i18n
                    v-for="(_, j) in contents.summary"
                    :key="`privacy_policy_summary_${j}`"
                    :path="`contents.${i}.summary.${j}`"
                    class="paragraphDescription"
                    tag="p"
                />
            </div>
            <div class="pt-8">
                <i18n path="question" tag="p" class="text-center text-xs">
                    <template #contact>
                        <ext-link href="mailto:organizers@python.tw" highlight
                            >{{ $t(`terms.contact`) }}
                        </ext-link>
                    </template>
                </i18n>
            </div>
            <div class="pb-5 text-center">
                <div>
                    <i18n
                        path="authorization.title"
                        tag="h2"
                        class="mt-9 text-center font-serif text-base font-bold text-pink-700 md:mt-20 md:text-xl"
                    >
                    </i18n>
                </div>
                <div>
                    <i18n
                        path="authorization.description"
                        tag="p"
                        class="text-center text-xs md:text-sm"
                    >
                        <template #br><br /></template>
                        <template #license>
                            <ext-link
                                href="https://creativecommons.org/licenses/by-sa/3.0/tw/deed.zh_TW"
                                highlight
                                >{{ $t(`terms.license`) }}
                            </ext-link>
                        </template>
                    </i18n>
                </div>
                <div>
                    <img :src="authorizationIcon" class="m-auto w-64 md:w-80" />
                </div>
                <i18n
                    path="authorization.content"
                    tag="p"
                    class="text-center text-xs md:text-sm"
                >
                    <template #br><br /></template>
                </i18n>
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
    data() {
        return {
            authorizationIcon: require('~/static/img/footer/ccby-sa3_0.svg'),
        }
    },
    computed: {
        conferenceYear() {
            return this.$store.state.configs.conferenceYear
        },
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

<style lang="postcss" scoped>
.paragraphDescription {
    @apply text-xs md:text-sm;
}
</style>
